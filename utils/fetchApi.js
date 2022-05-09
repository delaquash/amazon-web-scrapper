import axios from "axios";

export const baseURL = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'b286648626mshb5a701605ade81bp154604jsncf5b4b6ff8f6'
          },
    })
    return data
}