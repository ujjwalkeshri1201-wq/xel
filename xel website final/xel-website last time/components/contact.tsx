export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-black">Get Started Today</h2>
        <p className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto">
          Ready to transform your customer experience with AI-powered chatbots?
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-black">📧 Email Us</h3>
            <div className="space-y-2">
              <a href="mailto:contact@xelai.in" className="block text-black hover:underline font-medium">
                contact@xelai.in
              </a>
              <a href="mailto:support@xelai.in" className="block text-black hover:underline font-medium">
                support@xelai.in
              </a>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-black">📞 Call or WhatsApp</h3>
            <div className="contact-info space-y-2">
              <a href="tel:+918081139546" className="block text-blue-500 hover:underline font-medium">
                +91 8081139546
              </a>
              <a href="https://wa.me/918081139546" className="block text-black hover:underline font-medium">
                WhatsApp Chat
              </a>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-black">🏢 Visit Us</h3>
            <div className="text-gray-600">
              199-C Transport Nagar
              <br />
              Prayagraj, Uttar Pradesh
              <br />
              Mon-Fri: 9:00 AM - 7:00 PM
              <br />
              Sat: 10:00 AM - 4:00 PM
            </div>
          </div>
        </div>
        <a
          href="https://calendly.com/outreach-xelai/60min"
          className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all inline-block"
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  )
}
