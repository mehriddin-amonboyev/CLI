import { useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Flex, message, Spin } from "antd";
import { useGetStatistic } from "./service/query/getStatistic";
import styles from "./home.module.css";

export const Home = () => {
    // const [totalVisible, setTotalVisible] = useState(false);
    // const { data, isLoading, error, isError } = useGetStatistic();
    // console.log(data)
    // const [messageApi, setOutput] = message.useMessage()

    //   const contentStyle: React.CSSProperties = {
    //     padding: 50,
    //     background: "rgba(0, 0, 0, 0.05)",
    //     borderRadius: 4,
    //   };

    //   const content = <div style={contentStyle} />;

    // if (isError) {
    //     messageApi.error(error.message)
    // }

    //   if (isLoading) {
    //     return (
    //       <Flex gap="middle" style={{margin: '50px 200px'}}>
    //         <Spin tip="Loading" size="large">
    //           {content}
    //         </Spin>
    //       </Flex>
    //     );
    //   }

    return (
        <>
        home
            {/* <section className={styles.home}>
                <div className={styles.home__store_balans_block}>
                    <div className={styles.home__store_balans}>
                        {totalVisible ? (
                            data?.data.totalDebt + "$"
                        ) : (
                            <p className={styles.home__balans_none}>******</p>
                        )}
                    </div>
                    <h3 className={styles.home__balans_title}>

                        Umumiy nasiya:</h3>
                </div>
            </section> */}
        </>
    );
};