import React, { useEffect, useState } from 'react'; // Import 'useState'
import { useTranslation } from 'react-i18next';
import { AiFillGithub } from 'react-icons/ai';
import { GiBrazilFlag } from 'react-icons/gi';
import { LiaFlagUsaSolid } from 'react-icons/lia';

const Navbar = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('pt_br'); // Add 'currentLanguage' state

  useEffect(() => {
    i18n.changeLanguage('pt_br');
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng); // Update the currentLanguage state on language change
  };

  return (
    <div className="text-white font-semibold text-3xl w-full flex justify-center items-center p-4">
      <h1>Moon H. Kang</h1>
      <div className="mx-8">
        <a href="https://github.com/MoonCPU" target="_blank" rel="noreferrer">
          <AiFillGithub size={35} />
        </a>
      </div>
      <div className='flex flex-row'>
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
