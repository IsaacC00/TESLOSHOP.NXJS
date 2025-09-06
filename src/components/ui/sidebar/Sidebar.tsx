'use client';

import Link from "next/link";
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"
import { useUIStore } from "@/store";
import clsx from "clsx";


const publicRoutes = [
    {
        icon: <IoPersonOutline size={20} />,
        route: '/',
        title: 'Perfil'
    },
    {
        icon: <IoTicketOutline size={20} />,
        route: '/',
        title: 'Ordenes'
    },
    {
        icon: <IoLogInOutline size={20} />,
        route: '/',
        title: 'Ingresar'
    },
    {
        icon: <IoLogOutOutline size={20} />,
        route: '/',
        title: 'Salir'
    },

]

const privateRoutes = [
    {
        icon: <IoShirtOutline size={20} />,
        route: '/',
        title: 'Productos'
    },
    {
        icon: <IoTicketOutline size={20} />,
        route: '/',
        title: 'Ordenes'
    },
    {
        icon: <IoPeopleOutline size={20} />,
        route: '/',
        title: 'Usuario'
    },

]

export const Sidebar = () => {

    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeSideMenu = useUIStore(state => state.closeSideMenu);

    return (
        <div>
            {/* Black Background */}
            {
                isSideMenuOpen &&
                <div
                    className="fixed top-0 left-0 w-screen h-screen z-10 bg-black/30"
                />
            }

            {/* BLUR */}
            {
                isSideMenuOpen &&
                <div
                    onClick={closeSideMenu}
                    className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-sm"
                />
            }

            {/* Sidemenu */}

            <nav
                className={
                    clsx(
                        "fixed p-5 right-0 top-0 w-[250px] sm:w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300"
                        , {'translate-x-full': !isSideMenuOpen}
                    )
                }
            >


                <IoCloseOutline
                    size={30}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={closeSideMenu}
                />

                {/* input */}
                <div className="relative mt-14">
                    <IoSearchOutline
                        size={20}
                        className="absolute top-2 left-2"
                    />
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="w-full bg-gray-50 pl-10 py-1 pr-10 border-b-2 text-lg  border-gray-200 focus:outline-none focus:border-blue-300"
                    />
                </div>
                {/* Menu */}

                {
                    publicRoutes.map(item => (
                        <Link
                            key={item.title}
                            href={item.route}
                            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                        >
                            {item.icon}
                            <span className="ml-3 text-lg">{item.title}</span>
                        </Link>))
                }

                <div className="w-full h-px bg-gray-200 my-10">
                    {privateRoutes.map(item => (
                        <Link
                            key={item.title}
                            href={item.route}
                            className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
                        >
                            {item.icon}
                            <span className="ml-3 text-lg">{item.title}</span>
                        </Link>
                    ))}
                </div>


            </nav>
        </div>
    )
}
