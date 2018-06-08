import React from 'react';
import classnames from 'classnames';

import styles from './index.css';

const StyleContext = ({ children, className, context = 'website' }) => {
    const classNames = classnames(styles[context], className);

    return <div className={classNames}>{children}</div>;
};

export default StyleContext;
