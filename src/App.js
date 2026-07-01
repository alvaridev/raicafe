import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SplashScreen, FloatingBackground, Header, CategoryBar, MenuCard, Footer } from "./components";

const MENU = [
  {
    category: "بر پایه اسپرسو",
    items: [
      { id: 1, name: " ربوستا", color: "#6B3F1F", image: "/images/menu/1.webp" },
      { id: 2, name: "عربیکا", color: "#7B4F2F", image: "/images/menu/2.webp" },
      { id: 3, name: "رومانو", color: "#C4956A", image: "/images/menu/3.webp" },
      { id: 4, name: "امریکانو", color: "#D4A574", image: "/images/menu/4.webp" },
      { id: 5, name: " لانگ بلک", color: "#E8C49A", image: "/images/menu/5.webp" },
      { id: 6, name: "کاپوچینو", color: "#4A2C0A", image: "/images/menu/6.webp" },
      { id: 7, name: "لاته", color: "#6B3A1F", image: "/images/menu/7.webp" },
      { id: 8, name: "کارامل ماکیاتو و موکا", color: "#8B5E3C", image: "/images/menu/8.webp" },
      { id: 9, name: "فلت وایت", color: "#4A2C0A", image: "/images/menu/9.webp" },
      { id: 10, name: " کورتادو", color: "#A0714F", image: "/images/menu/10.webp" },
    ],
  },
  {
    category: "قهوه دمی",
    items: [
      { id: 85, name: "کمکس", color: "#7A431D", image: "/images/menu/85.webp" },
      { id: 86, name: " ایروپرس", color: "#8C5835", image: "/images/menu/86.webp" },
      { id: 87, name: "V60", color: "#5C3820", image: "/images/menu/87.webp" },
      { id: 88, name: "فرنچ پرس ", color: "#4E2B15", image: "/images/menu/88.webp" },
      { id: 89, name: "ترک", color: "#6D351A", image: "/images/menu/89.webp" }
    ],
  },
  {
    category: "قهوه سرد",
    items: [
      { id: 15, name: "آیسد لاته فندقی", color: "#2D4A6B", image: "/images/menu/15.webp" },
      { id: 16, name: "آیسد لاته", color: "#5B8DB8", image: "/images/menu/16.webp" },
      { id: 17, name: "آیسد آمریکانو", color: "#2D4A6B", image: "/images/menu/17.webp" },
      { id: 18, name: "آیس موکا", color: "#1A3550", image: "/images/menu/18.webp" },
      { id: 99, name: "آیسد لمون", color: "#1A3550", image: "/images/menu/18.webp" },
      { id: 19, name: "آیسد نوتلا", color: "#1A3550", image: "/images/menu/19.webp" },
      { id: 100, name: "آیسد کارامل ماکیاتو", color: "#5B8DB8", image: "/images/menu/100.webp" },
      { id: 21, name: " آفوگاتو", color: "#4A7A9B", image: "/images/menu/21.webp" },
    ],
  },
  {
    category: "نوشیدنی گرم",
    items: [
      { id: 23, name: "هات چاکلت", color: "#5C3317", image: "/images/menu/23.webp" },
      { id: 24, name: " هات نوتلا", color: "#5D7A3E", image: "/images/menu/24.webp" },
      { id: 25, name: " شیر شکلات", color: "#FFF8E7", image: "/images/menu/25.webp" },
      { id: 26, name: " ماسالا", color: "#B87333", image: "/images/menu/26.webp" },
      { id: 27, name: "شیر عسل", color: "#C8902A", image: "/images/menu/27.webp" },
      { id: 28, name: " نسکافه", color: "#D4AF37", image: "/images/menu/28.webp" },
      { id: 29, name: "چای دارچین", color: "#4CAF50", image: "/images/menu/29.webp" },
      { id: 30, name: "چای سبز ", color: "#7CB342", image: "/images/menu/30.webp" },
      { id: 31, name: "چای سیاه", color: "#C45C26", image: "/images/menu/31.webp" },
      { id: 32, name: "چای هلو", color: "#5C3317", image: "/images/menu/32.webp" },
      { id: 33, name: "  دمنوش کلاسیک ", color: "#C8902A", image: "/images/menu/33.webp" },
    ],
  },
  {
    category: "آبمیوه طبیعی",
    items: [
      { id: 35, name: "آبمیوه سیب  ", color: "#FF8C00", image: "/images/menu/35.webp" },
      { id: 36, name: " آبمیوه پرتقال", color: "#DC143C", image: "/images/menu/36.webp" },
      { id: 37, name: " آبمیوه روز", color: "#4CAF50", image: "/images/menu/37.webp" },
      { id: 38, name: "  لیموناد", color: "#FF6600", image: "/images/menu/38.webp" },
      { id: 39, name: "  موهیتو", color: "#8DB600", image: "/images/menu/39.webp" },
      { id: 40, name: " بلو موهیتو", color: "#9ACD32", image: "/images/menu/40.webp" },
      { id: 41, name: " رد موهیتو", color: "#3CB371", image: "/images/menu/41.webp" },
      { id: 42, name: " بلو اوشن", color: "#DC143C", image: "/images/menu/42.webp" },
      { id: 43, name: " بلک فروت", color: "#FFB347", image: "/images/menu/43.webp" },
      { id: 44, name: " گرانادین", color: "#FF8C00", image: "/images/menu/44.webp" },
      { id: 45, name: "  جینجر لمن", color: "#FF6B8A", image: "/images/menu/45.webp" },
      { id: 46, name: "  مارگاریتا", color: "#E8C49A", image: "/images/menu/46.webp" },
    ],
  },
  {
    category: "شیک",
    items: [
      { id: 48, name: "  شیک شکلات", color: "#F3E5AB", image: "/images/menu/48.webp" },
      { id: 49, name: "  شیک نوتلا", color: "#7B3F00", image: "/images/menu/49.webp" },
      { id: 50, name: "  شیک نسکافه", color: "#FC5A8D", image: "/images/menu/50.webp" },
      { id: 51, name: "  شیک اسپرسو", color: "#C68642", image: "/images/menu/51.webp" },
      { id: 52, name: " شیک بیسکویت", color: "#7B3F00", image: "/images/menu/52.webp" },
      { id: 53, name: "  شیک توت فرنگی", color: "#C68642", image: "/images/menu/53.webp" },
      { id: 54, name: "  شیک وانیل", color: "#F3E5AB", image: "/images/menu/54.webp" }
    ],
  },
  {
    category: "کیک",
    items: [
      { id: 55, name: " کیک شکلات  ", color: "#4A2C0A", image: "/images/menu/55.webp" },
      { id: 56, name: "  کیک بستنی", color: "#FFF8E7", image: "/images/menu/56.webp" },
      { id: 57, name: "  کیک روز", color: "#C68642", image: "/images/menu/57.webp" }
    ],
  },
  {
    category: "خوراک یا غذا",
    items: [
      { id: 58, name: " سیب زمینی ساده", color: "#DEB887", image: "/images/menu/58.webp" },
      { id: 59, name: "  سیب و پنیر ", color: "#DAA520", image: "/images/menu/59.webp" },
      { id: 60, name: "    سیب زمینی و سس قارچ", color: "#6B8E23", image: "/images/menu/60.webp" },
      { id: 61, name: " سیب زمینی و سس چدار", color: "#4CAF50", image: "/images/menu/61.webp" },
      { id: 62, name: "   هات چیپس", color: "#DAA520", image: "/images/menu/62.webp" },
      { id: 63, name: "    سالاد فصل ", color: "#DEB887", image: "/images/menu/63.webp" },
      { id: 64, name: " سالاد سزار", color: "#FFF8E7", image: "/images/menu/64.webp" },
      { id: 65, name: " سالاد ری", color: "#6B8E23", image: "/images/menu/65.webp" },
      { id: 66, name: " پاستا الفردو", color: "#8B7355", image: "/images/menu/66.webp" },
      { id: 67, name: " پاستا ارابیتا", color: "#DAA520", image: "/images/menu/67.webp" },
      { id: 68, name: "  ری پاستا", color: "#8B7355", image: "/images/menu/68.webp" },
      { id: 69, name: " چیز  برگر", color: "#8B7355", image: "/images/menu/69.webp" },
      { id: 70, name: " کلاسیک برگر", color: "#DC143C", image: "/images/menu/70.webp" },
      { id: 71, name: " برگر با سس قارچ", color: "#DAA520", image: "/images/menu/71.webp" },
      { id: 72, name: "  برگر ذغالی", color: "#DEB887", image: "/images/menu/72.webp" },
      { id: 73, name: "  چیکن برگر ", color: "#FFF8E7", image: "/images/menu/73.webp" },
      { id: 74, name: "  دیپ چدار برگر ", color: "#8B7355", image: "/images/menu/74.webp" },
      { id: 75, name: " فیله سوخاری", color: "#DEB887", image: "/images/menu/75.webp" },
      { id: 76, name: "پنینی مرغ و قارچ ", color: "#6B8E23", image: "/images/menu/76.webp" },
      { id: 77, name: "پنینی پپرونی ", color: "#5D8A4E", image: "/images/menu/77.webp" },
      { id: 78, name: "  ساندویچ چیکن ", color: "#DEB887", image: "/images/menu/78.webp" }
    ],
  },
  {
    category: "صبحانه",
    items: [
      { id: 79, name: "  نیمرو ایرانی", color: "#DAA520", image: "/images/menu/79.webp" },
      { id: 80, name: "املت  ", color: "#DC143C", image: "/images/menu/80.webp" },
      { id: 81, name: "   سوسیس تخم مرغ", color: "#DAA520", image: "/images/menu/81.webp" },
      { id: 82, name: "   اگ ساندویچ ", color: "#D2691E", image: "/images/menu/82.webp" },
      { id: 83, name: "   امریکایی ", color: "#F4A460", image: "/images/menu/83.webp" },
      { id: 84, name: "    انگلیسی ", color: "#D2691E", image: "/images/menu/84.webp" }
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
          <div className="relative z-10 max-w-[480px] mx-auto min-h-screen flex flex-col">
            <div className="sticky top-0 z-30 bg-white/40 backdrop-blur-md border-b border-[#C5E8FF]/60">
              <Header />
              <CategoryBar
                categories={CATEGORIES}
                active={activeCategory}
                onSelect={setActiveCategory}
              />
            </div>
            <main className="px-4 pb-8 pt-2 flex-grow">
              <AnimatePresence mode="wait">
                <div key={activeCategory}>
                  {currentItems.map((item, i) => (
                    <MenuCard key={item.id} item={item} index={i} />
                  ))}
                </div>
              </AnimatePresence>
            </main>
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
