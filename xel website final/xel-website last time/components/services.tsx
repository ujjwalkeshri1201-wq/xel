export default function Services() {
  const coreServices = [
    {
      title: "🤖 Custom AI Chatbot Development",
      description:
        "Transform customer interactions with intelligent chatbots that understand context, remember conversations, and handle complex multi-step processes. From simple FAQ automation to sophisticated AI assistants that can process appointments, handle transactions, and provide personalized recommendations.",
    },
    {
      title: "🎙️ AI Voice Agents & Phone Automation",
      description:
        "Intelligent voice agents that handle phone calls with natural conversation flow, accent recognition, and real-time responses. Perfect for appointment booking, customer support, lead qualification, and sales calls with human-like interaction quality.",
    },
    {
      title: "🧠 Conversational AI & NLP Solutions",
      description:
        "Advanced natural language processing that makes your chatbot understand intent, sentiment, and context. Supports multiple languages, handles typos and variations, and learns from every conversation to improve responses over time.",
    },
    {
      title: "🔗 System Integration & API Development",
      description:
        "Seamlessly connect your chatbot to existing business systems - CRM, ERP, inventory management, booking systems, and payment gateways. We create custom APIs when needed and ensure real-time data synchronization across all platforms.",
    },
  ]

  const platformServices = [
    {
      title: "📱 Multi-Platform Chatbot Deployment",
      description:
        "One chatbot, everywhere your customers are. Deploy across websites, WhatsApp Business API, Facebook Messenger, Instagram, Telegram, mobile apps, and voice assistants. Consistent experience, centralized management.",
    },
    {
      title: "🌐 Website Integration & Embedding",
      description:
        "Professional chatbot widgets that match your brand design, with customizable appearance, behavior, and positioning. Includes advanced features like file uploads, appointment booking, and lead capture forms.",
    },
    {
      title: "📞 Voice Bot & Phone Integration",
      description:
        "Extend your chatbot to handle phone calls with natural voice interactions. Perfect for appointment booking, customer support, and lead qualification through automated phone systems.",
    },
  ]

  const dataServices = [
    {
      title: "📊 Analytics & Performance Optimization",
      description:
        "Comprehensive dashboards showing conversation analytics, customer satisfaction scores, conversion tracking, and ROI metrics. Monthly optimization reports with actionable insights to improve performance.",
    },
    {
      title: "🗄️ Database Design & Management",
      description:
        "Custom database architecture for chatbot knowledge bases, customer data, and conversation history. Includes data backup, security protocols, and GDPR compliance measures.",
    },
    {
      title: "📈 AI Training & Continuous Learning",
      description:
        "Regular model training with your specific business data, conversation optimization, and performance tuning. Your chatbot gets smarter with every interaction and business update.",
    },
  ]

  const industryServices = [
    {
      title: "🏥 Healthcare Chatbot Solutions",
      description:
        "HIPAA-compliant chatbots for patient scheduling, symptom checking, medication reminders, and health education. Secure integration with EMR systems and medical databases.",
    },
    {
      title: "🛒 E-commerce & Retail Automation",
      description:
        "Product recommendation engines, order tracking, inventory inquiries, return processing, and personalized shopping assistance. Integration with Shopify, WooCommerce, Amazon, and other platforms.",
    },
    {
      title: "👗 Fashion & Lifestyle Brands",
      description:
        "Style recommendations, size guides, outfit suggestions, and personal shopping assistance. Visual search capabilities, trend updates, and integration with inventory systems for real-time availability.",
    },
  ]

  const supportServices = [
    {
      title: "🔧 24/7 Technical Support & Monitoring",
      description:
        "Round-the-clock monitoring, instant issue resolution, and proactive maintenance. Includes uptime guarantees, performance alerts, and emergency response protocols.",
    },
    {
      title: "🚀 Chatbot Migration & Upgrades",
      description:
        "Seamlessly migrate from existing chatbot platforms or upgrade legacy systems. Zero downtime migrations with improved functionality and better user experience.",
    },
    {
      title: "📚 Training & Documentation Services",
      description:
        "Comprehensive team training, user manuals, admin guides, and video tutorials. Ongoing training sessions as your chatbot evolves and new features are added.",
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">Our Services</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-4xl mx-auto">
          Comprehensive AI chatbot solutions tailored to your business needs
        </p>

        {/* Core Development Services */}
        <h3 className="text-3xl font-semibold mb-8 text-black border-b-2 border-black pb-2">
          Core Development Services
        </h3>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all"
            >
              <h4 className="text-xl font-semibold mb-6 text-black flex items-center gap-2">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Platform & Deployment Services */}
        <h3 className="text-3xl font-semibold mb-8 text-black border-b-2 border-black pb-2">
          Platform & Deployment Services
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {platformServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all"
            >
              <h4 className="text-xl font-semibold mb-6 text-black flex items-center gap-2">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Data & Intelligence Services */}
        <h3 className="text-3xl font-semibold mb-8 text-black border-b-2 border-black pb-2">
          Data & Intelligence Services
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {dataServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all"
            >
              <h4 className="text-xl font-semibold mb-6 text-black flex items-center gap-2">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Specialized Industry Solutions */}
        <h3 className="text-3xl font-semibold mb-8 text-black border-b-2 border-black pb-2">
          Specialized Industry Solutions
        </h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {industryServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all"
            >
              <h4 className="text-xl font-semibold mb-6 text-black flex items-center gap-2">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Support & Maintenance Services */}
        <h3 className="text-3xl font-semibold mb-8 text-black border-b-2 border-black pb-2">
          Support & Maintenance Services
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {supportServices.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all"
            >
              <h4 className="text-xl font-semibold mb-6 text-black flex items-center gap-2">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
