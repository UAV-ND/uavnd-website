import React from 'react';
import { Github, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import logoImage from '../img/logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/uavnd_?igsh=MXVicmVyZDV3cTJvcQ==' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/unmanned-aerial-vehicles-of-notre-dame-0655ba388' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/uavnd-hub' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Documentation', href: '#documentation' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Outcomes', href: '#outcomes' },
    { name: 'Contact', href: '#contact' },
  ];

  const projectLinks = [
    { name: 'Autonomous Fleet', href: '#project-1' },
    { name: 'FPV Racing', href: '#project-2' },
    { name: 'Search & Rescue', href: '#project-3' },
    { name: 'Aerial Photography', href: '#project-4' },
  ];

  return (
    <footer className="bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src={logoImage} 
                alt="UAV ND Logo" 
                className="w-16 h-16 object-contain"
              />
              <span className="text-xl font-display font-bold text-white">UAV ND</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Notre Dame's premier student organization for unmanned aerial vehicle technology, 
              innovation, and education.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-nd-gold transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-nd-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Projects</h3>
            <ul className="space-y-2">
              {projectLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-nd-gold transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-nd-gold" />
                <span className="text-gray-400">uavnd@nd.edu</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-nd-gold" />
                <span className="text-gray-400">Stinson-Remick Hall of Engineering - 216</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-dark-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} UAV ND - University of Notre Dame. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <button
                type="button"
                className="text-gray-400 hover:text-nd-gold transition-colors"
                onClick={() => alert("Coming soon")}
              >
                Privacy Policy
              </button>
              <button
                type="button"
                className="text-gray-400 hover:text-nd-gold transition-colors"
                onClick={() => alert("Coming soon")}
              >
                Terms of Service
              </button>
              <button
                type="button"
                className="text-gray-400 hover:text-nd-gold transition-colors"
                onClick={() => alert("Coming soon")}
              >
                Code of Conduct
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
