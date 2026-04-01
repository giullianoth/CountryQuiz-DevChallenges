import { ICountry } from "./country";

export type IQuestionField = "country" | "flag" | "region" | "subregion" | "capital" | "currency" | "language" | "border";

export interface IQuestionTemplate {
    text: string,
    referenceField: IQuestionField,
    targetField: IQuestionField,
};

export interface IGeneratedQuestion {
    country: ICountry,
    question: string,
    correctAnswer?: string,
    options: string[],
    referenceField: IQuestionField,
    targetField: IQuestionField,
    flag?: ICountry["flags"],
    flagInQuestion?: boolean,
    flagInAnswer?: boolean,
    answered: boolean,
    providedAnswer?: string,
};