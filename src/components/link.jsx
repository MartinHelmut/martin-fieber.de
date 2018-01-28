import React from 'react';
import Link from 'gatsby-link';

export default ({ children, to, title }) => {
    if (to && to[0] === '/') {
        return (
            <Link to={to} title={title}>
                {children}
            </Link>
        );
    }

    return (
        <a href={to} title={title}>
            {children}
        </a>
    );
};
