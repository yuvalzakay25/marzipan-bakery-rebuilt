
function ProcessItem({ title, description, color, Icon }) {
  const colorStyles = {
    red: { bg: "bg-red-50", icon: "text-red-600", border: "border-red-100" },
    gold: {
      bg: "bg-amber-50",
      icon: "text-amber-600",
      border: "border-amber-100",
    },
    green: {
      bg: "bg-emerald-50",
      icon: "text-emerald-600",
      border: "border-emerald-100",
    },
    cyan: {
      bg: "bg-cyan-50",
      icon: "text-cyan-600",
      border: "border-cyan-100",
    },
  };

  // 2. חילוץ הסטייל הנוכחי (עם הגנה למקרה שהצבע לא קיים)
  const currentStyle = colorStyles[color] || colorStyles.gold;

  return (
    <div className="font-sans group flex flex-col gap-4 items-center justify-center bg-white rounded-[2.5rem] py-10 px-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-gray-50">
      <div
        className={`${currentStyle.bg} ${currentStyle.border} border w-20 h-20 flex items-center justify-center rounded-full shadow-inner transition-transform duration-300 group-hover:scale-110`}
      >
        {Icon && (
          <Icon
            size={32}
            className={`${currentStyle.icon} group-hover:rotate-360 duration-700`}
          />
        )}
      </div>

      <h3 className="font-bold text-[#2D211E] text-xl mt-5 mb-3">{title}</h3>

      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export default ProcessItem;
