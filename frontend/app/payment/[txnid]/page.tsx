import { axiosInstance } from "@/helper/axiosInstance";
import { Calendar, CheckCircle2 } from "lucide-react";

type PageProps = {
    params: Promise<{txnid:string }>;
};
const page = async({ params }: PageProps) => {
    const { txnid } = await params;
    const res = await axiosInstance.post(`/payment/verify/${txnid}`)
    console.log(res);
  return (
  
          <section id="register" className="py-24 bg-emerald-300 h-screen ">
              <div className="container  mx-auto px-6 max-w-xl">
                  <div
                     
                      className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-100 text-center"
                  >
                      <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                          <div
                           
                          >
                              <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                          </div>
                          <div className="absolute inset-0 border-4 border-emerald-50 rounded-full animate-ping opacity-20" />
                      </div>

                      <h2 className="text-3xl font-serif text-stone-800 mb-4">You're In!</h2>
                      <p className="text-stone-600 mb-8 leading-relaxed">
                          Your seat for <span className="font-semibold text-emerald-700">Begin Again</span> is confirmed.
                          We've sent a confirmation to your email.
                      </p>

                      {/* <div className="bg-stone-50 rounded-2xl p-6 text-left border border-stone-100">
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
                      </div> */}
                  </div>
              </div>
          </section>
  

  )
}

export default page