import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Row, Space, Typography } from "antd";

const durations = [
    { key: "", label: "oyni tanlang" },
    { key: "1", label: "1 oy" },
    { key: "3", label: "3 oy" },
    { key: "6", label: "6 oy" },
    { key: "12", label: "1 yil" },
];

const DebtDurationDropdown: React.FC = () => {
    const [selectedKey, setSelectedKey] = useState<string | null>("");

    const handleMenuClick: MenuProps["onClick"] = (e) => {
        setSelectedKey(e.key);
    };

    const menuItems: MenuProps["items"] = durations.map((item) => ({
        ...item,
        onClick: handleMenuClick,
    }));

    return (
        <Dropdown menu={{ items: menuItems }} overlayStyle={{ background: "#f6f6f6", maxWidth: 20 }}>
            <div style={{background: "#f6f6f6", borderRadius: 8, padding:"14px 16px", border: "1px solid #ececec"}} >
                <Space style={{ display: "flex", justifyContent: "space-between" }}>
                    {selectedKey ? durations.find((item) => item.key === selectedKey)?.label : "Muddatni tanlang"}
                    <DownOutlined style={{ maxWidth: 30 }} />
                </Space>
            </div>
        </Dropdown>
    );
};

export default DebtDurationDropdown;
