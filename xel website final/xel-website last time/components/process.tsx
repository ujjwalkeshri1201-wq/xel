export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Discovery & Planning",
      description:
        "Detailed consultation to understand your business needs, customer journey mapping, and technical requirements assessment.",
      timeline: "Week 1",
    },
    {
      number: "2",
      title: "Development & Testing",
      description:
        "Chatbot development, database integration, and comprehensive testing across all scenarios and edge cases.",
      timeline: "Week 2-3",
    },
    {
      number: "3",
      title: "Deployment & Training",
      description: "Live deployment, team training, and performance monitoring setup with real-time analytics.",
      timeline: "Week 4",
    },
    {
      number: "4",
      title: "Support & Optimization",
      description:
        "24/7 technical support, monthly performance reviews, and continuous optimization based on user feedback and analytics.",
      timeline: "Ongoing",
    },
  ]

  return (
    <section id="process" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Our Process</h2>
        <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
          From concept to deployment in as little as 4 weeks*
          <br />
          <small>*Timelines vary based on project scope and complexity</small>
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
              <strong className="text-white">{step.timeline}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
