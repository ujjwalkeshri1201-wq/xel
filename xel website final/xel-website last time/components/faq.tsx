export default function FAQ() {
  const faqs = [
    {
      question: "How long does it take to build a chatbot?",
      answer:
        "Typical development time is 2-4 weeks depending on complexity. Simple FAQ bots can be ready in 1 week, while complex AI systems with multiple integrations may take 6-8 weeks.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "Yes, we specialize in integrations. We can connect to most CRM systems, databases, e-commerce platforms, and third-party APIs through secure connections.",
    },
    {
      question: "What languages do you support?",
      answer:
        "We support all major Indian languages including Hindi, Bengali, Tamil, Telugu, Marathi, and Gujarati, along with English. Multi-language chatbots are available.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, all packages include support periods, and we offer extended support plans. Our team monitors performance and provides regular optimization recommendations.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We follow industry-standard security practices, encrypt all data transmissions, and can sign NDAs. We're compliant with GDPR, HIPAA, and other relevant regulations.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="font-semibold text-lg mb-4 text-black">{faq.question}</div>
              <div className="text-gray-600 leading-relaxed">{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
