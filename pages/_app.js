import Head from 'next/head';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import '../styles/globals.css'

const messages = {
  pt: {
    languageInfo: 'A linguagem atual é português',
    languageChange: 'Troque a linguagem nas opções abaixo:',
    name: 'Nome: ',
    title: 'Internacionalização',
  },

  en: {
    languageInfo: 'The current language is english',
    languageChange: 'Change the language in the options below:',
    name: 'Name: ',
    title: 'Internationalization',
  },

  es: {
    languageInfo: 'El idioma actual es el español',
    languageChange: 'Cambiar el idioma en las opciones siguientes:',
    name: 'Nombre: ',
    title: 'Internacionalización',
  },
}

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp
