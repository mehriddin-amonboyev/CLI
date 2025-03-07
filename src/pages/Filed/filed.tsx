import { Button, Form, Input } from "antd"
import { UploadCard } from "./components/upload-card"
import { UploadPassport } from "./components/upload-passport"
import { useCreateDebtor } from "./service/mutation/useCreateDebtor"
// import { useNavigate } from "react-router-dom"


export const Filed = () => {
    // const navigate = useNavigate();
    const createDebtorMutation = useCreateDebtor();
    
    const onFinish = (values: {
        full_name: string,
        addres: string,
        description: string,
        store_id: string,
    }) => {
        createDebtorMutation.mutate(values, {
            onSuccess: (data) => {
                console.log("successfule", data);
            },
            onError: (error) => {
                console.log("Uploadda error bor ", error);
            }
        })
    }
    return (
        <>
            <Form layout="vertical" onFinish={onFinish} style={{width:'50%'}}>
                <Form.Item label="Ismi*" name="full_name" rules={[{ required: false }]}>
                    <Input placeholder="Test Testov" width={20} />
                </Form.Item>
                {/* <Form.Item label="Telefon raqami*" name="phone_number" rules={[{ required: false }]}>
                    <Input />
                    <Input />
                </Form.Item> */}
                <Form.Item label="Yashash manzili" name="adress" rules={[{ required: false }]}>
                    <Input placeholder="Yashnabod, Kadisheva b. S3.56-uy" />
                </Form.Item>
                <Form.Item label="Eslatma" name="description" rules={[{ required: false }]}>
                    <Input placeholder="Affirislarga qoldi kunim" />
                </Form.Item>
                <UploadCard />
                <UploadPassport />
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        Kirish
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}