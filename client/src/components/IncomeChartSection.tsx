import { useEffect, useRef } from 'react';
import {
  AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Legend
} from 'recharts';

const monthlyData = [
  { month: '1月', income: 8000 },
  { month: '2月', income: 11000 },
  { month: '3月', income: 14500 },
  { month: '4月', income: 18000 },
  { month: '5月', income: 22000 },
  { month: '6月', income: 26000 },
  { month: '7月', income: 30000 },
  { month: '8月', income: 35000 },
  { month: '9月', income: 39000 },
  { month: '10月', income: 43000 },
  { month: '11月', income: 48000 },
  { month: '12月', income: 52000 },
];

const platformData = [
  { platform: 'Amazon', income: 52000 },
  { platform: 'eBay', income: 38000 },
  { platform: 'Walmart', income: 32000 },
  { platform: 'Zalando', income: 28000 },
  { platform: 'Galaxus', income: 24000 },
  { platform: 'Etsy', income: 20000 },
];

const formatNT = (value: number) => `NT$${(value / 1000).toFixed(0)}K`;

export default function IncomeChartSection() {
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
      id="income"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24"
      style={{ background: 'oklch(0.98 0.01 75)' }}
    >
      <div className="container">
        {/* 標題 */}
        <div className="text-center mb-14">
          <div className="section-label mb-3 reveal">收益成效</div>
          <h2 className="section-title text-3xl lg:text-4xl mb-4 reveal">
            真實數據，見證成長
          </h2>
          <p className="section-subtitle max-w-xl mx-auto reveal">
            從第一個月的 NT$8,000 起步，到第十二個月突破 NT$52,000，穩定成長的收益曲線。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 折線面積圖 */}
          <div
            className="morandi-card rounded-2xl p-6 reveal"
          >
            <h3
              className="text-base font-bold mb-6"
              style={{ fontFamily: "'Noto Serif TC', serif", color: 'oklch(0.25 0.02 55)' }}
            >
              月收益成長曲線（12 個月）
            </h3>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={monthlyData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                <defs>
                  <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="oklch(0.72 0.09 30)" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="oklch(0.72 0.09 30)" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0.02 75)" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11, fill: 'oklch(0.55 0.03 55)', fontFamily: "'Noto Sans TC', sans-serif" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={formatNT}
                  tick={{ fontSize: 11, fill: 'oklch(0.55 0.03 55)', fontFamily: "'Noto Sans TC', sans-serif" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  formatter={(value: number) => [`NT$${value.toLocaleString()}`, '月收益']}
                  contentStyle={{
                    background: 'white',
                    border: '1px solid oklch(0.88 0.02 75)',
                    borderRadius: '8px',
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontSize: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="income"
                  stroke="oklch(0.72 0.09 30)"
                  strokeWidth={2.5}
                  fill="url(#incomeGradient)"
                  dot={{ fill: 'oklch(0.72 0.09 30)', r: 3 }}
                  activeDot={{ r: 5, fill: 'oklch(0.72 0.09 30)' }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* 柱狀圖 */}
          <div
            className="morandi-card rounded-2xl p-6 reveal"
            style={{ transitionDelay: '120ms' }}
          >
            <h3
              className="text-base font-bold mb-6"
              style={{ fontFamily: "'Noto Serif TC', serif", color: 'oklch(0.25 0.02 55)' }}
            >
              各平台平均月收益比較
            </h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={platformData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.72 0.09 30)" />
                    <stop offset="100%" stopColor="oklch(0.82 0.10 75)" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.90 0.02 75)" vertical={false} />
                <XAxis
                  dataKey="platform"
                  tick={{ fontSize: 11, fill: 'oklch(0.55 0.03 55)', fontFamily: "'Noto Sans TC', sans-serif" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tickFormatter={formatNT}
                  tick={{ fontSize: 11, fill: 'oklch(0.55 0.03 55)', fontFamily: "'Noto Sans TC', sans-serif" }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  formatter={(value: number) => [`NT$${value.toLocaleString()}`, '平均月收益']}
                  contentStyle={{
                    background: 'white',
                    border: '1px solid oklch(0.88 0.02 75)',
                    borderRadius: '8px',
                    fontFamily: "'Noto Sans TC', sans-serif",
                    fontSize: '12px',
                  }}
                />
                <Bar dataKey="income" fill="url(#barGradient)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
