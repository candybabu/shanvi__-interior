import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans scroll-smooth">
      {/* 1. Header / Navbar */}
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Shanvi Interior Hub</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-blue-700 font-medium">Home</a>
          <a href="#services" className="text-gray-600 hover:text-blue-700 font-medium">Services</a>
          <a href="#process" className="text-gray-600 hover:text-blue-700 font-medium">Our Process</a>
          <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">Contact Us</a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <header id="home" className="relative py-24 text-center bg-gradient-to-r from-blue-600 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">Shanvi Interior Solutions</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">Chhattisgarh's Best PVC Wall Panelling, Ceilings and Flooring.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a href="https://wa.me/917000883798" target="_blank" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg transition transform hover:scale-105">
              Get Free Estimate (WhatsApp)
            </a>
            <a href="#services" className="bg-white text-blue-700 font-bold py-4 px-10 rounded-full text-lg border-2 border-white hover:bg-transparent hover:text-white transition">
              View Designs
            </a>
          </div>
        </div>
      </header>

      {/* 3. Services Section */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
            <img src="/Kitchen.jpg" alt="Modular Kitchen" className="w-full h-64 object-cover" />
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">Modular Kitchen</h3>
              <p className="text-gray-600 mb-4">High-finish, waterproof, and termite-proof PVC kitchen cabinets.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
            <img src="/ceiling.jpg" alt="False Ceiling" className="w-full h-64 object-cover" />
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">False Ceiling</h3>
              <p className="text-gray-600 mb-4">Modern POP & PVC ceiling designs with integrated LED lighting.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
            <img src="/TVunits.jpg" alt="TV Unit" className="w-full h-64 object-cover" />
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">TV Units & Panels</h3>
              <p className="text-gray-600 mb-4">Elegant TV unit designs using charcoal and PVC louvers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Process Section (Trust Builder) */}
      <section id="process" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6">
              <div className="text-4xl mb-4 text-blue-600 font-bold">01</div>
              <h4 className="text-xl font-bold mb-2">Free Measurement</h4>
              <p className="text-gray-600">We visit your site for exact dimensions.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4 text-blue-600 font-bold">02</div>
              <h4 className="text-xl font-bold mb-2">Design Choice</h4>
              <p className="text-gray-600">Pick from 500+ PVC & Louver patterns.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4 text-blue-600 font-bold">03</div>
              <h4 className="text-xl font-bold mb-2">Fast Install</h4>
              <p className="text-gray-600">Complete installation within 7 days.</p>
            </div>
            <div className="p-6">
              <div className="text-4xl mb-4 text-blue-600 font-bold">04</div>
              <h4 className="text-xl font-bold mb-2">Enjoy!</h4>
              <p className="text-gray-600">Get 10 years warranty on your interior.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="contact" className="py-20 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us Today</h2>
        <p className="text-xl text-gray-600 mb-10">Durg-Bhilai aur Raipur me behtareen service ke liye call karein.</p>
        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 flex flex-col md:flex-row justify-around items-center gap-8">
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-2 font-bold">Call / WhatsApp</p>
            <p className="text-3xl font-bold text-blue-700">+91 70008 83798</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-2 font-bold">Business Location</p>
            <p className="text-2xl font-bold text-gray-800 font-hindi">Durg, Chhattisgarh</p>
          </div>
          <a href="https://wa.me/917000883798" target="_blank" className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition shadow-lg">
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-900 text-white text-center">
        <p>© 2026 Shanvi Interior Solutions. All Rights Reserved.</p>
        <p className="text-gray-500 mt-2 text-sm italic">Designed for Quality & Durability</p>
      </footer>
    </div>
  );
}