import { MovieCard } from './MovieCard';

interface ContentComponentProps {
  genre: string;
  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Runtime: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>
  }>;
}

export function Content({ genre, movies }: ContentComponentProps) {
  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {genre}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(({ imdbID, Title, Poster, Runtime, Ratings }) => (
              <MovieCard 
                key ={imdbID} 
                title={Title} 
                poster={Poster} 
                runtime={Runtime} 
                rating={Ratings[0].Value} 
              />
            ))}
          </div>
        </main>
    </div>
  );
}
