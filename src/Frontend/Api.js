import axios from 'axios';

export default = {
  method: 'GET',
  url: 'https://community-manga-eden.p.rapidapi.com/manga/%7Bmanga.id%7D',
  params: { 'manga.id': '4e70e9f6c092255ef7004336' },
  headers: {
    'X-RapidAPI-Key': '86a9dbae02mshd7a7749a0d725b1p1d5726jsn713ceede7e1d',
    'X-RapidAPI-Host': 'community-manga-eden.p.rapidapi.com',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
