const API_KEY = `34b60cd6736e43abb79ca9f9d2bf6b2b`
let news = [];
const getLatestNews = async()=>{
    const url = new URL(`http://times-node-env.eba-appvq3ef.ap-northeast-2.elasticbeanstalk.com/top-headlines?page=1&pageSize=20&apiKey=${API_KEY}`); 
    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    news = data.articles;
    console.log(news);
}

getLatestNews();