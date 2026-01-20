import React from 'react';
import { Quote } from 'lucide-react';
import Image from 'next/image';

export const Facilitator = () => {
    return (
        <section className="py-24 bg-stone-100">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm flex flex-col md:flex-row">
                    <div className="md:w-2/5 relative min-h-[400px]">
                        <Image
                            src="/dr1.webp"
                            alt="Calm Healing Space"
                            width={500}
                            height={500}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-stone-900/10"></div>
                    </div>

                    <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                        <div className="mb-6">
                            <h2 className="text-3xl font-serif text-stone-800 mb-2">Dr. Meera Iyer</h2>
                            <p className="text-stone-500 font-medium uppercase tracking-wide text-sm">Psychologist & Relationship Therapist</p>
                        </div>

                        <p className="text-stone-600 leading-relaxed mb-6">
                            With over 15 years of experience, Dr. Meera Iyer works with adults healing from painful past relationships and emotional trauma.
                        </p>

                        <div className="bg-stone-50 p-6 rounded-xl border-l-4 border-stone-300 italic text-stone-700 relative mb-6">
                            <Quote className="w-6 h-6 text-stone-300 absolute -top-3 -left-2 fill-stone-200" />
                            "I gently facilitate the processing of tough emotions through creative, structured, and psychologically safe methods ensuring participants feel supported, respected, and seen."
                        </div>

                        <p className="text-sm text-stone-400">
                            Licensed Clinical Psychologist · Trauma-Informed Practitioner
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
