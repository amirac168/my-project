import { Header, SectionHeader } from "./components/layout";
import { HistoryCard, MeetingCard } from "./components/meeting";
import {
  HISTORY_DATA,
  ONGOING_DATA,
  PAUSED_DATA,
  UPCOMING_DATA,
} from "./constants/mockData";

/**
 * @TODO 没有 100% 还原设计稿，大体在这基础上微调即可
 */

export default function App() {
  return (
    <>
      {/* 顶部色块 */}
      <div className="topBar"></div>

      <div className="app-container">
        {/* Header */}
        <Header title="我的座谈会" count={999} />

        {/* Section 1: 进行中 */}
        <section>
          <SectionHeader title="进行中" />
          {ONGOING_DATA.map((item) => (
            <MeetingCard key={item.id} data={item} />
          ))}
        </section>

        {/* Section 2: 暂停中 */}
        <section>
          <SectionHeader title="暂停中" />
          {PAUSED_DATA.map((item) => (
            <MeetingCard key={item.id} data={item} />
          ))}
        </section>

        {/* Section 3: 未开始 */}
        <section>
          <SectionHeader title="未开始" />
          {UPCOMING_DATA.map((item) => (
            <MeetingCard key={item.id} data={item} />
          ))}
        </section>

        {/* Section 4: 历史数据 */}
        <section>
          <SectionHeader title="历史数据" />
          {HISTORY_DATA.map((item) => (
            <HistoryCard key={item.id} data={item} />
          ))}
        </section>
      </div>
    </>
  );
}
