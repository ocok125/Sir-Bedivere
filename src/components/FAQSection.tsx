import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '需要準備多少資金才能開始合作？',
    a: '合作初期主要費用為電商平台的賣家帳號申請費用及廣告投放預算，具體金額依所選平台而異。我們會在諮詢時詳細說明各項費用，確保您充分了解後再做決定，絕無隱藏費用。',
  },
  {
    q: '完全沒有電商經驗可以加入嗎？',
    a: '完全可以！這正是我們代運營服務的核心價值。從帳號申請、店鋪設定、商品上架到訂單處理，我們全程代為操作，您無需任何電商背景或技術知識。',
  },
  {
    q: '大概多久才能開始有收益？',
    a: '通常在帳號開設並上架商品後的 1-2 個月內開始有初步收益，3 個月後收益會逐漸穩定成長。實際時間因平台、商品類別及市場狀況而有所不同，我們會持續優化以加速收益成長。',
  },
  {
    q: '我需要自己管理庫存或出貨嗎？',
    a: '完全不需要。我們採用雲倉模式，所有商品現貨囤放在國外合作倉儲，買家下訂單後由倉儲直接發貨。您無需接觸任何實體商品，也不需要包裝或出貨。',
  },
  {
    q: '收益是如何計算的？',
    a: '收益 = 商品銷售額 - 平台手續費 - 廣告費用 - 倉儲物流費用。我們會提供透明的收益報表，讓您清楚了解每筆訂單的收益明細。平均月收益約 NT$45,000，實際依銷量而定。',
  },
  {
    q: '如果買家有客訴或退貨怎麼辦？',
    a: '客訴及退貨處理由我們的客服團隊全權負責，您無需直接面對買家。我們有完善的售後服務流程，確保平台評分維持在良好水準，保護您的帳號健康度。',
  },
  {
    q: '可以同時在多個平台開店嗎？',
    a: '可以！我們支援同時在美國和瑞士的多個平台開設店鋪，分散收益來源，降低單一平台的風險。多平台運營也能大幅提升整體收益。',
  },
  {
    q: '如何確認木南國際貿易是合法公司？',
    a: '木南國際貿易有限公司統一編號為 89125307，依法在台灣登記設立，總部位於臺北市中山區新生北路2段31之1號9樓之7。您可至經濟部商業司公司登記查詢系統驗證我們的合法身份。',
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        border: `1px solid ${open ? 'oklch(0.72 0.09 30 / 0.35)' : 'oklch(0.88 0.02 75)'}`,
        background: 'white',
        boxShadow: open
          ? '0 8px 28px oklch(0.72 0.09 30 / 0.10), 0 2px 8px oklch(0 0 0 / 0.04)'
          : '0 1px 4px oklch(0 0 0 / 0.04)',
        transition: 'border-color 0.28s ease, box-shadow 0.28s ease',
        transitionDelay: `${index * 40}ms`,
      }}
    >
      {/* Trigger */}
      <button
        className="w-full flex items-start justify-between gap-4 px-6 py-4 text-left"
        onClick={() => setOpen(!open)}
        style={{
          background: open ? 'oklch(0.97 0.015 75)' : 'transparent',
          transition: 'background 0.25s ease',
        }}
        onMouseEnter={(e) => {
          if (!open) (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.97 0.01 75)';
        }}
        onMouseLeave={(e) => {
          if (!open) (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
        }}
      >
        <span
          className="text-sm leading-relaxed"
          style={{
            fontFamily: "'Noto Serif TC', serif",
            fontWeight: 600,
            color: open ? 'oklch(0.62 0.10 30)' : 'oklch(0.25 0.02 55)',
            transition: 'color 0.25s ease',
          }}
        >
          {q}
        </span>
        {/* 圖示旋轉 */}
        <ChevronDown
          size={18}
          style={{
            color: open ? 'oklch(0.72 0.09 30)' : 'oklch(0.55 0.03 55)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.30s cubic-bezier(0.23, 1, 0.32, 1), color 0.25s ease',
            flexShrink: 0,
            marginTop: '2px',
          }}
        />
      </button>

      {/* Content：CSS max-height 展開動畫 */}
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.38s cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <div
          className="px-6 pb-5 pt-1 text-sm leading-relaxed"
          style={{
            fontFamily: "'Noto Sans TC', sans-serif",
            color: 'oklch(0.45 0.03 55)',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(-6px)',
            transition: 'opacity 0.28s ease 0.06s, transform 0.28s cubic-bezier(0.23, 1, 0.32, 1) 0.06s',
          }}
        >
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
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
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 morandi-section-alt"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* 標題 */}
          <div className="text-center mb-12">
            <div className="section-label mb-3 reveal">常見問題</div>
            <h2 className="section-title text-3xl lg:text-4xl mb-4 reveal">
              您可能想知道的事
            </h2>
            <p className="section-subtitle reveal">
              我們整理了最常見的問題，幫助您更了解我們的服務。
            </p>
          </div>

          {/* 自訂 FAQ Accordion */}
          <div className="space-y-3 reveal">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10 reveal">
            <p className="section-subtitle mb-4">還有其他問題？</p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              立即諮詢
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
