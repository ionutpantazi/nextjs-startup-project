import axios from 'axios'

const get = async (endpoint: string, headers: any) => {
  try {
    const { data } = await axios.get(endpoint, headers);
    return { data: data }
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
    return { data: {}, err: error?.response?.data ?? 'axios post err' }
  }
};

async function fetchGet(endpoint: string, headers: any) {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: headers.headers,
    });
    return response.json();
  } catch (error: any) {
    return { data: {}, err: 'fetch get err' }
  }
}

async function fetchPost(endpoint: string, postData: any, headers: any) {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: headers.headers,
      body: postData,
    });
    return response.json();
  } catch (error: any) {
    return { data: {}, err: 'fetch post err' }
  }
}

export { get, post, fetchGet, fetchPost };