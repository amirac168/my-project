import type { ActiveMeeting, HistoryMeeting, User } from "../types";

/**
 * Mock user data
 */
export const MOCK_USERS: User[] = [
  { id: "1", name: "User A", avatarUrl: "https://i.pravatar.cc/150?u=1" },
  { id: "2", name: "User B", avatarUrl: "https://i.pravatar.cc/150?u=2" },
  { id: "3", name: "User C", avatarUrl: "https://i.pravatar.cc/150?u=3" },
];

/**
 * Ongoing meetings data
 */
export const ONGOING_DATA: ActiveMeeting[] = [
  {
    id: "101",
    projectTag: "天美",
    subTag: "王者荣耀",
    title: "NGR流失访谈 >> Product",
    creators: [MOCK_USERS[0], MOCK_USERS[1]],
    collaborators: [MOCK_USERS[2], MOCK_USERS[0], MOCK_USERS[1]],
    startTime: "2024-10-11 18:00:00",
    endTime: "2024-10-11 19:00:00",
    location: "端手游戏体验室(深圳-D1-0445)",
    status: "ongoing",
  },
];

/**
 * Paused meetings data
 */
export const PAUSED_DATA: ActiveMeeting[] = [
  {
    id: "201",
    projectTag: "天美",
    subTag: "王者荣耀",
    title: "NGR流失访谈 >> Day5 AM",
    creators: [MOCK_USERS[1], MOCK_USERS[2]],
    collaborators: [MOCK_USERS[0], MOCK_USERS[2]],
    startTime: "2024-10-11 18:00:00",
    endTime: "2024-10-11 19:00:00",
    location: "端手游戏体验室(深圳-D1-0445)",
    status: "paused",
  },
];

/**
 * Upcoming meetings data
 */
export const UPCOMING_DATA: ActiveMeeting[] = [
  {
    id: "301",
    projectTag: "天美",
    subTag: "王者荣耀",
    title: "NGR流失访谈 >> Day5 AM",
    creators: [MOCK_USERS[0]],
    collaborators: [MOCK_USERS[1], MOCK_USERS[2]],
    startTime: "2024-10-11 18:00:00",
    endTime: "2024-10-11 19:00:00",
    location: "端手游戏体验室(深圳-D1-0445)",
    status: "upcoming",
  },
];

/**
 * History meetings data
 */
export const HISTORY_DATA: HistoryMeeting[] = [
  {
    id: "401",
    projectTag: "天美",
    subTag: "王者荣耀",
    title: "NGR流失访谈",
    creators: [MOCK_USERS[0]],
    collaborators: [MOCK_USERS[1], MOCK_USERS[2]],
    dateRange: "2024-08-19 to 2024-08-17",
    location: "端手游戏体验室(深圳-D1-0445)",
    subItems: [
      {
        id: "s1",
        title: "NGR流失访谈NGR流...",
        timeRange: ["2024-08-19 15:30", "2024-08-19 19:30"],
        location: "端手游戏体验室(深圳-D1-0445)",
        owner: "luceyyang(杨琪丹)",
      },
      {
        id: "s2",
        title: "NGR流失访谈(4)",
        timeRange: ["2024-08-19 15:30", "2024-08-19 19:30"],
        location: "端手游戏体验室(深圳-D1-0445)",
        owner: "luceyyang(杨琪丹)",
      },
      {
        id: "s3",
        title: "NGR流失访谈(3)",
        timeRange: ["2024-08-19 15:30", "2024-08-19 19:30"],
        location: "端手游戏体验室(深圳-D1-0445)",
        owner: "luceyyang(杨琪丹)",
      },
      {
        id: "s4",
        title: "NGR流失访谈(2)",
        timeRange: ["2024-08-19 15:30", "2024-08-19 19:30"],
        location: "端手游戏体验室(深圳-D1-0445)",
        owner: "luceyyang(杨琪丹)",
      },
      {
        id: "s5",
        title: "test",
        timeRange: ["2024-08-19 15:30", "2024-08-19 19:30"],
        location: "端手游戏体验室(深圳-D1-0445)",
        owner: "luceyyang(杨琪丹)",
      },
    ],
  },
  {
    id: "402",
    projectTag: "天美",
    subTag: "王者荣耀",
    title: "NGR流失访谈NGR流失访谈NGR流失访谈NG...",
    creators: [MOCK_USERS[1], MOCK_USERS[2], MOCK_USERS[0]],
    collaborators: [MOCK_USERS[2], MOCK_USERS[0]],
    dateRange: "2024-08-11 to 2024-08-16",
    location: "端手游戏体验室(深圳-D1-0445)",
  },
  {
    id: "403",
    projectTag: "天美",
    subTag: "王者荣耀",
    title: "NGR流失访谈",
    creators: [MOCK_USERS[0], MOCK_USERS[1]],
    collaborators: [MOCK_USERS[2]],
    dateRange: "2024-08-11 to 2024-08-14",
    location: "端手游戏体验室(深圳-D1-0445)",
  },
  {
    id: "404",
    projectTag: "天美",
    subTag: "王者荣耀",
    title: "NGR流失访谈",
    creators: [MOCK_USERS[2]],
    collaborators: [MOCK_USERS[1], MOCK_USERS[0]],
    dateRange: "2024-08-08 to 2024-08-10",
    location: "端手游戏体验室(深圳-D1-0445)",
  },
  {
    id: "405",
    projectTag: "天美",
    subTag: "王者荣耀",
    title: "NGR流失访谈",
    creators: [MOCK_USERS[0]],
    collaborators: [MOCK_USERS[1], MOCK_USERS[2]],
    dateRange: "2024-08-08 to 2024-08-10",
    location: "端手游戏体验室(深圳-D1-0445)",
  },
];
