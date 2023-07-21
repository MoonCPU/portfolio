import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          aboutMe: {
            "greeting": "Hello, I'm a Front-End developer based in Brazil!",
            "role": "developer / designer / artist",
            "aboutTitle": "About me",
            "aboutContent": "I am a DevOps engineer and application developer, currently working at IBM. I've been learning and practicing with a series of programming languages and technology for the last year to make it as a professional Front-End developer.",
            "birth": "Born in Asunción, Paraguay.",
            "move": "Moved to São Paulo, Brazil.",
            "experience": "My first professional experience in IT as an intern at IBM.",
            "degree": "Completed my Associate Degree in Systems Analysis and Development at FATEC (Faculdade de Tecnologia de São Paulo)",
            "interests": "Movies, Books by Rick Riordan, Gaming and Drawing while listening to Podcasts."
          },
          works: {
            "title": "Works",
            "work1": "A school library management system made in Python.",
            "work2": "A website for a fictional sushi restaurant I made.",
            "work3": "A Pokédex project using the famous Pokémon API.",
            "work4": "Full-stack project using Express for Back-End and React for Front-End coming soon."
          }
        },
      },
      pt_br: {
        translation: {
          aboutMe: {
            "greeting": "Olá, sou um desenvolvedor Front-End baseado no Brasil!",
            "role": "desenvolvedor / designer / artista",
            "aboutTitle": "Sobre mim",
            "aboutContent": "Sou um engenheiro DevOps e desenvolvedor de aplicativos, atualmente trabalhando na IBM. Tenho aprendido e praticado com uma série de linguagens de programação e tecnologias nos últimos anos para me tornar um desenvolvedor Front-End profissional.",
            "birth": "Nascido em Assunção, Paraguai.",
            "move": "Me mudei para São Paulo, Brasil.",
            "experience": "Minha primeira experiência profissional em TI como estagiário na IBM.",
            "degree": "Concluí meu Diploma de Tecnólogo em Análise e Desenvolvimento de Sistemas na FATEC (Faculdade de Tecnologia de São Paulo)",
            "interests": "Filmes, Livros de Rick Riordan, Jogos e Desenhar enquanto ouço Podcasts."
          },
          works: {
            "title": "Trabalhos",
            "work1": "Um sistema de gerenciamento de biblioteca escolar feito em Python.",
            "work2": "Um site para um restaurante de sushi fictício que eu criei.",
            "work3": "Um projeto de Pokédex usando a famosa API de Pokémon.",
            "work4": "Projeto full-stack utilizando Express para o Back-End e React para o Front-End em breve."
          }
        },
      },
    },
  });

export default i18n;