import React from 'react'
import {GiTechnoHeart} from 'react-icons/gi';
import {BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoNodejs, BiLogoDocker} from 'react-icons/bi';

function Tech() {
    return (
        <div className='text-white flex flex-col max-w-2xl mx-auto mt-6 items-center justify-center'>
            <div className="w-2/3 mx-auto flex flex-col"> 
                <div className=" text-xl mb-1 flex flex-row items-end">
                    <h1 className="font-medium pr-2">Tech
                    </h1>
                    <GiTechnoHeart className="text-green-500 text-2xl hover:text-green-700 duration-500 ease-in-out animate-bounce" />                            
                </div>
                <hr className="text-white mb-2 w-20" />
            </div>
            <div id='logos' className='flex flex-wrap items-center justify-evenly gap-2 w-2/3 mx-auto mt-1'>
                <div className='flex flex-row items-center justify-center gap-x-2'>
                    <BiLogoPostgresql size={48} className="text-[#008bb9] hover:rotate-[25deg] duration-300 ease-in-out" />
                    <h1>Postgres</h1>
                </div>                
                <div className='flex flex-row items-center justify-center gap-x-2'>
                    <BiLogoPython size={48} className="text-[#ffde57] hover:rotate-[25deg] duration-300 ease-in-out" />
                    <h1>Python</h1>
                </div>
                <div className='flex flex-row items-center justify-center gap-x-2'>
                    <BiLogoReact size={48} className="text-[#61dbfb] hover:rotate-180 duration-300 ease-in-out" />
                    <h1>React</h1>
                </div>
                <div className='flex flex-row items-center justify-center gap-x-2'>
                    <BiLogoNodejs size={48} className="text-[#68a063] hover:rotate-[25deg] duration-300 ease-in-out" />
                    <h1>Node</h1>
                </div>
                
                <div className='flex flex-row items-center justify-center gap-x-2'>
                    <BiLogoDocker size={48} className="text-[#0db7ed] hover:rotate-[25deg] duration-300 ease-in-out" />
                    <h1>Docker</h1>
                </div>
            </div>
        </div>
    )
}

export default Tech