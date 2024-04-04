import axios from 'axios'
const NEXT_PUBLIC_STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

// const getStrapiData = async (endpoint: string) => {
//     const { data } = await axios.get( NEXT_PUBLIC_STRAPI_URL + endpoint );
//     if(data?.data?.attributes){
//         let attributes = data.data.attributes;
//         return attributes;
//     }
// };

// export { getStrapiData };