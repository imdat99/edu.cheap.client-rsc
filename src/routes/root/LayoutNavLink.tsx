"use client"
import { NavLink } from "react-router"
const links = [
    {
        name: "Trang chủ",
        to: "/"
    },
    {
        name: "Khóa học",
        to: "/courses"
    },
    {
        name: "Blog",
        to: "/blog"
    }
]
const LayoutNavLink = () => {
    return (<div className="contain-mega-menu">
        {
            links.map((link) => (
                <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                        `inline-flex items-center px-3 py-2 rounded-md font-medium text-white`
                    }
                >
                    {link.name}
                </NavLink>
            ))
        }
    </div>)
}
export default LayoutNavLink