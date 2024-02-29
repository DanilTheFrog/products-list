import md5 from 'md5'
import { ApiResponse } from './types';


export class Api {
    private headers: {[key: string]: string} = {
        "Content-Type": "application/json"
    }

    constructor(private baseUrl: string, private password: string) {
        this.updatePassword();
    }

    private getDateWithOffset(offset: number) {
        const localDate = new Date();
        const date = localDate.getTime() + localDate.getTimezoneOffset()*60000;
        const serverDate = new Date(date + offset*60000);
        return serverDate;
    }

    private updatePassword() {
        const currentDate = this.getDateWithOffset(0);
        const month = currentDate.getMonth()+1;
        const formatedDate = `${currentDate.getUTCFullYear()}${month < 10 ? "0"+month : month}${currentDate.getDate()}`
        this.headers["X-Auth"] = this.getMd5Password(`${this.password}_${formatedDate}`);
        console.log(this.password+"_"+formatedDate);
        console.log(this.headers["X-Auth"]);
    }

    private getMd5Password(password: string) {
        return md5(password);
    }

    async post<T>(body: unknown): Promise<ApiResponse<T>> {
        const res = await fetch(this.baseUrl, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(body)
        })

        if(!res.ok) {
            if(res.status === 401) this.updatePassword()
            throw new Error("Api error");
        }

        const data = await res.json();

        return data;
    }
}



