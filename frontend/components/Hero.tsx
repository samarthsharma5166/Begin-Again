import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Cta from './Cta';

export const Hero = () => {

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F5F5F0]">
            
            <div className="absolute inset-0 z-0">
                <Image
                    width={100}
                    height={100}
                    src="https://images.unsplash.com/photo-1561386340-5f0adb987205?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwbWluaW1hbGlzdCUyMG5hdHVyZSUyMGJlaWdlJTIwc2FnZSUyMGdyZWVufGVufDF8fHx8MTc2ODIwMDE2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Calm Nature"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-50/80 via-stone-50/60 to-stone-50" />
            </div>
           
            {/* Abstract Background Shapes with Colors */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Top Right Sage Blob */}
                <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-[#E4E9E2] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />

                {/* Bottom Left Amber Blob */}
                <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-[#F0E6D8] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />

                {/* Center Top Soft Blue Blob */}
                <div className="absolute top-[10%] left-[20%] w-[30%] h-[30%] bg-[#E6EDF0] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000" />

                {/* Decorative Clip Path Shape (Organic Wave) */}
                <svg
                    className="absolute bottom-0 left-0 w-full h-[30vh] md:h-[40vh] text-white opacity-40"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="currentColor"
                        fillOpacity="1"
                        d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    />
                </svg>
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl pt-12">
                <div
                   
                    className="relative"
                >
                    {/* Decorative Sparkle Icon above headline */}
                    <div
                       
                        className="absolute -top-12 left-1/2 -translate-x-1/2 text-emerald-700/30"
                    >
                        {/* <Sparkles className="w-8 h-8" /> */}
                    </div>

                    <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-50 border border-emerald-100/50 text-emerald-800 text-sm font-medium mb-8 tracking-wide shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        A One-Day Guided Experience
                    </span>

                    <h1 className="text-6xl md:text-8xl font-serif text-stone-800 mb-6 tracking-tight leading-[1.1]">
                        Begin <span className="text-emerald-900/80 italic relative inline-block">
                            Again
                            {/* Underline svg decoration */}
                            <svg className="absolute -bottom-2 left-0 w-full h-3 text-emerald-300/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    <h2 className="text-xl md:text-3xl text-stone-600 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                        Healing, Connection & New Possibilities
                    </h2>
                </div>

                <div
                
                    className="mb-12 relative"
                >
                    <div className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-xl shadow-stone-200/50 max-w-4xl mx-auto">
                        <p className="text-xl md:text-2xl text-stone-700 italic mb-8 font-serif leading-relaxed">
                            "If you’ve loved deeply and lost painfully, healing happens when you pause, process, and reconnect with yourself and others."
                        </p>
                        <p className="text-stone-600 mb-8 max-w-2xl mx-auto text-lg">
                            {/* Bored of dating apps? This is not another swipe, speed-date, or awkward social event. */}
                            It's a space for divorced, separated, or recently broken-up adults to heal and connect at their own pace.
                        </p>

                        <div className="flex flex-col items-center gap-3">
                            {/* button */}
                            <Cta  />
                            <p className="text-sm font-medium text-emerald-800/70 bg-emerald-50/50 px-3 py-1 rounded-lg">
                                Limited group · Equal gender ratio
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS for custom blob animation */}
            <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </section>
    );
};
