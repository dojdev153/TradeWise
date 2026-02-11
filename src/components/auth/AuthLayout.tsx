import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

export default function AuthLayout() {
    return (
        <div className="flex min-h-screen w-full">
            {/* Left Side - Artistic Background */}
            <div className="hidden w-1/2 bg-[#590156] lg:block relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#590156] to-[#2a0029] opacity-90" />

                {/* Abstract shapes */}
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />

                <div className="relative z-10 flex h-full flex-col justify-between p-12 text-white">
                    <div>
                        <Link to="/" className="flex items-center gap-2 text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Link>
                    </div>

                    <div className="space-y-6">
                        <h1 className="text-5xl font-bold leading-tight">
                            Modern Solutions for <br />
                            <span className="text-purple-200">Agriculture</span>
                        </h1>
                        <p className="text-lg text-purple-100/80 max-w-md">
                            Join the national platform connecting farmers, veterinarians, and authorities for a smarter, more transparent future.
                        </p>
                    </div>

                    <div className="text-sm text-purple-200/60">
                        © {new Date().getFullYear()} StockWise. All rights reserved.
                    </div>
                </div>
            </div>

            {/* Right Side - Form Content */}
            <div className="flex w-full flex-col justify-center bg-white px-4 lg:w-1/2 sm:px-12 md:px-24 py-12">
                <div className="mb-8 lg:hidden">
                    <Link to="/" className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md mx-auto"
                >
                    <Outlet />
                </motion.div>
            </div>
        </div>
    );
}
