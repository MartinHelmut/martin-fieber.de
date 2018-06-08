import React from 'react';

import Text from '../text';

import styles from './index.css';

const Address = ({ children }) => (
    <address className={styles.address}>
        <Text>{children}</Text>
    </address>
);

export default Address;
