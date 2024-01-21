import { NASA_API } from "@/constants/endpoints";
import { objectToParamsQuery } from "@/utils/object-to-query";
import { useSuspenseQuery } from "@tanstack/react-query";

const URL = `${NASA_API}/planetary/apod`

export const getAPOD = async (
    queryParams: Partial<ApodQueryParams>
): Promise<Apod[] | null> => {
    const key = process.env.NASA_API_KEY
    if (!key) throw new Error('NASA_API_KEY must be defined.')

    const {
        api_key = key,
        ...rest
    } = queryParams

    const query = objectToParamsQuery({ api_key, ...rest })
    const res = await fetch(`${URL}?${query}`)

    if (!res.ok) {
        return null
    }

    return res.json()
}

export const useAPOD = (queryParams: Partial<ApodQueryParams>) => {
    return useSuspenseQuery({
        queryKey: ['apod', queryParams],
        queryFn: () => getAPOD(queryParams),
    })
}