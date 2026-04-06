import { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaRoute,
  FaCircle,
} from "react-icons/fa";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";

// import PremiumLogo from "../../assets/premium-logo.png";

const BRANCHES_DATA = [
  {
    id: 1,
    name: "סניף שוק מחנה יהודה",
    address: "רחוב אגריפס 44, ירושלים",
    phone: "02-6232622",
    desc: "הסניף המיתולוגי שבו הכל התחיל. חוויה ירושלמית אותנטית עם ריח של רוגלך חם.",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800",
    wazeLink: "https://waze.com/ul/hsv9h8y1",
    schedule: [
      { open: "07:00", close: "20:00" },
      { open: "07:00", close: "20:00" },
      { open: "07:00", close: "20:00" },
      { open: "07:00", close: "20:00" },
      { open: "07:00", close: "23:00" },
      { open: "07:00", close: "15:00" },
      null,
    ],
    displayHours: "א'-ד': 07:00-20:00 | ה': 07:00-23:00 | ו': 07:00-15:00",
  },
  {
    id: 2,
    name: "סניף סנטר 1",
    address: "שדרות יצחק רבין 2, ירושלים",
    phone: "02-5000212",
    desc: "התחנה הראשונה שלכם בכניסה לעיר. מאפים טריים ואיכותיים בלב המרכז המסחרי.",
    img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800",
    wazeLink: "https://waze.com/ul/hsv9h8y2",
    schedule: [
      { open: "07:30", close: "21:00" },
      { open: "07:30", close: "21:00" },
      { open: "07:30", close: "21:00" },
      { open: "07:30", close: "21:00" },
      { open: "07:30", close: "21:00" },
      { open: "07:30", close: "14:30" },
      null,
    ],
    displayHours: "א'-ה': 07:30-21:00 | יום ו': 07:30-14:30",
  },
  {
    id: 3,
    name: "סניף מרכז העיר",
    address: "רחוב קינג ג'ורג' 15, ירושלים",
    phone: "02-6251212",
    desc: "בלב הפועם של ירושלים. מקום מושלם לעצור להפסקה מתוקה באמצע היום.",
    img: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=800",
    wazeLink: "https://waze.com/ul/hsv9h8y3",
    schedule: [
      { open: "08:00", close: "20:00" },
      { open: "08:00", close: "20:00" },
      { open: "08:00", close: "20:00" },
      { open: "08:00", close: "20:00" },
      { open: "08:00", close: "20:00" },
      { open: "08:00", close: "14:00" },
      null,
    ],
    displayHours: "א'-ה': 08:00-20:00 | יום ו': 08:00-14:00",
  },
];

const BranchesPage = () => {
  // פונקציית בדיקת סטטוס פתיחה
  const getBranchStatus = (schedule) => {
    const now = new Date();
    const day = now.getDay();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    if (day === 6) return false; // שבת סגור

    const todaySchedule = schedule[day];
    if (!todaySchedule) return false;

    const [openHour, openMinute] = todaySchedule.open.split(":").map(Number);
    const [closeHour, closeMinute] = todaySchedule.close.split(":").map(Number);

    const openTime = openHour * 60 + openMinute;
    const closeTime = closeHour * 60 + closeMinute;

    return currentTime >= openTime && currentTime < closeTime;
  };

  // רענון אוטומטי כל דקה
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen font-sans relative select-none overflow-x-hidden bg-[#FAFAFA]"
      dir="rtl"
    >
      <PageTitle title="הסניפים שלנו - מאפיית מרציפן" />
      {/* --- 1. רקע המפה --- */}
      <div className="fixed inset-0 z-0">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          src="https://maps.google.com/maps?q=Jerusalem&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full opacity-50 grayscale-[0.4]"
          title="Jerusalem Map"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/90 pointer-events-none"></div>
      </div>

      {/* --- 2. תוכן הדף --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-24 pointer-events-auto">
          <div className="inline-block bg-white/80 backdrop-blur-md p-10 md:p-14 rounded-[3.5rem] shadow-2xl border border-white/40">
            <h1 className="text-6xl md:text-8xl font-black text-[#B91C1C] mb-6 tracking-tighter transition-transform duration-500 hover:scale-[1.02]">
              הסניפים <span className="text-[#2D211E]">שלנו</span>
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-[#D4AF37] to-[#B91C1C]/30 mx-auto rounded-full mb-8"></div>
            <p className="text-2xl text-[#2D211E] font-light max-w-2xl mx-auto">
              בואו לבקר אותנו, להריח את האפייה ולהרגיש בבית.
            </p>
          </div>
        </div>

        {/* Branches Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BRANCHES_DATA.map((branch, index) => {
            const isOpen = getBranchStatus(branch.schedule);

            return (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-3 group border border-white/60 flex flex-col h-full"
              >
                {/* Image Area */}
                <div className="h-52 overflow-hidden relative shrink-0">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-700"></div>
                  <img
                    src={branch.img}
                    alt={branch.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />

                  <div
                    className={`absolute top-4 right-4 px-4 py-1.5 rounded-full font-bold text-xs shadow-lg z-20 flex items-center gap-2 backdrop-blur-md ${isOpen ? "bg-green-100/90 text-green-700" : "bg-red-100/90 text-red-700"}`}
                  >
                    <FaCircle
                      className={`text-[8px] ${isOpen ? "text-green-500 animate-pulse" : "text-red-500"}`}
                    />
                    {isOpen ? "פתוח עכשיו" : "סגור כעת"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 text-center text-[#2D211E] flex flex-col flex-grow relative">
                  <h3 className="text-2xl font-black text-[#B91C1C] mb-4 group-hover:text-[#D4AF37] transition-colors duration-500">
                    {branch.name}
                  </h3>
                  <p className="text-gray-500 mb-8 font-light leading-relaxed h-12 overflow-hidden text-sm">
                    {branch.desc}
                  </p>

                  <div className="space-y-4 text-sm border-t border-gray-50 pt-8 mb-10 text-right">
                    <div className="flex items-start gap-4 group/row">
                      <FaMapMarkerAlt className="text-[#D4AF37] mt-1 shrink-0" />
                      <span className="text-gray-600 group-hover/row:text-[#2D211E] transition-colors">
                        {branch.address}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 group/row">
                      <FaPhone className="text-[#D4AF37] shrink-0" />
                      <a
                        href={`tel:${branch.phone}`}
                        className="text-gray-600 font-bold hover:text-[#B91C1C]"
                      >
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-4 group/row">
                      <FaClock className="text-[#D4AF37] mt-1 shrink-0" />
                      <span className="text-gray-500 text-xs whitespace-pre-line leading-relaxed">
                        {branch.displayHours}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto grid grid-cols-2 gap-4">
                    <a
                      href={branch.wazeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#2D211E] text-[#D4AF37] py-3.5 rounded-2xl font-bold hover:bg-black transition-all shadow-md flex items-center justify-center gap-2 group/btn"
                    >
                      <FaRoute className="group-hover/btn:scale-110 transition-transform" />
                      <span>Waze</span>
                    </a>
                    <a
                      href={`tel:${branch.phone}`}
                      className="border-2 border-[#B91C1C] text-[#B91C1C] py-3.5 rounded-2xl font-bold hover:bg-[#B91C1C] hover:text-white transition-all shadow-md text-center"
                    >
                      חייג
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BranchesPage;
