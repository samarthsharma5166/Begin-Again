import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';

export const NotThis = () => {
    return (
        <section className="py-20 bg-stone-900 text-stone-200">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-50 mb-4">This Is NOT...</h2>
                    <p className="text-stone-400">We want to be clear about what this space is and isn't.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-stone-400">
                            <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                            <span className="text-lg decoration-stone-600">A speed-dating event</span>
                        </div>
                        <div className="flex items-center gap-4 text-stone-400">
                            <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                            <span className="text-lg decoration-stone-600">A matchmaking program</span>
                        </div>
                        <div className="flex items-center gap-4 text-stone-400">
                            <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                            <span className="text-lg decoration-stone-600">An unstructured social meetup</span>
                        </div>
                        <div className="flex items-center gap-4 text-stone-400">
                            <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                            <span className="text-lg decoration-stone-600">A place to impress or perform</span>
                        </div>
                    </div>

                    <div className="bg-stone-800 p-8 rounded-2xl border border-stone-700 relative">
                        <div className="absolute -top-4 -right-4 bg-emerald-900 text-emerald-100 px-4 py-1 rounded-full text-sm font-medium">
                            The Reality
                        </div>
                        <h3 className="text-xl font-serif text-white mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-emerald-400" /> What It Is
                        </h3>
                        <p className="text-stone-300 leading-relaxed">
                            This is a guided healing experience<span className="text-emerald-300 font-medium"> facilitated by a professional</span>,  and a space for <span className="text-emerald-300 font-medium">connection with possible partners</span> in a emotionally safe space.
                        </p>
                        <p className="mt-4 text-stone-400 text-sm italic">
                            * This structure ensures we filter out unserious participants and create a safe space for everyone.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
