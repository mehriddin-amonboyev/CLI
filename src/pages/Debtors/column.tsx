import { Button, Space } from "antd";
import { useDeleteDebtor } from "./services/mutation/usedeleteDebtor";

export const columns = [
  // {
  //     title: "№",
  //     dataIndex: "index",
  //     key: "index",
  //     render: (_: any, __: any, index: number) => index + 1, // 🔹 1 dan boshlab tartib raqam qo‘yiladi
  // },
  {
    title: "Ism Familiya",
    dataIndex: "full_name",
    key: "full_name",
  },
  {
    title: "Manzil",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Izoh",
    dataIndex: "description",
    key: "description",
  }
];