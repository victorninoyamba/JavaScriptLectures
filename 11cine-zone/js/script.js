// function moviesPopular() {
//     const options = {
//       method: "GET",
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzk1MGMyMTIxZmFmZmJjOWJiNDdiZTA5OGJjYTRiNyIsInN1YiI6IjY0NWRjNzg4ZDZjMzAwMDBlNGFkZDk0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RwfMqTC9PkV48DzR2G3dEPO6N5FFfhi3Nm9FT4RSdPY",
//       },
//     };
//     fetch(
//       "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
//       options
//     )
//       .then((response) => response.json())
//       .then((data) => console.log(data));
//     // const data = data.results;
//     moviesPopular.forEach((data) => {
//       return displayPop(data);
//     });
//     // .catch((err) => console.error(err));
//   }
  
//   const displayPop = (moviePop) => {
//     const popMovieDisplay = document.querySelector("#popular-movies");
  
//     popMovieDisplay = `
//     <div class="card">
//             <a href="movie-details.html?id=1">
//               <img
//                 src="${moviePop.poster_path}"
//                 class="card-img-top"
//                 alt="Movie Title"
//               />
//             </a>
//             <div class="card-body">
//               <h5 class="card-title">${moviePop.title}</h5>
//               <p class="card-text">
//                 <small class="text-muted">Release: ${moviePop.release_date} </small>
//               </p>
//             </div>
//           </div>
//     `;
//   };
  
//   moviesPopular();


function moviesPopular() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzk1MGMyMTIxZmFmZmJjOWJiNDdiZTA5OGJjYTRiNyIsInN1YiI6IjY0NWRjNzg4ZDZjMzAwMDBlNGFkZDk0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RwfMqTC9PkV48DzR2G3dEPO6N5FFfhi3Nm9FT4RSdPY",
    },
  };
  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((data) => {console.log(data.results);
      data.results.forEach((movies) => {
        displayPop(movies);
      });
    })
    .catch((err) => console.error(err));

    
      
      
}

const displayPop = (movies) => {
  const popMovieDisplay = document.querySelector("#popular-movies");

  popMovieDisplay.innerHTML += `
    <div class="card">
      <a href="movie-details.html?id=1">
        <img
          src="https://image.tmdb.org/t/p/w500${moviePop.poster_path}"
          class="card-img-top"
          alt="Movie Title"
        />
      </a>
      <div class="card-body">
        <h5 class="card-title">${moviePop.title}</h5>
        <p class="card-text">
          <small class="text-muted">Release: ${moviePop.release_date} </small>
        </p>
      </div>
    </div>
  `;
};

moviesPopular();
