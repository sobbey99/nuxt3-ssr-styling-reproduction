import axios from "axios";
import {useQuery, useQueryClient} from "@tanstack/vue-query";

type TDictionary = {
    header_bg: string,
    footer_bg: string,
    main_bg: string,
}

const queryFn = async () => {
    const {data} = await axios.get<TDictionary>('http://localhost:4000')
    return data
}

const queryKey = ["DICTIONARY"]

export function useGetFieldsDictionary() {
    return useQuery({
        queryKey,
        queryFn,
        staleTime: 1000 * 60
    })
}

export function useGetField(fields: Array<keyof TDictionary>): Partial<TDictionary> {
    const queryClient = useQueryClient();

    const cache = queryClient.getQueryData<TDictionary>(queryKey);
    const res: Partial<TDictionary> = {}
    for (const item of fields) {
        if (item in cache) {
            res[item] = cache[item]
        }
    }
    return res
}