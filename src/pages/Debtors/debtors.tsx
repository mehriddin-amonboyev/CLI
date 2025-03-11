import { Table } from "antd";
import { getColumns } from "./components/column";
import { useDebtor } from "./services/query/useDebtor";

export const Debtors = () => {
    const { data } = useDebtor();
    const columns = getColumns()

    return (
        <div>
            <h2>Qarzdorlar Ro'yxati</h2>
            <Table columns={columns} dataSource={data?.data} rowKey="id" />
        </div>
    );
};
