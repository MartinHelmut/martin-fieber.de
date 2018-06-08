import React from 'react';

import styles from './index.css';

const TextHeading = ({ children }) => (
    <h4 className={styles.textHeading}>{children}</h4>
);

export default TextHeading;
