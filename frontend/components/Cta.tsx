"use client"

import { ArrowDown } from "lucide-react"



const Cta = () => {

    const scrollToRegister = () => {
        document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
    };
  return (
    <div>
          <button
              onClick={scrollToRegister}
              className="group bg-stone-800 text-stone-50 px-10 py-5 rounded-full text-lg font-medium hover:bg-stone-900 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl flex items-center gap-3"
          >
              Reserve Your Seat
              <span className="bg-stone-700 rounded-full p-1 group-hover:bg-emerald-600 transition-colors">
                  <ArrowDown className="w-4 h-4" />
              </span>
          </button>
    </div>
  )
}

export default Cta