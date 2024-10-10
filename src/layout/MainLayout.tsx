import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


import style from '../style/layout/mainLayout.module.css'






export default function MainLayout() {
    return (
        <>
            <div className={style.mainlayout_container}>
                <div className={style.mianlayout_content}>
                    <NavBar />
                    <Outlet />
                </div>
            </div>
        </>
    )
}
