let currentquery = "Technology"
        let currentpage = 1
        const fetchNews = async (page,q) => {
            console.log(`Fetching news for ${q},page number ${page}`) 
            var url = 'https://newsapi.org/v2/everything?' +
                'q=' +q+
                '&from=2024-01-10&' +
                'pageSize=6&' +
                'language=en&' +
                'page=' +page+
                '&sortBy=popularity&' +
                'apiKey=7ec4c002fab2433d93b61f6d5a8b375b';

            var req = new Request(url);
            
          let a = await fetch(req)
            let response = await a.json();
            console.log(JSON.stringify(response))

        console.log(response)
        let str = ""
        resultCount.innerHTML = response.totalResults
        for(let item of response.articles){
            str = str + `<div class="card ms-5 mt-5 border-primary" style="width: 25rem;background-color:black">
            <div class="card-body pd-5>
                <img src="${item.urlToImage}" class="card-img-top"  alt="...">
                <img src="${item.urlToImage}" class="card-img-top" style="width:22rem;margin-bottom:10px" alt="...">
                <h5 class="card-title text-primary">${item.title}</h5>
                <p class="card-text text-light">${item.description.slice(0,125)}...</p>
                <a href="${item.url}" target="_blank" class="btn btn-primary">Read More</a>
            </div>
            
        </div>`;
        }

        document.querySelector('.content').innerHTML = str
        
    }
    fetchNews(1,currentquery)
    search.addEventListener("click",(e)=>{
        e.preventDefault()
        let query = searchInput.value
        currentquery = query

    fetchNews(currentpage,query)
    })
    prev.addEventListener("click",(e)=>{
        if(currentpage>1){
        e.preventDefault()
        currentpage = currentpage - 1
        fetchNews(currentpage,currentquery)
        }
    })
    next.addEventListener("click",(e)=>{
        e.preventDefault()
        currentpage = currentpage + 1
        fetchNews(currentpage,currentquery)
    })
