import React from 'react';

import Container from '../components/container';
import Heading from '../components/heading';
import Footer from '../components/footer';
import Link from '../components/link';

export default ({ children }) => (
    <Container>
        <Link
            to="/"
            title="Link to my home page, the place where home is, the start, the beginning, and so on"
        >
            <Heading>Martin Helmut Fieber</Heading>
        </Link>
        <main>{children()}</main>
        <Footer>
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
        </Footer>
    </Container>
);
