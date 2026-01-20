import { Agenda } from "@/components/Agenda";
import CtsSection from "@/components/CtsSectino";
import { Details } from "@/components/Details";
import { Experience } from "@/components/Experience";
import { Facilitator } from "@/components/Facilitator";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NotThis } from "@/components/NotThis";
import { Pricing } from "@/components/Pricing";
import { RegistrationForm } from "@/components/RegistrationForm";
import { TargetAudience } from "@/components/TargetAudience";



export default function Home() {
  return (
    <div className="font-sans text-stone-800 antialiased selection:bg-stone-200 selection:text-stone-900">
      <Hero/>
      <TargetAudience/>
      <NotThis/>
      <Experience/>
      <Agenda/>
      <Facilitator/>
      <Details/>
      <Pricing/>
      <RegistrationForm />
      <CtsSection/>
      <Footer/>
    </div>
  );
}
