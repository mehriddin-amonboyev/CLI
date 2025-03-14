import { Button, Flex, Table } from "antd";
import { getColumns } from "./components/column";
import { useDebtor } from "./services/query/useDebtor";
import { Link } from "react-router-dom";
import { UserAddOutlined } from "@ant-design/icons";

export const Debtors = () => {
    const { data } = useDebtor();
    const columns = getColumns()

    return (
        <div style={{ width: '90%' }}>
            <h2>Qarzdorlar Ro'yxati</h2>
            <Table columns={columns} dataSource={data?.data} rowKey="id" />
            <div style={{
                display: "flex",
                justifyContent: "flex-end",
            }}>
                <Button type="primary"
                    icon={<UserAddOutlined />}
                    href="/app/create-debtor"
                >
                    Qarzdor yaratish
                </Button>
            </div>
        </div>
    );
};
