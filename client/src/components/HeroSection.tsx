import { ChevronDown, ShieldCheck, TrendingUp } from 'lucide-react';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474888570/5R8XCVnyqG6Tc3YNahkvMD/hero-bg-g4JTW8SYQz2afytpLpx3Rx.webp';

const platformStats = [
  { name: 'Amazon', orders: '1,200+' },
  { name: 'eBay', orders: '850+' },
  { name: 'Walmart', orders: '620+' },
  { name: 'Zalando', orders: '430+' },
  { name: 'Galaxus', orders: '380+' },
];

const tags = ['美國&瑞士雙市場', 'AI 智能訂單', '零囤貨風險', '雲倉即時出貨', '廣告精準引流'];

export default function HeroSection() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProcess = () => {
    document.querySelector('#process')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 背景圖 + 遮罩 */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="跨境電商城市鳥瞰"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, oklch(0.25 0.03 55 / 0.82) 0%, oklch(0.30 0.04 30 / 0.70) 45%, oklch(0.25 0.03 230 / 0.55) 100%)',
          }}
        />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* 左側文字 */}
          <div className="lg:col-span-3 text-white">
            {/* 標籤列 */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: 'oklch(0.72 0.09 30 / 0.25)', border: '1px solid oklch(0.82 0.10 75 / 0.5)', color: 'oklch(0.95 0.04 75)' }}
              >
                <ShieldCheck size={12} />
                合法立案 統編 89125307
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: 'oklch(0.72 0.06 230 / 0.25)', border: '1px solid oklch(0.72 0.06 230 / 0.5)', color: 'oklch(0.90 0.04 230)' }}
              >
                <TrendingUp size={12} />
                跨境電商代運營
              </span>
            </div>

            {/* 公司名稱 */}
            <div className="text-sm font-medium tracking-widest mb-3" style={{ color: 'oklch(0.85 0.05 75)', fontFamily: "'Noto Sans TC', sans-serif" }}>
              木南國際貿易有限公司
            </div>

            {/* 主標題 */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight"
              style={{ fontFamily: "'Noto Serif TC', serif" }}
            >
              跨境電商
              <br />
              <span style={{ color: 'oklch(0.88 0.10 75)' }}>代運營專家</span>
            </h1>

            {/* 副標題 */}
            <p
              className="text-lg mb-8 leading-relaxed max-w-xl"
              style={{ color: 'oklch(0.88 0.02 75)', fontFamily: "'Noto Sans TC', sans-serif" }}
            >
              商品貨源與客源，一切都不用擔心。
              <br />
              免經驗、免囤貨、零風險，開啟你的副業生活。
            </p>

            {/* 特色標籤 */}
            <div className="flex flex-wrap gap-2 mb-10">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-md text-xs font-medium"
                  style={{
                    background: 'oklch(1 0 0 / 0.12)',
                    border: '1px solid oklch(1 0 0 / 0.25)',
                    color: 'oklch(0.95 0.02 75)',
                    fontFamily: "'Noto Sans TC', sans-serif",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA 按鈕 */}
            <div className="flex flex-wrap gap-4">
              <button onClick={scrollToContact} className="btn-primary">
                免費諮詢合作
              </button>
              <button
                onClick={scrollToProcess}
                className="btn-outline"
                style={{ borderColor: 'oklch(1 0 0 / 0.5)', color: 'white' }}
              >
                了解合作流程
              </button>
            </div>
          </div>

          {/* 右側數據卡片 */}
          <div className="lg:col-span-2 space-y-4">
            {/* 今日訂單卡片 */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: 'oklch(1 0 0 / 0.95)',
                boxShadow: '0 8px 32px oklch(0 0 0 / 0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium" style={{ color: 'oklch(0.55 0.03 55)', fontFamily: "'Noto Sans TC', sans-serif" }}>
                  今日新增訂單
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ background: 'oklch(0.90 0.05 155)', color: 'oklch(0.30 0.08 155)' }}
                >
                  即時更新
                </span>
              </div>
              <div
                className="text-4xl font-black"
                style={{ fontFamily: "'Noto Serif TC', serif", color: 'oklch(0.72 0.09 30)' }}
              >
                +247
              </div>
              <div className="text-xs mt-1" style={{ color: 'oklch(0.65 0.03 55)' }}>
                較昨日 ↑ 12.3%
              </div>
            </div>

            {/* 平台月訂單量 */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: 'oklch(1 0 0 / 0.95)',
                boxShadow: '0 8px 32px oklch(0 0 0 / 0.15)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="text-sm font-medium mb-4" style={{ color: 'oklch(0.55 0.03 55)', fontFamily: "'Noto Sans TC', sans-serif" }}>
                合作平台月訂單量
              </div>
              <div className="space-y-2.5">
                {platformStats.map((p) => (
                  <div key={p.name} className="flex items-center justify-between">
                    <span className="text-sm font-medium" style={{ color: 'oklch(0.35 0.03 55)', fontFamily: "'Noto Sans TC', sans-serif" }}>
                      {p.name}
                    </span>
                    <div className="flex items-center gap-2">
                      <div
                        className="h-1.5 rounded-full"
                        style={{
                          width: `${parseInt(p.orders) / 12}px`,
                          maxWidth: '80px',
                          minWidth: '30px',
                          background: 'linear-gradient(90deg, oklch(0.72 0.09 30), oklch(0.82 0.10 75))',
                        }}
                      />
                      <span className="text-xs font-semibold" style={{ color: 'oklch(0.72 0.09 30)' }}>
                        {p.orders}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 合法立案卡片 */}
            <div
              className="rounded-2xl p-4"
              style={{
                background: 'linear-gradient(135deg, oklch(0.72 0.09 30 / 0.12), oklch(0.82 0.10 75 / 0.08))',
                border: '1px solid oklch(0.82 0.10 75 / 0.4)',
                backdropFilter: 'blur(8px)',
              }}
            >
              <div className="flex items-start gap-3">
                <ShieldCheck size={20} style={{ color: 'oklch(0.82 0.10 75)', flexShrink: 0, marginTop: 2 }} />
                <div>
                  <div className="text-sm font-bold mb-1" style={{ color: 'white', fontFamily: "'Noto Serif TC', serif" }}>
                    合法立案公司
                  </div>
                  <div className="text-xs leading-relaxed" style={{ color: 'oklch(0.88 0.04 75)' }}>
                    統編 89125307<br />
                    臺北市中山區新生北路2段31之1號9樓之7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll 指示器 */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => document.querySelector('#stats')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
          >
            <span className="text-xs tracking-widest" style={{ color: 'oklch(0.88 0.04 75)', fontFamily: "'Noto Sans TC', sans-serif" }}>
              SCROLL
            </span>
            <ChevronDown size={18} style={{ color: 'oklch(0.88 0.04 75)', animation: 'bounce 2s infinite' }} />
          </button>
        </div>
      </div>
    </section>
  );
}
