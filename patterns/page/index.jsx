import React from 'react';
import RouteLink from 'next/link';

import StyleContext from '../style-context';
import Header from '../header';
import Title from '../title';
import Text from '../text';
import Link from '../link';
import Footer from '../footer';

import styles from './index.css';

const Page = ({ children }) => (
    <StyleContext className={styles.page}>
        <Header>
            <RouteLink href="/" passHref>
                <Link title="Take my back to start!">
                    <Title>Martin Helmut Fieber</Title>
                </Link>
            </RouteLink>
        </Header>
        <main>{children}</main>
        <Footer>
            <Text>
                <RouteLink href="/legal-notice" passHref prefetch>
                    <Link title="Legal notice page includes address and contact information">
                        Legal notice
                    </Link>
                </RouteLink>
                {' | '}
                <RouteLink href="/privacy-policy" passHref prefetch>
                    <Link title="Privacy policy includes cookie information, but there are no cookies">
                        Privacy policy
                    </Link>
                </RouteLink>
            </Text>
        </Footer>
    </StyleContext>
);

export default Page;
