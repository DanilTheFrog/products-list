export type TProduct = {
    id: string
    product: string
    brand: string | null
    price: number
}

export type TFieldsAll = string[];
export type TFieldsBrand = (string | null)[];

export type ApiResponse<T> = {result: T};
export type ApiPagination = {limit: number, offset: number};