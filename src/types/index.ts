/**
 * User type definition
 */
export interface User {
  id: string;
  name: string;
  avatarUrl: string;
}

/**
 * Base meeting type with common properties
 */
export interface MeetingBase {
  id: string;
  projectTag: string;
  subTag: string;
  title: string;
  creators: User[];
  collaborators: User[];
  location: string;
}

/**
 * Active meeting type for ongoing/paused/upcoming meetings
 */
export interface ActiveMeeting extends MeetingBase {
  startTime: string;
  endTime: string;
  status: "ongoing" | "paused" | "upcoming";
}

export interface HistorySubItem {
  id: string;
  title: string;
  timeRange: string[];
  location: string;
  owner: string;
}

export interface HistoryMeeting extends MeetingBase {
  dateRange: string;
  subItems?: HistorySubItem[];
}

export interface TagProps {
  type: "blue" | "orange";
  text: string;
}

export interface AvatarGroupProps {
  users: User[];
  limit?: number;
}

export interface ButtonProps {
  variant?: "primary" | "outline";
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export interface SectionHeaderProps {
  title: string;
}

export interface CardMetaInfoProps {
  projectTag: string;
  subTag: string;
  title: string;
  creators: User[];
  collaborators: User[];
}

export interface MeetingCardProps {
  data: ActiveMeeting;
}

export interface HistoryCardProps {
  data: HistoryMeeting;
}

export interface HeaderProps {
  title: string;
  count?: number;
}
