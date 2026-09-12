import { Data } from "./data.type";

export interface StatsBadgeType {
    fetchData: () => Promise<void>,
    data: Data | undefined,
    loading: boolean
}