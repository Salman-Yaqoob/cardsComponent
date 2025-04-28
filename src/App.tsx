import { useEffect, useState } from "react";
import Cards from "./components/Cards";

import Navbar from "./components/Navbar.js";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

// const products = cartsData
//   .map((data) => {
//     return data.products;
//   })
//   .flat();

// const filterProducts = products.filter((products) => {
//   const str = products.title + products.thumbnail;
//   return str.includes(search);
// });

function App() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("shoes");
  const [products, setProducts] = useState(null);
  const [imgSrc, setImgSrc] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [filterData, setFilterData] = useState(null);

  useEffect(() => {
    async function cartsDataFetching() {
      try {
        const res = await fetch("https://dummyjson.com/carts");
        const data = await res.json();
        console.log(data.carts);

        const productsz = data.carts
          .map((datas) => {
            return datas.products;
          })
          .flat();

        setProducts(productsz);
        setFilterData(productsz);
      } catch (err) {
        console.log("when fetching data of cart it fail" + err);
      } finally {
        console.log(products);
      }
    }

    cartsDataFetching();
  }, []);

  useEffect(() => {
    async function fetchingImg() {
      try {
        const res = await fetch(
          `https://api.unsplash.com/photos/random?query=${search}&count=10&client_id=${ACCESS_KEY}`,
        );
        const data = await res.json();

        setImgSrc(data);
        setIsLoading(!setIsLoading);
      } catch (err) {
        console.error("something goes wrong when fetching photos" + err);
      } finally {
        console.log(imgSrc);
      }
    }

    fetchingImg();
  }, [search]);

  function handleQuery(e) {
    e.preventDefault();

    setQuery(e.target.value);
  }

  function handleClickSreach() {
    if (!query) return;

    setSearch(query);
    setFilterData(() => {
      return products?.filter((productsz) => {
        const str = String(productsz.title + productsz.thumbnail);
        return str.includes(search);
      });
    });

    setQuery("");
  }

  function KeyDownEnter(e) {
    if (e.key === "Enter") {
      handleClickSreach();
    }
  }

  return (
    <div className="flex h-screen w-full flex-col gap-10 bg-gray-200">
      <Navbar
        query={query}
        onHandleSearch={handleClickSreach}
        onHandleQuery={handleQuery}
        onKeyDownEnter={KeyDownEnter}
      />

      <h1 className="text-center text-3xl font-semibold text-slate-950">
        search item : <span className="font-bold">{search}</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {filterData?.length < 0 ? (
          <p> no item found </p>
        ) : (
          filterData
            ?.slice(0, 10)
            .map((data, id) => (
              <Cards
                id={id}
                key={id}
                data={data}
                isLoading={isLoading}
                imgSrc={imgSrc}
              />
            ))
        )}
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <p>{cartsData.length}</p>
  //     <p>{products.length}</p>
  //     <p>{filterProducts.length}</p>
  //   </div>
  // );
}

export default App;
