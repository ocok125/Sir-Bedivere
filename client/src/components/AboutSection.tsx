import { useEffect, useRef } from 'react';
import { Search, Package, Bot, Megaphone } from 'lucide-react';

const ABOUT_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474888570/5R8XCVnyqG6Tc3YNahkvMD/about-team-KqkMkYHVXbSLzBMx96RG4X.webp';

const advantages = [
  { icon: Search, title: '市場調查', desc: '專業團隊依銷量及毛利率精選每期熱銷商品' },
  { icon: Package, title: '雲倉備貨', desc: '商品現貨囤放至國外合作倉儲，買家下單即發貨' },
  { icon: Bot, title: 'AI 訂單處理', desc: 'AI 系統自動化處理銷售訂單，效率倍增' },
  { icon: Megaphone, title: '廣告精準引流', desc: '投放廣告引流至店鋪，搭配平台自有客源' },
];

export default function AboutSection() {
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 morandi-section-alt"
    >
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* 左側圖片 */}
          <div className="lg:col-span-5 relative reveal">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{
                transition: 'transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.015)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 28px 64px oklch(0 0 0 / 0.18)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '';
              }}
            >
              <img
                src={ABOUT_IMG}
                alt="木南國際貿易專業團隊"
                className="w-full h-80 lg:h-[480px] object-cover"
                style={{ transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, oklch(0.25 0.02 55 / 0.3), transparent)' }}
              />
            </div>

            {/* 浮動統編卡片 */}
            <div
              className="absolute -bottom-6 -right-4 lg:-right-8 rounded-xl p-4 shadow-xl"
              style={{
                background: 'white',
                border: '1px solid oklch(0.88 0.02 75)',
                minWidth: '180px',
                transition: 'transform 0.28s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.28s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px) scale(1.03)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px oklch(0.72 0.09 30 / 0.15)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = '';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '';
              }}
            >
              <div className="text-xs font-medium mb-1" style={{ color: 'oklch(0.55 0.03 55)' }}>合法立案</div>
              <div className="text-sm font-bold" style={{ fontFamily: "'Noto Serif TC', serif", color: 'oklch(0.25 0.02 55)' }}>
                統編 89125307
              </div>
              <div className="text-xs mt-1" style={{ color: 'oklch(0.65 0.03 55)' }}>
                木南國際貿易有限公司
              </div>
            </div>

            {/* 地址卡片 */}
            <div
              className="absolute -top-4 -left-4 lg:-left-6 rounded-xl p-3 shadow-xl max-w-[200px]"
              style={{
                background: 'linear-gradient(135deg, oklch(0.72 0.09 30), oklch(0.68 0.10 20))',
                transition: 'transform 0.28s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.28s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px) scale(1.03)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 32px oklch(0.72 0.09 30 / 0.30)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = '';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '';
              }}
            >
              <div className="text-xs font-medium mb-0.5" style={{ color: 'oklch(0.95 0.04 75)' }}>公司地址</div>
              <div className="text-xs leading-relaxed" style={{ color: 'white' }}>
                臺北市中山區<br />新生北路2段31之1號<br />9樓之7
              </div>
            </div>
          </div>

          {/* 右側文字 */}
          <div className="lg:col-span-7">
            <div className="section-label mb-3 reveal">關於我們</div>
            <h2 className="section-title text-3xl lg:text-4xl mb-6 reveal">
              專業跨境電商代運營<br />
              <span style={{ color: 'oklch(0.72 0.09 30)' }}>從零開始，全程陪伴</span>
            </h2>
            <p className="section-subtitle text-base mb-4 reveal">
              木南國際貿易有限公司（統編 89125307），總部位於臺北市中山區，專注於跨境電商代運營服務。我們協助合作夥伴在全球 16 大主流電商平台上經營店鋪，提供從選品、備貨、廣告投放到訂單處理的一站式服務。
            </p>
            <p className="section-subtitle text-base mb-10 reveal">
              首次合作由我們全程代為經營，免經驗、免囤貨、免風險，讓您輕鬆開啟副業生活，實現財務自由。
            </p>

            {/* 核心優勢卡片 */}
            <div className="grid grid-cols-2 gap-4">
              {advantages.map((item, i) => (
                <div
                  key={item.title}
                  className="morandi-card advantage-card rounded-xl p-4 reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* 圖示：加上 advantage-icon class */}
                  <div
                    className="advantage-icon w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: 'linear-gradient(135deg, oklch(0.72 0.09 30 / 0.12), oklch(0.82 0.10 75 / 0.08))' }}
                  >
                    <item.icon size={18} style={{ color: 'oklch(0.72 0.09 30)' }} />
                  </div>
                  <div
                    className="text-sm font-bold mb-1"
                    style={{
                      fontFamily: "'Noto Serif TC', serif",
                      color: 'oklch(0.25 0.02 55)',
                      transition: 'color 0.25s ease',
                    }}
                  >
                    {item.title}
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: 'oklch(0.55 0.03 55)' }}>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
