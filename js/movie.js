const loadMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f96ac62d92ada173838748fa0f087eef')
        .then(res => res.json())
        .then(data => setMovies(data.results))
}

loadMovies()

const setMovies = (movies) => {
    const movieContainer = document.getElementById('movie-container');
    const movieSpinner = document.getElementById('movie-spinner')
    movieSpinner.style.display = 'none'

    for (const movie of movies) {
        // console.log(movie)
        const movieBox = document.createElement('div')
        movieBox.classList.add('col')
        const imageUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path;
        movieBox.innerHTML = `
                <div class="card shadow-lg border p-2">
                        <img src="${imageUrl}" class="card-img-top image-fluid" alt="movie-image">
                        <div class="card-body">
                            <h4 class="card-title text-success">${movie.title}</h4>
                            <h3 class="text-warning fw-bolder my-2"> ${movie.vote_average} </h3>
                            <h5> ${movie.release_date} </h5>
                            <h5 class="text-danger my-3"> ${movie.vote_count} </h5>
                            <button onclick = "loadMovieDetails('${movie.id}')"
                            class = "btn btn-outline-info"> SEE DETAILS </button>
                        </div>
                </div>
        `;
        movieContainer.appendChild(movieBox)
    }
}

const loadMovieDetails = (id) => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f96ac62d92ada173838748fa0f087eef`)
        .then(res => res.json())
        .then(data => setMovieDetails(data))
}

const setMovieDetails = (movie) => {
    const movieDetails = document.getElementById('movie-details');
    const movieBox = document.createElement('div')
    // console.log(movieBox)
    movieDetails.innerHTML = '';
    movieBox.innerHTML = `
    <h3 class="fw-bolder text-success">${movie.popularity}</h3>
    <h4 class="text-warning my-3">${movie.original_title} </h4>
    <h5 class="text-secondary">${movie.overview.slice(0,100)}</h5>
    `

    movieDetails.appendChild(movieBox);
}