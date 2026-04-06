import OwnersHero from "../../assets/OwnersHero.jpg";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { LuLeaf } from "react-icons/lu";

import HeroBadge from "../Hero/HeroBadge.jsx";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-screen w-full font-sans pt-28 pb-16 bg-gradient-to-b from-[#FDFBF7] to-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 px-6">
        {/* חלק התמונה חלק שמאל */}
        {/* 1. המכולה של הטור (החצי השמאלי של המסך) */}
        <div className=" lg:w-1/2 order-1 lg:order-2 relative flex justify-center items-center">
          {/* 2. ה"מסגרת" (ה-Wrapper) - השכבה שקובעת את העיצוב והחיתוך */}

          {/* 2. ה"הילה" (Background Glow) - השכבה שמאחורי התמונה */}
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white rotate-2 transition-transform duration-700 hover:rotate-0">
            {/* 3. התמונה עצמה - התוכן הוויזואלי */}
            <img
              src={OwnersHero}
              alt="Owners Photo"
              className="w-full h-[500px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
        {/* חלק הטקסט חלק ימין */}
        <div className="w-full order-2 lg:order-1 lg:w-1/2  flex flex-col gap-5 p-5  items-center lg:items-start  text-center lg:text-right">
          {/* כותרת ופסקה */}
          <div className=" inline-flex  items-center gap-2 bg-[#B91C1C]/5 border border-[#B91C1C]/10 px-4 py-1.5 rounded-full text-[#B91C1C] font-bold text-sm mb-6 animate-fade-in-up w-fit">
            {/* האייקון */}
            <FaRegStar size={14} fill="currentColor" />
            {/* הטקסט */}
            <span>מאפיית הבוטיק של ירושלים</span>
          </div>
          {/* טקסט */}
          <div className="group flex flex-col gap-6 items-center lg:items-start">
            <h1 className="group-hover:scale-110 transition-transform duration-500 font-bold lg:text-7xl text-5xl text-[#2D211E] leading-tight mb-4">
              הטעם המקורי של{" "}
              <span className="text-[#B91C1C]">שוק מחנה יהודה</span>
            </h1>
            <p className="group-hover:scale-110 transition-transform duration-500 text-lg md:text-xl text-gray-600 max-w-md leading-relaxed mb-6">
              מאז 1986, אנחנו אופים באהבה את הרוגלך המפורסמים בעולם. חמים, טריים
              ונמסים בפה.
            </p>
          </div>
          {/* כפתורים קשר */}
          <div className="flex  gap-4 flex-col md:flex-row w-full justify-center lg:justify-start mt-4">
            {/*  הזמנה בוואטסאפ */}
            <a
              href="https://wa.me/972533339341"
              target="_blank"
              rel="noreferrer"
              className="w-full  md:w-auto group relative overflow-hidden bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-full font-bold text-lg  flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(37,211,102,0.3)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.5)] hover:-translate-y-1 transition-all duration-300 ring-2 ring-white/20 ring-offset-2 ring-offset-[#FDFBF7] active:scale-95"
            >
              <span className="relative z-10">הזמנה בוואטסאפ</span>
              <IoIosArrowRoundBack
                size={28}
                className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1"
              />
              {/*  אפקט הברק - עובר מתחת לאייקון */}
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
            </a>

            {/*   לתפריט המלא */}
            <Link
              to="/catalog"
              className="w-full md:w-auto text-center group relative overflow-hidden px-8 py-4 rounded-full bg-white text-[#2D211E] border border-[#2D211E]/10 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 active:scale-95"
            >
              <span className=" relative z-10 transition-all font-bold duration-300  ">
                לתפריט המלא
              </span>
              {/*  שכבת הרקע -   ל-transition ול-scale */}
              <div className="absolute inset-0 bg-[#FFF8E1] opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
            </Link>
          </div>
          {/* כפתורים אחרים שונים */}
          <div className="grid grid-cols-3 gap-6 w-full max-w-md border-t border-gray-200 pt-6 mt-6">
            <HeroBadge title="מחומרים טבעיים" color="green">
              <LuLeaf size={22} />
            </HeroBadge>
            <HeroBadge title="המותג המקורי" color="red">
              <FaMedal size={22} />
            </HeroBadge>
            <HeroBadge title="טריות יומית" color="gold">
              <FaRegStar size={22} />
            </HeroBadge>
            {/* כאן יבואו עוד 2 חותמות דומות... */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
