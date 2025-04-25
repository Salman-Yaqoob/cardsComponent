import { FaCartShopping } from "react-icons/fa6";

function Cards() {
  return (
    <div className="flex h-[450px] w-[300px] flex-col gap-1 overflow-hidden rounded-2xl border-2 border-slate-900 bg-slate-50 shadow-2xl shadow-gray-600">
      <div className="w-full flex-1/3 overflow-hidden">
        <img
          src="/shoesBlack.jpg"
          alt="Balck Shoes"
          className="h-full w-full"
        />
      </div>
      <div className="flex flex-col gap-2 px-5 py-1">
        <div className="flex flex-col">
          <h4 className="text-xs text-gray-700">shoes</h4>
          <h1 className="text-lg font-bold text-gray-950">Casual Shoes</h1>
          <p>
            {Array.apply(null, { length: 5 }).map(() => (
              <span key={Math.random()}>⭐</span>
            ))}
            (5)
          </p>
        </div>
        <div className="flex items-center justify-between text-blue-700">
          <p className="text-center text-lg">
            $80 <span className="text-sm text-gray-500 line-through">$120</span>
          </p>
          <button className="flex items-center justify-center rounded-sm border-2 border-gray-600 bg-blue-300 px-5 transition-colors duration-200 hover:bg-blue-200">
            <FaCartShopping />
            add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
