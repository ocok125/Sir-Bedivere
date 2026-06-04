import { useState, useEffect } from 'react';

const LOGO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474888570/5R8XCVnyqG6Tc3YNahkvMD/munan-logo-joyHVxvcutqu3jJN4mvo3x.webp';

export default function PageSplash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, oklch(0.96 0.02 75) 0%, oklch(0.93 0.03 20) 50%, oklch(0.94 0.02 230) 100%)',
        animation: 'splash-fade-out 2s ease-in-out forwards',
      }}
    >
      {/* LOGO 圖片 */}
      <img
        src={LOGO_URL}
        alt="木南國際貿易 Logo"
        className="mb-5"
        style={{
          width: '120px',
          height: '120px',
          objectFit: 'contain',
          filter: 'drop-shadow(0 4px 16px oklch(0.72 0.09 30 / 0.25))',
          animation: 'logo-entrance 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        }}
      />
      <div
        className="text-xl font-bold mb-1"
        style={{
          fontFamily: "'Noto Serif TC', serif",
          color: 'oklch(0.25 0.02 55)',
          animation: 'fade-up 0.5s 0.2s cubic-bezier(0.23, 1, 0.32, 1) both',
        }}
      >
        木南國際貿易有限公司
      </div>
      <div
        className="text-xs tracking-widest mb-8"
        style={{
          color: 'oklch(0.55 0.03 55)',
          animation: 'fade-up 0.5s 0.35s cubic-bezier(0.23, 1, 0.32, 1) both',
        }}
      >
        MUNAN TRADING CO., LTD.
      </div>
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{
              background: 'oklch(0.72 0.09 30)',
              animation: `bounce-dot 1.2s ease-in-out ${i * 0.18}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
