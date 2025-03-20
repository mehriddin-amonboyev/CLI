import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Wallet } from "../../../assets/walleticon";
import { useStore } from "../services/query/useStore";
import style from '../home.module.css'
import { useAllPayments } from "../services/query/useAllPayment";
import { useLatePayment } from "../services/query/useLatePayments";
import { useDebCount } from "../services/query/useDebCount";

export const Statistic = () => {
    const { data } = useStore();
    const paymentData = useAllPayments();
    const latePayment = useLatePayment();
    const debtorCount = useDebCount();
    return (
        <div className={style.statistics}>
            <div className={style.statistics__debtor_balans}>
                {paymentData?.data?.total_amount && <h2>{paymentData.data.total_amount} so'm</h2>}
                <h4>Umumiy nasiya</h4>
            </div>
            <div className={style.statistics__debtor}>
                <div className={style.statistics__late_payment_block}>
                    <h3 className={style.statistics__payment_title}>Kechiktirilgan to'lovlar</h3>
                    <h3 className={style.statistics__late_payment}>
                        {latePayment.data?.lateDebts}
                    </h3>
                </div>
                <div className={style.statistics__debtor_count_block}>
                    <h3 className={style.statistics__payment_title}>Mijozlar soni</h3>
                    <h3 className={style.statistics__debtor_count}>
                        {debtorCount.data?.debtorCount}
                    </h3>
                </div>
            </div>
            <div className={style.statistics__balans_block}>
                <h2>Hamyoningiz</h2>
                <div className={style.statistics__balans}>
                    <div className={style.statistics__balans_wallet}>
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
