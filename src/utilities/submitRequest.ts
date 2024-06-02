import axios, {type AxiosResponse} from "axios";
import type {ISubmitData} from "@/interfaces/submit";

export const submitRequest = async (data: ISubmitData, url: string): Promise<void> => {
    try {
        const response: AxiosResponse = await axios({
            method: "post",
            url: url,
            data: data,
            headers: {"Content-Type": "application/json"},
        });
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}