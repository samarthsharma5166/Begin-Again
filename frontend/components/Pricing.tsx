import React from 'react';

export const Pricing = () => {
    return (
        <section className="py-24 bg-stone-50" id="pricing">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-4">Begin Your Next Chapter</h2>
                    <p className="text-stone-600">Book now. Seats are limited.</p>
                </div>
                {/* Choose the option that works for you.Choose the option that works for you. */}

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Regular Price */}
                    <div className="bg-white p-8 rounded-2xl border border-stone-200 text-center order-2  opacity-80 hover:opacity-100 transition-opacity">
                        <h3 className="text-xl font-medium text-stone-600 mb-2">Regular Price</h3>
                        <div className="text-4xl font-serif text-stone-800 mb-4">₹3999</div>
                        <p className="text-stone-500 text-sm mb-6">Ticket price from 1st February onwards.</p>
                        <ul className="text-left space-y-3 mb-8 text-stone-600">
                            <li className="flex gap-2 text-sm"><span className="text-stone-400">✓</span> Full Day Access</li>
                            <li className="flex gap-2 text-sm"><span className="text-stone-400">✓</span> Lunch & Refreshments</li>
                            <li className="flex gap-2 text-sm"><span className="text-stone-400">✓</span> All Materials Included</li>
                        </ul>
                    </div>

                    {/* Early Bird */}
                    <div className="bg-stone-800 p-8 rounded-2xl border border-stone-700 text-center order-1  transform md:scale-105 shadow-xl relative text-white">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-200 text-amber-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                            Best Value
                        </div>
                        <h3 className="text-xl font-medium text-amber-100 mb-2">Early Bird</h3>
                        <div className="text-5xl font-serif text-white mb-2">₹2999</div>
                        <p className="text-stone-400 text-sm mb-6">Valid until 31st January 2026</p>
                        <ul className="text-left space-y-3 mb-8 text-stone-300">
                            <li className="flex gap-2 text-sm"><span className="text-amber-400">✓</span> Full Day Access</li>
                            <li className="flex gap-2 text-sm"><span className="text-amber-400">✓</span> Lunch & Refreshments</li>
                            <li className="flex gap-2 text-sm"><span className="text-amber-400">✓</span> All Materials Included</li>
                            {/* <li className="flex gap-2 text-sm"><span className="text-amber-400">✓</span> Priority Registration</li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
