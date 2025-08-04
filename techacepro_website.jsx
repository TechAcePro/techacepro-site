export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">TechAce Professionals</h1>
          <nav className="space-x-6">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section className="text-center py-20 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">Empowering B2B Sales Success</h2>
        <p className="text-lg text-gray-700 mb-6">Sales Training | CRM Setup | Lead Generation | Closures</p>
        <div className="space-x-4">
          <a href="https://wa.me/your-number" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">Chat on WhatsApp</a>
          <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Book a Call</a>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2">B2B Consulting</h4>
              <p>Custom strategies to scale your B2B sales and revenue channels.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Sales Training</h4>
              <p>Empower your team with effective communication and deal-closing skills.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Lead Generation</h4>
              <p>Consistent pipeline with qualified leads using outbound & inbound strategies.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2">CRM Setup</h4>
              <p>Get your CRM tailored for your sales process and workflows.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Sales Closures</h4>
              <p>We help you close deals faster through proven closure frameworks.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Negotiations</h4>
              <p>Master the art of negotiation and win better contracts.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">About Us</h3>
          <p className="text-gray-700 text-lg">TechAce Professionals is driven by a single mission: to enable businesses to scale their sales with clarity, confidence, and consistency. With deep expertise in B2B consulting and sales systems, we help you build engines that don’t just generate leads—but convert them.</p>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-6">Let’s Talk</h3>
          <p className="mb-6 text-gray-700">Interested in working together or learning more? Reach out via WhatsApp or book a call with us directly.</p>
          <div className="space-x-4">
            <a href="https://wa.me/your-number" className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600">WhatsApp</a>
            <a href="mailto:info@techacepro.com" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">Email Us</a>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white text-center py-6">
        <p>&copy; 2025 TechAce Professionals. All rights reserved.</p>
      </footer>
    </main>
  )
}
