import React from 'react';
import { GraduationCap } from 'lucide-react';
import boeingLogo from '../img/boeing.jpg';
import lockheedLogo from '../img/lm.png';
import andurilLogo from '../img/Anduril_Logo_UAS_53b9c9ea1c.jpg';
import pgLogo from '../img/procter-Gamble-0٣-scaled.jpg';

const Outcomes: React.FC = () => {
  const alumniCompanies = [
    {
      name: "Boeing",
      logo: boeingLogo,
      description: "Leading aerospace manufacturer and defense contractor",
      alumni: [
        { name: "Sarah Johnson", role: "Aerospace Engineer", year: "2022", location: "Seattle, WA" },
        { name: "Michael Chen", role: "Systems Engineer", year: "2021", location: "St. Louis, MO" }
      ],
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-600"
    },
    {
      name: "Lockheed Martin",
      logo: lockheedLogo,
      description: "Global aerospace, defense, and security company",
      alumni: [
        { name: "David Rodriguez", role: "Flight Test Engineer", year: "2023", location: "Fort Worth, TX" },
        { name: "Emily Watson", role: "Software Engineer", year: "2022", location: "Denver, CO" }
      ],
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-600"
    },
    {
      name: "Anduril Industries",
      logo: andurilLogo,
      description: "Defense technology company focused on autonomous systems",
      alumni: [
        { name: "Alex Kim", role: "Autonomous Systems Engineer", year: "2023", location: "Costa Mesa, CA" },
        { name: "Jessica Liu", role: "AI/ML Engineer", year: "2022", location: "Costa Mesa, CA" }
      ],
      color: "text-red-400",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-600"
    },
    {
      name: "Procter & Gamble",
      logo: pgLogo,
      description: "Multinational consumer goods corporation",
      alumni: [
        { name: "Ryan Thompson", role: "Product Development Engineer", year: "2021", location: "Cincinnati, OH" },
        { name: "Maria Garcia", role: "Innovation Engineer", year: "2020", location: "Cincinnati, OH" }
      ],
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-600"
    }
  ];

  

  

  return (
    <section id="outcomes" className="section-padding bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-nd-gold/10 border border-nd-gold/20 text-nd-gold text-sm font-medium mb-6">
            <GraduationCap className="w-4 h-4 mr-2" />
            Alumni Outcomes
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Where Our Alumni Soar
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our graduates are making their mark at leading companies worldwide, applying the skills and passion they developed in UAV ND to advance aerospace technology and innovation.
          </p>
        </div>

        

        {/* Alumni Companies */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-white text-center mb-12">Where Our Alumni Work</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {alumniCompanies.map((company, index) => (
              <div key={index} className={`card border-2 ${company.borderColor} ${company.bgColor} text-center py-8`}>
                <div className="flex items-center justify-center mb-4">
                  <img src={company.logo} alt={`${company.name} logo`} className="h-24 object-contain" />
                </div>
                <h4 className={`font-semibold ${company.color}`}>{company.name}</h4>
              </div>
            ))}
          </div>
        </div>

        

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-nd-blue to-nd-navy rounded-2xl p-8 border border-dark-border text-center">
          <h3 className="text-3xl font-display font-bold text-white mb-4">Join Our Legacy</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the next generation of aerospace engineers making their mark at leading companies worldwide. 
            Your journey to success starts here at UAV ND.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#contact" className="btn-primary">
              Join Our Club
            </a>
            <a href="#team" className="btn-secondary">
              Meet Current Members
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
