export default function Industries() {
  const industries = [
    {
      title: "🏥 Healthcare & Medical",
      description:
        "HIPAA-compliant chatbots for appointment scheduling, symptom checking, prescription refills, and patient education. Integration with EMR systems and medical databases.",
    },
    {
      title: "🛒 E-commerce & Retail",
      description:
        "Product recommendations, order tracking, return processing, inventory inquiries, and personalized shopping assistance. Integration with Shopify, WooCommerce, and Magento.",
    },
    {
      title: "🏦 Banking & Finance",
      description:
        "Secure chatbots for account inquiries, transaction history, loan applications, and financial advice. Built with bank-grade security and regulatory compliance.",
    },
    {
      title: "🏠 Real Estate",
      description:
        "Property search assistance, appointment scheduling for viewings, mortgage calculators, and lead qualification. Integration with MLS systems and CRM platforms.",
    },
    {
      title: "🎓 Education",
      description:
        "Student support chatbots for course information, admission processes, fee inquiries, and academic assistance. Integration with learning management systems.",
    },
    {
      title: "💼 Technology",
      description:
        "Technical support chatbots, product information systems, lead qualification, and customer onboarding automation for tech companies and SaaS platforms.",
    },
  ]

  return (
    <section id="industries" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">Industries We Serve</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
          Specialized solutions across diverse sectors
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-1 transition-all"
            >
              <h3 className="text-xl font-semibold mb-4 text-black">{industry.title}</h3>
              <p className="text-gray-600 leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
