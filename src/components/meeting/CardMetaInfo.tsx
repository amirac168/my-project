import type { CardMetaInfoProps } from "../../types";
import { AvatarGroup, Tag } from "../ui";
import styles from "./meeting.module.css";

/**
 * 卡片元信息组件
 * 显示会议卡片的元信息区域
 * 包括标签、标题和用户组
 */
export const CardMetaInfo = ({
  projectTag,
  subTag,
  title,
  creators,
  collaborators,
}: CardMetaInfoProps) => (
  <div className={styles.cardMeta}>
    <div className={styles.cardTagsRow}>
      <Tag type="blue" text={projectTag} />
      <Tag type="orange" text={subTag} />
    </div>
    <div className={styles.cardTitleRow}>
      <h4 className={styles.cardTitle} title={title}>
        {title}
      </h4>
    </div>
    <div className={styles.cardPeopleRow}>
      <div className={styles.peopleGroup}>
        <span className={styles.peopleGroupLabel}>创建者</span>
        <AvatarGroup users={creators} />
      </div>
      <div className={styles.peopleGroup}>
        <span className={styles.peopleGroupLabel}>协作者</span>
        <AvatarGroup users={collaborators} />
      </div>
    </div>
  </div>
);
