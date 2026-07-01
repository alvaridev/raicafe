import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import logoImg from "./logo.png";

import {
  Coffee,
  Flame,
  Leaf,
  Droplets,
  Snowflake,
  Utensils,
  CupSoda,
  GlassWater,
  Cake,
  Wheat,
  Thermometer,
  Sandwich,
  Croissant,
  IceCream,
  Pizza,
} from "lucide-react";

const CATEGORY_ICONS = {
  "صبحانه": Wheat,
  "بر پایه اسپرسو": Coffee,
  "قهوه دمی": CupSoda,
  "قهوه سرد": Thermometer,
  "نوشیدنی گرم": Flame,
  "چای و دمنوش": Leaf,
  "آبمیوه طبیعی": Droplets,
  "نوشیدنی سرد": Snowflake,
  "شیک": GlassWater,
  "کیک": Cake,
  "خوراک یا غذا": Utensils,
};

const FALLING_ITEMS = [
  { id: 0, type: "icon", Icon: Coffee, x: "8%", size: 32, dur: 15, delay: 0, angle: -25 },
  { id: 1, type: "icon", Icon: Sandwich, x: "22%", size: 28, dur: 18, delay: 2, angle: 20 },
  { id: 2, type: "bean", x: "40%", size: 24, dur: 14, delay: 1, angle: -15 },
  { id: 3, type: "icon", Icon: Croissant, x: "58%", size: 30, dur: 16, delay: 3.5, angle: 30 },
  { id: 4, type: "icon", Icon: CupSoda, x: "72%", size: 26, dur: 13, delay: 0.5, angle: -20 },
  { id: 5, type: "bean", x: "85%", size: 20, dur: 17, delay: 2.5, angle: 10 },
  { id: 6, type: "icon", Icon: IceCream, x: "15%", size: 28, dur: 19, delay: 4, angle: -35 },
  { id: 7, type: "icon", Icon: Cake, x: "65%", size: 24, dur: 12, delay: 1.5, angle: 25 },
  { id: 8, type: "icon", Icon: Wheat, x: "92%", size: 26, dur: 15, delay: 5, angle: -15 },
  { id: 9, type: "icon", Icon: Pizza, x: "30%", size: 32, dur: 20, delay: 6, angle: 15 },
  { id: 10, type: "bean", x: "48%", size: 22, dur: 14, delay: 4.5, angle: -25 },
];

function CoffeeBeanSVG({ size = 24, color = "#AEE2FF", strokeWidth = 1.5, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ display: "block" }}
    >
      <ellipse cx="12" cy="12" rx="8" ry="11" stroke={color} strokeWidth={strokeWidth} fill="none" />
      <path d="M12 1 Q16 6 16 12 Q16 18 12 23" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" />
      <path d="M12 1 Q8 6 8 12 Q8 18 12 23" stroke={color} strokeWidth={strokeWidth} fill="none" strokeLinecap="round" />
    </svg>
  );
}

function CafeLogo({ size = 102 }) {
  return (
    <img 
      src={logoImg} 
      alt="Logo" 
      style={{ width: size, height: size, objectFit: "contain" }} 
      className="rounded-full"
    />
  );
}

export function SplashScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.div
        className="flex flex-col items-center gap-5"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={[
          { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
        ]}
      >
        <motion.div
          animate={{
            scale: [1, 1.08, 0.96, 1.12, 0.98, 1.05, 1],
            filter: [
              "drop-shadow(0 0 8px #AEE2FF88)",
              "drop-shadow(0 0 22px #AEE2FFcc)",
              "drop-shadow(0 0 8px #AEE2FF88)",
              "drop-shadow(0 0 28px #AEE2FFee)",
              "drop-shadow(0 0 10px #AEE2FF88)",
              "drop-shadow(0 0 20px #AEE2FFcc)",
              "drop-shadow(0 0 0px #AEE2FF00)",
            ],
          }}
          transition={{ duration: 2.0, ease: "easeInOut", times: [0, 0.2, 0.35, 0.5, 0.65, 0.8, 1] }}
        >
          <CafeLogo size={320} />
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="font-playfair text-3xl font-semibold text-[#1a1a2e] tracking-wide">
            Café Rai
          </p>
          <p className="font-vazirmatn text-sm text-[#8899aa] mt-1">
            لحظه‌ای از آرامش در هر فنجان
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function FloatingBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 35, height: '100vh', width: '100vw' }} 
      aria-hidden="true"
    >
      {FALLING_ITEMS.map((item) => {
        const isBean = item.type === "bean";
        const Icon = item.Icon;

        return (
          <motion.div
            key={item.id}
            className="absolute"
            style={{ 
              left: item.x, 
              top: -100, 
              opacity: 0.35, 
              color: "#71C9FF" 
            }}
            animate={{
              y: [0, window.innerHeight + 200], 
              x: [0, Math.sin(item.angle) * 30, -20, 0], 
              rotate: [0, 360],
            }}
            transition={{
              duration: item.dur,
              delay: item.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {isBean ? (
              <CoffeeBeanSVG size={item.size} color="#71C9FF" strokeWidth={2.2} />
            ) : (
              <Icon size={item.size} strokeWidth={2.2} color="#71C9FF" />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

export function Header() {
  return (
    <header className="pt-6 pb-4 px-5 flex flex-col items-center bg-transparent">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
      >
        <CafeLogo size={200} />
      </motion.div>
      <motion.div
        className="text-center mt-3"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <h1 className="font-playfair text-2xl font-semibold text-[#1a1a2e] tracking-wide">
          Café Rai
        </h1>
        <p className="font-vazirmatn text-xs text-[#8899aa] mt-0.5 tracking-wide">
          منوی کافه
        </p>
      </motion.div>
    </header>
  );
}

export function CategoryBar({ categories, active, onSelect }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const bar = scrollRef.current;
    if (!bar) return;
    const activeEl = bar.querySelector("[data-active='true']");
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  }, [active]);

  return (
    <div className="w-full">
      <div
        ref={scrollRef}
        className="flex flex-row gap-1 overflow-x-auto scrollbar-hide px-3 py-2"
        dir="rtl"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {categories.map((cat) => {
          const Icon = CATEGORY_ICONS[cat] || Coffee;
          const isActive = cat === active;
          return (
            <button
              key={cat}
              data-active={isActive}
              onClick={() => onSelect(cat)}
              className="relative flex flex-col items-center gap-1 px-3 py-2 rounded-xl shrink-0 min-w-[64px] min-h-[56px] focus:outline-none"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {isActive && (
                <motion.div
                  layoutId="pill"
                  className="absolute inset-0 rounded-xl bg-[#AEE2FF]/60"
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                />
              )}
              <span className="relative z-10 flex flex-col items-center gap-1">
                <Icon
                  size={18}
                  strokeWidth={1.8}
                  className={isActive ? "text-[#1a6b9e]" : "text-[#8899aa]"}
                />
                <span
                  className={`font-vazirmatn text-[10px] leading-tight text-center whitespace-nowrap ${
                    isActive ? "text-[#1a4a6b] font-semibold" : "text-[#8899aa]"
                  }`}
                >
                  {cat}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function MenuCard({ item, index }) {
  const imagePath = item.image ? process.env.PUBLIC_URL + item.image : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        duration: 0.35,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileTap={{ scale: 0.97, transition: { type: "spring", stiffness: 400, damping: 25 } }}
      className="bg-card rounded-2xl border border-[#C5E8FF]/70 shadow-sm mb-3 overflow-hidden cursor-pointer active:shadow-none"
    >
      <div className="flex flex-row-reverse items-stretch">
        <div
          className="w-24 h-24 shrink-0 flex items-center justify-center overflow-hidden relative"
          style={{ background: `${item.color}18` }}
        >
          {imagePath ? (
            <img 
              src={imagePath} 
              alt={item.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          
          {/* Fallback box if image is missing or errors out */}
          <div
            className="absolute inset-0 items-center justify-center"
            style={{ 
              background: `${item.color}30`, 
              display: imagePath ? 'none' : 'flex' 
            }}
          >
            <div
              className="w-9 h-9 rounded-lg"
              style={{ background: item.color, opacity: 0.85 }}
            />
          </div>
        </div>

        <div className="flex-1 p-4 flex flex-col justify-center" dir="rtl">
          <h3 className="font-vazirmatn font-semibold text-[15px] text-[#1a1a2e] leading-snug">
            {item.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto py-8 px-5 border-t border-[#AEE2FF] shadow-[0_-4px_10px_rgba(174,226,255,0.3)]">
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="font-vazirmatn text-sm text-[#1a4a6b] font-semibold">
          طراحی و توسعه توسط محمدرضا الواری
        </p>
        <p className="font-vazirmatn text-[11px] text-[#8899aa]">
         تمامی حقوق برای کافه ری محفوظ است
        </p>
      </div>
    </footer>
  );
}
