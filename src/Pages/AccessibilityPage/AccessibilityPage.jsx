import React from "react";
// ייבוא אייקונים מתוך react-icons (סט Font Awesome)
import {
  FaArrowLeft,
  FaCheckCircle,
  FaMobileAlt,
  FaEye,
  FaMousePointer,
} from "react-icons/fa";
import PageTitle from "../../components/PageTitle/PageTitle";

function AccessibilityPage() {
  return (
    <div
      className="min-h-screen bg-[#FAFAFA] pt-40 pb-20 font-sans text-right"
      dir="rtl"
    >
      <PageTitle title="הצהרת נגישות - מאפיית מרציפן" />
      <div className="max-w-4xl mx-auto px-6">
        {/* --- Header: כותרת הדף --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#380909] mb-6 drop-shadow-sm">
            הצהרת נגישות
          </h1>
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full mb-8 shadow-sm"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            מאפיית מרציפן רואה חשיבות עליונה בהנגשת אתר האינטרנט שלה לאנשים עם
            מוגבלויות, מתוך אמונה כי לכל אדם מגיעה הזכות לחיות בכבוד, שוויון,
            נוחות ועצמאות.
          </p>
        </div>

        {/* --- Main Content: המכולה המרכזית --- */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
          {/* Status Section: רמת הנגישות באתר */}
          <div className="bg-gradient-to-l from-[#FFF8E1] to-white p-8 border-b border-[#D4AF37]/20 relative z-10">
            <div className="flex items-start gap-5">
              <div className="bg-white p-3 rounded-full shadow-sm border border-[#D4AF37]/20 flex-shrink-0">
                <FaCheckCircle className="text-[#2E7D32]" size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-black text-[#380909] mb-3">
                  רמת הנגישות באתר
                </h2>
                <p className="text-gray-700 leading-relaxed font-medium">
                  אתר זה עומד בדרישות תקנות שוויון זכויות לאנשים עם מוגבלות
                  (התאמות נגישות לשירות), התשע"ג 2013. ההתאמות בוצעו עפ"י המלצות
                  התקן הישראלי (ת"י 5568) לנגישות תכנים באינטרנט ברמת AA ומסמך
                  WCAG2.0 הבינלאומי.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-12 relative z-10 text-right">
            {/* Features Grid: פירוט ההתאמות */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* כרטיס: התאמות חזותיות */}
              <div className="group bg-gray-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-[#D4AF37]/30 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-2 cursor-default">
                <div className="flex items-center gap-4 text-[#B91C1C] mb-6">
                  <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                    <FaEye size={28} />
                  </div>
                  <h3 className="text-2xl font-black group-hover:text-[#380909] transition-colors">
                    התאמות חזותיות
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "תמיכה בהגדלת טקסט ללא פגיעה בעיצוב",
                    "ניגודיות צבעים תקנית",
                    "מבנה כותרות היררכי ברור",
                    "הדגשת קישורים בעת מעבר עכבר",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-600 group-hover:text-gray-800 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] group-hover:scale-150 transition-transform"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* כרטיס: ניווט ותפעול */}
              <div className="group bg-gray-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-[#D4AF37]/30 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:-translate-y-2 cursor-default">
                <div className="flex items-center gap-4 text-[#B91C1C] mb-6">
                  <div className="bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-500 border border-gray-100">
                    <FaMousePointer size={28} />
                  </div>
                  <h3 className="text-2xl font-black group-hover:text-[#380909] transition-colors">
                    ניווט ותפעול
                  </h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "תמיכה בניווט מקלדת מלא",
                    "פוקוס ברור על אלמנטים נבחרים",
                    "היררכיית מסמך סמנטית (HTML5)",
                    "טפסים נגישים עם תוויות ברורות",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-600 group-hover:text-gray-800 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] group-hover:scale-150 transition-transform"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mobile & Compatibility: תאימות דפדפנים ומובייל */}
            <div className="group p-8 bg-gray-50 rounded-2xl border border-dashed border-gray-300 hover:border-[#D4AF37] transition-all duration-300 relative overflow-hidden cursor-default text-right">
              <div className="flex items-center gap-4 text-[#380909] mb-4 relative z-10">
                <FaMobileAlt
                  size={28}
                  className="group-hover:rotate-12 transition-transform duration-300 text-[#D4AF37]"
                />
                <h3 className="text-xl font-bold">תאימות דפדפנים ומובייל</h3>
              </div>
              <p className="text-gray-600 mb-2 relative z-10 leading-relaxed">
                האתר נבדק ומותאם לתצוגה במרבית הדפדפנים הנפוצים (Chrome,
                Firefox, Edge, Safari) וכן מותאם לשימוש במכשירים ניידים
                (רספונסיביות).
              </p>
              <p className="text-gray-800 font-bold relative z-10">
                האתר מספק תמיכה בתוכנות קוראות מסך מסוג NVDA בצירוף דפדפן
                Chrome.
              </p>
            </div>

            {/* Coordinator Contact: פרטי רכז נגישות */}
            <div className="border-t border-gray-200 pt-10 text-right">
              <h2 className="text-3xl font-black text-[#380909] mb-4">
                נתקלתם בבעיה?
              </h2>
              <p className="text-gray-600 mb-8 max-w-xl leading-relaxed">
                על אף מאמצינו להנגיש את כלל הדפים באתר, ייתכן ויתגלו חלקים שטרם
                הונגשו. נשמח לקבל מכם משוב ואנו נדאג לטפל בפנייה בהקדם האפשרי.
              </p>

              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] inline-block min-w-full md:min-w-[450px]">
                <h4 className="text-lg font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-50 pb-2">
                  פרטי רכז נגישות
                </h4>
                <div className="space-y-5">
                  <div className="flex justify-between items-center group cursor-default gap-4">
                    <span className="font-medium text-gray-500 whitespace-nowrap">
                      שם הרכז:
                    </span>
                    <span className="text-xl font-bold text-gray-800 group-hover:text-[#380909] transition-colors">
                      שירות לקוחות מרציפן
                    </span>
                  </div>
                  <div className="flex justify-between items-center group gap-4">
                    <span className="font-medium text-gray-500 whitespace-nowrap">
                      טלפון:
                    </span>
                    <a
                      href="tel:02-623-2626"
                      className="text-xl font-bold text-[#B91C1C] hover:text-[#D4AF37] transition-colors"
                      dir="ltr"
                    >
                      02-623-2626
                    </a>
                  </div>
                  <div className="flex justify-between items-center group gap-4">
                    <span className="font-medium text-gray-500 whitespace-nowrap">
                      אימייל:
                    </span>
                    <a
                      href="mailto:office@marzipan.co.il"
                      className="text-xl font-bold text-[#B91C1C] hover:text-[#D4AF37] transition-colors underline decoration-2 decoration-transparent hover:decoration-[#D4AF37]/30 offset-4"
                    >
                      office@marzipan.co.il
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Update Date */}
            <div className="text-sm text-gray-400 text-left pt-4">
              עודכן לאחרונה: ינואר 2026
            </div>
          </div>
        </div>

        {/* --- Back Link: כפתור חזרה הביתה --- */}
        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#D4AF37] font-bold hover:text-[#B91C1C] transition-colors group"
          >
            <FaArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            חזרה לעמוד הבית
          </a>
        </div>
      </div>
    </div>
  );
}

export default AccessibilityPage;
