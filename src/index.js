import React from 'react';
import ReactDOM from 'react-dom';

class MovieCard extends React.Component {
  render() {
    console.log("I'm in MovieCard")
    return (
      <div className="movie-card">
        <img
          src={this.props.poster}
          alt={this.props.title}
        />
        <h2>{this.props.title}</h2>
        <small>Genres: {this.props.genres.join(', ')}</small>
      </div>
    );
  }
}

// MovieCard.defaultProps = {
// poster: 'http://i.imgur.com/bJw8ndW.png'
// };

ReactDOM.render(
  <MovieCard
    title="Mad Max: Fury Road"
    poster="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
    genres={['Action', 'Adventure', 'Science Fiction', 'Thriller']}
  />,
  document.getElementById('root')
);

// const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

// ReactDOM.render(
//   <MovieCard
//     title="Jurassic World"
//     poster="http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"
//     genres={jurassicWorldGenres}
//   />,
//   document.getElementById('root')
// );
