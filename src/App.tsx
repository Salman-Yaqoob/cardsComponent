import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import { shoes } from "./contexts/shoesData.js";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
// photos/random?count=5 █

function App() {
  const [imgSrc, setImgSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchingImg() {
      try {
        const res = await fetch(
          `https://api.unsplash.com/photos/random?query=shoes&count=10&client_id=${ACCESS_KEY}`,
        );
        const data = await res.json();
        console.log(data);
        setImgSrc(data);
        setIsLoading(!setIsLoading);
      } catch (err) {
        console.error("something goes wrong when fetching photos" + err);
      } finally {
        console.log(imgSrc);
      }
    }

    fetchingImg();
  }, []);

  return (
    <div className="flex h-screen w-full flex-wrap items-center justify-center gap-1 bg-gray-200">
      <img src="https://picsum.photos/200/300" alt="" />
      {shoes.map((data, id) => (
        <Cards
          id={id}
          key={data.id}
          data={data}
          isLoading={isLoading}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
}

export default App;
