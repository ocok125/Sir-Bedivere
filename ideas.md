# 木南國際貿易有限公司官方網站 — 設計構想

## 選定方案：信任陽光商務風（Trustworthy Sunshine Commerce）

**Design Movement**: 現代商務陽光主義（Modern Solar Commerce）

**Core Principles**:
1. 明亮、陽光、誠信——以金色系喚起財富感與信任感
2. 非對稱佈局——左右分割、錯位排版，避免單調置中
3. 資訊層次清晰——大標題 serif 權威感，內文 sans 易讀性
4. 動態細節——計數、Marquee、Reveal 動畫強化互動體驗

**Color Philosophy**:
- 主色：琥珀金 amber-400/500（#FBBF24 / #F59E0B）→ 財富、陽光、活力
- 輔色：靛藍 indigo-600/700（#4F46E5 / #4338CA）→ 信任、穩重、專業
- 背景：純白 + 淡金漸層區塊
- 深色區：gray-900 用於 Stats、Process CTA

**Layout Paradigm**:
- Hero：左右 6:4 分割，左側金色背景圖，右側白底數據卡片
- About：非對稱 5:7 佈局，圖片浮動卡片
- Services：左圖右卡 2 欄
- 其他 Section：交替左右、全寬深色帶

**Signature Elements**:
1. 金色圓形 Logo 圖示 + 公司名稱雙語
2. 統編標籤卡片（合法立案視覺化）
3. 平台 Logo Marquee 無縫滾動帶

**Interaction Philosophy**:
- 每個 CTA 按鈕 active 時 scale(0.97)
- 卡片 hover：scale + 金色邊框 + 上浮陰影
- 導覽列滾動後加白底 + 陰影

**Animation**:
- PageSplash：品牌 Logo + 跳動點，1.6 秒淡出
- Section Reveal：IntersectionObserver 淡入上浮
- 計數動畫：Stats 數字滾動
- Marquee：CSS @keyframes 30-40 秒一圈

**Typography System**:
- 標題：Noto Serif TC（700/900）→ 權威、傳統、信任
- 內文：Noto Sans TC（400/500）→ 清晰、現代、易讀
- 數字強調：tabular-nums，amber 色
