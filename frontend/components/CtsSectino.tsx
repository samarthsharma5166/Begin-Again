"use client"
const CtsSection = () => {
  return (
      <section className="py-20 bg-stone-200 text-center">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-6">Ready to Begin Again?</h2>
              {/* <p className="text-lg text-stone-600 max-w-2xl mx-auto mb-10">
                  If you’re tired of shallow connections and ready for something meaningful, safe, and grounded — this experience was created for you.
              </p> */}
              <button
                  onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-stone-900 text-white px-10 py-5 rounded-full text-xl font-medium hover:bg-stone-700 transition-all shadow-xl"
              >
                  Book Your Seat Now
              </button>
          </div>
      </section>
  )
}

export default CtsSection