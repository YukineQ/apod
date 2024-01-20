import { NASA_API } from "@/constants/endpoints";
import { objectToParamsQuery } from "@/utils/object-to-query";
import { useQuery } from "@tanstack/react-query";

const URL = `${NASA_API}/planetary/apod`

export const getAPOD = async (
    queryParams: Partial<ApodQueryParams>
): Promise<Apod[]> => {
    const key = 'ZkgTIiwGCMbk0qfyyg23lFHOF6GZkKMEAp5ffvOg'
    if (!key) throw new Error('NASA_API_KEY must be defined.')

    queryParams.api_key = key

    const query = objectToParamsQuery(queryParams)
    const res = await fetch(`${URL}?${query}`)

    return res.json()
}

export const useAPOD = (queryParams: Partial<ApodQueryParams>) => {
    return useQuery({
        queryKey: ['apod', queryParams],
        queryFn: () => getAPOD(queryParams),
    })
}