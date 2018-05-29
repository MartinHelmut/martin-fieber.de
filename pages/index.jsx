import React from 'react';
import Link from 'next/link';

const Index = () => (
    <div>
        <h1>Welcome to martin-fieber.de!</h1>
        <Link href="/legalNotice">
            <a>Legal notice</a>
        </Link>
        {' | '}
        <Link href="/privacyPolicy">
            <a>Privacy policy</a>
        </Link>
    </div>
);

export default Index;
