import React from 'react';
import Link from 'gatsby-link';

import Container from '../components/container';

export default ({ children }) => (
    <Container>
        <Link to="/">
            <h1>Martin Helmut Fieber</h1>
        </Link>
        {children()}
        <hr />
        <aside>
            <Link to="/legal-notice">legal notice</Link>
            {' | '}
            <Link to="/privacy-policy">privacy policy</Link>
        </aside>
    </Container>
);
