import React from 'react';
import Link from 'gatsby-link';

import Container from '../components/container';

export default ({ children }) => (
    <Container>
        <Link
            to="/"
            title="Link to my home page, the place where home is, the start, the beginning, and so on"
        >
            <h1>Martin Helmut Fieber</h1>
        </Link>
        {children()}
        <hr />
        <aside>
            <Link
                to="/legal-notice"
                title="The legal notice page, you know, address and contact. Just in case you want to write me"
            >
                legal notice
            </Link>
            {' | '}
            <Link
                to="/privacy-policy"
                title="Private policy page with a section about used cookies, and not the tasty ones!"
            >
                privacy policy
            </Link>
        </aside>
    </Container>
);
