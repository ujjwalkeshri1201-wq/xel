interface CTASectionProps {
  title: string
  description: string
  primaryButton: { text: string; href: string }
  secondaryButton: { text: string; href: string }
}

export default function CTASection({ title, description, primaryButton, secondaryButton }: CTASectionProps) {
  // Check if the secondary button is a phone/call button
  const isPhoneButton = secondaryButton.href.startsWith("tel:")

  return (
    <section className="bg-gray-50 py-16 text-center my-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-black">{title}</h3>
        <p className="text-lg text-gray-600 mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={primaryButton.href}
            className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:-translate-y-1 inline-block border-2 border-gray-200"
          >
            {primaryButton.text}
          </a>
          <a
            href={secondaryButton.href}
            className={`px-8 py-4 rounded-lg text-lg font-semibold transition-all border-2 inline-block ${
              isPhoneButton
                ? "bg-blue-500 text-white border-blue-500 hover:bg-blue-600 hover:border-blue-600"
                : "bg-red-500 text-white border-red-500 hover:bg-red-600 hover:border-red-600"
            }`}
          >
            {secondaryButton.text}
          </a>
        </div>
      </div>
    </section>
  )
}
