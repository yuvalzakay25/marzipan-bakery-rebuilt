// ייבוא אייקונים מתוך react-icons (סט Font Awesome)
import { FaArrowLeft, FaShieldAlt, FaRegFileAlt, FaLock } from "react-icons/fa";
import TermsTitles from "./TermsTitles.jsx";
import TermsSection from "./TermsSection.jsx";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";

function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-40 pb-20 font-sans" dir="rtl">
      <PageTitle title="תנאי שימוש ומדיניות פרטיות - מאפיית מרציפן" />
      <div className="max-w-4xl mx-auto px-6">
        {/* --- Header: כותרת הדף --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#380909] mb-6">
            תנאי שימוש ומדיניות פרטיות
          </h1>
          <div className="w-24 h-1.5 bg-[#D4AF37] mx-auto rounded-full mb-8"></div>
        </div>

        <div className="space-y-8">
          {/* --- Terms Section: תנאי שימוש --- */}
          <TermsSection
            title="תנאי שימוש באתר"
            icon={FaRegFileAlt}
            headerColor="bg-[#380909]"
          >
            <div className=" text-gray-700 leading-relaxed space-y-4 text-right">
              <p>
                ברוכים הבאים לאתר האינטרנט של מאפיית מרציפן (להלן: "האתר").
                השימוש באתר כפוף לתנאים המפורטים להלן. אנא קראו תנאים אלה
                בקפידה, שכן השימוש באתר מעיד על הסכמתכם להם.
              </p>
              <TermsTitles title="1. זכויות יוצרים וקניין רוחני" />
              <p>
                כל זכויות היוצרים והקניין הרוחני באתר, לרבות השם "מרציפן",
                הלוגו, העיצובים, התמונות, הטקסטים וכל חומר אחר, הינם רכושה
                הבלעדי של מאפיית מרציפן ו/או מי מטעמה. אין להעתיק, לשכפל, להפיץ
                או להשתמש בחומרים אלו ללא אישור בכתב.
              </p>

              <TermsTitles title="2. שימוש באתר" />
              <p>
                האתר נועד למטרות מידע, צפייה בקטלוג המוצרים ויצירת קשר בלבד. חל
                איסור לעשות שימוש באתר לכל מטרה בלתי חוקית, פוגענית או מסחרית
                ללא אישור. המאפייה שומרת לעצמה את הזכות לחסום משתמשים המפרים
                תנאים אלו.
              </p>

              <TermsTitles title="3. המחירים המוצגים באתר" />
              <p>
                תמונות המוצרים באתר נועדו להמחשה בלבד. ייתכנו הבדלים בין התמונות
                לבין המוצרים בפועל. המאפייה שומרת לעצמה את הזכות לשנות מחירים,
                להוסיף או להסיר מוצרים בכל עת וללא הודעה מוקדמת. ט.ל.ח.
              </p>

              <TermsTitles title="4. מדיניות ביטולים והחזרות" />
              <p>
                מכיוון שמדובר במוצרי מזון טריים, לא ניתן להחזיר או להחליף מוצרים
                לאחר שנרכשו ויצאו משטח המאפייה, בהתאם להוראות משרד הבריאות.
                ביטול הזמנה יתאפשר עד 24 שעות לפני מועד האיסוף המתוכנן, בתיאום
                טלפוני בלבד מול הסניף הרלוונטי.
              </p>

              <TermsTitles title="5. חשיפה לאלרגנים" />
              <p>
                המוצרים במאפייה מיוצרים בסביבה המכילה גלוטן, ביצים, חלב, אגוזים
                (מכל הסוגים), שומשום, סויה ובוטנים. איננו יכולים להתחייב לסביבה
                סטרילית מאלרגנים. על לקוחות בעלי רגישות ואלרגיות לנקוט משנה
                זהירות ולוודא את הרכיבים מול צוות המאפייה לפני הצריכה.
              </p>
            </div>
          </TermsSection>

          {/* --- Privacy Section: מדיניות פרטיות --- */}
          <TermsSection
            title="מדיניות פרטיות"
            icon={FaLock}
            headerColor="bg-[#B91C1C]"
          >
            <div className=" text-gray-700 leading-relaxed space-y-4 text-right">
              <p>
                מאפיית מרציפן מכבדת את פרטיות המשתמשים באתר. מדיניות זו מפרטת
                כיצד אנו אוספים ומשתמשים במידע.
              </p>

              <h3 className="text-lg font-bold text-[#380909] flex items-center gap-2">
                <FaShieldAlt className="text-[#D4AF37]" size={18} /> איסוף מידע
                אישי
              </h3>
              <p>
                בעת פנייה דרך טופס "צור קשר", אנו אוספים את המידע שאתם מזינים
                מרצונכם: שם, טלפון, וכתובת אימייל. מידע זה משמש אך ורק לצורך
                מענה לפנייתכם ולא יועבר לצד שלישי ללא הסכמתכם, למעט כנדרש עפ"י
                חוק.
              </p>

              <h3 className="text-lg font-bold text-[#380909] flex items-center gap-2">
                <FaShieldAlt className="text-[#D4AF37]" size={18} /> Cookies
                (עוגיות)
              </h3>
              <p>
                האתר עשוי להשתמש ב-Cookies ("עוגיות") לצורך תפעולו השוטף והתקין,
                איסוף נתונים סטטיסטיים אודות השימוש באתר (כגון Google
                Analytics), ושיפור חווית המשתמש. ניתן לשנות את הגדרות הדפדפן כדי
                למנוע שמירת Cookies.
              </p>

              <h3 className="text-lg font-bold text-[#380909] flex items-center gap-2">
                <FaShieldAlt className="text-[#D4AF37]" size={18} /> אבטחת מידע
              </h3>
              <p>
                אנו נוקטים באמצעי זהירות מקובלים כדי לשמור על סודיות המידע, אך
                לא ניתן להבטיח חסינות מוחלטת מפני חדירות למחשבים.
              </p>
            </div>
          </TermsSection>
        </div>
      </div>

      {/* --- Back Link: חזרה הביתה --- */}
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
  );
}

export default TermsPage;
