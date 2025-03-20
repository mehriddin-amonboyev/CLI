import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { useSearchParams } from 'react-router-dom';
import { Calendar } from 'antd';

const CalendarComp = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState(null);

    // ✅ URL'dagi sana parametrini olish yoki hozirgi sanani olish
    const selectedDate = searchParams.get('date') || dayjs().format('YYYY-MM-DD');

    // ✅ Sana bosilganda URL navigatsiyasini o'zgartirmasdan parametr yangilash.
    const onSelect = (value: Dayjs) => {
        setSearchParams(
            { date: value.format('YYYY-MM-DD') },
            { replace: true }
        ); // Navigatsiyani o‘zgartirmaydi
    };

    // ✅ Tanlangan sana bo'yicha API'dan ma'lumot olish
    useEffect(() => {
        if (selectedDate) {
            fetch(`/stores/daily-debt?date=${selectedDate}`)
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    console.log("API Ma'lumot:", data);
                })
                .catch((error) => console.error('Xatolik:', error));
        }
    }, [selectedDate]); // 🔥 Faqat `date` o‘zgarganda ishlaydi

    return (
        <div>
            <h3>Tanlangan sana: {selectedDate}</h3>
            <Calendar fullscreen={false} onSelect={onSelect} />

            <div style={{ marginTop: 20 }}>
                <h3>Ma'lumotlar:</h3>
                {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Yuklanmoqda...</p>}
            </div>
        </div>
    );
};

export default CalendarComp;
