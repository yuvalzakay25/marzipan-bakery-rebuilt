import ProcessItem from "./ProcessItem.jsx";
import { LuMousePointerClick } from "react-icons/lu";
import { LuSend } from "react-icons/lu";
import { LuShoppingBag } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

function Process() {
  const data = [
    {
      title: " בוחרים את הפינוק",
      description:
        "נכנסים לקטלוג המלא שלנו, בוחרים את הרוגלך, העוגות והמאפים שבא לכם.",
      icon: LuMousePointerClick,
      color: "gold",
    },
    {
      title: " שולחים הזמנה בוואטסאפ",
      description:
        "לוחצים על 'סיום הזמנה' והעגלה תשלח ישירות אלינו לוואטסאפ לתיאום.",
      icon: LuSend,
      color: "green",
    },
    {
      title: " הכנה ואישור",
      description:
        "צוות המאפייה מקבל את ההזמנה, מאשר מולכם זמינות ומכין את המארז.",
      icon: LuShoppingBag,
      color: "cyan",
    },
    {
      title: " איסוף מהשוק",
      description:
        "מגיעים לסניף המיתולוגי באגריפס 44, אוספים ונהנים מכל ביס חם וטרי.",
      icon: LuMapPin,
      color: "red",
    },
  ];

  return (
    <section className=" w-full  font-sans  py-24 px-4">
      <div className=" flex flex-col items-center justify-center max-w-7xl mx-auto">
        {/* כותרת */}
        <div className="group text-center max-w-3xl mb-14">
          <p className="group-hover:scale-110 transition-transform duration-500 text-sm font-bold tracking-[0.2em] text-[#B91C1C] mb-4">
            איך זה עובד
          </p>

          <h2 className=" group-hover:scale-110 transition-transform duration-500 font-bold text-3xl md:text-5xl text-[#2D211E] leading-tight mb-5">
            מהתנור שלנו <span className="text-[#B91C1C]">לשולחן שלכם</span>
          </h2>

          <p className="group-hover:scale-110 transition-transform duration-500 text-gray-600 text-lg leading-relaxed">
            תהליך ההזמנה שלנו פשוט, מהיר ונעים — בוחרים את המאפים, שולחים הזמנה,
            ואוספים טרי מהמאפייה.
          </p>
        </div>
        {/* פריטים */}
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full ">
          {data.map((item, index) => (
            <ProcessItem
              key={index}
              title={item.title}
              description={item.description}
              Icon={item.icon}
              color={item.color}
            />
          ))}
        </div>
        {/* לינק לרטלוג */}
        <Link
          to="/catalog"
          className="relative group cursor-pointer overflow-hidden flex items-center justify-center gap-3 mt-12 px-8 py-4 bg-brand-red rounded-full text-white text-lg md:text-xl hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-1 transition-all duration-300 active:scale-95"
        >
          <div className="absolute  inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/55 to-transparent skew-x-12 pointer-events-none"></div>
          <span className="font-bold ">להתחלת הזמנה בקטלוג</span>
          <HiOutlineArrowSmLeft
            size={30}
            className="group-hover:-translate-x-1 transition-transform group-hover:duration-400"
          />
        </Link>
      </div>
    </section>
  );
}

export default Process;
