import React from 'react';
import Link from 'next/link';

const Index = () => (
    <div>
        <h1>Welcome to martin-fieber.de!</h1>
        <Link href="/legal-notice">
            <a>Legal notice</a>
        </Link>
        {' | '}
        <Link href="/privacy-policy">
            <a>Privacy policy</a>
        </Link>
    </div>
);

export default Index;
