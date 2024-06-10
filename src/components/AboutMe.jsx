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

            </div>
        </div>
    )
}

export default AboutMe;