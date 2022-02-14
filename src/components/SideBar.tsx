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
      {genres.map(({ id, title, name }) => (
        <Button
          key={String(id)}
          title={title}
          iconName={name}
          onClick={() => handleGenreClick(id)}
          selected={genreId === id}
        />
      ))}
    </div>
  </nav>
  );
}
