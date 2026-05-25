'use client'

import { motion } from "framer-motion"

export function ContactSection() {
  return (
    <section id="contact" className="w-full min-h-[80vh] bg-black text-white py-24 px-8 relative overflow-hidden border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-500">
            Get In Touch
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 w-full"
          >
            <h3 className="text-2xl font-semibold mb-8 text-neutral-200">Get In Touch</h3>
            <form className="space-y-6">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-neutral-900/50 border border-neutral-800 rounded-md px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-neutral-900/50 border border-neutral-800 rounded-md px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <input 
                  type="tel" 
                  placeholder="Your Phone" 
                  className="w-full bg-neutral-900/50 border border-neutral-800 rounded-md px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <textarea 
                  rows={5}
                  placeholder="Write a Message" 
                  className="w-full bg-neutral-900/50 border border-neutral-800 rounded-md px-4 py-3 text-white placeholder:text-neutral-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </motion.div>

          {/* Right side: Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex-1 w-full lg:max-w-md"
          >
            <h3 className="text-2xl font-semibold mb-8 text-neutral-200">My Contact Details</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Email</h4>
                <p className="text-neutral-300">site@gmail.com</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Phone</h4>
                <p className="text-neutral-300">+30 976 1382 9921</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Fax</h4>
                <p className="text-neutral-300">+30 976 1382 9922</p>
              </div>
              <div>
                <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">Address</h4>
                <p className="text-neutral-300 leading-relaxed">
                  San Francisco, CA<br/>
                  4th Floor8 Lower<br/>
                  San Francisco street, M1 50F
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
