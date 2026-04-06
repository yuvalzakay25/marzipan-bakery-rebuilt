import React from "react";

function TermsSection({ title, icon: Icon, children, headerColor = "bg-[#380909]" }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      <div className={`${headerColor} p-6 flex items-center gap-3`}>
        <Icon className="text-[#D4AF37]" size={28} />
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      {/* הוספתי כאן p-8 - עכשיו כל סעיף שתכניס יהיה מרווח אוטומטית */}
      <div className="p-8 text-gray-700 leading-relaxed space-y-4 text-right">
        {children}
      </div>
    </div>
  );
}

export default TermsSection;