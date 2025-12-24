import type { ButtonProps } from "../../types";
import styles from "./ui.module.css";

/**
 * 按钮组件
 * 可复用的按钮，支持主要和轮廓两种变体
 */
export const Button = ({
  variant = "primary",
  children,
  style,
  onClick,
}: ButtonProps) => (
  <button
    className={`${styles.btn} ${variant === "primary" ? styles.btnPrimary : styles.btnOutline}`}
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
);
