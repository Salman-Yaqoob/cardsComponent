import { FaCartShopping } from "react-icons/fa6";

function Cards({ data, isLoading, imgSrc, id }) {
  return (
    <div className="flex h-[300px] w-[200px] flex-col gap-1 overflow-hidden rounded-2xl border-2 border-slate-900 bg-slate-50 shadow-2xl shadow-gray-600">
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

      <div className="flex flex-2/3 flex-col gap-3 px-3 py-1">
        <div className="flex flex-col">
          <h4 className="text-xs text-gray-700">{data.category}</h4>
          <h1 className="text-lg font-bold text-gray-950">
            {data.title.length > 15
              ? data.title.substring(0, 14) + ".."
              : data.title}
          </h1>
          <p className="text-xs">
            {Array.apply(null, { length: 5 }).map(() => (
              <span key={Math.random()}>⭐</span>
            ))}
            (5)
          </p>
        </div>
        <div className="flex items-center justify-between gap-0.5 text-blue-700">
          <p className="text-center text-base">
            ${data.price}
            <span className="text-xs text-gray-500 line-through">
              ${data.discountPercentage}
            </span>
          </p>
          <button className="flex items-center justify-center gap-1 rounded-sm border-2 border-gray-600 bg-blue-300 px-5 text-sm transition-colors duration-200 hover:bg-blue-200">
            <FaCartShopping />
            add
          </button>
        </div>
        <div className="flex flex-col">
          <p className="text-xs text-gray-400">FullName :</p>
          <p className="text-sm text-gray-800">
            {data.title.length > 50
              ? data.title.substring(0, 45) + "..."
              : data.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
