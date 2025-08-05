export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">About XEL</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
          Bridging the gap between businesses and customers through intelligent automation
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-black">Who We Are</h3>
            <p className="text-gray-600 leading-relaxed">
              XEL is a specialized AI chatbot development company founded with a mission to bridge the gap between
              businesses and their customers through intelligent automation. Our team of experienced developers and AI
              specialists has successfully deployed chatbot solutions across diverse industries, helping companies
              streamline customer interactions while maintaining the personal touch that builds lasting relationships.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-black">Our Expertise</h3>
            <p className="text-gray-600 leading-relaxed">
              With over 3 years in the AI chatbot space, we've mastered the art of creating conversational experiences
              that feel natural and provide real value. Our developers are certified in leading AI platforms and stay
              current with the latest advancements in natural language processing, machine learning, and conversational
              AI technologies.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-black">Why Choose XEL</h3>
            <p className="text-gray-600 leading-relaxed">
              We don't just build chatbots – we create digital assistants that understand your business context, speak
              your brand's language, and grow smarter with every interaction. Our agile development process means you
              see progress weekly, not monthly, and our post-launch support ensures your chatbot evolves with your
              business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
