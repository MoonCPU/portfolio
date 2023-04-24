import React from "react";
import {AiFillGithub} from 'react-icons/ai'

const Navbar = () => {
    return(
        <div className="text-white font-semibold text-3xl w-full flex justify-center items-center my-5 ml-2">
            <h1>Moon H. Kang</h1>
            <a className="mx-8" href="https://github.com/MoonCPU" target="_blank" attribute><AiFillGithub size={35} /></a>
        </div>
    )
}

export default Navbar;