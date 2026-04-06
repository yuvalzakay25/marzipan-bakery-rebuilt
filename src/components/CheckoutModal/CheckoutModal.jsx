import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";

function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  cartTotal,
  onOrderComplete,
}) {
  // מצב שמנהל את הנתונים של הטופס בתוך המודל, כמו שם, טלפון, סניף וזמן איסוף
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    branch: "שוק מחנה יהודה",
    pickupTime: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
  });
  if (!isOpen) return null;

  const whatsappPhone = "972533339341";

  //   פונקציה שמטפלת בלחיצה על כפתור השליחה בתוך המודל, אוספת את הנתונים מהטופס ויוצרת הודעה מפורטת עם פרטי הלקוח וההזמנה, שמוכנה לשליחה לוואטסאפ
  function handleSubmit(e) {
    e.preventDefault();
    // ניקוי רווחים מיותרים
    const name = formData.name.trim();
    const phone = formData.phone.trim();

    const newErrors = {
      name: "",
      phone: "",
    };

    if (!name) newErrors.name = "אנא הזן שם מלא";

    if (!phone) {
      newErrors.phone = "אנא הזן מספר טלפון";
    } else {
      const phoneRegex = /^[0-9]{9,10}$/;

      if (!phoneRegex.test(phone)) {
        newErrors.phone = "מספר הטלפון אינו תקין";
      }
      if (newErrors.name || newErrors.phone) {
        setErrors(newErrors);
        return;
      }
      setErrors({ name: "", phone: "" });
      const itemsText = cartItems
        .map((item) => {
          return `- ${item.name} | כמות: ${item.quantity} | ₪${item.priceValue * item.quantity}`;
        })
        .join("\n");

      const customerDetails = `פרטי הלקוח:
    שם: ${formData.name}
טלפון: ${formData.phone}
סניף איסוף: ${formData.branch}
זמן איסוף: ${formData.pickupTime || "בהקדם האפשרי"}`;
      const message = `שלום, אני רוצה לבצע הזמנה ממאפיית מרציפן 🍰
${customerDetails}
פרטי ההזמנה:
--------------------
${itemsText}
--------------------
סה"כ לתשלום: ₪${cartTotal}
אשמח לאישור הזמנה.
תודה רבה!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodedMessage}`;

      window.open(whatsappUrl, "_blank");

      onOrderComplete();
    }
  }
  return (
    // הקונטיינר של המודל, שמכסה את כל המסך ומרכז את התוכן
    <div
      className=" fixed inset-0 z-[120] flex items-center justify-center p-4"
      dir="rtl"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#B91C1C] text-white p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <FaTimes size={18} />
          </button>

          <FaShoppingBag className="mx-auto mb-3 text-4xl" />

          <h2 className="text-2xl font-black">סיום הזמנה</h2>

          <p className="text-white/80 text-sm mt-2">
            מלאו את הפרטים וההזמנה תישלח לוואטסאפ
          </p>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              שם מלא
            </label>

            <input
              required
              type="text"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                setErrors({ ...errors, name: "" });
              }}
              placeholder="ישראל ישראלי"
              className={`w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-200 focus:ring-[#D4AF37]"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name}</p>
            )}
          </div>
          {/* Phone Input */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              טלפון
            </label>

            <input
              required
              type="tel"
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                setErrors({ ...errors, phone: "" });
              }}
              placeholder="050-0000000"
              className={`w-full px-4 py-3 rounded-xl border transition-all focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-red-400 focus:ring-red-300"
                  : "border-gray-200 focus:ring-[#D4AF37]"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
            )}
          </div>
          {/* Pickup Time Input */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">
              זמן איסוף משוער (אופציונלי)
            </label>

            <input
              type="text"
              value={formData.pickupTime}
              onChange={(e) =>
                setFormData({ ...formData, pickupTime: e.target.value })
              }
              placeholder="היום בערב / מחר בבוקר / לקראת 16:00"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xl rounded-xl shadow-lg transition-all"
          >
            שלח הזמנה בוואטסאפ
          </button>
        </form>
      </div>
    </div>
  );
}
export default CheckoutModal;
