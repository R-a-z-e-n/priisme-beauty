import React, { useState } from 'react';
import type { Page } from '../App';
import { UserCircleIcon, LockClosedIcon, EyeIcon, EyeSlashIcon, PhoneIcon } from './IconComponents';

interface CustomerSignupPageProps {
    setCurrentPage: (page: Page) => void;
    handleSignup: () => void;
}

const CustomerSignupPage: React.FC<CustomerSignupPageProps> = ({ setCurrentPage, handleSignup }) => {
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSignup();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-violet-600 to-teal-500 p-4">
            <div className="w-full max-w-md">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAFZAtEDASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAA1EAABAwIEAwYFAwUBAQEBAAAAAQIRAAMEITFBUQUSYXGBkSIyobETQsHR8FLhBgcUI/EkM2L/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAhEQEBAQEAAgMBAQEBAQAAAAAAARECEiEDMUETUWEiQv/aAAwDAQACEQMRAD8A+q0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tqW1rK0tahUDAo=" alt="Priisme Logo" className="w-full max-w-xs mx-auto mb-8" />
                 <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white">
                        Create Account
                    </h1>
                    <p className="text-violet-200 mt-2">Start your journey with Priisme.</p>
                </div>

                <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                    <div className="relative">
                        <UserCircleIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-sky-200" />
                        <input 
                            type="text" 
                            required 
                            placeholder="Full Name"
                            className="w-full pl-10 pr-4 py-3 bg-sky-600 text-white placeholder-sky-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 border-transparent"
                        />
                    </div>
                    <div className="relative">
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-sky-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                        <input 
                            type="email" 
                            required 
                            placeholder="Email Address"
                            className="w-full pl-10 pr-4 py-3 bg-sky-600 text-white placeholder-sky-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 border-transparent"
                        />
                    </div>
                    <div className="relative">
                        <PhoneIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-sky-200" />
                        <input 
                            type="tel" 
                            required 
                            placeholder="Phone Number"
                            className="w-full pl-10 pr-4 py-3 bg-sky-600 text-white placeholder-sky-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 border-transparent"
                        />
                    </div>
                     <div className="relative">
                        <LockClosedIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-sky-200" />
                        <input 
                            type={showPassword ? 'text' : 'password'}
                            required
                            placeholder="Password"
                            className="w-full pl-10 pr-10 py-3 bg-sky-600 text-white placeholder-sky-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 border-transparent"
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-sky-200 hover:text-white"
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                        </button>
                    </div>

                    <button type="submit" className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                        Sign Up
                    </button>
                </form>

                <div className="text-center mt-6 text-sm">
                     <p className="text-violet-200">
                        Already have an account?{' '}
                        <button onClick={() => setCurrentPage('customer-login')} className="font-semibold text-white hover:underline">
                            Log In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CustomerSignupPage;