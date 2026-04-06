
function HeroBadge({ title, children, color }) {
  const colorStyles = {
    red: {
      bg: "bg-red-50",
      icon: "text-brand-red",
      border: "border-red-100",
      textHover: "group-hover:text-brand-red", // הוספנו קלאס מוכן ל-Hover
    },
    gold: {
      bg: "bg-amber-50",
      icon: "text-amber-600",
      border: "border-amber-100",
      textHover: "group-hover:text-amber-600",
    },
    green: {
      bg: "bg-emerald-50",
      icon: "text-emerald-600",
      border: "border-emerald-100",
      textHover: "group-hover:text-emerald-600",
    },
  };
  const currentStyle = colorStyles[color] || colorStyles.red;

  return (
    <div className="group w-full flex flex-col items-center gap-3 p-3 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-lg cursor-default text-center">
      <div
        className={`${currentStyle.bg} ${currentStyle.icon} ${currentStyle.border} w-12 h-12  rounded-full  flex items-center justify-center  group-hover:scale-110 transition-transform shadow-inner ring-1 ring-black/5`}
      >
        {children}
      </div>
      <span
        className={`${currentStyle.textHover} text-sm font-bold  transition-colors`}
      >
        {title}
      </span>
    </div>
  );
}

export default HeroBadge;
