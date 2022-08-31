import React from "react";
import logo from "../logo.png";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
    const { t } = useTranslation();
    const user = { firstName: "Admin", lastName: "Password" };
    return (
        <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img className="navbar-logo" src={logo} alt="logo" />

                    <strong>{t("app_name")}</strong>
                </a>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        {t("weekley_basket_menu")}
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <p>{t("hello_user", {user})}</p>
                    </div>
                    <div className="navbar-item">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;