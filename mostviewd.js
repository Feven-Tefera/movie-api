
function fetchseries(){
 return fetch('https://imdb-api.com/API/SearchSeries/k_uyxdqv0y/series')
    .then(response =>{
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => data.results)
   .catch(error =>{
     console.log('error feteching data' , error);
   });
}

fetchseries()
.then(movies =>{
    movies.forEach(series => {
        //console.log(series.title);
        seriesappend(series.title,series.image)
    });
})

function seriesappend(names ,poster){
    const div =document.createElement('div');
    const li= document.createElement('p');
    li.textContent = names;
    const img = document.createElement('img')
    const mov = document.getElementById("series")

    img.src =poster;
    div.appendChild(img);
    div.appendChild(li);
    mov.appendChild(div);
}





































//https://imdb-api.com/API/MostPopularMovies/k_uyxdqv0y

/*
function fetchmovies(){
   return fetch('https://imdb-api.com/API/SearchMovie/k_9egdb8s6/searchmovie')
.then(response => {
    if (!response.ok){
        throw new Error('network response was not ok');
    }
    return response.json();
})
.then(data=> data.results)
.catch(error =>{
    console.error('error fetching data:' ,error);
});
}

fetchmovies()
.then(seri =>{
    seri.forEach(moves  => {
        console.log(moves.fullTitle);
        moviappend(moves.fullTitle, moves.image)
        
    });
})

function moviappend(movname , picture){
    const div = document.createElement('div');
    const li= document.createElement('p');
    li.textContent =movname;
    const ime = document.createElement('img');
    const mostppmovie = document.getElementById("tredi")
    ime.src = picture;
    div.appendChild(img);
    div.appendChild(li);
    mostppmovie.appendChild(div);
}
*/
