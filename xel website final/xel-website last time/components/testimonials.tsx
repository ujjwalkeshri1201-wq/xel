export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Our customer service efficiency improved dramatically after implementing XEL's chatbot. The 24/7 availability has been a game-changer for our international customers.",
      author: "Rajesh Kumar",
      role: "CEO, TechMart Solutions",
    },
    {
      quote:
        "The healthcare chatbot they developed is not just compliant but actually helps our patients navigate complex medical processes with ease.",
      author: "Dr. Priya Sharma",
      role: "Director, HealthCare Plus",
    },
    {
      quote:
        "ROI was evident within the first month. The chatbot handles routine banking queries so well that our staff can focus on complex customer needs.",
      author: "Amit Patel",
      role: "Branch Manager, City Bank",
    },
  ]

  return (
    <section id="testimonials" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-black p-8 rounded-xl text-center">
              <div className="text-lg italic mb-6 leading-relaxed">"{testimonial.quote}"</div>
              <div className="font-semibold mb-2">{testimonial.author}</div>
              <div className="text-gray-600 text-sm">{testimonial.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
