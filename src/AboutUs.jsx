import React, { useState, useEffect } from 'react';

const AboutPage = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  
  const bgImages = [
    "./coll1.jpeg",
    "./call5.png",
    "./call6.png",
    "./call8.png",
  ];
  
  const testimonials = [
    {
      text: "My experience at CCLMS College has been transformative. The professors are not just educators but mentors who genuinely care about your success. The resources and opportunities available have helped me grow both professionally and personally.",
      author: "Emily R., Class of 2023",
      program: "Business Administration"
    },
    {
      text: "Choosing CCLMS was the best decision I ever made. The hands-on approach to learning, combined with state-of-the-art facilities, prepared me exceptionally well for my career. The friendships and connections I formed here will last a lifetime.",
      author: "Michael T., Class of 2022",
      program: "Computer Science"
    },
    {
      text: "What sets CCLMS apart is how they blend academic rigor with real-world application. My professors brought industry experience into the classroom, and the internship opportunities opened doors I never thought possible.",
      author: "Sophia L., Class of 2024",
      program: "Environmental Sciences"
    },
    {
      text: "As an international student, I was worried about fitting in. But CCLMS's inclusive community made me feel at home from day one. The cultural exchange programs and diverse student body have enriched my education beyond just academics.",
      author: "Jamal K., Class of 2023",
      program: "International Relations"
    }
  ];
  
  // Auto slider for background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Auto slider for testimonials
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    
    return () => clearInterval(testimonialInterval);
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };
    
    window.addEventListener("scroll", reveal);
    reveal(); // Check on load
    
    return () => window.removeEventListener("scroll", reveal);
  }, []);

  return (
    <div className="text-gray-800 leading-relaxed font-sans">
      {/* Hero Section with Background Slider */}
      <section className="relative h-screen flex flex-col justify-center items-center text-white text-center px-4 mt-16 overflow-hidden">
        {/* Background image slider */}
        {bgImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentBgIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat"
            }}
          />
        ))}
        
        {/* Hero content */}
        <div className="z-10 animate-fadeIn">
          <h1 className="text-5xl mb-4">About CCLMS College</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Shaping minds and building futures since 1985. We are committed to academic excellence, innovation, and creating well-rounded global citizens.
          </p>
          <a 
            href="#" 
            className="px-8 py-3 bg-orange-600 text-white rounded-full text-base transition-all duration-300 hover:bg-orange-700 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden animate-pulse"
          >
            Explore Our Programs
          </a>
        </div>
      </section>

      {/* Mission & Vision Section with Background Image */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div 
          className="absolute inset-0 w-full h-full opacity-45 bg-fixed"
          style={{
            backgroundImage: `url('./call5.png')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        />
        
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <h2 className="text-center mb-16 relative fade-bottom text-3xl font-bold">
            Our Mission & Vision
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            <div className="flex-1 min-w-[300px] bg-white bg-opacity-90 p-8 rounded-lg shadow-xl transition-transform duration-300 hover:-translate-y-2 reveal fade-left">
              <h3 className="flex items-center text-indigo-900 text-xl font-semibold mb-4">
                <span className="w-12 h-12 bg-indigo-900 rounded-full flex items-center justify-center mr-4 text-white text-lg font-bold animate-pulse">M</span>
                Mission
              </h3>
              <p className="text-gray-700">
                To provide accessible, high-quality education that empowers students with knowledge, skills, and values to excel in their chosen fields and contribute positively to society. We strive to create a nurturing environment that fosters critical thinking, creativity, and ethical leadership.
              </p>
              <div className="w-16 h-1 bg-orange-500 mt-6 mb-6"></div>
              <p className="italic text-sm text-indigo-900">
                "Education is not the filling of a pail, but the lighting of a fire."
              </p>
            </div>
            
            <div className="flex-1 min-w-[300px] bg-white bg-opacity-90 p-8 rounded-lg shadow-xl transition-transform duration-300 hover:-translate-y-2 reveal fade-right">
              <h3 className="flex items-center text-indigo-900 text-xl font-semibold mb-4">
                <span className="w-12 h-12 bg-indigo-900 rounded-full flex items-center justify-center mr-4 text-white text-lg font-bold animate-pulse">V</span>
                Vision
              </h3>
              <p className="text-gray-700">
                To be a leading institution of higher education recognized globally for academic excellence, innovative research, and community engagement. We aspire to graduate individuals who are prepared to address complex challenges and drive positive change in an increasingly interconnected world.
              </p>
              <div className="w-16 h-1 bg-orange-500 mt-6 mb-6"></div>
              <p className="italic text-sm text-indigo-900">
                "We don't just prepare students for the world; we prepare them to change it."
              </p>
            </div>
          </div>
          <section className="bg-gray-100 py-16 text-center mb-16">
        <div className="flex flex-wrap justify-around gap-8 max-w-6xl mx-auto px-8">
          <div className="flex-1 min-w-[200px] reveal fade-bottom">
            <div className="text-5xl font-bold text-indigo-900 mb-2 animate-colorShift">40+</div>
            <p>Years of Excellence</p>
          </div>
          
          <div className="flex-1 min-w-[200px] reveal fade-bottom animation-delay-300">
            <div className="text-5xl font-bold text-indigo-900 mb-2 animate-colorShift">15,000+</div>
            <p>Students</p>
          </div>
          
          <div className="flex-1 min-w-[200px] reveal fade-bottom animation-delay-500">
            <div className="text-5xl font-bold text-indigo-900 mb-2 animate-colorShift">500+</div>
            <p>Faculty Members</p>
          </div>
          
          <div className="flex-1 min-w-[200px] reveal fade-bottom animation-delay-700">
            <div className="text-5xl font-bold text-indigo-900 mb-2 animate-colorShift">95%</div>
            <p>Employment Rate</p>
          </div>
        </div>
      </section>
          
         
        </div>
        
      </section>

      {/* Stats Section */}
      

      {/* Enhanced Testimonials Section */}
     

      

      {/* Custom animations added via style tag */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes colorShift {
          0% { color: #1a237e; }
          50% { color: #f57c00; }
          100% { color: #1a237e; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-in;
        }
        
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-colorShift {
          animation: colorShift 4s infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
        
        .reveal {
          position: relative;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .reveal.active {
          opacity: 1;
        }
        
        .active.fade-bottom {
          animation: fadeInUp 1s ease-in;
        }
        
        .active.fade-left {
          animation: fadeInLeft 1s ease-in;
        }
        
        .active.fade-right {
          animation: fadeInRight 1s ease-in;
        }
        
        @keyframes fadeInUp {
          0% {
            transform: translateY(50px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInLeft {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeInRight {
          0% {
            transform: translateX(50px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;