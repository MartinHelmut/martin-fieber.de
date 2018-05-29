import React from 'react';
import Link from 'next/link';

import styles from './index.css';

const Page = ({ children }) => (
    <div className={styles.page}>
        <header>
            <Link href="/">
                <h1>Martin Helmut Fieber</h1>
            </Link>
        </header>
        <main>{children}</main>
        <footer>
            <Link href="/legal-notice">
                <a>Legal notice</a>
            </Link>
            {' | '}
            <Link href="/privacy-policy">
                <a>Privacy policy</a>
            </Link>
        </footer>
    </div>
);

export default Page;
