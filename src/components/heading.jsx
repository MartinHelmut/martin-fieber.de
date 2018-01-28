import React from 'react';

export default ({ order = 1, children }) => {
    const Component = `h${order}`;
    return <Component>{children}</Component>;
};
