import React, { useState } from 'react';
import type { Page } from '../App';
import { EyeIcon, EyeSlashIcon, LockClosedIcon } from './IconComponents';

interface SellerSignupPageProps {
    setCurrentPage: (page: Page) => void;
    handleSignup: () => void;
}

const SellerSignupPage: React.FC<SellerSignupPageProps> = ({ setCurrentPage, handleSignup }) => {
    const [role, setRole] = useState('seller');
    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you'd send this data to a backend
        handleSignup();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-violet-600 to-teal-500 p-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white">
                        Become a Seller
                    </h1>
                    <p className="text-violet-200 mt-2">Join our community of creators.</p>
                </div>

                <form onSubmit={onSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="name" required placeholder="Jane Doe" className="mt-1 block w-full px-3 py-2 bg-sky-600 text-white placeholder-sky-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 border-transparent" />
                    </div>
                     <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" required placeholder="you@example.com" className="mt-1 block w-full px-3 py-2 bg-sky-600 text-white placeholder-sky-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 border-transparent" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" id="phone" required placeholder="+1 555-555-5555" className="mt-1 block w-full px-3 py-2 bg-sky-600 text-white placeholder-sky-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 border-transparent" />
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type={showPassword ? 'text' : 'password'}
                            id="password" 
                            required 
                            placeholder="••••••••" 
                            className="mt-1 block w-full px-3 py-2 pr-10 bg-sky-600 text-white placeholder-sky-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 border-transparent" 
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-[38px] h-5 w-5 text-sky-200 hover:text-white"
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                            {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                        </button>
                    </div>
                    <div>
                         <label className="block text-sm font-medium text-gray-700">I want to be a...</label>
                         <select value={role} onChange={e => setRole(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-sky-600 text-white placeholder-sky-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400 border-transparent appearance-none">
                            <option value="seller">Seller (selling products)</option>
                            <option value="freelancer">Freelancer (offering services)</option>
                         </select>
                    </div>
                    
                    <button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                        Create Seller Account
                    </button>
                </form>
                
                <div className="text-center mt-6 text-sm">
                     <p className="text-violet-200">
                        Already have an account?{' '}
                        <button onClick={() => setCurrentPage('seller-login')} className="font-semibold text-white hover:underline">
                            Log In
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SellerSignupPage;