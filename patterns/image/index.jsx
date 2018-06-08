import React from 'react';

import styles from './index.css';

const Image = ({ src, alt, width, height, caption }) => (
    <figure className={styles.image}>
        <img
            className={styles.media}
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
        {caption ? (
            <figcaption className={styles.caption}>{caption}</figcaption>
        ) : null}
    </figure>
);

export default Image;
