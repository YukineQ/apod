import { DefaultOptions } from "@tanstack/react-query";

export const queryConfig: DefaultOptions = {
    queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    },   
}