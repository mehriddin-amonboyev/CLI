import {
  BarChartOutlined,
  HomeOutlined,
  MessageFilled,
  SettingOutlined,
  TeamOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

export const items = [
  {
    label: "Bosh sahifa",
    path: "/app/dashboard",
    icon: HomeOutlined,
  },
  {
    label: "Statistika",
    path: "/app/statistic",
    icon: BarChartOutlined,
  },
  {
    label: "Qarzdorlar",
    path: "/app/debtors",
    icon: TeamOutlined,
  },
  // {
  //   label: "User",
  //   path: "sub1",
  //   icon: UserOutlined,
  //   children: [
  //     { label: "Tom", path: "/user/tom" },
  //     { label: "Bill", path: "/user/bill" },
  //     { label: "Alex", path: "/user/alex" },
  //   ],
  // },
  // {
  //   label: "Team",
  //   path: "sub2",
  //   icon: TeamOutlined,
  //   children: [
  //     { label: "Team 1", path: "/team/1" },
  //     { label: "Team 2", path: "/team/2" },
  //   ],
  // },
  {
    label: "Qarzdor yaratish",
    path: "/app/create-debtor",
    icon: UserAddOutlined
  },
  {
    label: "SMS xabarnoma",
    path: "/app/message",
    icon: MessageFilled,
  },
  {
    label: "Sozlamalar",
    path: "/app/parametr",
    icon: SettingOutlined,
  },
];
