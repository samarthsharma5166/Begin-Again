// "use client"
// import React, {  useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { axiosInstance } from '@/helper/axiosInstance'
// import { Button } from '@/components/ui/button'
// import Cookies from 'js-cookie'

// const LoginPage = () => {
//     const [email, setEmail] = useState('')
//     const [otp, setOtp] = useState('')
//     const [otpSent, setOtpSent] = useState(false)
//     const [error, setError] = useState('')
//     const [loading,setLoading] = useState(false);
//     const router = useRouter()

//     const handleLogin = async (e: React.FormEvent) => {
//         e.preventDefault()
//         setError('')
//         try {
//             setLoading(true);
//             await axiosInstance.post('/admin/login', { email })
//             setLoading(false)
//             setOtpSent(true)
//         } catch (err) {
//             setLoading(false)
//             setError('Failed to send OTP. Please try again.')
//         }
//     }

//     const handleVerifyOtp = async (e: React.FormEvent) => {
//         e.preventDefault()
//         setError('')
//         try {
//             setLoading(true)
//             const response = await axiosInstance.post('/admin/verify', { email, otp })
//              // Save token in cookie for 1 day
//              setLoading(false)
//             router.push('/admin')
//         } catch (err) {
//             setLoading(false)
//             setError('Invalid OTP. Please try again.')
//         }
//     }

//     return (
//         <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
//             <div className="w-full max-w-md">
//                 <div className="text-center mb-8">
//                     <h1 className="text-3xl font-bold text-gray-900">Admin Login</h1>
//                     <p className="text-gray-500">Enter your email to receive an OTP</p>
//                 </div>
//                 {!otpSent ? (
//                     <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
//                         <div className="mb-6">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
//                                 Email
//                             </label>
//                             <input
//                                 className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 id="email"
//                                 type="email"
//                                 placeholder="you@example.com"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="flex items-center justify-center">
//                             <Button
//                                 type="submit"
//                                 className="w-full"
//                             >
//                                 {loading ? `Loading...`: `Send OTP`}
//                             </Button>
//                         </div>
//                         {error && <p className="text-red-500 text-xs italic mt-4 text-center">{error}</p>}
//                     </form>
//                 ) : (
//                     <form onSubmit={handleVerifyOtp} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
//                         <div className="text-center mb-8">
//                             <h1 className="text-3xl font-bold text-gray-900">Verify OTP</h1>
//                             <p className="text-gray-500">Enter the OTP sent to your email</p>
//                         </div>
//                         <div className="mb-6">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
//                                 OTP
//                             </label>
//                             <input
//                                 className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 id="otp"
//                                 type="text"
//                                 placeholder="6-digit code"
//                                 value={otp}
//                                 onChange={(e) => setOtp(e.target.value)}
//                                 required
//                             />
//                         </div>
//                         <div className="flex items-center justify-center">
//                             <Button
//                                 type="submit"
//                                 className="w-full"
//                             >
//                                     {loading ? `Loading...` : `Verify OTP`}
//                             </Button>
//                         </div>
//                         {error && <p className="text-red-500 text-xs italic mt-4 text-center">{error}</p>}
//                     </form>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default LoginPage



"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { axiosInstance } from '@/helper/axiosInstance'
import { Button } from '@/components/ui/button'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [otpSent, setOtpSent] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        try {
            setLoading(true)
            await axiosInstance.post('/admin/login', { email })
            setLoading(false)
            setOtpSent(true)
        } catch (err) {
            setLoading(false)
            setError('Failed to send OTP. Please try again.')
        }
    }

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        try {
            setLoading(true)
            const response = await axiosInstance.post('/admin/verify', { email, otp })

            // Save token from backend response to localStorage
            const token = response.data.token
            if (!token) throw new Error("Token missing in response")
            localStorage.setItem('token', token)

            setLoading(false)
            router.push('/admin')
        } catch (err) {
            setLoading(false)
            setError('Invalid OTP. Please try again.')
        }
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
            <div className="w-full max-w-md">
                {!otpSent ? (
                    <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Admin Login</h1>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow-sm border rounded w-full py-3 px-4 mb-4"
                            required
                        />
                        <Button type="submit" className="w-full">{loading ? 'Loading...' : 'Send OTP'}</Button>
                        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
                    </form>
                ) : (
                    <form onSubmit={handleVerifyOtp} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Verify OTP</h1>
                        <input
                            type="text"
                            placeholder="6-digit OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="shadow-sm border rounded w-full py-3 px-4 mb-4"
                            required
                        />
                        <Button type="submit" className="w-full">{loading ? 'Loading...' : 'Verify OTP'}</Button>
                        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
                    </form>
                )}
            </div>
        </div>
    )
}

export default LoginPage
