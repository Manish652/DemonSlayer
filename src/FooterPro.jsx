import React, { useEffect } from 'react';

const CollegeNavbar = () => {
  // Scroll reveal animations
  useEffect(() => {
    function revealOnScroll() {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach(reveal => {
        const revealTop = reveal.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (revealTop < windowHeight - 100) {
          reveal.classList.add('active');
        }
      });
    }
    
    // Initial check
    revealOnScroll();
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);
    
    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-blue-900 text-white p-6 animate__animated animate__fadeIn">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
            {/* Logo and College Info Section */}
            <div className="flex flex-col mb-6 md:mb-0 animate__animated animate__fadeInLeft">
              <div className="flex items-center mb-4">
                <img src="https://www.cclms.org/wp-content/uploads/2025/01/clg_logo-_1_-1.png" alt="CCLMS Logo" className="w-16 h-16 mr-4 float" />
                <div>
                  <h1 className="text-xl font-bold">Contai College of Learning &</h1>
                  <h2 className="text-xl font-bold">Management Science</h2>
                  <p className="text-sm mt-1">Affiliated to: MAKAUT, College Code: 340</p>
                </div>
              </div>
              <p className="text-sm">Vill- Padmapukuria, P.O + P.S- Contai, Dist-Purba Medinipur, W.B(721401)</p>
              
              {/* Social Media Icons with animation */}
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-white hover:text-gray-300 social-icon">
                  <i className="fab fa-facebook-f text-xl"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300 social-icon">
                  <i className="fab fa-whatsapp text-xl"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300 social-icon">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300 social-icon">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-white hover:text-gray-300 social-icon">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row md:space-x-16 w-full md:w-auto animate__animated animate__fadeInRight">
              {/* Our Links Section */}
              <div className="mb-6 md:mb-0 reveal">
                <h3 className="text-xl font-bold mb-4 pb-1 border-b-2 border-red-500 inline-block pulse-border">Our Links</h3>
                <ul className="space-y-3">
                  <li className="flex items-center hover-scale">
                    <i className="fas fa-circle text-xs mr-2"></i>
                    <a href="#" className="hover:text-gray-300 nav-link">BCA (Bachelor in Computer Application)</a>
                  </li>
                  <li className="flex items-center hover-scale">
                    <i className="fas fa-circle text-xs mr-2"></i>
                    <a href="#" className="hover:text-gray-300 nav-link">Bachelor in Hospitality & Hotel Administration</a>
                  </li>
                  <li className="flex items-center hover-scale">
                    <i className="fas fa-circle text-xs mr-2"></i>
                    <a href="#" className="hover:text-gray-300 nav-link">BBA in Hospital Management</a>
                  </li>
                  <li className="flex items-center hover-scale">
                    <i className="fas fa-circle text-xs mr-2"></i>
                    <a href="#" className="hover:text-gray-300 nav-link">Admission</a>
                  </li>
                  <li className="flex items-center hover-scale">
                    <i className="fas fa-circle text-xs mr-2"></i>
                    <a href="#" className="hover:text-gray-300 nav-link">Placement</a>
                  </li>
                  <li className="flex items-center hover-scale">
                    <i className="fas fa-circle text-xs mr-2"></i>
                    <a href="#" className="hover:text-gray-300 nav-link">Contact</a>
                  </li>
                  <li className="flex items-center hover-scale">
                    <i className="fas fa-circle text-xs mr-2"></i>
                    <a href="#" className="hover:text-gray-300 nav-link">Admission Form</a>
                  </li>
                  <li className="flex items-center hover-scale">
                    <i className="fas fa-circle text-xs mr-2"></i>
                    <a href="#" className="hover:text-gray-300 nav-link">Blog</a>
                  </li>
                </ul>
              </div>

              {/* Locate Us Section */}
              <div className="mb-6 md:mb-0 reveal">
                <h3 className="text-xl font-bold mb-4 pb-1 border-b-2 border-red-500 inline-block pulse-border">Locate Us</h3>
                <div className="w-64 h-56 bg-white rounded hover-scale shadow-lg">
                  <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.885632941314!2d87.7347621750537!3d21.7846868800605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0326f87e6e8479%3A0xb610eefe9d9387c1!2sContai%20College%20of%20Learning%20%26%20Management%20Science!5e0!3m2!1sen!2sin!4v1726162509902!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen="" 
                    loading="lazy"
                    title="College Location"
                  />
                </div>
              </div>

              {/* Contact Us Section */}
              <div className="reveal">
                <h3 className="text-xl font-bold mb-4 pb-1 border-b-2 border-red-500 inline-block pulse-border">Contact Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-center hover-scale">
                    <div className="bg-white rounded-full p-2 mr-3">
                      <i className="fas fa-phone text-blue-800"></i>
                    </div>
                    <div>
                      <p>07797147090</p>
                      <p>08373084200</p>
                    </div>
                  </li>
                  <li className="flex items-center hover-scale">
                    <div className="bg-white rounded-full p-2 mr-3">
                      <i className="fas fa-envelope text-blue-800"></i>
                    </div>
                    <p>admin@cclms.org</p>
                  </li>
                  <li className="flex items-center hover-scale">
                    <div className="bg-white rounded-full p-2 mr-3">
                      <i className="fas fa-map-marker-alt text-blue-800"></i>
                    </div>
                    <div>
                      <p>Padmapukuria, Contai, W.B.</p>
                      <p>721401</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="h-1 w-full"></div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-4 text-center animate__animated animate__fadeIn">
        <p>© 2025 CCLMS | All Rights Reserved</p>
      </footer>
    </div>
  );
};

// CSS styles as a component
const AppStyles = () => {
  return (
    <style jsx global>{`
      /* Custom animations */
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      .float {
        animation: float 3s ease-in-out infinite;
      }
      
      @keyframes pulse-border {
        0% { border-color: rgba(30, 64, 175, 0.5); }
        50% { border-color: rgba(239, 68, 68, 0.8); }
        100% { border-color: rgba(30, 64, 175, 0.5); }
      }
      
      .pulse-border {
        animation: pulse-border 2s infinite;
      }
      
      .hover-scale {
        transition: transform 0.3s ease;
      }
      
      .hover-scale:hover {
        transform: scale(1.05);
      }
      
      /* Social media icons hover effect */
      .social-icon {
        transition: all 0.3s ease;
      }
      
      .social-icon:hover {
        transform: translateY(-5px);
      }
      
      /* Navigation link hover animation */
      .nav-link {
        position: relative;
      }
      
      .nav-link:after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -2px;
        left: 0;
        background-color: white;
        transition: width 0.3s ease;
      }
      
      .nav-link:hover:after {
        width: 100%;
      }
      
      /* Adding scroll reveal animations */
      .reveal {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      
      .reveal.active {
        opacity: 1;
        transform: translateY(0);
      }
    `}</style>
  );
};

const CollegeWebsite = () => {
  return (
    <>
      <AppStyles />
      <CollegeNavbar />
    </>
  );
};

export default CollegeWebsite;