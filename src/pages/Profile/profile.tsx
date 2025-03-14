import { Button } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import style from './profile.module.css'
import { Wallet } from "../../assets/walleticon";
import { useProfile } from "./service/query/useProfile";
export const Profile = () => {
    const { data } = useProfile();
    return (
        <div className={style.profile}>
            <div className={style.profile__debtor_balans}>
                <h2>Umumiy nasiya</h2>
            </div>
            <div className={style.profile__debtor}>
                <div className={style.profile__late_payment}>
                    <h3>Kechiktirilgan to'lovlar</h3>
                </div>
                <div className={style.profile__debtor_count}>
                    <h3>Mijozlar soni</h3>
                </div>
            </div>
            <div className={style.profile__balans_block}>
                <h2>Hamyoningiz</h2>
                <div className={style.profile__balans}>
                    <div className={style.profile__balans_wallet}>
                        <Wallet />
                    </div>
                    <div>
                        <h5>Hisobingizda</h5>
                        <h2>{data?.data?.wallet}so'm</h2>
                    </div>
                    <Button type="primary" shape="circle" icon={<PlusOutlined />} />
                </div>
                <div>
                    <div>
                        <h3>Bu oy uchun to'lov:</h3>
                        {(data?.data?.is_active === true)
                            ? <p>to'lov qilingan</p>
                            : <p> to'lov qilinmagan</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}