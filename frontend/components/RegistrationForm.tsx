"use client"
import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Loader2, CheckCircle2, ArrowRight, User, Mail, Heart, Calendar, CreditCard, Lock, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { axiosInstance } from '@/helper/axiosInstance';


type FormData = {
    fullName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    // status: string;
    // reason: string;
    agreementTherapeutic: boolean;
    agreementRecording: boolean; 
};

// Reusable Input Component
const InputField = ({ label, icon: Icon, error, ...props }: any) => (
    <div className="space-y-1.5">
        <label className="text-sm font-medium text-stone-700 ml-1">{label}</label>
        <div className="relative group">
            <div className="absolute left-3.5 top-3.5 text-stone-400 group-focus-within:text-emerald-600 transition-colors">
                <Icon className="w-5 h-5" />
            </div>
            <input
                {...props}
                className={clsx(
                    "w-full pl-11 pr-4 py-3 bg-stone-50 border rounded-xl outline-none transition-all duration-200",
                    error
                        ? "border-rose-300 focus:ring-2 focus:ring-rose-200 bg-rose-50/30"
                        : "border-stone-200 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 hover:border-emerald-200"
                )}
            />
        </div>
        {error && <span className="text-rose-500 text-xs ml-1 flex items-center gap-1">This field is required</span>}
    </div>
);

// Custom Select/Radio Component
const SelectionGroup = ({ label, options, value, onChange, error }: any) => (
    <div className="space-y-2">
        <label className="text-sm font-medium text-stone-700 ml-1">{label}</label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {options.map((opt: any) => (
                <button
                    key={opt.value}
                    type="button"
                    onClick={() => onChange(opt.value)}
                    className={clsx(
                        "p-3 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2",
                        value === opt.value
                            ? "bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-200 scale-[1.02]"
                            : "bg-white border-stone-200 text-stone-600 hover:border-emerald-300 hover:bg-emerald-50/30"
                    )}
                >
                    {opt.icon && <opt.icon className="w-4 h-4" />}
                    {opt.label}
                </button>
            ))}
        </div>
        {error && <span className="text-rose-500 text-xs ml-1">Please select an option</span>}
    </div>
);

// Custom Checkbox Component
const AgreementCheckbox = ({ label, checked, onChange, error }: any) => (
    <div
        onClick={() => onChange(!checked)}
        className={clsx(
            "flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all duration-200 group",
            checked
                ? "bg-emerald-50/50 border-emerald-200"
                : "bg-stone-50 border-stone-200 hover:border-emerald-200",
            error && "border-rose-300 bg-rose-50/10"
        )}
    >
        <div className={clsx(
            "w-6 h-6 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-200 mt-0.5",
            checked
                ? "bg-emerald-600 border-emerald-600 shadow-sm shadow-emerald-200"
                : "bg-white border-stone-300 group-hover:border-emerald-400"
        )}>
            {checked && <Check className="w-3.5 h-3.5 text-white stroke-[3]" />}
        </div>
        <span className={clsx(
            "text-sm leading-relaxed transition-colors",
            checked ? "text-stone-800" : "text-stone-600"
        )}>
            {label}
        </span>
    </div>
);

export const RegistrationForm = () => {
    const { register, control, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [step, setStep] = useState<'form' | 'payment' | 'success'>('form');
    const [isProcessing, setIsProcessing] = useState(false);
    const [fromData,setFormData] = useState('');

    useEffect(()=>{
        const formData = document.getElementById("payment_post") as HTMLFormElement;
        if (formData) {
            formData.submit()
        }
    },[fromData])
    useEffect(() => {
        // If user comes back (inc. from bfcache) and we're in payment mode → go back to form
        const handlePopState = () => {
            if (step === 'payment') {
                setStep('form');
            }
        };
        
        const handlePageShow = (event: PageTransitionEvent) => {
            if (event.persisted && step === 'payment') {
                setStep('form');
            }
        };

        window.addEventListener('popstate', handlePopState);
        window.addEventListener('pageshow', handlePageShow);
        return () => {
            window.removeEventListener('popstate', handlePopState);
            window.removeEventListener('pageshow', handlePageShow);
        };
    }, [step]);
    // console.log(url); 
    const onSubmit = async(data: FormData) => {

        const res = await axiosInstance.post("/payment/get-payment",data);
        setFormData(res.data);
        console.log(res);
        setStep('payment');

        window.scrollTo({ top: document.getElementById('register')?.offsetTop || 0, behavior: 'smooth' });
    };

    const handlePayment = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setStep('success');
            window.scrollTo({ top: document.getElementById('register')?.offsetTop || 0, behavior: 'smooth' });
        }, 2000);
    };

    if (step === 'success') {
        return (
            <section id="register" className="py-24 bg-emerald-300 ">
                <div className="container  mx-auto px-6 max-w-xl">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-100 text-center"
                    >
                        <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: "spring" }}
                            >
                                <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                            </motion.div>
                            <div className="absolute inset-0 border-4 border-emerald-50 rounded-full animate-ping opacity-20" />
                        </div>

                        <h2 className="text-3xl font-serif text-stone-800 mb-4">You're In!</h2>
                        <p className="text-stone-600 mb-8 leading-relaxed">
                            Your seat for <span className="font-semibold text-emerald-700">Begin Again</span> is confirmed.
                            We've sent a confirmation to your email.
                        </p>

                        <div className="bg-stone-50 rounded-2xl p-6 text-left border border-stone-100">
                            <h3 className="font-medium text-stone-800 mb-3 flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-emerald-600" /> Next Steps
                            </h3>
                            <ul className="space-y-3 text-sm text-stone-600">
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-1.5 shrink-0" />
                                    Check your inbox for the welcome packet.
                                </li>
                                <li className="flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-1.5 shrink-0" />
                                    Join the private WhatsApp group (link in email).
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </section>
        );
    }

    if (step === 'payment') {
        return (
            <section id="register" className="py-24 bg-emerald-200 ">
                <div className="container mx-auto px-6 max-w-xl">
                    {/* <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        className="bg-white p-8 rounded-3xl border border-stone-200 shadow-xl"
                    >
                        <button
                            onClick={() => setStep('form')}
                            className="text-sm text-stone-500 hover:text-stone-800 mb-6 flex items-center gap-1"
                        >
                            ← Back to details
                        </button>

                        <h2 className="text-2xl font-serif text-stone-800 mb-2 text-center">Secure Your Spot</h2>
                        <p className="text-center text-stone-500 mb-8">Complete payment to finalize registration</p>

                        <div className="bg-stone-50 p-6 rounded-2xl mb-8 border border-stone-100 flex justify-between items-center">
                            <div>
                                <p className="text-sm text-stone-500 mb-1">Total to pay</p>
                                <p className="text-2xl font-serif text-stone-800">₹2999</p>
                            </div>
                            <div className="bg-white px-3 py-1 rounded-full text-xs font-medium text-emerald-700 border border-emerald-100">
                                Early Bird Active
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <button className="w-full border border-stone-200 p-4 rounded-xl flex items-center justify-between hover:border-emerald-500 hover:bg-emerald-50/30 transition-all group">
                                <div className="flex items-center gap-3">
                                    <CreditCard className="w-5 h-5 text-stone-400 group-hover:text-emerald-600" />
                                    <span className="font-medium text-stone-700">Card Payment</span>
                                </div>
                                <div className="w-4 h-4 rounded-full border border-stone-300 group-hover:border-emerald-500" />
                            </button>

                            <button className="w-full border-2 border-emerald-600 bg-emerald-50/10 p-4 rounded-xl flex items-center justify-between relative">
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700">UPI</div>
                                    <span className="font-medium text-stone-800">UPI / Netbanking</span>
                                </div>
                                <div className="w-4 h-4 rounded-full border-[5px] border-emerald-600" />
                            </button>
                        </div>

                        <button
                            onClick={handlePayment}
                            disabled={isProcessing}
                            className="w-full bg-stone-900 text-white py-4 rounded-xl font-medium hover:bg-stone-800 transition-all transform active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
                        >
                            {isProcessing ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" /> Processing Payment...
                                </>
                            ) : (
                                <>
                                    <Lock className="w-4 h-4" /> Pay & Join
                                </>
                            )}
                        </button>

                        <div className="mt-6 flex items-center justify-center gap-2 text-xs text-stone-400">
                            <Lock className="w-3 h-3" />
                            <span>256-bit SSL Encrypted Payment</span>
                        </div>
                    </motion.div> */}
                    <div dangerouslySetInnerHTML={{__html:fromData }}>

                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="register" className="py-24 bg-emerald-100 ">
            <div className="container  mx-auto px-6 max-w-4xl">
                <div className="text-center  mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-white border border-stone-200 text-stone-500 text-xs font-medium mb-4 tracking-wide shadow-sm">
                        Step 1 of 2
                    </span>
                    <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-4">Join the Experience</h2>
                    <p className="text-stone-600 max-w-xl mx-auto">
                        Take the first step towards healing. Your information is kept strictly confidential.
                    </p>
                </div>

                <div className="bg-white rounded-[2rem] shadow-xl shadow-stone-200/50 overflow-hidden border border-stone-100">
                    <div className="h-2 bg-stone-100">
                        <div className="h-full w-1/2 bg-emerald-500 rounded-r-full" />
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12 space-y-8">
                        {/* Personal Details Section */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-serif text-stone-800 flex items-center gap-2">
                                <User className="w-5 h-5 text-emerald-600" /> Personal Details
                            </h3>
                            {/* NAME */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <InputField
                                    label="Full Name"
                                    icon={User}
                                    placeholder="e.g. Aditi Sharma"
                                    error={errors.fullName}
                                    {...register("fullName", { required: true })}
                                />
                                {/* AGE */}
                                <InputField
                                    label="Age"
                                    icon={Calendar}
                                    type="number"
                                    placeholder="30-45"
                                    error={errors.age}
                                    {...register("age", { required: true, min: 30, max: 45 })}
                                />
                            </div>
                            {/* GENDER */}
                            <Controller
                                name="gender"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <SelectionGroup
                                        label="Gender"
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={errors.gender}
                                        options={[
                                            { value: 'female', label: 'Female' },
                                            { value: 'male', label: 'Male' },
                                            { value: 'non-binary', label: 'Non-binary' }
                                        ]}
                                    />
                                )}
                            />
                        </div>

                        <div className="w-full h-px bg-stone-100" />

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-serif text-stone-800 flex items-center gap-2">
                                <Mail className="w-5 h-5 text-emerald-600" /> Contact Info
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {/* <InputField
                                    label="Email Address"
                                    icon={Mail}
                                    type="email"
                                    placeholder="aditi@example.com"
                                    error={errors.email}
                                    {...register("email", { required: true })}
                                />
                                <InputField
                                    label="Phone (WhatsApp)"
                                    icon={Calendar}
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    error={errors.phone}
                                    {...register("phone", { required: true })}
                                /> */}

                                <InputField
                                    label="Email Address"
                                    icon={Mail}
                                    type="email"
                                    placeholder="aditi@example.com"
                                    error={errors.email && "Enter a valid email"}
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "Invalid email format"
                                        }
                                    })}
                                />
                                <InputField
                                    label="Phone (WhatsApp)"
                                    icon={Calendar}
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    error={errors.phone && "Enter a valid phone number"}
                                    {...register("phone", {
                                        required: "Phone is required",
                                        pattern: {
                                            value: /^[6-9]\d{9}$/,
                                            message: "Invalid Indian phone number"
                                        }
                                    })}
                                />
                            </div>
                        </div>

                        {/* <div className="w-full h-px bg-stone-100" /> */}

                        {/* Context */}
                        {/* <div className="space-y-6">
                            <h3 className="text-lg font-serif text-stone-800 flex items-center gap-2">
                                <Heart className="w-5 h-5 text-emerald-600" /> Your Context
                            </h3>

                            <Controller
                                name="status"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <SelectionGroup
                                        label="Relationship Status"
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={errors.status}
                                        options={[
                                            { value: 'divorced', label: 'Divorced' },
                                            { value: 'separated', label: 'Separated' },
                                            { value: 'broken-up', label: 'Recently Broken Up' }
                                        ]}
                                    />
                                )}
                            />

                            <div className="space-y-1.5">
                                <label className="text-sm font-medium text-stone-700 ml-1">What brings you here?</label>
                                <textarea
                                    {...register("reason", { required: true })}
                                    rows={3}
                                    className="w-full p-4 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all resize-none"
                                    placeholder="I'm hoping to understand..."
                                />
                                {errors.reason && <span className="text-rose-500 text-xs ml-1">This field is required</span>}
                            </div>
                        </div> */}

                        <div className="w-full h-px bg-stone-100" />

                        {/* Agreements */}
                        <div className="space-y-4">
                            <Controller
                                name="agreementTherapeutic"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <AgreementCheckbox
                                        label="I understand that this event is both therapeutic and opens up possibilities for connection."
                                        checked={field.value}
                                        onChange={field.onChange}
                                        error={errors.agreementTherapeutic}
                                    />
                                )}
                            />
                            {errors.agreementTherapeutic && <span className="text-rose-500 text-xs ml-1 block -mt-3 mb-2">You must agree to continue</span>}

                            <Controller
                                name="agreementRecording"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => (
                                    <AgreementCheckbox
                                        label="I am aware the event will be recorded and the content used for future marketing purposes."
                                        checked={field.value}
                                        onChange={field.onChange}
                                        error={errors.agreementRecording}
                                    />
                                )}
                            />
                            {errors.agreementRecording && <span className="text-rose-500 text-xs ml-1 block -mt-3">You must agree to continue</span>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-stone-700 text-white py-5 rounded-xl font-medium text-lg hover:bg-stone-800 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-stone-900/10 flex items-center justify-center gap-2 group mt-4"
                        >
                            Continue to Payment
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <p className="text-center text-xs text-stone-400">
                            By registering, you agree to our privacy policy and terms of service.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};
