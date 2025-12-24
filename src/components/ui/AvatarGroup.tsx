import type { AvatarGroupProps } from "../../types";
import styles from "./ui.module.css";

/**
 * 头像组组件
 * 显示带有重叠效果的用户头像组
 */
export const AvatarGroup = ({ users, limit = 5 }: AvatarGroupProps) => (
  <div className={styles.avatarGroup}>
    {users.slice(0, limit).map((user, index) => (
      <img
        key={index}
        src={user.avatarUrl}
        alt={user.name}
        className={`${styles.avatar} ${index === 0 ? styles.avatarFirst : ""}`}
        title={user.name}
      />
    ))}
    {users.length > limit && (
      <div className={styles.avatarMore}>+{users.length - limit}</div>
    )}
  </div>
);
