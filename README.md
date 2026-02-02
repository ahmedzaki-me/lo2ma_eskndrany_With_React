# 🛒 Lo2ma Eskndrany - E-commerce Website

مشروع متجر إلكتروني متكامل لمطعم "لقمة إسكندراني" تم بناؤه باستخدام **React.js**. الهدف الأساسي كان تقديم حل تقني سريع، مجاني بالكامل، وسهل الإدارة لصاحب المطعم.

## 🔗 روابط المشروع
- **المعاينة الحية (Live):** [https://lo2ma-eskndrany.netlify.app](https://lo2ma-eskndrany.netlify.app)
- **كود المشروع (Repo):** [ahmedzaki-me/lo2ma_eskndrany](https://github.com/ahmedzaki-me/lo2ma_eskndrany_With_React)

---

## 🚀 التقنيات المستخدمة (Tech Stack)
* **Frontend:** React.js (Vite)
* **Routing:** React Router DOM
* **Styling:** Native CSS (Modular approach)
* **Data Management:** AppSheet & Google Sheets
* **Deployment:** Netlify

## ✨ مميزات المشروع (Key Features)
* **Dynamic Menu:** يتم جلب البيانات والصور تلقائياً من Google Sheets.
* **Admin Dashboard:** لوحة تحكم سهلة عبر AppSheet تتيح لصاحب المطعم تعديل المنيو من موبايله.
* **Smart Cart:** سلة مشتريات ذكية تعتمد على الـ Local Storage لحفظ طلبات المستخدم.
* **WhatsApp Ordering:** تحويل سلة المشتريات إلى رسالة نصية منسقة تُرسل مباشرة لواتساب المطعم لإتمام الطلب.
* **Fully Responsive:** تصميم متوافق مع كافة أحجام الشاشات (Mobile, Tablet, Desktop).

## 💡 كيف يعمل النظام؟ (The Logic)
بدلاً من بناء Back-end معقد ومكلف، تم استخدام **AppSheet** كحلقة وصل بين الموقع و **Google Sheets**. 
عندما يقوم العميل بطلب الطعام، يقوم النظام بعمل معالجة للبيانات (Array processing) وتحويلها إلى رابط واتساب مباشر يحتوي على تفاصيل الفاتورة، مما يضمن وصول الطلب للمطعم في ثوانٍ وبدون تكاليف سيرفرات.

---

## 🛠️ تشغيل المشروع محلياً
```bash
# Clone the repository
git clone [https://github.com/ahmedzaki-me/lo2ma_eskndrany_With_React.git](https://github.com/ahmedzaki-me/lo2ma_eskndrany_With_React.git)

# Install dependencies
npm install

# Run the project
npm run dev
