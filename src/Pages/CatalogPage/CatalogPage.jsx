import { useContext, useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { productsData } from "../../data/productsData.js";
import { useSearchParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext.jsx";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";

function CatalogPage() {
  // קבלת הפונקציה להוספת מוצר לעגלה מהקונטקסט
  const { addToCart, toggleCart } = useContext(CartContext);
  // state של שדה החיפוש
  const [searchTerm, setSearchTerm] = useState("");
  // קבלת פרמטר הקטגוריה מה-URL כדי לדעת איזה מוצרים להציג
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category");
  // state לפתיחת וסגירת תפריט הקטגוריות במובייל
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // איחוד פשוט של כל המוצרים
  const allProducts = [
    ...(productsData.rugelach || []),
    ...(productsData.sweetDairyPastries || []),
    ...(productsData.bread || []),
    ...(productsData.donuts || []),
    ...(productsData.fridgeCakes || []),
    ...(productsData.tarts || []),
    ...(productsData.roundParveCakes || []),
    ...(productsData.roundParveCakesNew || []),
    ...(productsData.babkaCakes || []),
    ...(productsData.hardCookies || []),
  ];
  // אם יש קטגוריה, מציגים רק את המוצרים שלה, אחרת מציגים את כולם
  const productsToShow = category ? productsData[category] || [] : allProducts;
  // סינון נוסף לפי חיפוש בשם המוצר
  const filteredProducts = productsToShow.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const categoryButtons = [
    { id: null, label: "הכל" },
    { id: "rugelach", label: "רוגאלכים" },
    { id: "sweetDairyPastries", label: "מאפים מתוקים חלבי" },
    { id: "bread", label: "לחמים וחלות" },
    { id: "donuts", label: "סופגניות" },
    { id: "fridgeCakes", label: "עוגות עגולות חלבי" },
    { id: "tarts", label: "טארטים" },
    { id: "roundParveCakes", label: "עוגות עגולות פרווה" },
    { id: "roundParveCakesNew", label: "עוגות פרווה נוספות" },
    { id: "babkaCakes", label: "עוגות בובקט" },
    { id: "hardCookies", label: "עוגיות קשות" },
  ];
  // הגדרת כותרת ותת-כותרת דינמיות לפי הקטגוריה שנבחרה
  const activeCategory = categoryButtons.find((btn) => btn.id === category);
  // אם יש קטגוריה פעילה, הכותרת היא שם הקטגוריה, אחרת כותרת כללית
  const headerTitle = activeCategory
    ? activeCategory.label
    : "מה מתחשק לכם היום?";
  const headerSubtitle = activeCategory
    ? `כל המוצרים בקטגוריית ${activeCategory.label}`
    : "המאפים הכי טריים בירושלים";

  function handleSelectCategoryClick(id) {
    setSearchTerm("");

    if (id) {
      setSearchParams({ category: id });
    } else {
      setSearchParams({});
    }
  }
  return (
    <div
      className="min-h-screen bg-[#FDFBF7] pt-32 pb-24 font-sans selection:bg-[#B91C1C]/10"
      dir="rtl"
    >
      <PageTitle title="קטלוג המוצרים - מאפיית מרציפן" />
      <div className="max-w-[1400px] mx-auto px-6">
        {/* --- Header שיווקי --- */}
        <header className="pt-10 pb-12 mb-12 text-center cursor-default">
          <h1 className="text-5xl md:text-6xl font-black text-[#B91C1C] tracking-tight leading-tight">
            {headerTitle}
          </h1>
          <p className="mb-4 block text-2xl md:text-3xl font-bold text-gray-700 mt-2">
            {headerSubtitle}
          </p>
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg font-medium animate-pulse">
            לחצו על קטגוריה כדי לראות את כל המוצרים אצלנו
          </p>
        </header>

        {/*  --- תוכן הדף - סרגל צד + גריד של מוצרים --- */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* כפתור לפתיחת תפריט במובייל */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-full mb-4 py-4 bg-[#B91C1C] text-white rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2"
          >
            <span>{isMenuOpen ? "סגור תפריט" : "בחר קטגוריה וחיפוש"}</span>
            {/* כאן אפשר להוסיף אייקון של חץ קטן שיסתובב */}
            <span
              className={`transition-transform duration-300 ${isMenuOpen ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>

          {/* סרגל צד (Sidebar) */}
          {/* חיפוש */}
          <aside
            className={`${isMenuOpen ? "block" : "hidden"} lg:block w-full lg:w-[300px] shrink-0 space-y-6 lg:sticky lg:top-28`}
          >
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
              <div className="relative">
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  type="text"
                  placeholder="חפש מוצר..."
                  className="w-full p-3.5 pr-11 bg-gray-50 border border-gray-100 rounded-xl outline-none focus:border-[#B91C1C]"
                />
                <FaSearch className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-300" />
              </div>
            </div>

            {/* סרגל ניווט */}
            <nav className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100">
              <ul className="space-y-1">
                {categoryButtons.map((item) => {
                  const isActive = item.id
                    ? category === item.id
                    : category === null;
                  return (
                    <li key={item.id ? item.id : "all"}>
                      <button
                        onClick={() => {
                          handleSelectCategoryClick(item.id);
                          setIsMenuOpen(false);
                        }}
                        className={` w-full text-right p-3.5 rounded-xl transition-all font-bold ${isActive
                          ? "bg-[#B91C1C] text-white"
                          : "text-gray-600 hover:bg-gray-50"
                          }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          {/* --- גריד של 3 - יציב ומיושר --- */}
          <main className="flex-1 w-full">
            {/* גריד של מוצרים */}
            {filteredProducts.length > 0 ? (
              <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <article
                    key={product.id}
                    className="cursor-pointer bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group"
                  >
                    {/* תמונה בגובה קבוע למניעת קפיצות */}
                    <div className="h-56 overflow-hidden bg-gray-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* תוכן הכרטיס */}
                    <div className="p-6 text-right flex flex-col flex-1 gap-4">
                      <div className="flex justify-between items-start gap-4">
                        <h3 className="text-xl font-black text-[#2D211E] leading-tight flex-1 line-clamp-1 group-hover:text-[#B91C1C] transition-colors">
                          {product.name}
                        </h3>
                        <span className="text-[#B91C1C] font-black text-xl whitespace-nowrap shrink-0">
                          {product.priceDisplay}
                        </span>
                      </div>

                      {/* תיאור בגובה קבוע - למניעת גבהים שונים של כרטיסים */}
                      <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed h-[2.5rem]">
                        {product.description ||
                          "המאפה המפורסם והטרי של מרציפן, נאפה הבוקר באהבה."}
                      </p>

                      {/* כפתור אדום - רוחב מלא */}
                      <button
                        className="mt-auto w-full py-4 bg-[#B91C1C] text-white rounded-2xl font-bold flex items-center justify-center gap-2 border-2 border-[#B91C1C] transition-all duration-300 hover:bg-white hover:text-[#B91C1C] shadow-md active:scale-95"
                        onClick={() => {
                          toggleCart();
                          addToCart(product);
                        }}
                      >
                        <span className="text-sm">הוסף לסל</span>
                        <FaPlus size={12} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              // תצוגת 404/ לא נמצאו תוצאות  - מותאמת לעמוד קטגוריה ריקה
              <div
                className="py-20 bg-[#FDFBF7] flex items-center justify-center p-6 text-center font-sans relative overflow-hidden select-none"
                dir="rtl"
              >
                <div className="max-w-2xl w-full bg-white/80 backdrop-blur-xl  md:p-16 rounded-[3.5rem] shadow-2xl border border-[#D4AF37]/20 relative z-10 transition-all hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)] duration-500">
                  {/* תצוגת ה-404 עם עומק */}
                  <div className="text-[#B91C1C] mb-8 flex justify-center">
                    <div className="relative">
                      <span className="text-9xl font-black opacity-10 blur-[2px] select-none">
                        לא מצאנו התאמה
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-8xl font-black drop-shadow-lg tracking-tighter">
                          לא מצאנו התאמה
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* הודעת הטקסט */}
                  <header>
                    <h1 className="text-3xl md:text-5xl font-black text-[#2D211E] mb-6 leading-tight">
                      לא נמצאו תוצאות עבור
                      <br />
                      <span className="text-[#B91C1C]">
                        <strong>{searchTerm}</strong>
                      </span>
                    </h1>
                    {/* קו הפרדה מעוצב */}
                    <div className="w-24 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F9A825] mx-auto rounded-full mb-10"></div>
                  </header>

                  <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light max-w-md mx-auto">
                    נסה לשנות את החיפוש או לבחור קטגוריה אחרת
                  </p>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default CatalogPage;
