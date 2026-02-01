import useCart from "../hooks/useCart";
import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
export default function Form() {
  const egyptianMobileRegex = /^01(0|1|2|5)[0-9]{8}$/;
  const [message, setMessage] = useState({ content: "Error", color: "red" });
  const [alert, setAlert] = useState(false);
  const phone = `201286113602`;

  const { cartItems, setCartItems, subTotal } = useCart();
  const [formState, setFormState] = useState({
    nameInput: "",
    phoneInput: "",
    addressInput: "",
    textarea: "",
  });

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();

    setAlert(true);
    if (cartItems.length < 1) {
      setMessage({
        ...message,
        content: "العربة فارغة، أضف بعض الأطعمة ثم أكمل.",
        color: "#d24e4e",
      });
    } else if (!egyptianMobileRegex.test(formState.phoneInput)) {
      setMessage({
        ...message,
        content: `من فضلك أدخل رقمًا صحيحًا يبدأ بـ 01 ويتكون من 11 رقم. 
        مثال: 01286113602`,
        color: "#d24e4e",
      });
    } else {
      setMessage({
        ...message,
        content:
          "تمت العملية بنجاح، سيتم تحويلك لمحادثة واتساب لتأكيد الطلب ومتابعة حالة التوصيل.",
        color: "green",
      });

      let order = "";
      cartItems.forEach((item) => {
        const line = `\u202B• *${item.count}* ${item.name}: ${
          item.price * item.count
        } ج\u202C`;
        order += line + "\n";
      });
      const msg = `\u202B *الاسم:* ${formState.nameInput}\n *الرقم:* ${formState.phoneInput}\n *العنوان:* ${formState.addressInput}\n *الطلب:*\n${order}\n *الإجمالي:* ${subTotal} ج\n *ملاحظات هامة:* ${formState.textarea} \u202C`;
      setTimeout(() => {
        window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
        setCartItems([]);
      }, 5000);
    }
  }

  return (
    <div onClick={() => setAlert(false)}>
      <ErrorMessage
        message={message.content}
        messageColor={message.color}
        on={alert}
      />
      <form onSubmit={handleSubmit}>
        <input
          name="nameInput"
          type="text"
          placeholder="الاسم"
          className="inputName"
          required
          value={formState.nameInput}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          name="phoneInput"
          dir="rtl"
          type="tel"
          placeholder="رقم الهاتف"
          id="phone"
          className="inputNumber"
          required
          value={formState.phoneInput}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          name="addressInput"
          type="text"
          placeholder="العنوان"
          className="inputAddress"
          required
          value={formState.addressInput}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <textarea
          name="textarea"
          className="comments"
          placeholder="أي ملاحظات تخص الطلب؟"
          value={formState.textarea}
          onChange={(e) => {
            handleChange(e);
          }}
        ></textarea>
        <button type="submit" className="check-out-btn">
          إرسال الطلب
        </button>
      </form>
    </div>
  );
}
