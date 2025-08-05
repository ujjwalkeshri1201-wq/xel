import type { Metadata } from "next"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Industries from "@/components/industries"
import Process from "@/components/process"
import Pricing from "@/components/pricing"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"

export const metadata: Metadata = {
  title: "XEL - Advanced AI Chatbot Solutions | Custom Development & Integration",
  description:
    "XEL specializes in AI chatbot development for businesses. Custom solutions, database integration, multi-platform deployment. 3+ years experience across healthcare, e-commerce, banking & more.",
  keywords:
    "AI chatbot development, custom chatbots, database integration, WhatsApp chatbot, healthcare chatbot, e-commerce chatbot",
}

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <CTASection
        title="Ready to Transform Your Customer Experience?"
        description="Let's discuss how AI chatbots can revolutionize your business operations"
        primaryButton={{ text: "Book Free Consultation", href: "https://calendly.com/outreach-xelai/60min" }}
        secondaryButton={{ text: "📞 Call Now", href: "tel:+918081139546" }}
      />
      <Services />
      <CTASection
        title="Need a Custom Solution?"
        description="Every business is unique. Let's create the perfect chatbot solution for your specific needs."
        primaryButton={{ text: "💬 Chat on WhatsApp", href: "https://wa.me/918081139546" }}
        secondaryButton={{ text: "Schedule Call", href: "https://calendly.com/outreach-xelai/60min" }}
      />
      <Industries />
      <Process />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
