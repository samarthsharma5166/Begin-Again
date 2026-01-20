// import React from 'react';
// // import { motion } from 'motion/react';
// import { UserCheck, HeartHandshake, ShieldCheck, Feather, Sparkles, Anchor } from 'lucide-react';

// const cards = [
//     {
//         icon: UserCheck,
//         text: "Are divorced, separated, or healing from a painful breakup",
//         color: "bg-rose-50",
//         iconColor: "text-rose-600",
//         borderColor: "hover:border-rose-200"
//     },
//     {
//         icon: ShieldCheck,
//         text: "Feel cautious or hesitant about opening up again",
//         color: "bg-blue-50",
//         iconColor: "text-blue-600",
//         borderColor: "hover:border-blue-200"
//     },
//     {
//         icon: Anchor,
//         text: "Struggle to let go of emotional baggage",
//         color: "bg-amber-50",
//         iconColor: "text-amber-600",
//         borderColor: "hover:border-amber-200"
//     },
//     {
//         icon: HeartHandshake,
//         text: "Crave genuine, respectful, and emotionally safe connections",
//         color: "bg-emerald-50",
//         iconColor: "text-emerald-600",
//         borderColor: "hover:border-emerald-200"
//     },
//     {
//         icon: Sparkles,
//         text: "Want fun, engagement, and meaningful interaction — without pressure",
//         color: "bg-violet-50",
//         iconColor: "text-violet-600",
//         borderColor: "hover:border-violet-200"
//     },
//     {
//         icon: Feather,
//         text: "You belong here if you seek presence over performance",
//         color: "bg-teal-50",
//         iconColor: "text-teal-600",
//         borderColor: "hover:border-teal-200"
//     }
// ];

// const container = {
//     hidden: { opacity: 0 },
//     show: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.1
//         }
//     }
// };

// const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 }
// };

// export const TargetAudience = () => {
//     return (
//         <section className="py-24 bg-white relative overflow-hidden">
//             {/* Decorative background circle */}
//             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stone-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />

//             <div className="container mx-auto px-6">
//                 <div className="max-w-3xl mx-auto text-center mb-16">
//                     {/* <span className="text-emerald-600 font-medium tracking-wide text-sm uppercase mb-4 block">
//                         Who is this for?
//                     </span> */}
//                     <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-6">
//                         Is This Experience Meant for You?
//                     </h2>
//                     <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
//                         This space is intentionally created for adults aged 30–45 years who are looking for something <span className="text-emerald-700 font-medium italic">real, slow, and grounded.</span>
//                     </p>
//                 </div>

//                 <div
//                     // variants={container}
//                     // initial="hidden"
//                     // whileInView="show"
//                     // viewport={{ once: true, margin: "-100px" }}
//                     className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
//                 >
//                     {cards.map((card, index) => (
//                         <div
//                             key={index}
//                             // variants={item}
//                             // whileHover={{ y: -8, scale: 1.02 }}
//                             className={`flex flex-col gap-4 p-8 rounded-3xl border border-stone-100 shadow-sm transition-colors duration-300 ${card.borderColor} group bg-white hover:shadow-xl`}
//                         >
//                             <div className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
//                                 <card.icon className={`w-7 h-7 ${card.iconColor}`} />
//                             </div>
//                             <div>
//                                 <p className="text-stone-700 text-lg leading-relaxed font-medium group-hover:text-stone-900 transition-colors">
//                                     {card.text}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };


import React from 'react';
import { UserCheck, HeartHandshake, ShieldCheck, Feather, Sparkles, Anchor } from 'lucide-react';

const points = [
    {
        icon: UserCheck,
        text: "Are divorced, separated, or healing from a painful breakup",
        color: "text-rose-600",
        bg: "bg-rose-50"
    },
    {
        icon: ShieldCheck,
        text: "Feel cautious or hesitant about opening up again",
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        icon: Anchor,
        text: "Struggle to let go of emotional baggage",
        color: "text-amber-600",
        bg: "bg-amber-50"
    },
    {
        icon: HeartHandshake,
        text: "Crave genuine, respectful, and emotionally safe connections",
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    },
    {
        icon: Sparkles,
        text: "Want fun, engagement, and meaningful interaction without pressure",
        color: "text-violet-600",
        bg: "bg-violet-50"
    },
    {
        icon: Feather,
        text: "You belong here if you seek presence over performance",
        color: "text-teal-600",
        bg: "bg-teal-50"
    }
];

export const TargetAudience = () => {
    return (
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-stone-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />

            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-stone-800 mb-6">
                        Is This Experience Meant for You?
                    </h2>
                    <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
                        This space is intentionally created for adults aged 30–45 years who are looking for something <span className="text-emerald-700 font-medium italic">real, slow, and grounded.</span>
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-8">
                        {points.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 group">
                                <div className={`shrink-0 w-10 h-10 rounded-full ${item.bg} flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon className={`w-5 h-5 ${item.color}`} />
                                </div>
                                <p className="text-stone-700 text-lg leading-relaxed font-medium pt-0.5 group-hover:text-stone-900 transition-colors">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

