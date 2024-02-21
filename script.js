const API_KEY = `34b60cd6736e43abb79ca9f9d2bf6b2b`
let newsList = [];
const getLatestNews = async()=>{
    const url = new URL(`https://newsjs.netlify.app/top-headlines?page=1&pageSize=20&apiKey=${API_KEY}`); 
    const response = await fetch(url);
    const data = await response.json();
    console.log(response);
    newsList = data.articles;
    render();
    console.log("기사", newsList);
}

getLatestNews();

const render=()=>{
    const newsHTML = newsList.map
    (news=> ` <div class="row news">
    <div class="col-lg-4">
        <img class="news-img-size" src="${news.urlToImage}"/>
    </div>
    <div class="col-lg-8">
        <h2>${news.title}</h2>
        <p>${news.description}</p>
        <div>${news.source.name}</div>
    </div>
</div>`).join('');
    
    document.getElementById('news-boards').innerHTML = newsHTML;
}


// 반응형 햄버거 메뉴
function openNav() {
    document.getElementById("mySidenav").style.width = "30%";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  // 검색 input창 open
  const search_open = ()=>{
    let inputArea = document.getElementById("search-input");
    // console.log(inputArea);
    if(inputArea.style.display === "none"){
        inputArea.style.display = "block";
    }else{
        inputArea.style.display = "none";
    }
    
  }