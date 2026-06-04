import { useEffect, useRef } from 'react';

const PLATFORMS_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474888570/5R8XCVnyqG6Tc3YNahkvMD/platforms-port-6Vi6Rzqe4a8axG979KiKDq.webp';

const usPlatforms = [
  { name: 'Amazon', color: '#FF9900', abbr: 'AMZ' },
  { name: 'eBay', color: '#E53238', abbr: 'eBay' },
  { name: 'Walmart', color: '#0071CE', abbr: 'WMT' },
  { name: 'Temu', color: '#FF6B35', abbr: 'Temu' },
  { name: 'Target', color: '#CC0000', abbr: 'TGT' },
  { name: 'Etsy', color: '#F56400', abbr: 'Etsy' },
  { name: 'Home Depot', color: '#F96302', abbr: 'HD' },
  { name: 'Best Buy', color: '#0046BE', abbr: 'BBY' },
  { name: 'Wayfair', color: '#7B2D8B', abbr: 'WFR' },
  { name: "Lowe's", color: '#004990', abbr: 'LOW' },
];

const chPlatforms = [
  { name: 'Galaxus', color: '#FF6600', abbr: 'GLX' },
  { name: 'Zalando', color: '#FF6900', abbr: 'ZAL' },
  { name: 'Ricardo', color: '#E30613', abbr: 'RIC' },
  { name: 'Microspot', color: '#005BAC', abbr: 'MSP' },
  { name: 'Manor', color: '#C8102E', abbr: 'MNR' },
  { name: 'AliExpress', color: '#FF4747', abbr: 'AE' },
];

function PlatformBadge({ name, color, abbr }: { name: string; color: string; abbr: string }) {
  return (
    <div
      className="platform-badge flex items-center gap-3 px-5 py-3 rounded-xl mx-3 flex-shrink-0"
      style={{
        background: 'white',
        border: '1px solid oklch(0.90 0.02 75)',
        boxShadow: '0 2px 8px oklch(0 0 0 / 0.06)',
        minWidth: '140px',
        cursor: 'default',
      }}
    >
      <div
        className="platform-icon w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
        style={{ background: color, fontFamily: "'Noto Sans TC', sans-serif" }}
      >
        {abbr.length <= 3 ? abbr : abbr.slice(0, 2)}
      </div>
      <span
        className="text-sm font-semibold whitespace-nowrap"
        style={{ color: 'oklch(0.30 0.02 55)', fontFamily: "'Noto Sans TC', sans-serif" }}
      >
        {name}
      </span>
    </div>
  );
}

export default function PlatformsSection() {
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

  const allPlatforms = [...usPlatforms, ...chPlatforms];

  return (
    <section
      id="platforms"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24"
      style={{ background: 'oklch(0.98 0.01 75)', overflow: 'hidden' }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          {/* 左側文字 */}
          <div>
            <div className="section-label mb-3 reveal">合作平台</div>
            <h2 className="section-title text-3xl lg:text-4xl mb-4 reveal">
              進駐全球主流電商平台
            </h2>
            <p className="section-subtitle reveal">
              美國 10 大平台 + 瑞士 6 大平台，覆蓋北美與歐洲主要市場，讓您的商品觸達全球消費者。
            </p>

            <div className="flex gap-6 mt-6 reveal">
              <div>
                <div className="text-2xl font-black" style={{ fontFamily: "'Noto Serif TC', serif", color: 'oklch(0.72 0.09 30)' }}>
                  10
                </div>
                <div className="text-sm" style={{ color: 'oklch(0.55 0.03 55)' }}>美國平台</div>
              </div>
              <div
                className="w-px"
                style={{ background: 'oklch(0.88 0.02 75)' }}
              />
              <div>
                <div className="text-2xl font-black" style={{ fontFamily: "'Noto Serif TC', serif", color: 'oklch(0.72 0.06 230)' }}>
                  6
                </div>
                <div className="text-sm" style={{ color: 'oklch(0.55 0.03 55)' }}>瑞士平台</div>
              </div>
            </div>
          </div>

          {/* 右側圖片 */}
          <div className="reveal">
            <div
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{
                transition: 'transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.35s cubic-bezier(0.23, 1, 0.32, 1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.02)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 48px oklch(0 0 0 / 0.14)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
                (e.currentTarget as HTMLDivElement).style.boxShadow = '';
              }}
            >
              <img
                src={PLATFORMS_IMG}
                alt="國際貨運港口鳥瞰"
                className="w-full h-64 object-cover"
                style={{ transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee 滾動 */}
      <div className="overflow-hidden py-4">
        <div className="marquee-track">
          {[...allPlatforms, ...allPlatforms].map((p, i) => (
            <PlatformBadge key={`${p.name}-${i}`} {...p} />
          ))}
        </div>
      </div>

      {/* 第二排反向 */}
      <div className="overflow-hidden py-4 mt-2">
        <div
          className="marquee-track"
          style={{ animationDirection: 'reverse', animationDuration: '40s' }}
        >
          {[...chPlatforms, ...usPlatforms, ...chPlatforms, ...usPlatforms].map((p, i) => (
            <PlatformBadge key={`rev-${p.name}-${i}`} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
