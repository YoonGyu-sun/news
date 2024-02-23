const API_KEY = `34b60cd6736e43abb79ca9f9d2bf6b2b`
let newsList = [];
const menus = document.querySelectorAll(".menus button");
menus.forEach(menu=>menu.addEventListener("click", (event)=>{getNewsByCategory(event)})) /// button 클릭시 함수 실행


let url = new URL (`https://newsjs.netlify.app/top-headlines?page=1&pageSize=20&apiKey=${API_KEY}`)

const getNews = async() => {
    try{
        const response = await fetch(url);
        const data = await response.json();
            if(response.status===200){
                if(data.articles.length===0){
                    throw new Error("결과가 없습니다.");
                }
                newsList = data.articles;
                render();
            }else{
                throw new Error(data.message);
            }
    
    }catch(error){
        // console.log(error.message);
        errorRender(error.message);
    }
    
}

const getLatestNews = async()=>{
     url = new URL(`https://newsjs.netlify.app/top-headlines?page=1&pageSize=20&apiKey=${API_KEY}`); 
    getNews();
    
}

getLatestNews();



const getNewsByCategory = async(event) => {         // 카테고리에 맞게 데이터보여주기
    const category = event.target.textContent.toLowerCase();
    console.log(category);
     url = new URL(`https://newsjs.netlify.app/top-headlines?&category=${category}&page=1&pageSize=20&apiKey=${API_KEY}`);
    getNews();
    
}


const sch = async()=>{
    let category = document.getElementById("search").value.toLowerCase();
    console.log(category);
     url = new URL(`https://newsjs.netlify.app/top-headlines?&category=${category}&page=1&pageSize=20&apiKey=${API_KEY}`);
    getNews();
}



const render=()=>{
    const newsHTML = newsList.map
    (news=> ` <div class="row news">
    <div class="col-lg-4">
        <img class="news-img-size" src="${news.urlToImage ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
}"/>
    </div>
    <div class="col-lg-8">
        <h2>${news.title}</h2>
        <p>${
            news.description == null || news.description == ""
              ? "내용없음"
              : news.description.length > 200
              ? news.description.substring(0, 200) + "..."
              : news.description
       }</p>
        <div>${news.source.name || "no source" } </div>
    </div>
</div>`).join('');
    
    document.getElementById('news-boards').innerHTML = newsHTML;
}

const errorRender =(errorMessage) =>{
    const errorHTML =`<div class="alert alert-danger" role="alert">
                            ${errorMessage}
                        </div>`;
    document.getElementById("news-boards").innerHTML = errorHTML;
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