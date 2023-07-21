import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillGithub } from 'react-icons/ai';
import { GiBrazilFlag } from 'react-icons/gi';
import { LiaFlagUsaSolid } from 'react-icons/lia';

const Navbar = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('pt_br');

  useEffect(() => {
    const handleLanguageInit = () => {
      setCurrentLanguage(i18n.language || 'pt_br');
    };

    // Listen to the 'init' event to set the current language correctly
    i18n.on('initialized', handleLanguageInit);

    // If the 'initialized' event has already been triggered (e.g., the language was pre-loaded), handle it now
    if (i18n.isInitialized) {
      handleLanguageInit();
    }

    // Clean up the event listener on unmount
    return () => {
      i18n.off('initialized', handleLanguageInit);
    };
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
  };

  return (
    <div className="text-white font-semibold text-3xl w-full flex justify-center items-center p-4">
      <h1>Moon H. Kang</h1>
      <div className="mx-8">
        <a href="https://github.com/MoonCPU" target="_blank" rel="noreferrer">
          <AiFillGithub size={35} />
        </a>
      </div>
      <div className="flex flex-row">
        <GiBrazilFlag
          size={35}
          className={`mr-4 cursor-pointer ${currentLanguage === 'pt_br' ? 'text-green-500' : ''}`}
          onClick={() => changeLanguage('pt_br')}
        />
        <LiaFlagUsaSolid
          size={35}
          className={`cursor-pointer ${currentLanguage === 'en' ? 'text-green-500' : ''}`}
          onClick={() => changeLanguage('en')}
        />
      </div>
    </div>
  );
};

export default Navbar;
