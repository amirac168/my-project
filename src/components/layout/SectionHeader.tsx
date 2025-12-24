import type { SectionHeaderProps } from "../../types";
import styles from "./layout.module.css";

/**
 * 区块标题组件
 * 显示区块标题
 */
export const SectionHeader = ({ title }: SectionHeaderProps) => (
  <h3 className={styles.sectionTitle}>{title}</h3>
);
