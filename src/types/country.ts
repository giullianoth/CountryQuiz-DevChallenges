export interface ICountry {
    borders: string[];
    capital: string;
    languages: string[];
    region: string;
    subregion: string;
    currencies: {
        name: string,
        symbol: string
    }[];
    flags: {
        png: string;
        svg: string;
        alt: string;
    };
    name: string;
    cca3: string;
};