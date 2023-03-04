import axios from 'axios';
const API_KEY = '32381232-0d08b52c11723d23aba771294';

export const fetchSearchImage = async (serchRequest, page) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${serchRequest}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12&`
  );
  return response.data.hits;
};


