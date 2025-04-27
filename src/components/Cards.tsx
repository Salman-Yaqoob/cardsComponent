import { FaCartShopping } from "react-icons/fa6";

function Cards({ data, isLoading, imgSrc, id }) {
  return (
    <div className="flex h-[400px] w-[270px] flex-col gap-1 overflow-hidden rounded-2xl border-2 border-slate-900 bg-slate-50 shadow-2xl shadow-gray-600">
      {/* <div className="relative"> */}
      {isLoading && (
        <div className="flex h-full w-full items-center justify-center bg-gray-400">
          <p>Error</p>
        </div>
      )}

      {imgSrc && (
        <div className="flex h-full w-full overflow-hidden">
          <img
            src={imgSrc[id].urls.small}
            alt="Balck Shoes"
            className="h-full w-full object-fill"
          />
        </div>
      )}

      <div className="flex flex-2/3 flex-col gap-3 px-5 py-1">
        <div className="flex flex-col">
          <h4 className="text-xs text-gray-700">{data.category}</h4>
          <h1 className="text-lg font-bold text-gray-950">{data.name}</h1>
          <p>
            {Array.apply(null, { length: 5 }).map(() => (
              <span key={Math.random()}>⭐</span>
            ))}
            (5)
          </p>
        </div>
        <div className="flex items-center justify-between text-blue-700">
          <p className="text-center text-lg">
            ${data.price}{" "}
            <span className="text-sm text-gray-500 line-through">
              ${data.oldPrice}
            </span>
          </p>
          <button className="flex items-center justify-center gap-1 rounded-sm border-2 border-gray-600 bg-blue-300 px-5 transition-colors duration-200 hover:bg-blue-200">
            <FaCartShopping />
            add
          </button>
        </div>
        <div className="flex flex-col">
          <p className="text-xs text-gray-400">Description :</p>
          <p className="text-sm text-gray-800">
            {data.description.length > 60
              ? data.description.substring(0, 60) + "..."
              : data.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
