import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import contactVideo from "../videos/chase.mp4";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Try to play the video
      const playPromise = video.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay failed, which is common on mobile
          console.log('Contact video autoplay failed, will play on user interaction');
          
          // Add click/touch listeners to play video on user interaction
          const playOnInteraction = () => {
            video.play().catch(console.log);
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
            document.removeEventListener('scroll', playOnInteraction);
          };
          
          document.addEventListener('click', playOnInteraction);
          document.addEventListener('touchstart', playOnInteraction);
          document.addEventListener('scroll', playOnInteraction);
        });
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      const serviceId = 'service_lte9vqm';
      const publicKey = 'xr77qJGEOIsB7CFEN';

      const templateParams = {
        name: formData.name,
        title: formData.subject,
        message: formData.message,
        email: formData.email
      };

      console.log('Sending emails with params:', templateParams);
      
      // Send auto-reply to user
      const autoReplyResult = await emailjs.send(serviceId, 'template_i0do3ts', templateParams, publicKey);
      console.log('Auto-reply result:', autoReplyResult);
      
      // Send notification to uavnd@nd.edu
      const forwardResult = await emailjs.send(serviceId, 'template_lfw1aqz', templateParams, publicKey);
      console.log('Forward result:', forwardResult);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('EmailJS error:', error);
      console.error('Error status:', error?.status);
      console.error('Error text:', error?.text);
      console.error('Full error object:', JSON.stringify(error, null, 2));
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "uavnd@nd.edu",
      description: "Send us an email anytime"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Stinson-Remick Hall of Engineering - 216",
      description: "University of Notre Dame"
    },
    {
      icon: Clock,
      title: "Meeting Times",
      details: "Mon, Wed, Fri - 6:00-9:00 PM",
      description: "Drop in anytime during these hours"
    },
  ];


  return (
    <section id="contact" className="section-padding bg-dark-bg relative overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-25"
          src={contactVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          webkit-playsinline="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-nd-gold/10 border border-nd-gold/20 text-nd-gold text-sm font-medium mb-6">
            <Mail className="w-4 h-4 mr-2" />
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to join our mission or have questions about UAV technology? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="card">
            <h3 className="text-2xl font-display font-bold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-nd-gold focus:ring-1 focus:ring-nd-gold transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-nd-gold focus:ring-1 focus:ring-nd-gold transition-colors"
                    placeholder="your.email@nd.edu"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:border-nd-gold focus:ring-1 focus:ring-nd-gold transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="join">I want to join the club</option>
                  <option value="project">I have a project idea</option>
                  <option value="sponsorship">Sponsorship inquiry</option>
                  <option value="collaboration">Collaboration opportunity</option>
                  <option value="question">General question</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-nd-gold focus:ring-1 focus:ring-nd-gold transition-colors resize-none"
                  placeholder="Tell us about yourself, your interests, or any questions you have..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                  <AlertCircle className="w-5 h-5" />
                  <span>Failed to send message. Please try again or email us directly at uavnd@nd.edu</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full inline-flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="card">
              <h3 className="text-2xl font-display font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-nd-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-nd-gold" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                        <p className="text-nd-gold font-medium mb-1">{info.details}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
