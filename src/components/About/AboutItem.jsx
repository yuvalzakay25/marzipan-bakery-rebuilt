function AboutItem({ Icon, title, text }) {
  return (
    <div className="relative group overflow-hidden flex items-center justify-center flex-col w-full bg-white rounded-2xl shadow-lg gap-4 p-6 text-right transition-all duration-500 hover:-translate-y-2">
      {/* שכבת הרקע שעולה ב-Hover */}
      <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

      {/* התוכן - שים לב ל-z-10 כדי שיישאר מעל הרקע האדום */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-orange-50 mb-4 group-hover:bg-white/20 transition-colors duration-500">
          <Icon
            size={28}
            className="text-brand-red group-hover:text-white transition-colors duration-500"
          />
        </div>

        <h2 className="font-bold text-lg mb-2 group-hover:text-white transition-colors duration-500">
          {title}
        </h2>
        <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors duration-500">
          {text}
        </p>
      </div>
    </div>
  );
}

export default AboutItem;
