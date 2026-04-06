import { Link } from "react-router-dom";

function ProductsHomeCard({ id, title, description, image }) {
  return (
    <Link
      to={`/catalog?category=${id}`}
      className="group hover:-translate-y-2 transition-all duration-400 cursor-pointer bg-white p-6 rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col gap-6"
    >
      {/* אזור התמונה */}
      <div className=" h-52  bg-[#FFF8EE] rounded-3xl overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover  transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* תוכן הטקסט */}
      <div className="flex flex-col items-center text-center gap-3 px-2">
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
          {title}
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>

      <span className="text-center cursor-pointer w-full py-4 hover:bg-white hover:text-brand-red hover:ring-2 transition-all  bg-brand-red text-white rounded-2xl font-bold  duration-400 shadow-md">
        צפה במוצרים
      </span>
    </Link>
  );
}

export default ProductsHomeCard;
