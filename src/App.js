import { useState } from "react";
    import { AnimatePresence } from "framer-motion"; // Ensure AnimatePresence is imported here
    import { SplashScreen, FloatingBackground, Header, CategoryBar, MenuCard, Footer  } from "./components";


const MENU = [
  {
    category: "بر پایه اسپرسو",
    items: [
      { id: 1, name: "اسپرسو", desc: "شات خالص قهوه با کرمه طلایی", price: "۳۵,۰۰۰ تومان", color: "#6B3F1F" },
      { id: 2, name: "دوپیو", desc: "دو شات اسپرسو برای انرژی بیشتر", price: "۴۵,۰۰۰ تومان", color: "#7B4F2F" },
      { id: 3, name: "کاپوچینو", desc: "اسپرسو با فوم شیر مخملی", price: "۵۵,۰۰۰ تومان", color: "#C4956A" },
      { id: 4, name: "لاته", desc: "اسپرسو با شیر بخار داده شده و فوم نرم", price: "۶۰,۰۰۰ تومان", color: "#D4A574" },
      { id: 5, name: "فلت وایت", desc: "اسپرسو با شیر ریز بخار مخصوص", price: "۶۵,۰۰۰ تومان", color: "#E8C49A" },
    ],
  },
  {
    category: "قهوه دمی",
    items: [
      { id: 6, name: "آمریکانو", desc: "اسپرسو رقیق‌شده با آب داغ", price: "۴۵,۰۰۰ تومان", color: "#4A2C0A" },
      { id: 7, name: "فرنچ پرس", desc: "دم‌آور کلاسیک با طعم کامل", price: "۵۰,۰۰۰ تومان", color: "#6B3A1F" },
      { id: 8, name: "کمکس", desc: "قهوه تمیز با فیلتر کاغذی ویژه", price: "۵۵,۰۰۰ تومان", color: "#8B5E3C" },
      { id: 9, name: "ایروپرس", desc: "دم‌آوری سریع با فشار هوا", price: "۵۰,۰۰۰ تومان", color: "#A0714F" },
    ],
  },
  {
    category: "قهوه سرد",
    items: [
      { id: 10, name: "콜드 برو", desc: "دم سرد ۱۲ ساعته با طعمی ملایم", price: "۶۵,۰۰۰ تومان", color: "#2D4A6B" },
      { id: 11, name: "نیترو کلد برو", desc: "کلد برو با نیتروژن، خامه‌ای و مخملی", price: "۷۵,۰۰۰ تومان", color: "#1A3550" },
      { id: 12, name: "آیس لاته", desc: "لاته سرد روی یخ با شیر تازه", price: "۶۵,۰۰۰ تومان", color: "#5B8DB8" },
      { id: 13, name: "فراپه", desc: "قهوه مخلوط با یخ و خامه", price: "۷۰,۰۰۰ تومان", color: "#4A7A9B" },
    ],
  },
  {
    category: "نوشیدنی گرم",
    items: [
      { id: 14, name: "هات چاکلت", desc: "شکلات تلخ با شیر گرم و خامه", price: "۵۵,۰۰۰ تومان", color: "#5C3317" },
      { id: 15, name: "ماچا لاته", desc: "پودر ماچا با شیر بخار داده شده", price: "۶۵,۰۰۰ تومان", color: "#5D7A3E" },
      { id: 16, name: "شیر عسل", desc: "شیر گرم با عسل طبیعی و دارچین", price: "۴۵,۰۰۰ تومان", color: "#C8902A" },
      { id: 17, name: "موکا", desc: "اسپرسو با شکلات و شیر بخار", price: "۶۵,۰۰۰ تومان", color: "#6B3A1F" },
    ],
  },
  {
    category: "چای و دمنوش",
    items: [
      { id: 18, name: "چای ایرانی", desc: "چای سنتی با نبات و هل", price: "۲۵,۰۰۰ تومان", color: "#C45C26" },
      { id: 19, name: "ماسالا چای", desc: "چای هندی با ادویه‌های معطر", price: "۴۵,۰۰۰ تومان", color: "#B87333" },
      { id: 20, name: "دمنوش بابونه", desc: "آرامش‌بخش و خوشبو", price: "۳۵,۰۰۰ تومان", color: "#D4AF37" },
      { id: 21, name: "دمنوش نعنا", desc: "تازه و مطبوع با نعنا کوهی", price: "۳۵,۰۰۰ تومان", color: "#4CAF50" },
      { id: 22, name: "چای سبز", desc: "چای سبز اصیل با لیمو ترش", price: "۴۰,۰۰۰ تومان", color: "#7CB342" },
    ],
  },
  {
    category: "آبمیوه طبیعی",
    items: [
      { id: 23, name: "آب پرتقال تازه", desc: "پرتقال محلی تازه‌فشرده", price: "۵۵,۰۰۰ تومان", color: "#FF8C00" },
      { id: 24, name: "آب هندوانه", desc: "هندوانه شیرین فصل با نعنا", price: "۵۰,۰۰۰ تومان", color: "#DC143C" },
      { id: 25, name: "آب سیب و زنجبیل", desc: "ترکیب شاداب با زنجبیل تازه", price: "۶۰,۰۰۰ تومان", color: "#8DB600" },
      { id: 26, name: "آب هویج و لیمو", desc: "انرژی‌زا و سرشار از ویتامین", price: "۵۵,۰۰۰ تومان", color: "#FF6600" },
    ],
  },
  {
    category: "نوشیدنی سرد",
    items: [
      { id: 27, name: "لیمو نعنا", desc: "لیموناد تازه با نعنا و یخ خرد", price: "۴۵,۰۰۰ تومان", color: "#9ACD32" },
      { id: 28, name: "موهیتو بدون الکل", desc: "نوشیدنی گرمسیری با نعنا و لیمو", price: "۵۵,۰۰۰ تومان", color: "#3CB371" },
      { id: 29, name: "آیس تی هلو", desc: "چای سرد با طعم هلوی طبیعی", price: "۵۰,۰۰۰ تومان", color: "#FFB347" },
      { id: 30, name: "سودا توت فرنگی", desc: "نوشابه گازدار با توت فرنگی تازه", price: "۵۵,۰۰۰ تومان", color: "#FF6B8A" },
    ],
  },
  {
    category: "شیک",
    items: [
      { id: 31, name: "شیک وانیل", desc: "شیک کلاسیک خامه‌ای با وانیل اصل", price: "۷۰,۰۰۰ تومان", color: "#F3E5AB" },
      { id: 32, name: "شیک شکلات", desc: "شکلات تلخ مخلوط با شیر و بستنی", price: "۷۵,۰۰۰ تومان", color: "#7B3F00" },
      { id: 33, name: "شیک توت فرنگی", desc: "توت فرنگی تازه با بستنی وانیل", price: "۷۵,۰۰۰ تومان", color: "#FC5A8D" },
      { id: 34, name: "شیک کارامل", desc: "کارامل دست‌ساز با شیر کامل", price: "۷۵,۰۰۰ تومان", color: "#C68642" },
    ],
  },
  {
    category: "کیک",
    items: [
      { id: 35, name: "کیک تیرامیسو", desc: "کیک ایتالیایی با قهوه و ماسکارپونه", price: "۸۵,۰۰۰ تومان", color: "#C4956A" },
      { id: 36, name: "چیز کیک", desc: "چیزکیک نیویورکی با سس توت فرنگی", price: "۹۰,۰۰۰ تومان", color: "#FFF8E7" },
      { id: 37, name: "براونی شکلاتی", desc: "براونی گرم با بستنی وانیل", price: "۷۵,۰۰۰ تومان", color: "#4A2C0A" },
      { id: 38, name: "مافین بلوبری", desc: "مافین تازه‌پز با بلوبری آمریکایی", price: "۶۵,۰۰۰ تومان", color: "#4B0082" },
    ],
  },
  {
    category: "خوراک یا غذا",
    items: [
      { id: 39, name: "سندویچ کلوب", desc: "سه لایه مرغ، بیکن و سبزیجات تازه", price: "۱۲۰,۰۰۰ تومان", color: "#DEB887" },
      { id: 40, name: "تُست آووکادو", desc: "نان تُست با آووکادو و تخم‌مرغ آب‌پز", price: "۱۱۰,۰۰۰ تومان", color: "#5D8A4E" },
      { id: 41, name: "پنینی قارچ", desc: "نان پنینی گرم با قارچ و پنیر", price: "۱۰۵,۰۰۰ تومان", color: "#8B7355" },
      { id: 42, name: "سالاد سزار", desc: "کاهو رومی با سس سزار خانگی", price: "۹۵,۰۰۰ تومان", color: "#6B8E23" },
    ],
  },
  {
    category: "صبحانه",
    items: [
      { id: 43, name: "صبحانه انگلیسی", desc: "تخم‌مرغ، سوسیس، لوبیا و نان تست", price: "۱۵۰,۰۰۰ تومان", color: "#DAA520" },
      { id: 44, name: "پنکیک با شهد افرا", desc: "پنکیک ترد با کره و شهد طبیعی", price: "۱۲۰,۰۰۰ تومان", color: "#D2691E" },
      { id: 45, name: "اومت سبزیجات", desc: "اومت تازه با سبزیجات فصلی", price: "۱۱۰,۰۰۰ تومان", color: "#90EE90" },
      { id: 46, name: "گرانولا با ماست", desc: "گرانولای خانگی با ماست یونانی و میوه", price: "۹۵,۰۰۰ تومان", color: "#F4A460" },
    ],
  },
];

const CATEGORIES = MENU.map((m) => m.category);

export default function App() {
  const [splash, setSplash] = useState(true);
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);

  const currentItems = MENU.find((m) => m.category === activeCategory)?.items || [];

  return (
    <div className="min-h-screen bg-white/40" dir="rtl">
      <AnimatePresence>
        {splash && <SplashScreen onDone={() => setSplash(false)} />}
      </AnimatePresence>

      {!splash && (
        <>
          <FloatingBackground />
          {/* CHANGE: Added flex flex-col and min-h-screen to push footer down */}
          <div className="relative z-10 max-w-[480px] mx-auto min-h-screen flex flex-col">
            <Header />
            <CategoryBar
              categories={CATEGORIES}
              active={activeCategory}
              onSelect={setActiveCategory}
            />
            <main className="px-4 pb-8 pt-2 flex-grow">
              <AnimatePresence mode="wait">
                <div key={activeCategory}>
                  {currentItems.map((item, i) => (
                    <MenuCard key={item.id} item={item} index={i} />
                  ))}
                </div>
              </AnimatePresence>
            </main>
            {/* ADD: Footer goes here */}
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
