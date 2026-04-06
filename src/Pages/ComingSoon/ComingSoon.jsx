    // שימוש ב-react-icons/fa
    import { FaHome, FaSearch } from "react-icons/fa";
    import { Link } from "react-router-dom";
    import PageTitle from "../../components/PageTitle/PageTitle.jsx";

    function ComingSoon() {
    return (
        <div
        className="min-h-screen bg-[#FDFBF7] flex items-center justify-center p-6 text-center font-sans relative overflow-hidden select-none"
        dir="rtl"
        >
        <PageTitle title="בקרוב - מאפיית מרציפן" />
        <div className="max-w-2xl w-full bg-white/80 backdrop-blur-xl p-10 md:p-16 rounded-[3.5rem] shadow-2xl border border-[#D4AF37]/20 relative z-10 transition-all hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)] duration-500">
            {/* תצוגת ה-404 עם עומק */}
            <div className="text-[#B91C1C] mb-8 flex justify-center">
            <div className="relative">
                <span className="text-9xl font-black opacity-10 blur-[2px] select-none">
                בקרוב
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl font-black drop-shadow-lg tracking-tighter">
                    בקרוב
                </span>
                </div>
            </div>
            </div>

            {/* הודעת הטקסט */}
            <header>
            <h1 className="font-bold text-3xl md:text-5xl font-black text-[#2D211E] mb-6 leading-tight">
                המתכון הזה עדיין
                <br />
                <span className="text-[#B91C1C]">בתנור...</span>
            </h1>
            {/* קו הפרדה מעוצב */}
            <div className="w-24 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#F9A825] mx-auto rounded-full mb-10"></div>
            </header>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed font-light max-w-md mx-auto">
            אל דאגה, התנורים שלנו עובדים מסביב לשעון. בזמן שאנחנו מכינים דפים
            חדשים, בואו נחזור לריחות המוכרים של דף הבית.
            </p>

            {/* 3. כפתורי ניווט מעוצבים (כרגע כ-button) */}
            <nav className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
                to="/"
                className="flex items-center justify-center gap-3 bg-[#B91C1C] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#2D211E] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-red-900/20"
            >
                <FaHome size={18} />
                חזרה לדף הבית
            </Link>

            <Link
                to="/catalog"
                className="flex items-center justify-center gap-3 bg-white text-[#2D211E] border-2 border-[#D4AF37]/30 px-8 py-4 rounded-2xl font-bold hover:bg-[#FAFAFA] hover:border-[#D4AF37] transition-all duration-300 hover:-translate-y-1 shadow-sm"
            >
                <FaSearch size={18} className="text-[#D4AF37]" />
                צפייה בקטלוג
            </Link>
            </nav>
        </div>
        </div>
    );
    }

    export default ComingSoon;
