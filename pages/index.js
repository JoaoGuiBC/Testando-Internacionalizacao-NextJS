import { useRouter } from 'next/router';
import Head from 'next/head';
import useSWR from 'swr';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import { useEffect, useCallback, useState } from 'react';

const loadData = async (locale) => {
  const response = await fetch('/api/hello', {
    headers: {'Accept-Language': locale},
  });

  const data = await response.json();

  return data;
};

const About = () => {
  const { locale, locales } = useRouter();
  const { formatMessage: format } = useIntl();
  const data = useSWR([locale, 'hello'], loadData).data;

  return (
    <div>
      <Head>
        <title>{format({ id: 'title' })}</title>
      </Head>
      <h1>{format({ id: 'languageInfo' })}</h1>
      <p>{format({ id: 'languageChange' })}</p>
      <nav>
        <ul>
          {locales.map(loc => (
            <li key={loc}>
              <Link href='/' locale={loc}>
                <a>
                  <p className="options">{loc}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <h3>{JSON.stringify(data, null, 2)}</h3>
    </div>
  );
}

export default About;
