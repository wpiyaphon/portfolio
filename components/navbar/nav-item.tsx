import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

// ----------------------------------------------------------------------

type NavItemProps = {
    href: string
    children: React.ReactNode
}

// ----------------------------------------------------------------------

export default function NavItem({ href, children }: NavItemProps) {
    return (
        <Button size="large" variant="text" disableRipple LinkComponent={Link} href={href} sx={{
            textTransform: 'none',
            color: 'text.secondary',
            '&:hover': { color: 'primary.main', backgroundColor: 'transparent' },
        }}>
            {children}
        </Button>
    )
}
