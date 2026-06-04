import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Mail, CheckCircle } from 'lucide-react';

const CONTACT_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474888570/5R8XCVnyqG6Tc3YNahkvMD/contact-consultant-KJjjaUqsdF6LTPQohck24Q.webp';

const trustList = [
  '合法立案，統編 89125307 可查驗',
  '免經驗、免囤貨、零風險入門',
  '全程專人陪伴，週一至週五服務',
  '透明收益報表，按時撥款',
  '進駐 16 大主流電商平台',
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24"
      style={{ background: 'oklch(0.98 0.01 75)' }}
    >
      <div className="container">
        {/* 標題 */}
        <div className="text-center mb-14">
          <div className="section-label mb-3 reveal">聯絡我們</div>
          <h2 className="section-title text-3xl lg:text-4xl mb-4 reveal">
            開始您的跨境電商之旅
          </h2>
          <p className="section-subtitle max-w-xl mx-auto reveal">
            填寫諮詢表單，專人將在一個工作日內與您聯繫，免費說明合作細節。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 左側表單 */}
          <div className="reveal">
            <div
              className="rounded-2xl p-8"
              style={{
                background: 'white',
                border: '1px solid oklch(0.88 0.02 75)',
                boxShadow: '0 4px 24px oklch(0.72 0.09 30 / 0.06)',
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle
                    size={56}
                    className="mx-auto mb-4"
                    style={{ color: 'oklch(0.72 0.09 30)' }}
                  />
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "'Noto Serif TC', serif", color: 'oklch(0.25 0.02 55)' }}
                  >
                    感謝您的諮詢！
                  </h3>
                  <p className="text-sm" style={{ color: 'oklch(0.55 0.03 55)' }}>
                    我們已收到您的訊息，專人將在一個工作日內與您聯繫。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1.5"
                      style={{ fontFamily: "'Noto Sans TC', sans-serif", color: 'oklch(0.35 0.03 55)' }}
                    >
                      姓名 *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="請輸入您的姓名"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        border: '1.5px solid oklch(0.88 0.02 75)',
                        fontFamily: "'Noto Sans TC', sans-serif",
                        color: 'oklch(0.25 0.02 55)',
                        background: 'oklch(0.99 0.005 75)',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'oklch(0.72 0.09 30)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'oklch(0.88 0.02 75)'; }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1.5"
                      style={{ fontFamily: "'Noto Sans TC', sans-serif", color: 'oklch(0.35 0.03 55)' }}
                    >
                      電話 *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="請輸入您的聯絡電話"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        border: '1.5px solid oklch(0.88 0.02 75)',
                        fontFamily: "'Noto Sans TC', sans-serif",
                        color: 'oklch(0.25 0.02 55)',
                        background: 'oklch(0.99 0.005 75)',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'oklch(0.72 0.09 30)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'oklch(0.88 0.02 75)'; }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1.5"
                      style={{ fontFamily: "'Noto Sans TC', sans-serif", color: 'oklch(0.35 0.03 55)' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="請輸入您的 Email"
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        border: '1.5px solid oklch(0.88 0.02 75)',
                        fontFamily: "'Noto Sans TC', sans-serif",
                        color: 'oklch(0.25 0.02 55)',
                        background: 'oklch(0.99 0.005 75)',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'oklch(0.72 0.09 30)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'oklch(0.88 0.02 75)'; }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1.5"
                      style={{ fontFamily: "'Noto Sans TC', sans-serif", color: 'oklch(0.35 0.03 55)' }}
                    >
                      想了解的內容
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="請描述您想了解的合作細節或問題..."
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                      style={{
                        border: '1.5px solid oklch(0.88 0.02 75)',
                        fontFamily: "'Noto Sans TC', sans-serif",
                        color: 'oklch(0.25 0.02 55)',
                        background: 'oklch(0.99 0.005 75)',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'oklch(0.72 0.09 30)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'oklch(0.88 0.02 75)'; }}
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    送出諮詢
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* 右側資訊 */}
          <div className="space-y-6">
            {/* 圖片 + 引言 */}
            <div className="relative rounded-2xl overflow-hidden reveal">
              <img
                src={CONTACT_IMG}
                alt="木南國際貿易客服顧問"
                className="w-full h-52 object-cover object-top"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{ background: 'linear-gradient(to top, oklch(0.25 0.02 55 / 0.85), transparent)' }}
              >
                <p className="text-sm italic text-white">
                  「我們的目標是讓每一位夥伴都能輕鬆開啟跨境電商副業，實現財務自由。」
                </p>
              </div>
            </div>

            {/* 公司資訊 */}
            <div
              className="rounded-2xl p-6 reveal"
              style={{
                background: 'white',
                border: '1px solid oklch(0.88 0.02 75)',
                boxShadow: '0 2px 16px oklch(0.72 0.09 30 / 0.06)',
              }}
            >
              <h3
                className="font-bold mb-4"
                style={{ fontFamily: "'Noto Serif TC', serif", color: 'oklch(0.25 0.02 55)' }}
              >
                木南國際貿易有限公司
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin size={16} style={{ color: 'oklch(0.72 0.09 30)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div className="text-xs font-medium mb-0.5" style={{ color: 'oklch(0.55 0.03 55)' }}>公司地址</div>
                    <div className="text-sm" style={{ color: 'oklch(0.35 0.03 55)' }}>
                      臺北市中山區新生北路2段31之1號9樓之7<br />
                      <span className="text-xs" style={{ color: 'oklch(0.60 0.03 55)' }}>
                        9 F.-7, No. 31-1, Sec. 2, Xinsheng N. Rd., Zhongshan Dist., Taipei City 104489
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={16} style={{ color: 'oklch(0.72 0.09 30)', flexShrink: 0 }} />
                  <div>
                    <div className="text-xs font-medium mb-0.5" style={{ color: 'oklch(0.55 0.03 55)' }}>服務時間</div>
                    <div className="text-sm" style={{ color: 'oklch(0.35 0.03 55)' }}>週一至週五 09:00–18:00</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} style={{ color: 'oklch(0.72 0.09 30)', flexShrink: 0 }} />
                  <div>
                    <div className="text-xs font-medium mb-0.5" style={{ color: 'oklch(0.55 0.03 55)' }}>統一編號</div>
                    <div className="text-sm font-semibold" style={{ color: 'oklch(0.35 0.03 55)' }}>89125307</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 為什麼選擇木南 */}
            <div
              className="rounded-2xl p-6 reveal"
              style={{
                background: 'linear-gradient(135deg, oklch(0.72 0.09 30 / 0.06), oklch(0.82 0.10 75 / 0.04))',
                border: '1px solid oklch(0.82 0.10 75 / 0.3)',
              }}
            >
              <h4
                className="font-bold mb-4 text-sm"
                style={{ fontFamily: "'Noto Serif TC', serif", color: 'oklch(0.25 0.02 55)' }}
              >
                為什麼選擇木南？
              </h4>
              <ul className="space-y-2">
                {trustList.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle size={14} style={{ color: 'oklch(0.72 0.09 30)', flexShrink: 0, marginTop: 2 }} />
                    <span className="text-xs" style={{ color: 'oklch(0.40 0.03 55)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-12 reveal">
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ height: '320px' }}>
            <iframe
              src="https://maps.google.com/maps?q=臺北市中山區新生北路2段31之1號&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="木南國際貿易有限公司位置"
            />
          </div>
          <div className="text-center mt-3">
            <a
              href="https://maps.google.com/maps?q=臺北市中山區新生北路2段31之1號"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium inline-flex items-center gap-1.5 transition-opacity hover:opacity-70"
              style={{ color: 'oklch(0.72 0.09 30)' }}
            >
              <MapPin size={14} />
              在 Google Maps 中開啟
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
