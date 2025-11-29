"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SignIn } from "@clerk/nextjs";

// --- Assets: Google Icon Component ---
const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.52 12.29C23.52 11.43 23.44 10.6 23.3 9.8H12V14.51H18.5C18.23 15.99 17.37 17.27 16.08 18.14V21.13H19.95C22.21 19.04 23.52 15.96 23.52 12.29Z" fill="#4285F4"/>
    <path d="M12 24C15.24 24 17.96 22.92 19.95 21.13L16.08 18.14C15 18.86 13.62 19.29 12 19.29C8.87 19.29 6.22 17.17 5.27 14.33H1.27V17.43C3.25 21.36 7.33 24 12 24Z" fill="#34A853"/>
    <path d="M5.27 14.33C5.03 13.61 4.9 12.82 4.9 12C4.9 11.18 5.03 10.39 5.27 9.67V6.57H1.27C0.46 8.18 0 10.03 0 12C0 13.97 0.46 15.82 1.27 17.43L5.27 14.33Z" fill="#FBBC05"/>
    <path d="M12 4.71C13.77 4.71 15.35 5.32 16.6 6.51L19.99 3.12C17.95 1.22 15.24 0 12 0C7.33 0 3.25 2.64 1.27 6.57L5.27 9.67C6.22 6.83 8.87 4.71 12 4.71Z" fill="#EA4335"/>
  </svg>
);

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#021811] flex items-center justify-center p-4 md:p-8 font-sans">
      
      {/* Main Card Container */}
      <div className="w-full max-w-[1200px] h-[85vh] min-h-[700px] bg-[#063324] rounded-[32px] border border-white/10 shadow-2xl overflow-hidden grid lg:grid-cols-2 relative">
        
        {/* --- Left Panel (Visual) --- */}
        <div className="relative hidden lg:flex flex-col justify-between p-12 overflow-hidden bg-gradient-to-br from-[#0A4532] to-[#042016]">
            
            {/* Background Abstract Glows */}
            <div className="absolute top-[-20%] left-[-20%] w-[600px] h-[600px] bg-[#154D38] rounded-full blur-[120px] opacity-40"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#D2E6DE] rounded-full blur-[140px] opacity-20"></div>
            
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>

            {/* Top Logo */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
               <div className="flex items-center gap-2 text-2xl font-bold text-white tracking-tighter">
                <div className="bg-white text-[#063324] p-1.5 rounded-lg shadow-lg shadow-black/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 21h18v-8H3v8zm6-11V7l6-3 6 3v3h-2v10h-2v-6h-4v6H9v-10H7v-3h2z"/></svg>
                </div>
                housr
              </div>
            </motion.div>

            {/* Center Visual (Abstract 3D Logo Representation) */}
            <div className="relative z-10 flex-1 flex items-center justify-center">
                <div className="relative w-64 h-64">
                    {/* Layer 1 */}
                    <motion.div 
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 border-[20px] border-[#D2E6DE]/10 rounded-[3rem] backdrop-blur-sm transform rotate-12"
                    />
                    {/* Layer 2 */}
                    <motion.div 
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 border-[20px] border-[#D2E6DE]/20 rounded-[3rem] backdrop-blur-md transform -rotate-6"
                    />
                     {/* Layer 3 (Center) */}
                    <motion.div 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-4 bg-gradient-to-tr from-[#D2E6DE]/20 to-transparent rounded-[2.5rem] border border-white/20 shadow-2xl backdrop-blur-xl flex items-center justify-center"
                    >
                         <svg width="80" height="80" viewBox="0 0 24 24" fill="#D2E6DE" className="drop-shadow-[0_0_15px_rgba(210,230,222,0.5)]"><path d="M3 21h18v-8H3v8zm6-11V7l6-3 6 3v3h-2v10h-2v-6h-4v6H9v-10H7v-3h2z"/></svg>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Text */}
            <motion.div 
                 initial={{ opacity: 0, y: 20 }} 
                 animate={{ opacity: 1, y: 0 }} 
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="relative z-10"
            >
                <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
                    Stop searching.<br/>
                    Start <span className="text-[#D2E6DE]">living.</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-sm">
                    Join 44,000+ students finding their perfect off-campus home with Housr.
                </p>
            </motion.div>
        </div>

        {/* --- Right Panel (Form) --- */}
        <div className="relative flex flex-col justify-center px-8 md:px-20 py-12 bg-[#063324] items-center">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center gap-2 text-2xl font-bold text-white mb-12">
                <div className="bg-white text-[#063324] p-1 rounded-md">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 21h18v-8H3v8zm6-11V7l6-3 6 3v3h-2v10h-2v-6h-4v6H9v-10H7v-3h2z"/></svg>
                </div>
                housr
            </div>

            <div className="w-full mx-auto flex justify-center">
                 <SignIn 
                    afterSignInUrl="/dashboard" 
                    afterSignUpUrl="/dashboard"
                    redirectUrl="/dashboard"
                 />
            </div>
        </div>
      </div>
    </div>
  );
}

