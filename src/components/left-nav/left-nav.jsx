import React from "react";
import Menus from "../memus/menus";
import logo from "../../assets/images/logo.png"
import "./index.css"
const LeftNav = () => {
    return (
        <div className="left-nav">
            <div className="left-nav-header">
                <img src={logo} alt="logo" />
                <h1>后端专用后台</h1>
            </div>
            {/* 导航菜单 */}
            <Menus />
        </div>
    )
}
export default LeftNav