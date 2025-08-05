"use client"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-black to-gray-800 text-white py-32 text-center mt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Advanced AI Chatbot Solutions</h1>
        <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed max-w-4xl mx-auto">
          We specialize in developing sophisticated chatbot solutions tailored to your business needs. From simple
          predefined responses to advanced AI-powered systems, we deliver seamless database integration and create
          comprehensive data infrastructure when needed.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://calendly.com/outreach-xelai/60min"
            className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:-translate-y-1 inline-block"
          >
            Book Free Consultation
          </a>
          <a
            href="https://wa.me/918081139546"
            className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all border-2 border-green-500 inline-block"
          >
            💬 WhatsApp
          </a>
          <a
            href="#about"
            className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-black transition-all inline-block"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }}
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
