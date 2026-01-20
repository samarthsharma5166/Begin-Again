import React from 'react';
// import { motion } from 'motion/react';
import { Clock, Coffee, Sparkles, Utensils, HeartHandshake, MapPin } from 'lucide-react';
import Image from 'next/image';

const AgendaItem = ({ time, title, desc, icon: Icon, isLast, index }: { time: string, title: string, desc?: string, icon: React.ElementType, isLast?: boolean, index: number }) => (
    <div
        // initial={{ opacity: 0, x: 20 }}
        // whileInView={{ opacity: 1, x: 0 }}
        // viewport={{ once: true }}
        // transition={{ delay: index * 0.1 }}
        className="flex group"
    >
        {/* Time Column */}
        <div className="w-24 shrink-0 text-right pt-1 pr-6 flex flex-col items-end">
            <span className="text-sm font-bold text-stone-800 font-mono">{time.split(' – ')[0]}</span>
            <span className="text-xs text-stone-400 mt-1">{time.split(' – ')[1]}</span>
        </div>

        {/* Timeline Line & Dot */}
        <div className="relative flex flex-col items-center mr-6">
            <div className={`w-3 h-3 rounded-full border-2 border-stone-300 bg-white z-10 group-hover:border-emerald-500 group-hover:bg-emerald-500 transition-colors duration-300`} />
            {!isLast && <div className="w-0.5 h-full bg-stone-200 absolute top-3 group-hover:bg-stone-300 transition-colors duration-300" />}
        </div>

        {/* Content Card */}
        <div className={`flex-1 pb-12 ${isLast ? 'pb-0' : ''}`}>
            <div className="bg-white p-5 rounded-2xl border border-stone-100 shadow-sm group-hover:shadow-md group-hover:border-emerald-100 transition-all duration-300 -mt-2">
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-stone-50 rounded-lg text-stone-500 group-hover:text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                        <Icon className="w-4 h-4" />
                    </div>
                    <div>
                        <h3 className="text-lg font-serif text-stone-800 mb-1 group-hover:text-emerald-900 transition-colors">{title}</h3>
                        {desc && <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const Agenda = () => {
    return (
        <section className="sm:py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                    {/* Left Column: Title & Context */}
                    <div className="sticky top-24">
                        <div
                            // initial={{ opacity: 0, y: 20 }}
                            // whileInView={{ opacity: 1, y: 0 }}
                            // viewport={{ once: true }}
                        >
                            <span className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-4 block">
                                The Flow
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-6 leading-tight">
                                How Your Day <br /><span className="italic text-stone-400">Unfolds</span>
                            </h2>
                            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                                A carefully curated flow designed to take you from arrival to deep connection, ensuring you feel grounded and supported at every step.
                            </p>

                            <div className="bg-amber-50/50 hidden sm:block p-6 rounded-2xl border border-amber-100 mb-8">
                                <div className="flex items-start gap-3">
                                    <Utensils className="w-5 h-5 text-amber-600 mt-0.5" />
                                    <div>
                                        <p className="text-stone-800 font-medium mb-1">All-Inclusive Experience</p>
                                        <p className="text-stone-600 text-sm">Wholesome lunch, evening high tea, and light refreshments are all included in your ticket.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="relative rounded-3xl overflow-hidden h-64 md:h-80 shadow-lg group">
                                <Image
                                    width={600}
                                    height={600}
                                    // src="https://images.unsplash.com/photo-1555053003-52210e291dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwdGVhJTIwY296eSUyMGludGVyaW9yJTIwaGVhbGluZ3xlbnwxfHx8fDE3NjgyMDAxNjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                    src={"/howDay.webp"}
                                    alt="Cozy atmosphere"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Timeline */}
                    <div className="bg-stone-50/80 backdrop-blur-sm p-8 md:p-10 rounded-[2.5rem] border border-stone-100">
                        <div className="space-y-2">
                            <AgendaItem
                                time="10:30 – 11:00"
                                title="Arrival & Settling In"
                                icon={MapPin}
                                index={0}
                            />
                            <AgendaItem
                                time="11:00 – 11:30"
                                title="Core Orientation"
                                desc="With the Facilitator"
                                icon={Clock}
                                index={1}
                            />
                            <AgendaItem
                                time="11:30 – 01:00"
                                title="Core Healing Session"
                                desc="Guided inner work to release, reflect, and heal."
                                icon={Sparkles}
                                index={2}
                            />
                            <AgendaItem
                                time="01:00 – 02:00"
                                title="Lunch Break"
                                desc="A wholesome meal to nourish you."
                                icon={Utensils}
                                index={3}
                            />
                            <AgendaItem
                                time="02:00 – 03:30"
                                title="Playful Group Activities"
                                desc="Connection games and interactive sessions."
                                icon={HeartHandshake}
                                index={4}
                            />
                            <AgendaItem
                                time="03:30 – 04:30"
                                title="Free Mingling"
                                desc="With tea, snacks & soft music."
                                icon={Coffee}
                                isLast={true}
                                index={5}
                            />
                        </div>
                    </div>

                    <div className=" bg-amber-50/50  sm:hidden p-6 rounded-2xl border border-amber-100 mb-8">
                        <div className="flex items-start gap-3">
                            <Utensils className="w-5 h-5 text-amber-600 mt-0.5" />
                            <div>
                                <p className="text-stone-800 font-medium mb-1">All-Inclusive Experience</p>
                                <p className="text-stone-600 text-sm">Wholesome lunch, evening high tea, and light refreshments are all included in your ticket.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
