import { Table, Space, Button } from "antd";
import { columns } from "./column";
import { useDebtor } from "./services/query/useDebtor";
import { useDeleteDebtor } from "./services/mutation/usedeleteDebtor";

interface Debtor {
    id: string;
    full_name: string;
    address: string;
    description: string;
}

export const Debtors = () => {
    const { data, isError, isLoading } = useDebtor();
    const deleteDebtorMutation = useDeleteDebtor();

    if (isLoading) return <p>Yuklanmoqda...</p>;
    if (isError) return <p>Xatolik yuz berdi!</p>;

    const updatedColumns = [
        // {
        //     title: "№",
        //     dataIndex: "index",
        //     key: "index",
        //     render: (_: any, __: any, index: number) => index + 1, // 🔹 1 dan boshlab tartib raqam qo‘yiladi
        // },
        ...columns,
        {
            title: "Action",
            key: "action",
            render: (_: string, record: Debtor) => (
                <Space size="middle">
                    <Button
                        type="primary"
                        // danger
                        onClick={() => deleteDebtorMutation.mutate(record.id)}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <h2>Qarzdorlar Ro'yxati</h2>
            <Table dataSource={data.data} columns={updatedColumns} rowKey="id" />
        </div>
    );
};
