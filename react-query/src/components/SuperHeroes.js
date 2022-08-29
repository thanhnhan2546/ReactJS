import axios from "axios";
import { useEffect, useState } from "react";

export const SuperHeroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const getSuperHeroes = () => {
    const promise = axios({
      method: "GET",
      url: "http://localhost:3002/superheroes1",
    })
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getSuperHeroes();
  }, []);

  if (isLoading) {
    return <h3>loading...</h3>;
  }
  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
