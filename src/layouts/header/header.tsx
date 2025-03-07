import { Avatar, Badge, Dropdown, Input, Layout, Menu } from "antd"
import { BellOutlined, GlobalOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons"
import style from './header.module.css'

const { Header } = Layout


export const HeaderLayout = () => {
    const handleLangChange = (lang: string) => {
        console.log("Selected Language:", lang)
    }

    const menu = (
        <Menu
            onClick={({ key }) => handleLangChange(key)}
            items={[
                { key: "en", label: "English"},
                { key: "ru", label: "Russian" },
                { key: "uz", label: "O'zbek" },
            ]}
        />
    )
    return (
        <Header className={style.header}>
            <Input.Search placeholder="Qidirish..." className={style.header__search} />

            <div className={style.header__comp}>
                <Badge count={1} className={style.header__comp_badge}>
                    <BellOutlined className={style.bellotlined} />
                </Badge>
                <Dropdown overlay={menu} trigger={["click"]}>
                    <GlobalOutlined className={style.dropdown__lang} />
                </Dropdown>
                <Avatar  size='small' icon={<UserOutlined />} />
            </div>
        </Header>
    )
}