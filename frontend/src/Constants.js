
// urls to fetch coin data 
const production = {
    url: 'https://blocktopus-backend.herokuapp.com/'
  };

const development = {
  url: 'http://localhost:8000'
};

export const config = process.env.NODE_ENV === 'development' ? development : production;