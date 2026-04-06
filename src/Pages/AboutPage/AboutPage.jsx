import React from "react";
// שימוש בלעדי ב-react-icons/fa
import {
  FaAward,
  FaHeart,
  FaUtensils,
  FaQuoteRight,
  FaHistory,
  FaUsers,
  FaStar,
} from "react-icons/fa";

// וודא שהנתיבים לתמונות אצלך בתיקיית assets נכונים
import OwnersHero from "../../assets/OwnersHero.jpg";
import BakeryInterior from "../../assets/BakeryInterior.jpg";
import AboutPageCard from "./AboutPageCard";
import PageTitle from "../../components/PageTitle/PageTitle";

function AboutPage() {
  return (
    
    <div
      className="min-h-screen bg-[#FAFAFA] font-sans text-[#2D211E] overflow-x-hidden"
      dir="rtl"
    >
      <PageTitle title="עלינו - מאפיית מרציפן" />
      {/* --- 1. המייסדים: שושנה ויוסף --- */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 md:pt-48 group">
        <div className="relative bg-white rounded-[3rem] p-10 md:p-20 shadow-xl border border-gray-100 overflow-hidden">

          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">
            {/* טקסט עם מעבר חלק בריחוף */}
            <div className="w-full md:w-1/2 text-right transition-all duration-1000 group-hover:translate-x-2">
              <div className="inline-block mb-6">
                <span className="text-[#D4AF37] font-bold tracking-widest text-sm px-4 py-1.5 border border-[#D4AF37]/30 rounded-full transition-colors duration-1000 group-hover:bg-[#D4AF37] group-hover:text-white">
                  ההתחלה שלנו
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-[#B91C1C] mb-8 leading-tight">
                הסיפור של <br />
                <span className="text-[#2D211E]">שושנה ויוסף</span>
              </h2>

              <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                <p className="border-r-4 border-[#D4AF37]/60 pr-6 transition-all duration-1000 group-hover:border-[#B91C1C]">
                  הכל התחיל בשנת 1986, כשהזוג המופלא{" "}
                  <strong className="font-bold text-[#B91C1C]">
                    שושנה ז"ל ויוסף (שיבדל לחיים ארוכים)
                  </strong>{" "}
                  החליטו להביא את הלב והנשמה שלהם לתוך סמטאות שוק מחנה יהודה.
                </p>
                <p>
                  הם לא חיפשו רק לפתוח עוד מאפייה; החזון היה ליצור{" "}
                  <strong className="font-medium text-[#2D211E]">בית חם</strong>
                  . מקום שבו הריח המשכר של השמרים, הקינמון והשוקולד מתערבב עם
                  החום האנושי.
                </p>
                <p>
                  שושנה הייתה עומדת מאחורי הדלפק עם חיוך רחב שמאיר את כל הרחוב,
                  ויוסף היה דואג בחרדת קודש שכל מגש שיוצא מהתנור יהיה לא פחות
                  ממושלם. זו המורשת שאנחנו גאים להמשיך עד היום.
                </p>
              </div>
            </div>

            {/* תמונה עם Zoom חלק */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white transform -rotate-2 hover:rotate-0 transition-all duration-700 cursor-pointer origin-center scale-100 hover:scale-105">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img
                  src={OwnersHero}
                  alt="שושנה ויוסף"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. החוצץ הרגשי: הציטוט --- */}
      <section className="bg-[#2D211E] text-white py-24 relative overflow-hidden group">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FaQuoteRight className="text-[#D4AF37] text-5xl mx-auto mb-8 opacity-30 transition-opacity duration-1000 group-hover:opacity-100" />
          <blockquote className="text-3xl md:text-5xl font-serif leading-relaxed italic mb-10 transition-transform duration-1000 group-hover:scale-105">
            "שושנה ז"ל ויוסף היו הלב הפועם. עם חיוך תמידי וידיים שידעו ליצור
            קסמים, הם מילאו את המטבח באהבה אין קץ."
          </blockquote>

          {/* הלב הפועם: animate-pulse, scale, ושינוי צבע ב-hover של ה-Section */}
          <div className="flex justify-center transition-all duration-1000 transform group-hover:scale-125">
            <FaHeart className="w-16 h-16 animate-pulse text-white group-hover:text-[#B91C1C] transition-colors duration-1000 drop-shadow-lg" />
          </div>
        </div>
      </section>

      {/* --- 3. דור ההמשך: איציק ושלומי --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 group">
        <div className="relative bg-white rounded-[3rem] p-10 md:p-20 shadow-xl border border-gray-100 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-bl from-[#D4AF37]/5 to-transparent rounded-br-[10rem] pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 relative z-10">
            {/* טקסט */}
            <div className="w-full md:w-1/2 text-right">
              <div className="inline-block mb-6">
                <span className="text-[#D4AF37] font-bold tracking-widest text-sm uppercase px-4 py-1.5 border border-[#D4AF37]/30 rounded-full transition-all duration-1000 group-hover:tracking-[0.4em]">
                  המורשת ממשיכה
                </span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-[#B91C1C] mb-8 leading-tight">
                הדור הבא <br />
                <span className="text-[#2D211E]">איציק ושלומי</span>
              </h2>
              <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                <p className="border-r-4 border-[#B91C1C]/60 pr-6 transition-all duration-1000 group-hover:border-[#B91C1C]">
                  כיום, מפעל החיים שבנו שושנה ויוסף ממשיך לפעום בעוצמה דרך הבנים
                  שלהם. <strong className="text-[#B91C1C]">שלומי</strong> מנהל
                  את המפעל ודואג שכל רוגלך ייצא בדיוק כמו במתכון המקורי.
                </p>
                <p>
                  ו<strong className="text-[#B91C1C]">איציק</strong> מנצח על
                  החנות המיתולוגית בשוק, ושומר על הקשר האישי והחם עם הלקוחות,
                  ממש כמו שההורים לימדו. זו משפחה אחת גדולה שמתרחבת בכל בוקר
                  מחדש.
                </p>
              </div>
            </div>

            {/* תמונה עם Zoom חלק */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[12px] border-white transform rotate-2 hover:rotate-0 transition-all duration-700 cursor-pointer scale-100 hover:scale-105">
                <img
                  src={BakeryInterior}
                  alt="המאפייה כיום"
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. הערכים: ההבטחה שלנו --- */}
      <section className="bg-white py-32 relative overflow-hidden border-t border-gray-50">
        {/* PROMISE Watermark: עדין וקבוע מאחור */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none opacity-[0.03]">
          <span className="text-[15rem] md:text-[22rem] font-bold uppercase tracking-widest leading-none text-[#2D211E]">
            PROMISE
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="mb-24">
            <span className="text-[#D4AF37] tracking-[0.3em] text-sm font-bold  mb-4 block">
              הערכים שלנו
            </span>
            <h2 className="text-6xl md:text-8xl font-black text-[#B91C1C] mb-6">
              ההבטחה שלנו
            </h2>
            <p className="text-gray-500 text-xl font-light max-w-2xl mx-auto leading-relaxed">
              אנחנו לא רק אופים לחם ועוגות. אנחנו אופים זיכרונות, רגעים ושמחה
              לכל בית בישראל.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            {/* מסורת */}
            <AboutPageCard
              Icon={FaHistory}
              title="מסורת"
              description="המתכונים של שושנה ויוסף לא השתנו כבר עשורים. אותו טעם, אותו ריח, אותה נוסטלגיה שתמיד מחזירה אתכם הביתה."
            />

            {/* איכות - מורם למעלה */}
            <AboutPageCard
              Icon={FaAward}
              title="איכות"
              variant="brown"
              description="חומרי גלם משובחים שנבחרים בקפידה. בלי קיצורי דרך, בלי פשרות. רק הטוב ביותר שנכנס אלינו למטבח."
            />

            {/* משפחה */}
            <AboutPageCard
              Icon={FaUsers}
              title="משפחה"
              description="מהרגע שנכנסתם, אתם חלק מהמשפחה. השירות ברוחב לב והחיוך הוא המרכיב הסודי בכל מאפה שלנו."
            />
          </div>
        </div>
      </section>

      <div className="py-12 text-center text-gray-400 text-sm bg-white border-t border-gray-50">
        © 2026 מאפיית מרציפן - מורשת ירושלמית מאז 1986
      </div>
    </div>
  );
}

export default AboutPage;
