import { Button, ButtonProps } from '@mui/material'
import Image from 'next/image'
import React from 'react'

// ----------------------------------------------------------------------

type SocialButtonProps = ButtonProps & {
    src: string
    alt: string
    width?: number
    height?: number
}

// ----------------------------------------------------------------------

export default function SocialButton({ src, alt, width = 24, height = 24, ...buttonProps }: SocialButtonProps) {
    return (
        <Button variant="contained" color="secondary" sx={{ minWidth: 0, width: 40, height: 40, p: 1, ...buttonProps.sx }} {...buttonProps}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority
            />
        </Button>
    )
}
