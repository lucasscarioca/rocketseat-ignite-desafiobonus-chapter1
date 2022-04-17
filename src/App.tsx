import { useState } from 'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {

  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} setSelectedGenreId={setSelectedGenreId} genres={genres} />

      <Content selectedGenre={selectedGenre} selectedGenreId={selectedGenreId} setGenres={setGenres} setSelectedGenre={setSelectedGenre} />
    </div>
  )
}