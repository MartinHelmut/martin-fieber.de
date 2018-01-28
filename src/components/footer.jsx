import React from 'react';

export default ({ children }) => {
    return (
        <footer>
            <hr />
            <aside>{children}</aside>
        </footer>
    );
};
