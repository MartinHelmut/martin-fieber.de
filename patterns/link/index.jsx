import React from 'react';

import styles from './index.css';

const Link = ({ children, href, title }) => (
    <a className={styles.link} href={href} title={title}>
        {children}
    </a>
);

export default Link;
