import api from "@/shared/api";
import { ApiPagination, TFieldsBrand } from "@/shared/api/types";

export async function getBrands(pagination?: ApiPagination) {
    const params: {field: string} & Partial<ApiPagination> = {
        field: "brand"
    }

    if(pagination) {
        params.limit = pagination.limit;
        params.offset = pagination.offset;
    }
    const brands = await api.post<TFieldsBrand>({
        action: "get_fields",
        params: {field: "brand", ...pagination}
    })

    const filtredBrands = brands.result.filter((brand) => brand !== null);

    console.log(filtredBrands.length);
    console.log(new Set(filtredBrands).size);

    return filtredBrands
}