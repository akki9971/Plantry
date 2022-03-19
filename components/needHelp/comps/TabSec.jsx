import styles from './tabs.module.css';
// import { GiftVouchers } from './GiftVouchers';
// import { MyOrders } from './MyOrders';
// import { MyProfile } from './MyProfile';
// import { MyReaminders } from './MyReaminders';
// import { SavedAddresses } from './SavedAddresses';
import { Tabs } from "./Tabs";
import { TabEight, TabFive, TabFour, TabOne, TabSeven, TabSix, TabThree, TabTwo } from './SmallComps';
// import { Tickets } from './Tickets';
// import { useRouter } from "next/router";


export const TabSec = () => {
    return (
        <div className={styles.container}>
            <main>
                <Tabs >
                    <div label="My Account & My Cart">
                        <div className={styles.Card}>
                            <TabOne />
                        </div>
                    </div>
                    <div label="How to Placec An Order">
                        <div className={styles.Card}>
                            <TabTwo />
                        </div>
                    </div>
                    <div label="Delivery Information">
                        <div className={styles.Card}>
                            <TabThree />
                        </div>
                    </div>
                    <div label="Order Modification/Cancellation">
                        <div className={styles.Card}>
                            <TabFour />
                        </div>
                    </div>
                    <div label="Return & Refund Policy">
                        <div className={styles.Card}>
                            <TabFive />
                        </div>
                    </div>
                    <div label="What If I Am Unhappy With My Order">
                        <div className={styles.Card}>
                            <TabSix />
                        </div>
                    </div>
                    <div label="Vouchers/Discounts/Points">
                        <div className={styles.Card}>
                            <TabSeven />
                        </div>
                    </div>
                    <div label="Subscriptions">
                        <div className={styles.Card}>
                            <TabEight />
                        </div>
                    </div>
                </Tabs>
            </main>
        </div>
    );
}

