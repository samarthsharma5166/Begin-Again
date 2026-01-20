"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
    const Wrapper = (props: P) => {
        const router = useRouter()
        const [isAuthenticated, setIsAuthenticated] = useState(false)

        useEffect(() => {
            const token = localStorage.getItem('token')
            if (token) {
                setIsAuthenticated(true)
            } else {
                router.push('/login')
            }
        }, [router])

        if (!isAuthenticated) {
            return null
        }

        return <WrappedComponent {...props} />
    }

    return Wrapper
}


