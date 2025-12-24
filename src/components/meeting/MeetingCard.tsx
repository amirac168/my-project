import type { MeetingCardProps } from "../../types";
import { Button, MoreIcon } from "../ui";
import { CardMetaInfo } from "./CardMetaInfo";
import styles from "./meeting.module.css";

/**
 * 会议卡片组件
 * 显示进行中/暂停/即将开始的会议卡片
 */
export const MeetingCard = ({ data }: MeetingCardProps) => {
  let actionBtn;
  if (data.status === "ongoing") {
    actionBtn = <Button variant="primary">进入直播</Button>;
  } else if (data.status === "paused") {
    actionBtn = <Button variant="outline">继续直播</Button>;
  } else {
    actionBtn = <Button variant="outline">开始直播</Button>;
  }

  const backgroundColorMap = {
    ongoing: "#52c41a",
    paused: "#1890ff",
    upcoming: "#E3B016",
  };

  return (
    <div className={styles.card}>
      <div
        className={styles.cardLeftDecoration}
        style={{
          backgroundColor: backgroundColorMap[data.status],
        }}
      ></div>
      <div className={styles.cardBody}>
        {/* 左侧：信息 */}
        <div className={`${styles.cardSection} ${styles.cardSectionMain}`}>
          <CardMetaInfo {...data} />
        </div>

        {/* 中间：时间 */}
        <div className={`${styles.cardSection} ${styles.cardSectionTime}`}>
          <div className="time-text">{data.startTime}</div>
          <div className={styles.timeDivider}>|</div>
          <div className="time-text">{data.endTime}</div>
        </div>

        {/* 中间：位置 */}
        <div className={`${styles.cardSection} ${styles.cardSectionLocation}`}>
          {data.location}
        </div>

        {/* 右侧：操作 */}
        <div className={`${styles.cardSection} ${styles.cardSectionAction}`}>
          {actionBtn}
          <div className="action-more-btn">
            <div className={styles.iconCircle}>
              <MoreIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
