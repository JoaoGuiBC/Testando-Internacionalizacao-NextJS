import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import '../styles/globals.css'

const messages = {
  pt: {
    languageInfo: 'A linguagem atual é português',
    languageChange: 'Troque a linguagem nas opções abaixo:'
  },

  en: {
    languageInfo: 'The current language is english',
    languageChange: 'Change the language in the options below:'
  },

  es: {
    languageInfo: 'El idioma actual es el español',
    languageChange: 'Cambiar el idioma en las opciones siguientes:'
  },
}

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp
