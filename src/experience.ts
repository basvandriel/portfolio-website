export interface Experience {
    title: string,
    company: string,
    company_city: string,
    company_country: string,
    description: string,
    tags: string[]
    company_logo?: string
    start: Date
    end?: Date
}