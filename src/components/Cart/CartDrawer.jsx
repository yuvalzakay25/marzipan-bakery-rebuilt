import { useContext, useState } from "react";
import {
  FaTimes,
  FaTrash,
  FaPlus,
  FaMinus,
  FaShoppingBag,
  FaWhatsapp,
} from "react-icons/fa";
import { CartContext } from "../../context/CartContext.jsx";
import CheckoutModal from "../../components/CheckoutModal/CheckoutModal.jsx";

function CartDrawer() {
  // מצב שמנהל אם המודל פתוחה או סגורה,
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  // קבלת כל הפונקציות והנתונים שקשורים לסל מהקונטקסט
  const {
    isCartOpen,
    toggleCart,
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);

  // חישוב הסכום הכולל של הפריטים בסל
  const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.priceValue * item.quantity,
    0,
  );

  // פונקציה שמטפלת בלחיצה על כפתור התשלום, פשוט פותחת את המודל של התשלום
  function handleCheckoutClick() {
    setIsCheckoutOpen(true);
  }
  // פונקציה שמטפלת בסגירת המודל של התשלום, פשוט סוגרת את המודל
  function handleCloseCheckout() {
    setIsCheckoutOpen(false);
  }

  function handleOrderComplete() {
    setIsCheckoutOpen(false);
    toggleCart();
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={toggleCart}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          isCartOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Drawer */}
      <div
        dir="rtl"
        className={`fixed top-0 left-0 h-full w-full md:w-[450px] bg-white z-[101] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${
          isCartOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white text-[#2D211E]">
          <div className="flex items-center gap-3">
            <FaShoppingBag className="text-[#B91C1C]" />
            <h2 className="text-2xl font-bold">סל הקניות שלי</h2>
          </div>

          <button
            onClick={toggleCart}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaTimes size={22} />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4">
              <FaShoppingBag size={64} className="opacity-20" />
              <p className="text-xl font-medium">הסל שלך ריק עדיין...</p>
              <p className="text-sm">זה הזמן להוסיף קצת מתוק לחיים!</p>

              <button
                onClick={toggleCart}
                className="mt-4 px-6 py-2 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-xl hover:bg-[#D4AF37] hover:text-white transition-all"
              >
                חזרה לקטלוג
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#D4AF37]/30 transition-colors"
              >
                {/* Image */}
                <div className="w-24 h-24 bg-white rounded-xl overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  {/* Top Row */}
                  <div className="flex justify-between items-start gap-3">
                    <h3 className="font-bold text-gray-800 line-clamp-2">
                      {item.name}
                    </h3>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1 shrink-0"
                    >
                      <FaTrash size={16} />
                    </button>
                  </div>

                  {/* Bottom Row */}
                  <div className="flex justify-between items-end mt-2">
                    <div className="flex items-center gap-3 bg-white px-3 py-1 rounded-lg border border-gray-200 shadow-sm">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-[#B91C1C] transition-colors"
                      >
                        <FaMinus size={12} />
                      </button>

                      <span className="font-bold w-4 text-center text-[#2D211E]">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-[#B91C1C] transition-colors"
                      >
                        <FaPlus size={12} />
                      </button>
                    </div>

                    <div className="text-left">
                      <div className="text-xs text-gray-400">סה"כ:</div>
                      <div className="font-black text-[#B91C1C] text-lg">
                        ₪{item.priceValue * item.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-white ">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600 text-lg">סה"כ לתשלום:</span>
              <span className="text-3xl font-black text-[#B91C1C]">
                ₪{cartTotal}
              </span>
            </div>

            <button
              onClick={handleCheckoutClick}
              className="w-full py-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xl rounded-xl shadow-lg hover:shadow-green-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 mb-3"
            >
              <span>לתשלום בוואטסאפ</span>
              <FaWhatsapp size={22} />
            </button>

            <div className="flex justify-center">
              <button
                onClick={clearCart}
                className="text-gray-400 text-sm hover:text-red-500 transition-colors flex items-center gap-1 py-2 px-4 rounded-lg hover:bg-red-50"
              >
                <FaTrash size={12} />
                <span>רוקן את הסל</span>
              </button>
            </div>

            <p className="text-center text-gray-400 text-xs mt-2">
              ההזמנה תישלח ישירות לצוות המאפייה בוואטסאפ לטיפול מהיר
            </p>
          </div>
        )}
        {/* Checkout Modal */}
      </div>
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={handleCloseCheckout}
        cartItems={cartItems}
        cartTotal={cartTotal}
        onOrderComplete={handleOrderComplete}
      />
    </>
  );
}

export default CartDrawer;
