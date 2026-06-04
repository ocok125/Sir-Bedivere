import { useEffect, useRef } from 'react';
import { Search, Warehouse, Megaphone, Bot, ShieldOff, HeadphonesIcon } from 'lucide-react';

const SERVICES_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474888570/5R8XCVnyqG6Tc3YNahkvMD/services-warehouse-dQpw9gLDWFBgq52FVMWaW3.webp';

const services = [
  {
    icon: Search,
    title: '選品服務',
    desc: '專業市場調查部門依銷量及毛利率，精選每期最具潛力的熱銷商品，確保競爭優勢。',
  },
  {
    icon: Warehouse,
    title: '雲倉備貨',
    desc: '選定商品以現貨形式囤放至國外合作倉儲，採用雲倉模式，買家下單即時聯絡發貨。',
  },
  {
    icon: Megaphone,
    title: '廣告引流',
    desc: '精準投放廣告引流至您的店鋪，搭配平台自有龐大客源，大幅提升曝光與轉換率。',
  },
  {
    icon: Bot,
    title: 'AI 訂單處理',
    desc: '搭配 AI 智能系統自動化處理銷售訂單，減少人工操作，提升效率與準確性。',
  },
  {
    icon: ShieldOff,
    title: '零囤貨風險',
    desc: '您無需自行備貨或包裝出貨，所有庫存風險由我們的雲倉系統承擔，輕鬆無憂。',
  },
  {
    icon: HeadphonesIcon,
    title: '全程支援',
    desc: '從帳號申請、店鋪開設到日常運營，專人全程陪伴，週一至週五 09:00–18:00 服務。',
  },
];

export default function ServicesSection() {
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
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24"
      style={{ background: 'oklch(0.98 0.01 75)' }}
    >
      <div className="container">
        {/* 標題 */}
        <div className="text-center mb-14">
          <div className="section-label mb-3 reveal">服務優勢</div>
          <h2 className="section-title text-3xl lg:text-4xl mb-4 reveal">
            一站式跨境電商解決方案
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto reveal">
            從選品到收益，我們提供完整的代運營服務體系，讓您專注於收益，其餘交給我們。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* 左側圖片 */}
          <div className="reveal">
            <div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              style={{
                transition: 'transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.015)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 24px 60px oklch(0 0 0 / 0.18)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '';
              }}
            >
              <img
                src={SERVICES_IMG}
                alt="Amazon FBA 倉儲物流"
                className="w-full h-[420px] object-cover"
                style={{ transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, oklch(0.25 0.02 55 / 0.4), transparent 60%)' }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="inline-block px-3 py-1.5 rounded-lg text-sm font-medium mb-2"
                  style={{ background: 'oklch(0.72 0.09 30)', color: 'white' }}
                >
                  全球雲倉物流網絡
                </div>
                <p className="text-sm" style={{ color: 'oklch(0.90 0.02 75)' }}>
                  美國、瑞士等多國倉儲合作夥伴，確保快速出貨
                </p>
              </div>
            </div>
          </div>

          {/* 右側服務卡片 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="morandi-card service-card rounded-xl p-5 reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* 圖示：加上 service-icon class 讓 CSS hover 生效 */}
                <div
                  className="service-icon w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: 'linear-gradient(135deg, oklch(0.72 0.09 30 / 0.10), oklch(0.82 0.10 75 / 0.06))',
                  }}
                >
                  <service.icon size={20} style={{ color: 'oklch(0.72 0.09 30)' }} />
                </div>

                {/* 標題：加上 service-title class */}
                <h3
                  className="service-title text-sm font-bold mb-2"
                  style={{ fontFamily: "'Noto Serif TC', serif", color: 'oklch(0.25 0.02 55)' }}
                >
                  {service.title}
                </h3>

                <p className="text-xs leading-relaxed" style={{ color: 'oklch(0.55 0.03 55)' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
