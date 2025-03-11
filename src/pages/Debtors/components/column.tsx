import { Space } from "antd";
import { ColumnsType } from "antd/es/table";
import { DebtorDrop } from "./debtorDropdown";

export interface Debtor {
  id: string;
  full_name: string;
  address: string;
  description: string;
}

export const getColumns = (): ColumnsType<Debtor> => {


  return [
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
    },
    {
      title: "Action",
      key: "action",
      render: (_: string, record: Debtor) => (
        <Space size="large">
          <DebtorDrop record={record.id} />
        </Space>
      ),
    },
  ];
};
