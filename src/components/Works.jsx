import React from "react";
import { motion } from "framer-motion";

import project1 from "../assets/project1.png";

const Works = () => {

    const container = {
        hidden: { scale: 0 },
        show: {
            scale: 1,
            transition: {
                staggerChildren: 0.3,
                ease: "easeInOut",
                duration: 0.7
            }
        }
    }

    const item = {
        hidden: { scale: 0 },
        show: { scale: 1 },
    }

    return(
        <div className="text-white flex flex-col max-w-2xl mx-auto">
            <div className="w-2/3 mx-auto mb-2"> 
                <h1 className="text-xl font-medium">Works</h1>
            </div>
            <motion.div className="grid grid-cols-2 gap-2 w-2/3 mx-auto" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <motion.div className="max-w-sm col-span-1 flex flex-col items-center gap-1" variants={item}>
                    <a href="https://github.com/MoonCPU/IES300" target="_blank">
                        <img src={project1} alt="My Image" className="w-full h-40 rounded-lg" />                        
                    </a>
                    <h1 className="border-b border-white my-1">
                        IES300    
                    </h1>       
                    <p className="px-1 text-center">A school library management system. All books are marked down, their return dates and the name and school ID of the student who borrowed them.</p>             
                </motion.div>

                <motion.div className="max-w-sm col-span-1 flex flex-col items-center gap-1" variants={item}>
                    <a href="">
                        <img src={project1} alt="My Image" className="w-full h-40 rounded-lg" />                        
                    </a>
                    <h1 className="border-b border-white my-1">
                        Site 1    
                    </h1>       
                    <p className="px-1 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptas. Cum sunt recusandae explicabo. Sed non provident recusandae natus dolor sunt.</p>             
                </motion.div>

                <motion.div className="max-w-sm col-span-1 flex flex-col items-center gap-1 mt-1" variants={item}>
                    <a href="">
                        <img src={project1} alt="My Image" className="w-full h-40 rounded-lg" />  
                    </a>
                    <h1 className="border-b border-white my-1">
                        Site 2    
                    </h1>       
                    <p className="px-1 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt ullam saepe excepturi, ducimus maxime iure facilis temporibus rerum. Odit molestias eveniet ipsam tempora!</p>             
                </motion.div>

                <motion.div className="max-w-sm col-span-1 flex flex-col items-center gap-1 mt-1" variants={item}>
                    <a href="">
                        <img src={project1} alt="My Image" className="w-full h-40 rounded-lg" />                        
                    </a>
                    <h1 className="border-b border-white my-1">
                        Site 3    
                    </h1>       
                    <p className="px-1 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor accusantium reiciendis commodi praesentium omnis vero!</p>             
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Works;