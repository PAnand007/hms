import React from 'react'

const layout = ({ children }) => {
    return (
        <>
            <nav>Navbar</nav>
            <main>{children}</main>
            <footer>Footer</footer>
        </>
    )
}

export default layout