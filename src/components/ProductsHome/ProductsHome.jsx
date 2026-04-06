import ProductsPageCard from "./ProductsHomeCard";
import { Link } from "react-router-dom";
import { categoriesData } from "../../data/productsData";

function ProductsHome() {
  return (
    <section className="w-full py-24 bg-white">
      <div className=" max-w-7xl mx-auto  px-6 font-sans  ">
        {/* Header */}
        <div className="group text-center max-w-3xl mx-auto mb-14">
          <p className="group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-500 text-sm font-bold tracking-[0.2em] text-[#B91C1C] mb-4">
            הקטגוריות שלנו
          </p>

          <h2 className="group-hover:scale-110 transition-transform duration-500 text-3xl md:text-5xl font-bold text-[#2D211E] leading-tight mb-5">
            מה מתחשק לכם{" "}
            <span className="text-[#D4AF37] group-hover:text-[#B91C1C] group-hover:scale-110 transition-all duration-300">
              היום
            </span>
            ?
          </h2>

          <p className="group-hover:scale-110 transition-transform duration-500 text-gray-600 text-lg leading-relaxed">
            לחצו על קטגוריה כדי לגלות את המבחר הטרי שלנו ולמצוא בדיוק את מה שבא
            לכם.
          </p>
        </div>
        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Cards */}
          {categoriesData.map((item) => (
            <ProductsPageCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        {/* View All Link */}
        <div className="group flex justify-center mt-14">
          <Link
            to="/catalog"
            className=" cursor-pointer flex flex-col items-center w-fit"
          >
            <p className="group-hover:scale-105 transition-all duration-500  text-lg md:text-xl font-bold text-[#2D211E]  group-hover:text-brand-red">
              לכל המוצרים בתפריט
            </p>

            <div className="group-hover:scale-75  h-[2px] w-full bg-[#D4AF37] transition-all duration-300 group-hover:bg-brand-red"></div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductsHome;
