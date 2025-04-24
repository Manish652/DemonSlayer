import React from 'react';
import { motion } from 'framer-motion';
function Footer() {
  const socialLinks = [
    { 
      name: 'Twitter',
      icon: 'M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'
    },
    { 
      name: 'Instagram',
      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
    },
    { 
      name: 'Facebook',
      icon: 'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z'
    },
    { 
      name: 'YouTube',
      icon: 'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Characters', href: '#characters' },
    { name: 'Breathing Styles', href: '#breathing-styles' },
    { name: 'Episodes', href: '#episodes' },
    { name: 'Gallery', href: '#gallery' }
  ];

  const communityLinks = [
    { name: 'Forum', href: '#' },
    { name: 'Fan Art', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Discord', href: '#' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Contact Us', href: '#' }
  ];

  return (
    <footer className="relative bg-black text-gray-400 overflow-hidden">
      {/* Animated blood splatter background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://i.imgur.com/X3ZQX5A.png')] bg-cover bg-center animate-pulse"></div>
      </div>
      
      {/* Floating sword decoration */}
      <motion.div 
        className="absolute -top-20 right-10 opacity-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M8 6l4-4 4 4M8 18l4 4 4-4M18 12H6M22 12h-4M6 12H2" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Logo section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div 
                className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center breathe-effect"
                animate={{ 
                  boxShadow: [
                    '0 0 0 0 rgba(239, 68, 68, 0.7)',
                    '0 0 0 10px rgba(239, 68, 68, 0)',
                    '0 0 0 0 rgba(239, 68, 68, 0)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-2xl font-bold text-white">鬼</span>
              </motion.div>
              <motion.span 
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Demon Slayer
              </motion.span>
            </div>
            <motion.p 
              className="text-sm mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              The ultimate fan destination for Demon Slayer enthusiasts. Explore the world of demon slaying, breathing techniques, and more.
            </motion.p>
            
            {/* Blood droplet divider */}
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="h-1 w-8 bg-red-500"></div>
              <svg className="h-4 w-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-18a8 8 0 1 0 0 16 8 8 0 0 0 0-16z" />
              </svg>
              <div className="h-1 w-8 bg-red-500"></div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={link.href} 
                    className="flex items-center hover:text-red-500 transition-colors group"
                  >
                    <svg 
                      className="w-4 h-4 mr-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Community Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Community
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h4>
            <ul className="space-y-3">
              {communityLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index + 0.1 }}
                  viewport={{ once: true }}
                >
                  <a 
                    href={link.href} 
                    className="flex items-center hover:text-red-500 transition-colors group"
                  >
                    <svg 
                      className="w-4 h-4 mr-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Connect With Us
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </h4>
            
            {/* Social Icons */}
            <div className="flex space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  className="relative group"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index + 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative z-10 p-2 bg-gray-900 rounded-full group-hover:bg-red-600 transition-colors">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d={social.icon} />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity"></div>
                </motion.a>
              ))}
            </div>
            
            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold text-lg mb-4">Newsletter</h4>
              <motion.div 
                className="flex"
                whileHover={{ scale: 1.02 }}
              >
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-3 rounded-l-md text-black w-full focus:outline-none focus:ring-2 focus:ring-red-500 bg-gray-100"
                />
                <motion.button 
                  className="bg-red-600 text-white px-4 py-3 rounded-r-md hover:bg-red-700 transition-colors flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-1">Join</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-4 md:mb-0 text-sm">© 2025 Demon Slayer Fan Site. Not affiliated with official series.</p>
          <div className="flex space-x-6">
            {legalLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm hover:text-red-500 transition-colors relative group"
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.5 }}
                viewport={{ once: true }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;

