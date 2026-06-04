import { useEffect, useRef } from 'react';
import { UserPlus, Store, Search, Megaphone, Bot, Banknote } from 'lucide-react';

const steps = [
  { icon: UserPlus, step: '01', title: '註冊電商平台賣家帳號', desc: '協助您在 Amazon、eBay 等主流平台完成賣家帳號申請與驗證。' },
  { icon: Store, step: '02', title: '開設店鋪完成', desc: '專人協助完成店鋪設定、品牌形象建立及基本資料填寫。' },
  { icon: Search, step: '03', title: '專人選品銷售', desc: '市場調查團隊依銷量與毛利率精選商品，上架至您的店鋪。' },
  { icon: Megaphone, step: '04', title: '廣告引流', desc: '精準廣告投放，搭配平台自有客源，快速累積訂單量。' },
  { icon: Bot, step: '05', title: 'AI 系統處理訂單', desc: 'AI 智能系統自動化處理訂單，雲倉即時備貨出貨，全程無需您介入。' },
  { icon: Banknote, step: '06', title: '收益入帳', desc: '平台結算後收益直接入帳，透明清晰，按時撥款。' },
];

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach((child) => child.classList.add('visible'));
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 morandi-section-alt"
    >
      <div className="container">
        {/* 標題 */}
        <div className="text-center mb-16">
          <div className="section-label mb-3 reveal">合作流程</div>
          <h2 className="section-title text-3xl lg:text-4xl mb-4 reveal">
            六步驟，輕鬆開啟副業
          </h2>
          <p className="section-subtitle max-w-xl mx-auto reveal">
            從零開始到收益入帳，全程專人陪伴，簡單明瞭的合作流程讓您無後顧之憂。
          </p>
        </div>

        {/* 時間軸 */}
        <div className="relative">
          {/* 連接線（桌面版） */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 mx-16"
            style={{ background: 'linear-gradient(90deg, oklch(0.72 0.09 30 / 0.2), oklch(0.72 0.09 30 / 0.6), oklch(0.72 0.09 30 / 0.2))' }}
          />

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {steps.map((step, i) => {
              const isFinal = i === 5;
              return (
                <div
                  key={step.step}
                  className="process-step relative flex flex-col items-center text-center reveal"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* 脈衝光環（hover 觸發） */}
                  <div
                    className="process-pulse absolute top-0 left-1/2 w-20 h-20 rounded-full"
                    style={{
                      transform: 'translate(-50%, 0)',
                      background: isFinal
                        ? 'oklch(0.72 0.09 30 / 0.15)'
                        : 'oklch(0.72 0.09 30 / 0.10)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease, transform 0.3s ease',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* 圖示圓圈 */}
                  <div
                    className="process-circle relative w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg z-10"
                    style={{
                      background: isFinal
                        ? 'linear-gradient(135deg, oklch(0.72 0.09 30), oklch(0.68 0.10 20))'
                        : 'white',
                      border: `2px solid ${isFinal ? 'transparent' : 'oklch(0.88 0.02 75)'}`,
                      transition: 'transform 0.30s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.30s cubic-bezier(0.23, 1, 0.32, 1)',
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = 'scale(1.12)';
                      el.style.boxShadow = isFinal
                        ? '0 8px 28px oklch(0.72 0.09 30 / 0.40)'
                        : '0 8px 24px oklch(0.72 0.09 30 / 0.22)';
                      // 顯示脈衝環
                      const pulse = el.parentElement?.querySelector('.process-pulse') as HTMLDivElement;
                      if (pulse) {
                        pulse.style.opacity = '1';
                        pulse.style.transform = 'translate(-50%, 0) scale(1.35)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = 'scale(1)';
                      el.style.boxShadow = '';
                      const pulse = el.parentElement?.querySelector('.process-pulse') as HTMLDivElement;
                      if (pulse) {
                        pulse.style.opacity = '0';
                        pulse.style.transform = 'translate(-50%, 0) scale(1)';
                      }
                    }}
                  >
                    <step.icon
                      size={26}
                      style={{
                        color: isFinal ? 'white' : 'oklch(0.72 0.09 30)',
                        transition: 'transform 0.30s cubic-bezier(0.23, 1, 0.32, 1)',
                      }}
                    />
                    {/* 步驟編號 */}
                    <div
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: 'oklch(0.72 0.09 30)',
                        color: 'white',
                        fontFamily: "'Noto Sans TC', sans-serif",
                      }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <h3
                    className="process-title text-sm font-bold mb-2 leading-snug"
                    style={{
                      fontFamily: "'Noto Serif TC', serif",
                      color: 'oklch(0.25 0.02 55)',
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'oklch(0.55 0.03 55)' }}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div
          className="mt-16 rounded-2xl p-8 lg:p-10 text-center reveal"
          style={{
            background: 'linear-gradient(135deg, oklch(0.22 0.03 55) 0%, oklch(0.20 0.04 230) 100%)',
          }}
        >
          <h3
            className="text-2xl lg:text-3xl font-bold mb-3 text-white"
            style={{ fontFamily: "'Noto Serif TC', serif" }}
          >
            準備好開始了嗎？
          </h3>
          <p className="mb-6" style={{ color: 'oklch(0.78 0.03 75)' }}>
            立即聯繫我們，專人為您說明合作細節，免費諮詢無任何壓力。
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            免費諮詢合作
          </button>
        </div>
      </div>
    </section>
  );
}
