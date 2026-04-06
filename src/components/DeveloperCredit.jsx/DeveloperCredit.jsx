import { FaWhatsapp, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function DeveloperCredit() {
  const whatsappLink = "https://wa.me/972533339341";
  const githubLink = "https://github.com/yuvalzakay25"; // הקישור שלך

  return (
    <div className="flex items-center justify-center py-8 border-t border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="group relative flex flex-col md:flex-row items-center gap-4 px-6 py-3 rounded-2xl border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 bg-gradient-to-l from-white/5 to-transparent">

        <div className="text-right">
          <p className="text-[10px] uppercase tracking-[0.2em] text-red-200/40 mb-1">
            Frontend Developer 
          </p>
          <h4 className="text-sm font-medium text-white/90 group-hover:text-[#D4AF37] transition-colors">
            נבנה ותוכנן על ידי <span className="font-bold">יובל זכאי</span>
          </h4>
        </div>

        {/* קו מפריד */}
        <div className="hidden md:block w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

        <div className="flex gap-3">
          {/* וואטסאפ */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-white/5 hover:bg-[#25D366]/20 text-white/70 hover:text-[#25D366] border border-white/5 hover:border-[#25D366]/30 transition-all duration-300"
            title="דברו איתי בוואטסאפ"
          >
            <FaWhatsapp size={18} />
          </a>
          {/* גיטהאב */}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
         className="p-2 rounded-lg bg-white/5 hover:bg-violet-600/20 text-white/70 hover:text-violet-400 border border-white/5 hover:border-violet-600/30 transition-all duration-300"
            title="הפרויקטים שלי ב-GitHub"
          >
            <FaGithub size={18} />
          </a>

          {/* תיק עבודות */}
          <a
            href={githubLink}
            target="_blank"
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#380909] border border-[#D4AF37]/20 transition-all duration-300 text-xs font-bold"
          >
            <span>תיק עבודות</span>
            <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DeveloperCredit;
