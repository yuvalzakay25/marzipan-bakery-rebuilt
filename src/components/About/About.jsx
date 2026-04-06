import { FaRegHeart } from "react-icons/fa";
import { GiDiamondTrophy } from "react-icons/gi";
import { FaRegClock } from "react-icons/fa6";
import AboutItem from "./AboutItem.jsx";
import AboutParagraph from "./AboutParagraph.jsx";
import AboutImg from "./AboutImg.jsx";
import MahaneYehudaNight from "../../assets/MahaneYehudaNight.jpg";
import MarzipanShopfront from "../../assets/MarzipanShopfront.jpg";
import BakeryInterior from "../../assets/BakeryInterior.jpg";
import MahaneYehudaStreet from "../../assets/MahaneYehudaStreet.jpg";

function About() {
  return (
    <section className="w-full py-24 bg-[#FFFDF9]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 px-6 font-sans items-center">
        {/* img left side*/}
        {/* המכולה של התמונות - תופסת 5 יחידות מתוך 12 */}
        <div className="lg:order-2 lg:col-span-5 grid grid-cols-2 gap-4">
          {/* טור 1: יורד קצת למטה */}
          <div className="space-y-4 pt-12 overflow-hidden">
            <div className="h-64 rounded-2xl flex items-center justify-center">
              <AboutImg img={MahaneYehudaNight} alt={MahaneYehudaNight} />
            </div>
            <div className=" h-48 rounded-2xl flex items-center justify-center">
              <AboutImg img={MarzipanShopfront} alt={MarzipanShopfront} />
            </div>
          </div>
          {/* טור 2: מתחיל מהקצה העליון */}
          <div className="space-y-4">
            <div className=" h-48 rounded-2xl flex items-center justify-center">
              <AboutImg img={BakeryInterior} alt={BakeryInterior} />
            </div>
            <div className=" h-64 rounded-2xl flex items-center justify-center">
              <AboutImg img={MahaneYehudaStreet} alt={MahaneYehudaStreet} />
            </div>
          </div>
        </div>
        {/* text right side*/}
        <div className=" lg:col-span-7 flex flex-col gap-6  text-right">
          {/* הסיפור הירושלמי שלנו */}
          <div className="group flex items-center gap-4 mb-4">
            <span className="w-8 h-[2px] bg-brand-red group-hover:w-16 text-sm transition-all duration-300"></span>
            <span className=" font-bold  text-brand-red   group-hover:tracking-widest text-sm transition-all duration-300">
              הסיפור הירושלמי שלנו
            </span>
          </div>
          <div className="group flex flex-col gap-4">
            <h1 className="group-hover:scale-105 transition-transform duration-500  text-3xl md:text-5xl font-bold text-[#2D211E] leading-tight ">
              יותר מ-40 שנה של
              <span className="text-[#D4AF37] group-hover:text-brand-red transition-colors duration-300  ">
                {" "}
                קסם בשוק
              </span>
            </h1>
            <AboutParagraph
              text=" מי שמכיר את שוק מחנה יהודה, מכיר את הריח. הריח המתוק, החמאתי והמשכר
            שמושך אתכם ישר אל התנורים שלנו. מאפיית מרציפן היא לא סתם מאפייה -
            היא חלק מההיסטוריה של ירושלים."
            />
            <AboutParagraph
              text=" הרוגלך שלנו הפכו לאגדה, אבל הסוד שלנו הוא פשוט: אהבה ענקית, חומרי
            גלם שלא מתפשרים עליהם, ואווירה שאי אפשר למצוא בשום מקום אחר בעולם."
            />
          </div>
          {/* buttons */}
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <AboutItem
              Icon={FaRegClock}
              title="טרי חם מהתנור"
              text="נאפה ברצף כל היום"
            />
            <AboutItem
              Icon={GiDiamondTrophy}
              title="המתכון הסודי"
              text="הטעם המקורי של השוק"
            />
            <AboutItem
              Icon={FaRegHeart}
              title="אהבה ירושלמית"
              text="שירות עם כל הנשמה"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
