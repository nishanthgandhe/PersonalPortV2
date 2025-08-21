import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import MagicBento from '../blocks/Components/MagicBento/MagicBento';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration missing. Please check your environment variables.');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'nishanth.gandhe@gmail.com', 
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      color: "#0066cc", 
      title: "LinkedIn",
      description: "Connect professionally",
      label: "Professional Network",
      href: "https://www.linkedin.com/in/nishanthgandhe/",
    },
    {
      color: "#22c55e", 
      title: "Call Me",
      description: "(214) 686-8162",
      label: "Direct Line",
      onClick: () => {
        console.log('Call Me clicked!');
        window.open('tel:+12146868162');
      },
    },
    {
      color: "#ef4444", 
      title: "Email Me",
      description: "nishanth.gandhe@gmail.com",
      label: "Primary Contact",
      onClick: () => {
        console.log('Email Me clicked!');
        window.open('mailto:nishanth.gandhe@gmail.com');
      },
    },
    {
      color: "#1f2937", 
      title: "GitHub",
      description: "Explore my code",
      label: "Code Portfolio",
      href: "https://github.com/nishanthgandhe",
    },
    {
      color: "#7c3aed", 
      title: "Resume",
      description: "Download my latest resume",
      label: "Professional Background",
      onClick: () => {
        console.log('Resume clicked!');
        const resumeUrl = '/Nishanth_Resume.pdf';
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Nishanth_Gandhe_Resume.pdf';
        link.click();
      },
    },
    {
      color: "#f59e0b",
      title: "Location",
      description: "College Station, TX",
      label: "Based in Texas",
      onClick: () => {
        console.log('Location clicked!');
        window.open('https://maps.google.com/?q=College+Station,+TX');
      },
    },
  ];

  return (
    <section 
      id="contact" 
      className="bg-black py-8 px-6 sm:px-12 md:px-16 lg:px-24 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <span className="text-sm border border-neutral-700/50 bg-neutral-900/80 rounded-full px-4 py-2 text-neutral-300 backdrop-blur-sm">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                Let's Connect
                <span className="block h-1 w-16 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-3 rounded"></span>
              </h2>
              <p className="text-lg text-white/70 max-w-xl mx-auto mb-6">
                Ready to collaborate on something amazing? Let's discuss your next project and bring your ideas to life.
              </p>
            </div>
            
            <div className="flex flex-col">
              <div className="min-h-[500px]">
                <MagicBento 
                  textAutoHide={true}
                  enableStars={false}
                  enableSpotlight={false}
                  enableBorderGlow={true}
                  enableTilt={false}
                  enableMagnetism={false}
                  clickEffect={false}
                  disableAnimations={true}
                  spotlightRadius={300}
                  particleCount={12}
                  glowColor="132, 0, 255"
                  cards={contactCards}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400">
                  <path d="m22 2-7 20-4-9-9-4Z"/>
                  <path d="M22 2 11 13"/>
                </svg>
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    rows={4}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : submitStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : submitStatus === 'error'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-500 hover:to-purple-600 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12"></polyline>
                      </svg>
                      Message Sent!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                      </svg>
                      Failed to Send
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 2-7 20-4-9-9-4Z"/>
                        <path d="M22 2 11 13"/>
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
