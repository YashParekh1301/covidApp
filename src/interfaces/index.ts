export type IGlobalConfig = {
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number,
    Date: string,
}

export type ICountryConfig = {
    ID: string,
    Country: string,
    CountryCode: string,
    Slug: string,
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number,
    Date: string
}

export type ICovidConfig = {
    ID: string,
    Message: string,
    Global: IGlobalConfig,
    Countries: ICountryConfig[]
}

export type IStore = {
    covidData: ICovidConfig;
}

export type IFilterData = {
    filterColumnId?: string,
    filterComparator?: string,
    filterValue?: string
}
