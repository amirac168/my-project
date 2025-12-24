import type { TagProps } from "../../types";
import styles from "./ui.module.css";

/**
 * 标签组件
 * 显示带有文本的彩色标签
 */
export const Tag = ({ type, text }: TagProps) => (
  <span className={`${styles.tag} ${type === "blue" ? styles.tagBlue : styles.tagOrange}`}>{text}</span>
);
