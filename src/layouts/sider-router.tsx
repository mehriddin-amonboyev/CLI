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
  // {
  //   label: "Statistika",
  //   path: "/app/statistic",
  //   icon: BarChartOutlined,
  // },
  {
    label: "Qarzdorlar",
    path: "/app/debtors",
    icon: TeamOutlined,
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
