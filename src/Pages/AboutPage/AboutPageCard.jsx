

// אנחנו מקבלים את האייקון, הכותרת, התיאור, והאם זה הכרטיס המורם (isRaised)
function AboutPageCard({ Icon, title, description, variant = "red" }) {
  // קביעת הצבע ב-Hover לפי הווריאנט שביקשת (אדום או חום-שחור)
  const hoverBg =
    variant === "red" ? "hover:bg-[#B91C1C]" : "hover:bg-[#2D211E]";
  const isRaised = variant === "brown" ? "mt-0 md:-mt-10" : "";

  return (
    <div
      className={`group p-10 rounded-[2.5rem] bg-[#FAFAFA] transition-all duration-500 hover:-translate-y-4 shadow-sm hover:shadow-2xl ${hoverBg} ${isRaised}`}
    >
      <div className="relative z-10">
        <Icon className="text-[#B91C1C] group-hover:text-[#D4AF37] text-5xl mx-auto mb-8 transition-colors duration-500" />
        <h3 className="text-3xl font-bold mb-6 group-hover:text-white transition-colors duration-500">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-white/90 text-lg leading-relaxed transition-colors duration-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default AboutPageCard;
