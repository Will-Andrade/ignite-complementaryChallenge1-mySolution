import { Button } from './Button';

interface SideBarProps {
  genreId: number;
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>
  handleGenreClick: (id: number) => void;
}

export function SideBar({ genreId, genres, handleGenreClick }: SideBarProps) {
  return (
  <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleGenreClick(genre.id)}
          selected={genreId === genre.id}
        />
      ))}
    </div>
  </nav>
  );
}
