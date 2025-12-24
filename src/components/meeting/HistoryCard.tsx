import { useEffect, useState } from "react";
import type { HistoryCardProps } from "../../types";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ClockIcon,
  MoreIcon,
  TrashIcon,
} from "../ui";
import { CardMetaInfo } from "./CardMetaInfo";
import styles from "./meeting.module.css";

/**
 * 历史记录卡片组件
 * 显示带有可展开子项的历史会议卡片
 */
export const HistoryCard = ({ data }: HistoryCardProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasSubItems = data.subItems && data.subItems.length > 0;

  // 默认展开特定 ID 以匹配设计
  useEffect(() => {
    if (data.id === "history-1") setIsExpanded(true);
  }, [data.id]);

  return (
    <div className={`${styles.card} ${styles.historyCard}`}>
      <div
        className={styles.cardLeftDecoration}
        style={{
          backgroundColor: "#D9D9D9",
        }}
      ></div>
      {/* 历史记录卡片主体 */}
      <div
        className={styles.cardBody}
        onClick={() => hasSubItems && setIsExpanded(!isExpanded)}
        style={{ cursor: hasSubItems ? "pointer" : "default" }}
      >
        {/* 展开图标 */}
        <div className={`${styles.cardSection} ${styles.cardSectionArrow}`}>
          {hasSubItems && (isExpanded ? <ArrowDownIcon /> : <ArrowRightIcon />)}
        </div>

        {/* 主要信息 */}
        <div className={`${styles.cardSection} ${styles.cardSectionMain}`}>
          <CardMetaInfo {...data} />
        </div>

        {/* 日期范围 */}
        <div className={`${styles.cardSection} ${styles.cardSectionTimeRange}`}>
          {data.dateRange}
        </div>

        {/* 位置 */}
        <div className={`${styles.cardSection} ${styles.cardSectionLocation}`}>
          {data.location}
        </div>

        {/* 操作 */}
        <div className={`${styles.cardSection} ${styles.cardSectionAction}`}>
          <div className={styles.iconCircle}>
            <MoreIcon />
          </div>
        </div>
      </div>

      {/* 展开的子项区域 */}
      {isExpanded && hasSubItems && (
        <div className={styles.subItemsContainer}>
          {data.subItems?.map((item, idx) => (
            <div key={item.id} className={styles.subItemRow}>
              <div className={`${styles.subCol} ${styles.subColTitle}`}>
                <a href="#" className={styles.linkText} title={item.title}>
                  {item.title}
                </a>
              </div>
              <div className={`${styles.subCol} ${styles.subColTime}`}>
                时间：
                <ClockIcon />
                {item.timeRange[0]} -&nbsp;
                <ClockIcon /> {item.timeRange[1]}
              </div>
              <div className={`${styles.subCol} ${styles.subColLocation}`}>
                {item.location}
              </div>
              <div className={`${styles.subCol} ${styles.subColOwner}`}>
                {item.owner}
              </div>
              <div className={`${styles.subCol} ${styles.subColAction}`}>
                {idx === 2 ? (
                  <div className={styles.iconCircleSmall}>
                    <MoreIcon />
                  </div>
                ) : null}
                {idx === 4 ? (
                  <div className={styles.iconCircleSmall}>
                    <TrashIcon />
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
