import React from "react";
import { Link }from "react-router-dom"
const MyFooter = () => {
    return (

        <footer className="w-sceen bg-white shadow dark:bg-black border-t dark:border-gray-400">
            <div className="h-24 p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023
                    <Link to={"/"} className={"hover:underline"}> Kurt Gozano</Link>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to={"/about"} className="mr-4 hover:underline md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link to={"/contact"} className="hover:underline">Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>

    )
}

export default MyFooter;