import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

export const Details = () => {
    return (
        <section className="py-20 bg-stone-800 text-stone-100">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif text-white mb-2">Event Details</h2>
                    <div className="w-16 h-1 bg-stone-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-stone-700/50 p-6 rounded-2xl text-center backdrop-blur-sm">
                        <div className="w-12 h-12 bg-stone-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Calendar className="w-6 h-6 text-stone-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">When</h3>
                        <p className="text-stone-300">8th February 2026</p>
                        <p className="text-stone-400 text-sm">Sunday</p>
                    </div>

                    <div className="bg-stone-700/50 p-6 rounded-2xl text-center backdrop-blur-sm">
                        <div className="w-12 h-12 bg-stone-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Clock className="w-6 h-6 text-stone-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Time</h3>
                        <p className="text-stone-300">10:30 AM – 4:30 PM</p>
                        <p className="text-stone-400 text-sm">Please arrive by 10:15 AM</p>
                    </div>

                    <div className="bg-stone-700/50 p-6 rounded-2xl text-center backdrop-blur-sm">
                        <div className="w-12 h-12 bg-stone-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-6 h-6 text-stone-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Group Size</h3>
                        <p className="text-stone-300">Limited Seats</p>
                        <p className="text-stone-400 text-sm">Equal Gender Ratio</p>
                    </div>

                    <div className="bg-stone-700/50 p-6 rounded-2xl text-center backdrop-blur-sm">
                        <div className="w-12 h-12 bg-stone-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-6 h-6 text-stone-300" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Location</h3>
                        <p className="text-stone-300">The Healing Room</p>
                        <p className="text-stone-400 text-sm">Bijwasan – Palam Vihar Road, New Delhi</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
