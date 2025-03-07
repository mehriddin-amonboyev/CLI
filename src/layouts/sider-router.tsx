import {
  BarChartOutlined,
  FileOutlined,
  HomeOutlined,
  MessageFilled,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
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
    label: "qarzdorlar",
    path: "/app/deptors",
    icon: BarChartOutlined,
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
    label: "Files",
    path: "/app/create-debtor",
    icon: FileOutlined
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
