import React from 'react';
import RouteLink from 'next/link';

import StyleContext from '../patterns/style-context';
import Content from '../patterns/content';
import Header from '../patterns/header';
import Title from '../patterns/title';
import Text from '../patterns/text';
import Link from '../patterns/link';
import Footer from '../patterns/footer';

const Page = ({ children }) => (
    <StyleContext>
        <Content>
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
        </Content>
    </StyleContext>
);

export default Page;
