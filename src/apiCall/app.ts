import axios from 'axios';
// import { useState } from 'react';

export const fetchNews = async () => {
  // const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  try {
    const { data } = await axios(url);
    console.log('data => ', data);

    return data.articles;
  } catch (er) {
    console.log(er);
    throw er;
  }
};
