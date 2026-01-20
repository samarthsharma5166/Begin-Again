"use client"
import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-serif text-white mb-2">Begin Again</h2>
                    <p className="text-sm">© 2026 The Healing Room. All rights reserved.</p>
                </div>

                <div className="flex gap-6 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                </div>

                <button
                    onClick={scrollToTop}
                    className="p-3 bg-stone-800 hover:bg-stone-700 rounded-full transition-colors"
                    aria-label="Back to top"
                >
                    <ArrowUp className="w-5 h-5 text-white" />
                </button>
            </div>
        </footer>
    );
};
