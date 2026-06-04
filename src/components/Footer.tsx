const LOGO_URL = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474888570/5R8XCVnyqG6Tc3YNahkvMD/munan-logo-joyHVxvcutqu3jJN4mvo3x.webp';

const navLinks = [
  { label: '首頁', href: '#hero' },
  { label: '關於我們', href: '#about' },
  { label: '服務優勢', href: '#services' },
  { label: '合作流程', href: '#process' },
  { label: '合作平台', href: '#platforms' },
  { label: '客戶見證', href: '#testimonials' },
  { label: '收益成效', href: '#income' },
  { label: '常見問題', href: '#faq' },
  { label: '聯絡我們', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, oklch(0.22 0.03 55) 0%, oklch(0.20 0.04 230) 100%)',
      }}
    >
      <div className="container py-14">
        <div className="grid lg:grid-cols-3 gap-10 mb-10">
          {/* 品牌 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={LOGO_URL}
                alt="木南國際貸易 Logo"
                className="w-16 h-16 object-contain rounded-xl"
                style={{
                  filter: 'brightness(0) invert(1) drop-shadow(0 2px 8px oklch(0.82 0.10 75 / 0.35))',
                }}
              />
              <div>
                <div
                  className="font-bold text-white"
                  style={{ fontFamily: "'Noto Serif TC', serif" }}
                >
                  木南國際貸易有限公司
                </div>
                <div className="text-xs tracking-wider" style={{ color: 'oklch(0.65 0.03 75)' }}>
                  MUNAN TRADING CO., LTD.
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-3" style={{ color: 'oklch(0.70 0.03 75)' }}>
              專業跨境電商代運營服務，進駐美國、瑞士 16 大主流電商平台，免經驗、免囤貨、零風險。
            </p>
            <div
              className="inline-block px-3 py-1.5 rounded-lg text-xs font-medium"
              style={{
                background: 'oklch(0.72 0.09 30 / 0.2)',
                border: '1px solid oklch(0.82 0.10 75 / 0.3)',
                color: 'oklch(0.88 0.06 75)',
              }}
            >
              統編 89125307
            </div>
          </div>

          {/* 導覽連結 */}
          <div>
            <h4
              className="font-bold mb-4 text-sm"
              style={{ fontFamily: "'Noto Serif TC', serif", color: 'white' }}
            >
              快速導覽
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-sm transition-opacity hover:opacity-100 opacity-70"
                  style={{ color: 'oklch(0.78 0.03 75)', fontFamily: "'Noto Sans TC', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h4
              className="font-bold mb-4 text-sm"
              style={{ fontFamily: "'Noto Serif TC', serif", color: 'white' }}
            >
              聯絡資訊
            </h4>
            <div className="space-y-2 text-sm" style={{ color: 'oklch(0.70 0.03 75)' }}>
              <p>臺北市中山區新生北路2段31之1號9樓之7</p>
              <p>週一至週五 09:00–18:00</p>
              <p className="text-xs" style={{ color: 'oklch(0.60 0.03 75)' }}>
                9 F.-7, No. 31-1, Sec. 2, Xinsheng N. Rd.,<br />
                Zhongshan Dist., Taipei City 104489, Taiwan (R.O.C.)
              </p>
            </div>
          </div>
        </div>

        {/* 分隔線 */}
        <div
          className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: 'oklch(1 0 0 / 0.1)', color: 'oklch(0.55 0.03 75)' }}
        >
          <p>© {new Date().getFullYear()} 木南國際貿易有限公司 MUNAN TRADING CO., LTD. All rights reserved.</p>
          <p>統一編號：89125307</p>
        </div>
      </div>
    </footer>
  );
}
