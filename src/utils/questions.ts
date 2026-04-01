import { ICountry } from "@/types/country";
import { IGeneratedQuestion, IQuestionField, IQuestionTemplate } from "@/types/question";

const generateDistractors = (countries: ICountry[], country: ICountry, referenceField: IQuestionField, targetField: IQuestionField): string[] => {
    const distractors = new Set<string>();

    while (distractors.size < 3) {
        if (targetField === "country") {
            let randomCountry: ICountry;

            switch (referenceField) {
                case "currency":
                    randomCountry = getRandom(
                        countries.filter(c => c.currencies.every(currency => !country.currencies.includes(currency)))
                    );

                    if (distractors.has(randomCountry.name)) {
                        continue;
                    }

                    distractors.add(randomCountry.name);
                    break;

                case "language":
                    randomCountry = getRandom(
                        countries.filter(c => c.languages.every(language => !country.languages.includes(language)))
                    );

                    if (distractors.has(randomCountry.name)) {
                        continue;
                    }

                    distractors.add(randomCountry.name);
                    break;

                case "flag":
                    randomCountry = getRandom(
                        countries.filter(c => c.flags.png !== country.flags.png)
                    );

                    if (distractors.has(randomCountry.name)) {
                        continue;
                    }

                    distractors.add(randomCountry.name);
                    break;

                default:
                    randomCountry = getRandom(
                        countries.filter(c => c[referenceField as keyof ICountry] !== country[referenceField as keyof ICountry])
                    );

                    if (distractors.has(randomCountry.name)) {
                        continue;
                    }

                    distractors.add(randomCountry.name);
                    break;
            }
        } else {
            switch (targetField) {
                case "currency":
                    const randomCurrency = getRandom(
                        countries
                            .filter(c => c.currencies.every(currency => !country.currencies.includes(currency)))
                            .flatMap(c => c.currencies)
                    );

                    if (distractors.has(`${randomCurrency.name} (${randomCurrency.symbol})`)) {
                        continue;
                    }

                    distractors.add(`${randomCurrency.name} (${randomCurrency.symbol})`);
                    break;

                case "language":
                    const randomLanguage = getRandom(
                        countries
                            .filter(c => c.languages.every(language => !country.languages.includes(language)))
                            .flatMap(c => c.languages)
                    );

                    if (distractors.has(randomLanguage)) {
                        continue;
                    }

                    distractors.add(randomLanguage);
                    break;

                case "border":
                    const randomBorderCode = getRandom(
                        countries
                            .filter(c => c.borders.every(border => !country.borders.includes(border)))
                            .map(c => c.cca3)
                    );
                    const randomBorderCountry = countries.find(c => c.cca3 === randomBorderCode);

                    if (!randomBorderCountry) {
                        continue;
                    }

                    if (distractors.has(randomBorderCountry.name)) {
                        continue;
                    }

                    distractors.add(randomBorderCountry.name);
                    break;

                case "flag":
                    const randomFlag = getRandom(
                        countries
                            .filter(c => c.flags.png !== country.flags.png)
                            .map(c => c.flags.png)
                    );

                    if (distractors.has(randomFlag)) {
                        continue;
                    }

                    distractors.add(randomFlag);
                    break;

                default:
                    const randomOption = getRandom(
                        countries
                            .filter(c => c[targetField as keyof ICountry] !== country[targetField as keyof ICountry])
                            .map(c => c[targetField as keyof ICountry] as string)
                    );

                    if (distractors.has(randomOption)) {
                        continue;
                    }

                    distractors.add(randomOption);
                    break;
            }
        }
    }

    return Array.from(distractors);
}

export const getRandom = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
export const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

export const generateQuestion = (questionTemplate: IQuestionTemplate, countries: ICountry[], country: ICountry): IGeneratedQuestion => {
    const question: Partial<IGeneratedQuestion> = {
        country,
        referenceField: questionTemplate.referenceField,
        targetField: questionTemplate.targetField,
        answered: false,
    };

    if (questionTemplate.targetField === "country") {
        question.correctAnswer = country.name;

        switch (questionTemplate.referenceField) {
            case "currency":
                const referenceCurrency = getRandom(country.currencies);

                question.question = questionTemplate.text
                    .replace("[country]", "country")
                    .replace("{currency}", `${referenceCurrency.name} (${referenceCurrency.symbol})`);

                break;

            case "language":
                const referenceLanguage = getRandom(country.languages);

                question.question = questionTemplate.text
                    .replace("[country]", "country")
                    .replace("{language}", referenceLanguage);

                break;

            case "flag":
                question.flag = country.flags;
                question.flagInQuestion = true;

                question.question = questionTemplate.text
                    .replace("[country]", "country");
                break;

            default:
                const referenceValue = country[questionTemplate.referenceField as keyof ICountry] as string;

                question.question = questionTemplate.text
                    .replace("[country]", "country")
                    .replace(`{${questionTemplate.referenceField}}`, referenceValue);
                break;
        }
    } else {
        question.question = questionTemplate.text.replace("{country}", country.name)

        switch (questionTemplate.targetField) {
            case "currency":
                const selectedCurrency = getRandom(country.currencies);
                question.correctAnswer = `${selectedCurrency.name} (${selectedCurrency.symbol})`;
                question.question = question.question.replace("[currency]", "currency");
                break;

            case "language":
                const selectedLanguage = getRandom(country.languages);
                question.correctAnswer = selectedLanguage;
                question.question = question.question.replace("[language]", "language");
                break;

            case "border":
                const selectedBorderCode = getRandom(country.borders);
                const selectedBorderCountry = countries.find(c => c.cca3 === selectedBorderCode);
                question.correctAnswer = selectedBorderCountry?.name;
                question.question = question.question.replace("[border]", "country");
                break;

            case "flag":
                question.flag = country.flags;
                question.flagInAnswer = true;
                question.correctAnswer = country.flags.png;
                question.question = question.question.replace("[flag]", "flag");
                break;

            default:
                question.correctAnswer = country[questionTemplate.targetField as keyof ICountry] as string;
                question.question = question.question.replace(`[${questionTemplate.targetField}]`, questionTemplate.targetField);
                break;
        }
    }

    question.options = shuffle([
        question.correctAnswer!,

        ...generateDistractors(
            countries,
            country,
            questionTemplate.referenceField,
            questionTemplate.targetField
        ),
    ]);

    return question as IGeneratedQuestion;
}