import { EditOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';
import { useDeleteDebtor } from '../services/mutation/usedeleteDebtor';
import { useAppNotification } from '../../../components/Modals/Notification/services/query/useNotification';
import { useCreateDebts } from '../../Debts/services/mutation/useCreateDebts';

export const DebtorDrop = (record: any) => {

    const navigate = useNavigate();
    const notification = useAppNotification();
    const deleteDebtorMutation = useDeleteDebtor();
    const createDebtsMutation = useCreateDebts();

    const handleDelete = () => {
        deleteDebtorMutation.mutate(record.record, {
            onSuccess: () => notification.success({
                message: "Delete",
                description: "Debtor ro'yxatdan o'chirildi"
            }),
        })
    }
    const createDebts = () => {
        navigate(`create-debts/${record.record}`, { state: { id: record.record } });
    }


    const items: MenuProps['items'] = [
        {
            key: '1',
            label: "Nasiya qo'shish",
            onClick: createDebts,
        },
        {
            key: '2',
            label: 'Tahrirlash',
        },
        {
            key: '3',
            label: "O'chirish",
            onClick: handleDelete,
        },
    ];
    return (
        <Dropdown
            menu={{
                items,
            }}
        >
            <Typography.Link>
                <Space>
                    <EditOutlined />
                </Space>
            </Typography.Link>
        </Dropdown>

    );
}
