import React from 'react'
import { twMerge } from 'tailwind-merge'

const variants = {
    default: 'hover:opacity-70 text-white',
    rounded: 'bg-black/10 rounded-full p-1 border border-white/10 shadow text-white hover:bg-black/20 easy-in-out'
}

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
    variant?: keyof typeof variants;
    children: React.ReactElement;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    (
        {
            type = 'button',
            className,
            variant = 'default',
            children,
            ...props
        },
        ref
    ) => {
        return (
            <button
                ref={ref}
                type={type}
                className={twMerge(
                    'inline-flex items-center justify-center disabled:pointer-events-none disabled:opacity-50 transition',
                    variants[variant],
                    className,
                )}
                {...props}
            >
                {children}
            </button>
        )
    }
)
IconButton.displayName = 'IconButton'