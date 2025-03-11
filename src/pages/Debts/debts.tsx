import { Button, DatePicker, DatePickerProps, Form, Input, Typography } from "antd";
import { useAppNotification } from "../../components/Modals/Notification/services/query/useNotification";
import DebtDurationDropdown from "./components/debtDurationDropdown";
import { useCreateDebts } from "./services/mutation/useCreateDebts";
import { useLocation } from "react-router-dom";


const { Title } = Typography;
interface FormValues {
    debt_date: string,
    debt_period: number,
    debt_sum: number,
    description: string,
}

export const CreateDebts = () => {
    const createDebtsMutation = useCreateDebts();
    const notification = useAppNotification();
    const location = useLocation();
    const { debtor_id } = location.state || {}
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
    const onFinish = (values: FormValues) => {
        notification.success({
            message: "Ajoyib",
            description: "Nasiya qo'shildi"
        })
        if (debtor_id) {
            createDebtsMutation.mutate({ ...values, debtor_id }, {
                onSuccess: (data) => {
                    console.log("Successful:", data);
                },
                onError: (error) => {
                    console.log("Uploadda xatolik bor:", error.message);
                }
            });
        } else {
            console.error("debtor ID topilmadi!");
        }
    };

    return (
        <>
            <Title level={2} style={{ paddingBottom: 9 }}>Nasiya Yaratish</Title>
            <Form layout="vertical" onFinish={onFinish} style={{ width: '50%' }}>
                <Form.Item
                    label="Mahsulot nomi"
                    name="full_name"
                    rules={[{ required: false, message: "Mahsulotning nomi" }]}
                >
                    <Input placeholder="mahsulot nomini kiriting" />
                </Form.Item>

                <Form.Item
                    label="Sana"
                    name="debt_date"
                    rules={[{ required: false, message: "Sanani kiriting!" }]}
                >
                    <DatePicker onChange={onChange} style={{ width: 'full' }} />
                </Form.Item>

                <Form.Item
                    label="Muddat"
                    name="debt_peroid"
                    rules={[{ required: false }]}
                >
                    <DebtDurationDropdown />
                </Form.Item>
                <Form.Item
                    label="Summa miqdori"
                    name="debt_sum"
                    rules={[{ required: false }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="description"
                    rules={[{ required: false }]}
                >
                    <Input.TextArea rows={2} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Kiritish
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};