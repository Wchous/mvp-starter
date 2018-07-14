const NewsAPI = require('newsapi');
const key = require ('./News.js')
const newsapi = new NewsAPI(api.My_News_Api_Key);
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

let fetcher = newsapi.v2.topHeadlines({
  sources: 'abc-news,al-jazeera-english,bbc-news,breitbart-news,cnn,financial-times,fox-news,msnbc,reuters,rt,the-new-york-times,the-wall-street-journal,the-washington-post,the-washington-times',
  q: '',
  category: '',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
});


const url =
  `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${newsapi}`;

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}