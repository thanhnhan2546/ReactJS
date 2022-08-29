import axios from "axios";
import { useQuery } from "react-query";

export const RQSuperHeroes = () => {
  const { isLoading, data, isError, error } = useQuery("suer-heroes", () => {
    return axios({
      method: "GET",
      url: "http://localhost:3002/superheroes1",
    });
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <h2>RQSuperHeroes</h2>
      {data.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
