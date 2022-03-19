import styles from '../tabs.module.css';
import { GiftVouchers } from './GiftVouchers';
import { MyOrders } from './MyOrders';
import { MyProfile } from './MyProfile';
import { MyReaminders } from './MyReaminders';
import { SavedAddresses } from './SavedAddresses';
import { Tabs } from "./Tabs";
import { Tickets } from './Tickets';
// import { useRouter } from "next/router";


export const TabSec = ({ query }) => {
    return (
        <div className={styles.container}>
            <main>
                <Tabs initialTab={query}>
                    <div label="My Profile">
                        <div className={`card p-3 ${styles.Card}`}>
                            <h5>My Profile</h5>
                            <MyProfile />
                        </div>
                    </div>
                    <div label="My Orders">
                        <div className={`card h-100 p-3 ${styles.Card}`}>
                            <MyOrders />
                        </div>
                    </div>
                    <div label="Gift Vouchers ">
                        <div className={`card h-100 p-3 ${styles.Card}`}>
                            <h5>Gift Vouchers</h5>
                            <GiftVouchers />
                        </div>
                    </div>
                    <div label="Tickets">
                        <div className={`card h-100 p-3 ${styles.Card}`}>
                            <Tickets />
                        </div>
                    </div>
                    <div label="My Reaminders">
                        <div className={`card h-100 p-3 ${styles.Card}`}>
                            <MyReaminders />
                        </div>
                    </div>
                    <div label="Saved Addresses">
                        <div className={`card h-100 p-3 ${styles.Card}`}>
                            <SavedAddresses />
                        </div>
                    </div>
                </Tabs>
            </main>
        </div>
    );
}

