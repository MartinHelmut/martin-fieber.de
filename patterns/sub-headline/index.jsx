import React from 'react';

import styles from './index.css';

const SubHeadline = ({ children }) => (
    <h3 className={styles.subHeadline}>{children}</h3>
);

export default SubHeadline;
