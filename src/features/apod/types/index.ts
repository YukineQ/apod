type ApodQueryParams =
    | {
        date: string;
        start_date?: never;
        end_date?: never;
        count?: never;
        thumbs: boolean;
        api_key: string;
    }
    | {
        date?: never;
        start_date: string;
        end_date?: string | null;
        count?: never;
        thumbs: boolean;
        api_key: string;
    }
    | {
        date?: never;
        start_date?: never;
        end_date?: never;
        count: number;
        thumbs: boolean;
        api_key: string;
    }

type Apod = {
    copyright: string;
    date: string;
    explanation: string;
    hdurl: string;
    media_type: 'image' | 'video';
    service_version: string;
    title: string;
    url: string;
}