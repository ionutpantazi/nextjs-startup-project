import axios from 'axios'

const get = async (endpoint: string, headers: any) => {
  try {
    const { data } = await axios.get(endpoint, headers);
    return data
  } catch (error: any) {
    // console.log(error)
    return { data: {}, err: error.response.data ?? 'axios post err' }
  }
};

const post = async (endpoint: string, postData: any, headers: any) => {
  try {
    const { data } = await axios.post(endpoint, postData, headers);
    return { data: data }
  } catch (error: any) {
    // console.log(error)
    return { data: {}, err: error.response.data ?? 'axios post err' }
  }
};

export { get, post };