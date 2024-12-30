import { AppBar, Toolbar } from '@mui/material'
import React from 'react'
import NavItem from './nav-item'

// ----------------------------------------------------------------------

const NAV_LINKS = [{ href: '/', title: 'Blog' }, { href: '/about', title: 'About' }]

// ----------------------------------------------------------------------

export default function Navbar() {
    return (
        <AppBar sx={{ backgroundColor: 'transparent' }}>
            <Toolbar>
                {NAV_LINKS.map((link) => (
                    <NavItem key={link.title} href={link.href}>{link.title}</NavItem>
                ))}
            </Toolbar>
        </AppBar>
    )
}
