import { Button, Card, Form, Input, Typography } from "antd";
import { LoginImage } from "../../assets/login";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "./service/mutation/loginUser";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/authSlice";

const { Title } = Typography;

const Login = () => {
    const navigate = useNavigate();
    const loginMutation = useLogin();
    const dispatch = useDispatch();

    const onFinish = (values: { login: string; password: string }) => {
        loginMutation.mutate(values, {
            onSuccess: (data) => {
                dispatch(setUser({ token: data.data }));
                navigate('/app/dashboard');
            },
            onError: (error) => {
                console.log("Login failed", error);
            }
        });
    };

    return (
        <div style={{ padding: '88px 165px', display: 'flex', gap: '77px', backgroundColor: '#F8F9FA' }}>
            <div>
                <Typography style={{ fontWeight: 700, fontSize: 32, textAlign: 'center', color: '#1e6eeb' }}> Mijozlar </Typography>
                <Typography style={{
                    fontWeight: 700, fontSize: 28, textAlign: 'center',
                    color: '#060406', marginBottom: 64
                }}> Ishingizni samaraliroq boshqaring </Typography>
                <LoginImage />
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Card style={{ width: 515, boxShadow: '0px 50px 100px rgba(56, 131, 146, 0.1)', borderRadius: 24, padding: '56px 24px' }}>
                    <Title level={2} style={{ textAlign: 'center', fontWeight: 700, fontSize: 32, marginBottom: 36 }}>
                        Xush kelibsiz
                    </Title>
                    <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item label="Username kiriting" name="login" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Parol kiriting" name="password" rules={[{ required: true }]}>
                            <Input.Password />
                        </Form.Item>
                        <div style={{ textAlign: 'end', marginBottom: 77 }}>
                            <Link style={{ fontWeight: 600, textDecoration: 'underline', color: '#1e6eeb' }} to="/sign-in">
                                Parolni unutdinggizmi?
                            </Link>
                        </div>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Kirish
                            </Button>
                        </Form.Item>
                    </Form>
                    <div style={{ display: "flex", justifyContent: "center", gap: 4 }}>
                        <Typography style={{ fontWeight: 500, fontSize: 14 }}>Hali hisobingiz yo'qmi?</Typography>
                        <Link to="app/register">
                            <Typography style={{ fontWeight: 600, textDecoration: 'underline', color: '#1e6eeb' }}>
                                Ro'yxatdan o'tish
                            </Typography>
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Login;
