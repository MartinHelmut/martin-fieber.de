import React from 'react';

import Page from '../patterns/page';
import Text from '../patterns/text';
import Link from '../patterns/link';

const Index = () => (
    <Page>
        <Text>
            I do JavaScript, Node.js, React, Machine Learning, Python, Reading,
            Writing or: stuff! also Senior Product Engineer{' '}
            <Link
                href="https://sinnerschrader.com/"
                title="Website of SinnerSchrader"
            >
                @sinnerschrader
            </Link>
        </Text>
    </Page>
);

export default Index;
