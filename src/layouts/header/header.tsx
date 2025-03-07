import { Avatar, Badge, Dropdown, Input, Layout, Menu, MenuProps } from "antd"
import { BellOutlined, GlobalOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons"
import style from './header.module.css'
import { useNavigate } from "react-router-dom"

const { Header } = Layout


export const HeaderLayout = () => {
    const navigate = useNavigate()
    const handleLangChange = (lang: string) => {
        console.log("Selected Language:", lang)
    }

    const langItems = [
        { key: "en", label: "English" },
        { key: "ru", label: "Russian" },
        { key: "uz", label: "O'zbek" },
    ]
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/")
    }
    const menuItems: MenuProps['items'] = [
        { key: "profile", label: "Profil" },
        { key: "logout", label: "Chiqish", onClick: logout },

    ]
    return (
        <Header className={style.header}>
            <Input.Search placeholder="Qidirish..." className={style.header__search} />

            <div className={style.header__comp}>
                <Badge count={1} className={style.header__comp_badge}>
                    <BellOutlined className={style.bellotlined} />
                </Badge>
                <Dropdown menu={{ items: langItems }} placement="bottomRight">
                    <GlobalOutlined className={style.dropdown__lang} />
                </Dropdown>
                <Dropdown
                    menu={{ items: menuItems }}
                    placement="bottomRight"
                >
                    <Avatar size='small' icon={<UserOutlined />} />
                </Dropdown>
            </div>
        </Header>
    )
}