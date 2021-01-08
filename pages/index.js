import { useRouter } from 'next/router';
import useSWR from 'swr';
import Link from 'next/link';
import { useIntl } from 'react-intl';
import { useEffect, useState } from 'react';

const loadData = async (locale) => {
  const response = await fetch('/api/hello', {
    headers: {'Accept-Language': locale},
  });

  const data = await response.json();

  return data;
};

export default function About() {
  const { locale, locales } = useRouter();
  const { data } = useSWR([locale, 'hello'], loadData);
  const { formatMessage: format } = useIntl();

  return (
    <div>
      <h1>{format({ id: 'languageInfo' })}</h1>
      <p>{format({ id: 'languageChange' })}</p>
      <nav>
        <ul>
          {locales.map(loc => (
            <li key={loc}>
              <Link href='/' locale={loc}>
                <a>{loc}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <h3>{JSON.stringify(data, null, 2)}</h3>
    </div>
  );
}
