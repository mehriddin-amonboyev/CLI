import { UserOutlined } from "@ant-design/icons"
import { Avatar } from "antd"

export const Profile = () => {
    return (
        <div>
            <h1>Shahsiy ma'lumotlar</h1>
            <Avatar size={64} icon={<UserOutlined />} />
        <h2>Ism Familiya</h2>
        <input type="text" placeholder="Ism Familiya" />
        
        <h2>Telefon raqam</h2>  
        <input type="text" placeholder="Telefon raqam" />
        <h2>Email</h2>
        <input type="text" placeholder="Email" />
        </div>
    )
}