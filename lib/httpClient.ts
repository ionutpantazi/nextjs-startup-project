import axios from 'axios'
const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

const get = async (endpoint: string) => {
    const { data } = await axios.get(NEXT_PUBLIC_API_URL + endpoint);
    return data
};

const post = async (endpoint: string, postData: any, headers: any) => {
    const { data } = await axios.post(NEXT_PUBLIC_API_URL + endpoint, postData, headers);
    return { data: data }
};

export { get, post };