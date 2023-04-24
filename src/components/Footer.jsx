import React from "react";

const Footer = () => {
    return(
        <div className="text-gray-400 text-sm flex flex-col w-full items-center justify-center pb-5 px-4">
            <hr className='w-[80%] sm:w-[50%] mb-5' />    
            <h1>
                &copy; Moon Kang
            </h1>
            <h1 className="text-center">"Space exploration [WLP series #8]" by drei.lu (https://sketchfab.com/drei.lu) licensed under CC-BY-4.0</h1>
        </div>
    )
}

export default Footer;