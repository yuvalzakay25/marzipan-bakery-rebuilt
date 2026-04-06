import { useState } from "react";
import {
  FaPaperPlane,
  FaWhatsapp,
  FaPhone,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import contactBg from "../../assets/contact_bg_v2.png";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";

const BRANCHES_EXAMPLE = [
  { id: 1, name: "שוק מחנה יהודה", address: "עץ חיים 10" },
  { id: 2, name: "סנטר 1", address: "שדרות הרצל" },
];
const CONTACT_LINKS = {
  whatsapp: "https://wa.me/972533339341",
  phone: "tel:0533339341",
  facebook: "https://www.facebook.com/marzipan.jerusalem/?locale=he_IL",
  instagram: "https://www.instagram.com/marzipan_jerusalem/",
};

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    newsletter: false,
  });

  function handleSubmit(e) {
    e.preventDefault();

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    const newErrors = {
      name: "",
      phone: "",
      email: "",
      message: "",
    };

    if (!name) {
      newErrors.name = "אנא הזן שם מלא";
    }

    if (!phone) {
      newErrors.phone = "אנא הזן מספר טלפון";
    } else {
      const phoneRegex = /^[0-9]{9,10}$/;
      if (!phoneRegex.test(phone)) {
        newErrors.phone = "מספר הטלפון אינו תקין";
      }
    }

    if (!email) {
      newErrors.email = "אנא הזן כתובת דוא״ל";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "כתובת הדוא״ל אינה תקינה";
      }
    }

    if (!message) {
      newErrors.message = "אנא כתוב את תוכן הפנייה";
    }

    if (
      newErrors.name ||
      newErrors.phone ||
      newErrors.email ||
      newErrors.message
    ) {
      setErrors(newErrors);
      return;
    }

    setErrors({
      name: "",
      phone: "",
      email: "",
      message: "",
    });

    const whatsappMessage = `
פנייה חדשה מהאתר 🍰

שם: ${name}
טלפון: ${phone}
אימייל: ${email}

הודעה:
${message}
`;

    const phoneNumber = "972533339341";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(url, "_blank");
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
      newsletter: false,
    });
  }
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  return (
    <div
      className="min-h-screen flex flex-col font-sans relative overflow-hidden select-none pt-20"
      dir="rtl"
    >
      <PageTitle title="צור קשר - מאפיית מרציפן" />
      {/* --- 1. רקע נקי --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactBg}
          alt="Marzipan Bakery Atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
      </div>
      {/* 2 */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-16 items-start">
        {/* --- א) צד ימין: טקסט שיווקי וכרטיסיות קשר --- */}
        <div className="w-full md:w-1/2 text-right">
          {/* header */}
          <header className="mb-10">
            <h1 className="text-5xl md:text-7xl font-black text-[#B91C1C] mb-6 leading-tight tracking-tight drop-shadow-sm">
              אנחנו כאן <span className="text-[#2D211E]">בשבילכם,</span>
              <br />
              <span className="block text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                לכל שאלה, טעם וריח
              </span>
            </h1>

            <div className="w-32 h-2 bg-gradient-to-r from-[#D4AF37] to-[#F9A825] rounded-full my-6 mx-auto md:mx-0 shadow-md"></div>

            <p className="text-xl text-gray-800 font-medium leading-relaxed max-w-2xl mx-auto md:mx-0 bg-white/70 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-white/50">
              הרוגלך שלנו הם רק ההתחלה. צוות מרציפן זמין עבורכם לכל בקשה מיוחדת,
              הזמנה לאירוע או סתם כדי לשמוע איך היה הביס הראשון.
            </p>
          </header>

          {/* מבנה חדש: כרטיסיות 2x2 (Mini-Cards) */}
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-right mt-8">
            {/* WhatsApp Card */}
            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="bg-white/90 backdrop-blur-md border border-white p-6 rounded-[2rem] flex flex-col items-start gap-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-[#25D366]/10 text-[#25D366] p-4 rounded-2xl group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-white transition-all">
                <FaWhatsapp size={28} />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1">
                  זמינים ומחכים
                </span>
                <span className="text-xl font-black text-[#2D211E]">
                  הזמנה בוואטסאפ
                </span>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={CONTACT_LINKS.phone}
              rel="noreferrer"
              className="bg-white/90 backdrop-blur-md border border-white p-6 rounded-[2rem] flex flex-col items-start gap-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-[#D4AF37]/10 text-[#D4AF37] p-4 rounded-2xl group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-white transition-all">
                <FaPhone size={24} />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1">
                  חייגו אלינו
                </span>
                <span className="text-xl font-black text-[#2D211E]">
                  053-333-9341
                </span>
              </div>
            </a>

            {/* Facebook Card */}
            <a
              href={CONTACT_LINKS.facebook}
              target="_blank"
              rel="noreferrer"
              className="bg-white/90 backdrop-blur-md border border-white p-6 rounded-[2rem] flex flex-col items-start gap-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-[#1877F2]/10 text-[#1877F2] p-4 rounded-2xl group-hover:scale-110 group-hover:bg-[#1877F2] group-hover:text-white transition-all">
                <FaFacebook size={28} />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1">
                  קהילה
                </span>
                <span className="text-xl font-black text-[#2D211E]">
                  עקבו בפייסבוק
                </span>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={CONTACT_LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              className="bg-white/90 backdrop-blur-md border border-white p-6 rounded-[2rem] flex flex-col items-start gap-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="bg-[#dc2743]/10 text-[#dc2743] p-4 rounded-2xl group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888] group-hover:text-white transition-all">
                <FaInstagram size={28} />
              </div>
              <div>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block mb-1">
                  מאחורי הקלעים
                </span>
                <span className="text-xl font-black text-[#2D211E]">
                  טירוף באינסטגרם
                </span>
              </div>
            </a>
          </nav>
        </div>

        {/* --- ב) צד שמאל: טופס צור קשר --- */}
        <div className="w-full md:w-1/2 bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] shadow-2xl border-t-8 border-[#B91C1C]">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 text-right"
            noValidate
          >
            <h2 className="text-2xl font-bold text-[#2D211E] mb-10 flex items-center gap-3">
              <FaPaperPlane className="text-[#B91C1C]" />
              שלחו לנו הודעה מתוקה
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                required
                type="text"
                placeholder="* שם מלא"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full pl-4 pr-10 py-4 bg-gray-50/80 border rounded-2xl outline-none transition-colors ${
                  errors.name
                    ? "border-red-400 focus:border-red-400"
                    : "border-gray-200 focus:border-[#B91C1C]"
                }`}
              />

              <p className="text-red-500 text-sm mt-2 min-h-[20px]">
                {errors.name}
              </p>

              <input
                required
                type="tel"
                placeholder="טלפון *"
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  setErrors({ ...errors, phone: "" });
                }}
                className={`w-full pl-4 pr-10 py-4 bg-gray-50/80 border rounded-2xl outline-none transition-colors ${
                  errors.phone
                    ? "border-red-400 focus:border-red-400"
                    : "border-gray-200 focus:border-[#B91C1C]"
                }`}
              />
              <p className="text-red-500 text-sm mt-2 min-h-[20px]">
                {errors.phone}
              </p>
            </div>

            <input
              required
              type="email"
              placeholder="* דוא״ל"
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                setErrors({ ...errors, email: "" });
              }}
              className={`w-full pl-4 pr-10 py-4 bg-gray-50/80 border rounded-2xl outline-none transition-colors ${
                errors.email
                  ? "border-red-400 focus:border-red-400"
                  : "border-gray-200 focus:border-[#B91C1C]"
              }`}
            />

            <p className="text-red-500 text-sm mt-2 min-h-[20px]">
              {errors.email}
            </p>

            <textarea
              required
              rows="5"
              placeholder="* תוכן הפנייה..."
              value={formData.message}
              onChange={(e) => {
                setFormData({ ...formData, message: e.target.value });
                setErrors({ ...errors, message: "" });
              }}
              className={`w-full pl-4 pr-10 py-4 bg-gray-50/80 border rounded-2xl outline-none transition-colors ${
                errors.message
                  ? "border-red-400 focus:border-red-400"
                  : "border-gray-200 focus:border-[#B91C1C]"
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-2 min-h-[20px]">
                {errors.message}
              </p>
            )}

            <div className="flex items-center gap-3 pt-2 justify-start select-none cursor-pointer group">
              <input
                type="checkbox"
                id="newsletter"
                checked={formData.newsletter}
                onChange={(e) =>
                  setFormData({ ...formData, newsletter: e.target.checked })
                }
                className="w-5 h-5 text-[#B91C1C] border-2 border-gray-300 rounded focus:ring-[#B91C1C] cursor-pointer transition-colors checked:bg-[#B91C1C] checked:border-[#B91C1C]"
              />
              <label
                htmlFor="newsletter"
                className="text-gray-600 font-medium text-sm hover:text-[#B91C1C] transition-colors"
              >
                אשמח לקבל הטבות ומבצעים מתוקים למייל 🍰
              </label>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-[#B91C1C] text-white font-black py-4 px-12 rounded-xl hover:bg-[#2D211E] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-3"
            >
              שלח הודעה
              <FaPaperPlane className="transform rotate-12" />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ContactPage;
