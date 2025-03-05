import { Button, Card, Form, Input, Typography } from "antd";
import { LoginImage } from "../../assets/login";
import { Link, useNavigate } from "react-router-dom";

const { Title } = Typography;

const Login = () => {
    const navigate = useNavigate();
    const onFinish = (values: { phone: number; password: string }) => {
        
        navigate('/home');
    };

    return (
        <div style={{
            padding: '88px 165px',
            display: 'flex',
            gap: '77px',
            backgroundColor: '#F8F9FA'
        }}>

            <div style={{

            }}>
                <Typography style={{
                    fontWeight: 700,
                    fontSize: 32,
                    lineHeight: '125%',
                    textAlign: 'center',
                    color: '#1e6eeb'
                }}> Mijozlar  </Typography>
                <Typography style={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    maxWidth: 345,
                    fontWeight: 700,
                    fontSize: 28,
                    lineHeight: '143%',
                    textAlign: 'center',
                    color: '#060406',
                    marginBottom: 64,
                }}> Ishingizni samaraliroq boshqaring  </Typography>
                <LoginImage />
            </div>

            <div style={{
                // flex: 1,
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Card style={{ width: 515, boxShadow: '0px 50px 100px 0px rgba(56, 131, 146, 0.1)', borderRadius: 24, padding: '56px 24px' }}>
                    <Title level={2} style={{
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: 32,
                        marginBottom: 36
                    }}>
                        Xusush kelibsiz
                    </Title>
                    <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item
                            label="Telefon raqamingizni kiriting"
                            name="number"
                            rules={[{ required: true,  }]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Parol kiriting"
                            name="password"
                            rules={[{ required: true, }]}
                        >
                            <Input.Password placeholder="" />
                        </Form.Item>
                        <div style={{
                            textAlign: 'end',
                            marginBottom: 77,
                        }}>
                            <Link style={{
                                fontWeight: 600,
                                textDecoration: 'underline',
                                textDecorationSkipInk: 'none',
                                color: '#1e6eeb',
                            }}
                                to={{ pathname: '/sign-in' }}>
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
                        <Typography style={{
                            fontWeight: 500,
                            fontSize: 14,
                            lineHeight: '157%',
                        }}>
                            Hali hisobingiz yo'qmi?
                        </Typography>
                        <Link to={{ pathname: '/register' }}>
                            <Typography style={{
                                fontWeight: 600,
                                textDecoration: 'underline',
                                textDecorationSkipInk: 'none',
                                color: '#1e6eeb'
                            }}>
                                Parolni unutdinggizmi?
                            </Typography>
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Login;
