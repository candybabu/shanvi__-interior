"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { submitLead } from '@/app/actions';
export default function Home() {
  // TypeScript error fix karne ke liye humne Promise<void> ka use kiya hai
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const handleFormSubmit = async (formData: FormData): Promise<void> => {
    try {
      const result = await submitLead(formData);
      if (result.success) {
        alert("Dhanyawad! Shanvi Interiors aapse jald sampark karega.");
        window.location.reload(); 
      } else {
        alert("Database error! Please check your connection.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Kuch technical issue hai. Dubara try karein.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans scroll-smooth text-gray-900">
      {/* 1. Navbar */}
      <nav className="bg-white shadow-md p-4 sticky top-0 z-50 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Shanvi Interior Hub</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-blue-700 font-medium">Home</a>
          <a href="#services" className="text-gray-600 hover:text-blue-700 font-medium">Services</a>
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
          </div>
        </div>
      </header>

      {/* 3. Services Section with Images */}
      <section id="services" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Premium Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
<motion.img
  src="/Kitchen.jpg"  // Jo aapki file ka asli naam hai
  className="cursor-pointer w-full h-64 object-cover"
  whileHover={{ scale: 1.05 }}
  onClick={() => setSelectedImg("/Kitchen.jpg")} 
/>            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Modular Kitchen</h3>
              <p className="text-gray-600">Waterproof and termite-proof PVC kitchen cabinets.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
            <motion.img
  src="/ceiling.jpg" 



  className="cursor-pointer w-full h-64 object-cover"
  whileHover={{ scale: 1.05 }}
  onClick={() => setSelectedImg("/ceiling.jpg")}
/>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">False Ceiling</h3>
              <p className="text-gray-600">Modern POP & PVC ceiling designs with LED lighting.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition">
            <motion.img
  src="/TVunits.jpg" 
 className="cursor-pointer w-full h-64 object-cover"
  whileHover={{ scale: 1.05 }}
  onClick={() => setSelectedImg("/TVunit.jpg")}
/>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-gray-800">TV Units & Panels</h3>
              <p className="text-gray-600">Elegant designs using charcoal and PVC louvers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact Form Section */}
      <section id="contact" className="py-20 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-10">Contact Us</h2>
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Hume Message Bhejein</h3>
          <form action={handleFormSubmit} className="flex flex-col gap-4 text-left">
            <input name="name" type="text" placeholder="Aapka Naam" required className="p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 text-gray-800" />
            <input name="phone" type="text" placeholder="WhatsApp Number" required className="p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 text-gray-800" />
            <textarea name="message" placeholder="Aapko kya kaam karwana hai?" rows={4} className="p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"></textarea>
            <button type="submit" className="bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
              Submit Details
            </button>
          </form>
        </div>
      </section>
      {/* Yaha paste karein */}
<AnimatePresence>
  {selectedImg && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4 cursor-zoom-out"
      onClick={() => setSelectedImg(null)}
    >
      <button className="absolute top-5 right-5 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
        <X size={32} />
      </button>
      <motion.img
        src={selectedImg}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="max-w-full max-h-[90vh] rounded-xl shadow-2xl border-4 border-white/10"
      />
    </motion.div>
  )}
</AnimatePresence>
{/* Footer shuru hone se pehle */}

      <footer className="py-10 bg-gray-900 text-white text-center mt-10">
        <p>© 2026 Shanvi Interior Solutions | Durg, Chhattisgarh</p>
      </footer>
    </div>
  );
}