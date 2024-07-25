
export default interface TranslateableExperience {
    title: string,
    company: string,
    company_city_key: string,
    company_country_key: string,
    description_key: string,
    tags: string[]
    company_logo?: string
    start: Date
    end?: Date
}