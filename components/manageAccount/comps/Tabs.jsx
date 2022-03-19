import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "../tabs.module.css";
import { slugify } from "./slugify";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";

export const Tabs = ({ children, initialTab }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    const router = useRouter();

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(slugify(newActiveTab));
    };

    useEffect(() => {
        if (initialTab.tab) {
            setActiveTab(initialTab.tab);
            // console.log(initialTab);
        }
    }, []);

    useEffect(() => {
        router.push(`${router.pathname}?tab=${slugify(activeTab)}`, undefined, {
            shallow: true,
        });
        // console.log(activeTab);
    }, [activeTab]);

    return (
        <div className={`container-fluid ${styles.tabsLayout}`}>
            <ul className={`${styles.tabs} d-none d-sm-block`}>
                <li className={styles.userProfile} >
                    <FaUserAlt />
                    <span>Hello User</span>
                </li>
                {children.map((tab) => {
                    const label = tab.props.label;
                    return (
                        <li
                            className={slugify(label) == activeTab ? styles.current : ""}
                            key={label}
                        >
                            <a href="#" onClick={(e) => handleClick(e, label)}>
                                {label}
                            </a>
                        </li>
                    );
                })}
                <li className="" ><Link href="/auth">Reset Password</Link></li>
                <li className="" ><Link href="/auth">Logout</Link></li>
            </ul>
            {children.map((one) => {
                if (slugify(one.props.label) == activeTab)
                    return (
                        <div key={one.props.label} className={styles.content}>
                            {one.props.children}
                        </div>
                    );
            })}
        </div>
    );
};

