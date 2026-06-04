import { useEffect, useRef, useState } from 'react';
import { useCounter } from '@/hooks/useCounter';

const stats = [
  { value: 500, suffix: '+', label: '合作夥伴', desc: '來自台灣各地的成功夥伴' },
  { value: 98, suffix: '%', label: '客戶滿意度', desc: '持續優化服務品質' },
  { value: 16, suffix: '', label: '合作平台', desc: '美國 + 瑞士主流電商' },
  { value: 45000, suffix: '', label: '平均月收益', desc: 'NT$ 起，持續成長', prefix: 'NT$' },
];

function StatItem({ value, suffix, label, desc, prefix, start }: typeof stats[0] & { start: boolean }) {
  const count = useCounter(value, 2200, start);
  return (
    <div className="text-center reveal">
      <div
        className="stat-number text-5xl lg:text-6xl mb-2"
        style={{ color: 'oklch(0.88 0.10 75)' }}
      >
        {prefix && <span className="text-2xl lg:text-3xl mr-1">{prefix}</span>}
        {value >= 1000 ? count.toLocaleString() : count}
        <span className="text-3xl lg:text-4xl">{suffix}</span>
      </div>
      <div
        className="text-lg font-semibold mb-1"
        style={{ fontFamily: "'Noto Serif TC', serif", color: 'white' }}
      >
        {label}
      </div>
      <div className="text-sm" style={{ color: 'oklch(0.75 0.03 75)' }}>
        {desc}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          // reveal children
          el.querySelectorAll('.reveal').forEach((child) => child.classList.add('visible'));
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24"
      style={{
        background: 'linear-gradient(135deg, oklch(0.22 0.03 55) 0%, oklch(0.20 0.04 230) 100%)',
      }}
    >
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {stats.map((stat, i) => (
            <div key={stat.label} style={{ transitionDelay: `${i * 120}ms` }}>
              <StatItem {...stat} start={started} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
