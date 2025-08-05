export default function Pricing() {
  const plans = [
    {
      name: "Starter Solutions",
      price: "Starting at ₹25,000",
      subtitle: "Ideal for startups needing a simple FAQ chatbot to get started quickly.",
      features: [
        "Basic FAQ chatbot",
        "Up to 50 predefined responses",
        "Single platform deployment",
        "Basic analytics dashboard",
        "3 months technical support",
        "Free consultation included",
      ],
      buttonText: "Get Started",
      featured: false,
    },
    {
      name: "Professional Solutions",
      price: "Starting at ₹75,000",
      subtitle: "Perfect for scaling businesses looking for advanced AI + database integration.",
      features: [
        "Advanced AI chatbot with NLP",
        "Database integration & CRM sync",
        "Multi-platform deployment",
        "Custom workflows & automation",
        "Advanced analytics & reporting",
        "6 months dedicated support",
        "Unlimited revisions during development",
      ],
      buttonText: "Most Popular",
      featured: true,
    },
    {
      name: "Enterprise Solutions",
      price: "Custom Quote",
      subtitle: "For complex, multi‑platform deployments with dedicated support.",
      features: [
        "Fully custom AI solution",
        "Complex system integrations",
        "Multi-language support",
        "Advanced security & compliance",
        "Dedicated account manager",
        "24/7 priority support",
        "Ongoing optimization & training",
      ],
      buttonText: "Contact Us",
      featured: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">Pricing Plans</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
          Transparent pricing with no hidden costs
        </p>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white p-8 rounded-xl shadow-lg text-center relative ${plan.featured ? "border-4 border-black transform scale-105" : ""}`}
            >
              <h3 className="text-2xl font-semibold mb-4 text-black">{plan.name}</h3>
              <div className="text-3xl font-bold text-black mb-4">{plan.price}</div>
              <p className="text-gray-600 mb-8 italic">{plan.subtitle}</p>
              <ul className="text-left mb-8 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-green-500 font-bold mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/outreach-xelai/60min"
                className={`inline-block px-8 py-3 rounded-lg font-semibold transition-all ${
                  plan.featured ? "bg-black text-white hover:bg-gray-800" : "bg-gray-200 text-black hover:bg-gray-300"
                }`}
              >
                {plan.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
