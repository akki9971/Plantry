import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./tabs.module.css";
// import { slugify } from "./slugify";
import { FaUserAlt } from "react-icons/fa";
import Link from "next/link";

export const Tabs = ({ children, initialTab }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);
    const router = useRouter();

    const handleClick = (e, newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    };

    return (
        <div className={styles.tabsLayout}>
            <ul className={`${styles.tabs} `}>
                {children.map((tab) => {
                    const label = tab.props.label;
                    return (
                        <li
                            className={label == activeTab ? styles.current : ""}
                            onClick={(e) => handleClick(e, label)}
                            key={label}
                        >
                            {label}
                        </li>
                    );
                })}
            </ul>
            {children.map((one) => {
                if (one.props.label == activeTab)
                    return (
                        <div key={one.props.label} className={styles.content}>
                            {one.props.children}
                        </div>
                    );
            })}
        </div>
    );
};

