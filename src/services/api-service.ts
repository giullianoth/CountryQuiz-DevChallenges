import { ICountry } from "@/types/country";
import axios from "axios";

const API_URL: string = "https://restcountries.com/v3.1";
const fields: string[] = ["flags", "name", "region", "subregion", "capital", "currencies", "languages", "borders", "cca3"];

const api = axios.create({
    baseURL: API_URL
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const processedData = (data: any): ICountry | undefined => {
    if (typeof data !== "object" || !data.languages || !data.currencies) {
        return undefined;
    }

    const languageKeys = Object.keys(data.languages);
    const currenciesKeys = Object.keys(data.currencies);

    const languages = languageKeys.map(key => data.languages[key]);

    const currencies = currenciesKeys.map(key => ({
        name: data.currencies[key].name,
        symbol: data.currencies[key].symbol
    }));

    return {
        ...data,
        name: data.name.common,
        capital: data.capital[0],
        languages,
        currencies
    } as ICountry;
};

export const getAllCountries = async (): Promise<ICountry[]> => {
    const { data } = await api.get(`/all?fields=${fields.join(",")}`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map((item: any) => processedData(item));
};

export const getCountryByName = async (name: string): Promise<ICountry | null | undefined> => {
    if (!name) {
        return null;
    }

    const { data } = await api.get(`/name/${name.toLowerCase()}`)
    return processedData(data[0])
};