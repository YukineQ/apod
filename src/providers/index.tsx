'use client'

import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'

import { IconButton } from "@/components/icon-button"
import { Icons } from "@/components/icons"
import { queryConfig } from '@/lib/react-query'

const ErrorFallback = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full'>
            <h1 className='md:text-5xl text-3xl font-bold tracking-tight text-white py-4'>
                Something went wrong!
            </h1>
            <IconButton
                variant='rounded'
                className='p-2'
                onClick={() => window.location.assign(window.location.href)}
            >
                <Icons.reload className="h-8 w-8" />
            </IconButton>
        </div>
    )
}

export function AppProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [queryClient] = React.useState(() => new QueryClient({ defaultOptions: queryConfig }))

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </ErrorBoundary>
    )
}