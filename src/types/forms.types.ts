
export interface IContactForm {
    id: number
    date: Date
    email: string
    tel: string
    message: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
}