import { NavLink, Outlet } from "react-router-dom"

export function About(props){
    return (
        <div className="about">
            <h1 className="page-header">使用说明</h1>
            <p>通过此系统来熟悉react以及react router的使用</p>
            <NavLink to='email'>email</NavLink>
            <NavLink to='tel'>tel</NavLink>
            <div>
            <Outlet></Outlet></div>
        </div>
    )
}