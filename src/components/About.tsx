import React from 'react';
import { Award, BookOpen, Target, Calendar, MapPin } from 'lucide-react';
import membersPhoto from '../img/DSC00175.JPG';

const About: React.FC = () => {
  

  const timeline = [
    {
      year: "2021",
      title: "Club Founded",
      description: "UAV ND was established by passionate group of interdisciplinary engineering students"
    },
    {
      year: "2022",
      title: "First Sponsorship",
      description: "Established partnerships with Boeing"

    },
    {
      year: "2023",
           title: "First Competition",
      description: "Participated in our first national UAV competition"
    },
    {
      year: "2024",
      title: "First Fleet of Drones",
      description: "Built and assembled our first fleet of multi-purpose drones"
    },
    {
      year: "2025",
      title: "AI Integration",
      description: "Integrated machine learning into our flight control systems"
    },
    {
      year: "2026",
      title: "Best Mission Completion Time Award at 2026 AIMM ICC Competition",
      description: "Won the fastest mission completion time award at the 2026 AIMM ICC Competition"
    }
  ];

  return (
    <section id="about" className="section-padding bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-nd-gold/10 border border-nd-gold/20 text-nd-gold text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4 mr-2" />
            About Us
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Pioneering the Future of Flight
          </h2>
        </div>

        {/* Featured Photo */}
        <div className="mb-16 max-w-3xl mx-auto">
          <div className="overflow-hidden rounded-2xl border border-dark-border">
            <img 
              src={membersPhoto} 
              alt="UAV ND members with drone"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-nd-gold/20 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-nd-gold" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              To educate, inspire, and innovate at the University of Notre Dame, preparing the next generation of engineers through hands-on experience with UAV design, construction, testing, and implementation.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We foster a collaborative environment where students can explore cutting-edge technologies, participate in competitions, and contribute to real-world aerospace projects.
            </p>
          </div>

          <div className="card">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-nd-gold/20 rounded-lg flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-nd-gold" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              To become a leading student organization in UAV technology, recognized nationally for our innovative projects and contributions to the aerospace industry.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We envision a future where our members become leaders in autonomous systems, aerospace engineering, and technological innovation.
            </p>
          </div>
        </div>


        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-white text-center mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-nd-gold to-nd-blue"></div>
            
            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="card max-w-md mx-auto md:mx-0">
                      <div className="flex items-center mb-3">
                        <Calendar className="w-5 h-5 text-nd-gold mr-2" />
                        <span className="text-nd-gold font-semibold">{item.year}</span>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden md:block relative z-10 w-4 h-4 bg-nd-gold rounded-full border-4 border-dark-bg"></div>
                  
                  <div className="hidden md:block w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location & Contact */}
        <div className="bg-gradient-to-r from-nd-blue to-nd-navy rounded-2xl p-8 border border-dark-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Find Us</h3>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-nd-gold mt-1" />
                <div>
                  <p className="text-white font-semibold">University of Notre Dame</p>
                  <p className="text-gray-300">Stinson-Remick Hall of Engineering - 216
                  </p>
                  <p className="text-gray-300">Notre Dame, IN 46556</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">Get Involved</h3>
              <p className="text-gray-300 mb-4">
                Ready to join our mission? We welcome students from all engineering disciplines and experience levels.
              </p>
              <a href="#contact" className="btn-primary">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
