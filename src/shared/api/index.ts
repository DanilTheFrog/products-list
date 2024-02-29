import { Api } from "./api";
type Envs = {
    API_URL: string
    API_PASSWORD: string
}

const envs: Envs = {
    API_URL: import.meta.env.VITE_API_URL,
    API_PASSWORD: import.meta.env.VITE_API_PASSWORD
}

const api = new Api(envs.API_URL, envs.API_PASSWORD);
export default api