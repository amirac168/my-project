import type { HeaderProps } from "../../types";
import { SearchIcon } from "../ui";
import styles from "./layout.module.css";

/**
 * 页头组件
 * 显示页面标题和搜索框
 */
export const Header = ({ title, count }: HeaderProps) => (
  <header className={styles.header}>
    <h1 className={styles.pageTitle}>
      {title} {count !== undefined && `(${count})`}
    </h1>
    <div className={styles.searchBox}>
      <SearchIcon />
      <input type="text" placeholder="请输入关键词" />
    </div>
  </header>
);
