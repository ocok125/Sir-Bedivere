import { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const TESTIMONIALS_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474888570/5R8XCVnyqG6Tc3YNahkvMD/testimonials-seller-FNx4YZUYqgEJWRxjhu7sWG.webp';

const testimonials = [
  {
    name: '陳先生',
    city: '台北市',
    income: 'NT$52,000',
    avatar: '陳',
    color: 'oklch(0.72 0.09 30)',
    text: '剛開始完全沒有電商經驗，木南的團隊從帳號申請到上架全程陪伴，第三個月就開始有穩定收益，現在每月都有五萬以上，真的很推薦！',
  },
  {
    name: '林小姐',
    city: '高雄市',
    income: 'NT$38,000',
    avatar: '林',
    color: 'oklch(0.72 0.06 230)',
    text: '本來擔心需要自己備貨很麻煩，後來才知道完全不用，雲倉模式讓我完全不用擔心庫存問題，副業做得很輕鬆。',
  },
  {
    name: '王先生',
    city: '台中市',
    income: 'NT$45,000',
    avatar: '王',
    color: 'oklch(0.76 0.05 155)',
    text: '在 Amazon 上的店鋪已經穩定運營超過一年，AI 系統處理訂單非常有效率，廣告引流也讓訂單量持續成長。',
  },
  {
    name: '張先生',
    city: '新北市',
    income: 'NT$41,000',
    avatar: '張',
    color: 'oklch(0.78 0.06 15)',
    text: '木南的選品團隊非常專業，每期推薦的商品都有不錯的銷量，加上廣告精準引流，收益比預期還要好。',
  },
  {
    name: '李小姐',
    city: '桃園市',
    income: 'NT$35,000',
    avatar: '李',
    color: 'oklch(0.72 0.09 30)',
    text: '同時在美國和瑞士平台都有開店，收益來源更分散，風險更低。木南的服務讓我對跨境電商更有信心。',
  },
  {
    name: '黃先生',
    city: '台南市',
    income: 'NT$48,000',
    avatar: '黃',
    color: 'oklch(0.72 0.06 230)',
    text: '服務時間內隨時都能聯繫到專人，有任何問題都能快速解決。這種全程支援的模式讓我非常安心。',
  },
];

const trustBadges = [
  { label: '合法立案', value: '統編 89125307' },
  { label: '服務夥伴', value: '500+ 位' },
  { label: '客戶滿意度', value: '98%' },
  { label: '平均月收益', value: 'NT$45,000' },
];

export default function TestimonialsSection() {
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
      { threshold: 0.06 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 morandi-section-alt"
    >
      <div className="container">
        {/* 標題 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <div>
            <div className="section-label mb-3 reveal">客戶見證</div>
            <h2 className="section-title text-3xl lg:text-4xl mb-4 reveal">
              真實夥伴，真實收益
            </h2>
            <p className="section-subtitle reveal">
              來自台灣各地的成功夥伴，用親身經歷證明跨境電商代運營的可行性。
            </p>
          </div>
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
                src={TESTIMONIALS_IMG}
                alt="電商後台操作"
                className="w-full h-56 object-cover"
                style={{ transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)'; }}
              />
            </div>
          </div>
        </div>

        {/* 見證卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="morandi-card testimonial-card rounded-xl p-5 reveal"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                {/* 頭像：加上 testimonial-avatar class */}
                <div
                  className="testimonial-avatar w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: t.color, fontFamily: "'Noto Serif TC', serif" }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ fontFamily: "'Noto Serif TC', serif", color: 'oklch(0.25 0.02 55)' }}>
                    {t.name}
                  </div>
                  <div className="text-xs" style={{ color: 'oklch(0.55 0.03 55)' }}>{t.city}</div>
                </div>
                {/* 收益數字：加上 testimonial-income class */}
                <div className="ml-auto text-right">
                  <div
                    className="testimonial-income text-sm font-bold"
                    style={{ color: 'oklch(0.72 0.09 30)', fontFamily: "'Noto Serif TC', serif" }}
                  >
                    {t.income}
                  </div>
                  <div className="text-xs" style={{ color: 'oklch(0.65 0.03 55)' }}>月收益</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={12} fill="oklch(0.82 0.10 75)" style={{ color: 'oklch(0.82 0.10 75)' }} />
                ))}
              </div>
              {/* 引言文字：加上 testimonial-text class */}
              <p
                className="testimonial-text text-xs leading-relaxed"
                style={{ color: 'oklch(0.45 0.03 55)' }}
              >
                {t.text}
              </p>
            </div>
          ))}
        </div>

        {/* 信任指標 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {trustBadges.map((badge, i) => (
            <div
              key={badge.label}
              className="morandi-card trust-badge rounded-xl p-4 text-center reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* 數值：加上 trust-value class */}
              <div
                className="trust-value text-xl font-black mb-1"
                style={{ fontFamily: "'Noto Serif TC', serif", color: 'oklch(0.72 0.09 30)' }}
              >
                {badge.value}
              </div>
              <div className="text-xs" style={{ color: 'oklch(0.55 0.03 55)' }}>{badge.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
