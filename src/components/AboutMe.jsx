import {React} from "react";
import myImage from '../assets/aboutMe.png';

import {AiFillHeart} from "react-icons/ai";

import { useTranslation } from 'react-i18next';

const AboutMe = () => {
    const { t } = useTranslation();

    return(
        <div className="text-white flex flex-col max-w-2xl mx-auto">
            <div className="w-2/3 mx-auto"> 
                <div className="bg-gray-600 mx-auto p-4 text-center rounded-lg mb-8">
                    <h1>{t('aboutMe.greeting')}</h1>
                </div>
                <div className="flex flex-col justify-between sm:flex-row mb-4">
                    <div className="my-auto mx-auto sm:mx-0">
                        <h1 className="text-lg sm:text-2xl font-medium text-center sm:text-left">&lt;Moon Hyuk Kang /&gt;</h1>
                        <h2 className="text-sm mb-1 sm:my-0 text-center">developer / designer </h2>            
                        <h2 className="my-2 sm:my-1 text-center sm:text-left text-green-500 text-lg">moonkang20@gmail.com</h2>             
                    </div>
                    <div className="mx-auto sm:mx-0 mt-3 mb-1 sm:my-0">
                        <img src={myImage} alt="My Image" className="object-contain h-28 w-28 rounded-full border-2 border-white" />
                    </div>
                </div>
                <div className="text-xl my-1 font-medium">
                    <h1>{t('aboutMe.aboutTitle')}</h1>    
                </div>            
                <div>
                    <p className="indent-4">{t('aboutMe.aboutContent')}</p>    
                </div>    
                <div id="bio" className="mt-6">
                    <div className="text-xl mb-2 font-medium flex flex-col">Bio</div>
                    <div className="flex flex-row mb-1">
                        <h1>2000</h1>
                        <p className="pl-4">{t('aboutMe.birth')}</p>
                    </div>
                    <div className="flex flex-row mb-1">
                        <h1>2001</h1>
                        <p className="pl-4">{t('aboutMe.move')}</p>
                    </div>
                    <div className="flex flex-row mb-1">
                        <h1>2021</h1>
                        <p className="pl-4">{t('aboutMe.experience')}</p>
                    </div>
                    <div className="flex flex-row">
                        <h1>2022</h1>
                        <p className="pl-4">{t('aboutMe.degree')}</p>
                    </div>
                </div>
                <div id="iLove">
                    <div className="mt-6 text-xl mb-1 flex flex-row items-end">
                        <h1 className="font-medium pr-2">I
                        </h1>
                        <AiFillHeart className="text-red-500 text-2xl hover:text-red-700 duration-500 ease-in-out" />                            
                    </div>
                    <hr className="text-white mb-2 w-10" />
                    <div>
                        <h1 className="indent-4">{t('aboutMe.interests')}</h1>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default AboutMe;