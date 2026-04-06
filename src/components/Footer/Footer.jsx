import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import FooterNavigation from "./FooterNavigation";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#380909] text-white border-t-4 border-[#D4AF37] z-10">
      {/* חלק עליון */}
      <section className="max-w-7xl mx-auto px-8 py-12 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start text-right">
          {/* טור 1: המותג והסיפור */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-2">מאפיית מרציפן</h2>
              <p className="text-[#D4AF37] text-xs font-bold tracking-widest">
                המסורת של ירושלים | 1986
              </p>
            </div>

            <p className="text-red-100/70 text-sm leading-relaxed">
              כבר מעל 3 עשורים שאנחנו משכימים קום כדי להביא לכם את המאפים הטובים
              ביותר. הרוגלך האגדי, עוגות השמרים והטעמים שכולנו גדלנו עליהם.
            </p>

            {/* אייקונים חברתיים */}
            <div className="flex gap-4 pt-2">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-[#1877F2]">
                <FaFacebookF size={18} />
              </div>

              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-tr hover:from-[#f09433] hover:to-[#bc1888]">
                <FaInstagram size={18} />
              </div>

              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:bg-[#1DA1F2]">
                <FaTwitter size={18} />
              </div>
            </div>
          </div>

          {/* טור 2: ניווט מהיר */}
          <div>
            <h3 className="text-xl font-bold mb-8 relative inline-block group">
              תפריט באתר
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-[#D4AF37] group-hover:w-full duration-300 transition-all"></span>
            </h3>

            <ul className="space-y-4 text-red-100/80 text-sm">
              <FooterNavigation path="/" title="עמוד הבית" />
              <FooterNavigation path="/about" title="הסיפור שלנו" />
              <FooterNavigation path="/catalog" title="קטלוג מוצרים" />
              <FooterNavigation path="/branches" title="סניפים ונקודות מכירה" />
              <FooterNavigation path="/contact" title="יצירת קשר" />
            </ul>
          </div>

          {/* טור 3: יצירת קשר */}
          <div>
            <h3 className="text-xl font-bold mb-8 relative inline-block group">
              צרו קשר
              <span className="absolute -bottom-2 right-0 w-12 h-0.5 bg-[#D4AF37] group-hover:w-full duration-300 transition-all"></span>
            </h3>

            <ul className="space-y-6 text-sm">
              <li className="flex items-center gap-4 group">
                <div className="p-2 rounded-full bg-white/5 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#380909] transition-all">
                  <FiMapPin size={18} />
                </div>
                <span>אגריפס 44, ירושלים</span>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="p-2 rounded-full bg-white/5 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#380909] transition-all">
                  <FiPhone size={18} />
                </div>
                <span dir="ltr">02-623-2626</span>
              </li>

              <li className="flex items-center gap-4 group">
                <div className="p-2 rounded-full bg-white/5 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#380909] transition-all">
                  <FiMail size={18} />
                </div>
                <span>office@marzipan.co.il</span>
              </li>
            </ul>
          </div>

          {/* טור 4: שעות פעילות */}
          <div className="">
            <h3 className="text-xl font-bold mb-8 relative inline-block group">
              זמני פעילות
              <span className="absolute -bottom-2 right-0 w-12 group-hover:w-full h-0.5 bg-[#D4AF37] duration-300 transition-all"></span>
            </h3>

            <div className="bg-black/20 p-6 rounded-2xl border border-white/5 hover:border-white/50 transition-all">
              <ul className="space-y-4 text-sm">
                <li className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-red-200/60">א' - ה'</span>
                  <span className="font-bold">07:00 - 23:00</span>
                </li>

                <li className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-red-200/60">שישי</span>
                  <span className="font-bold">07:00 - 15:00</span>
                </li>

                <li className="flex justify-between items-center">
                  <span className="text-red-200/60">מוצ"ש</span>
                  <span className="font-bold italic">שעה מצאת השבת</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* חלק תחתון - רוחב מלא */}
      <div className="bg-black/70 py-6">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-red-200/50">
          <p>© {currentYear} כל הזכויות שמורות למאפיית מרציפן בע"מ.</p>

          <ul className="flex gap-8">
            <FooterNavigation path="/terms" title="תנאי שימוש" />
            <FooterNavigation path="/accessibility" title="הצהרת נגישות" />
            <FooterNavigation path="/terms" title="מדיניות פרטיות" />
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
