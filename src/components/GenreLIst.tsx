import useGenres from "../hooks/useGenres";

const GenreLIst = () => {
  const { error, genres, isLoading } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreLIst;
