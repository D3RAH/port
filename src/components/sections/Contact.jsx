import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Twitter, Instagram, Phone, MessageCircle, Send, MessageSquare, Loader2, CheckCircle2,} from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    setStatus({ type: 'error', message: 'Please fill in all fields' });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    setStatus({ type: 'error', message: 'Please enter a valid email' });
    return;
  }

  setIsSending(true);

  try {
    const response = await fetch('https://formspree.io/f/xbdebgwz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus({ type: 'success', message: "Message sent successfully! I'll get back to you soon." });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    } else {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    }
  } catch (error) {
    setStatus({ type: 'error', message: 'Network error. Please try again.' });
  } finally {
    setIsSending(false);
  }
  };

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    instagram: Instagram,
    whatsapp: MessageCircle,
  };

  return (
    <section id="contact" className="relative pt-2 pb-20 bg-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-highlight/5 rounded-full blur-[120px] opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-highlight/10 border border-highlight/30 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-highlight" />
              <span className="text-sm text-highlight font-medium tracking-wider uppercase">Get in Touch</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4">
                Let's Work Together
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
                Have a project in mind? Let's discuss how we can bring your ideas to reality
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
            <FadeIn delay={100}>
                {/* Form Wrapper with Aura Glow */}
                <div className="group relative p-px rounded-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-linear-to-br from-highlight/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 rounded-2xl" />
                  
                  <div className="relative z-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-500">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-highlight/50 transition-all duration-300"
                          placeholder="Your name"
                        />
                      </div>
      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-highlight/50 transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                          Phone Number <span className="text-white/30">(optional)</span>
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-highlight/50 transition-all duration-300"
                            placeholder="+234 000 000 0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-highlight/50 transition-all duration-300 resize-none"
                          placeholder="Tell me about your project..."
                        />
                      </div>
      
                      <button
                        type="submit"
                        disabled={isSending}
                        className="group relative w-full overflow-hidden px-6 py-4 bg-white text-black font-medium rounded-xl hover:text-white hover:bg-black/40 border border-white transition-all duration-500 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <div className="absolute -inset-full w-[200%] h-[200%] bg-linear-to-br from-white/20 to-transparent rotate-45 translate-x-[-100%] translate-y-[-100%] group-hover:translate-x-[100%] group-hover:translate-y-[100%] transition-all duration-700 pointer-events-none" />
                        
                        <div className="relative z-10 flex items-center gap-2">
                          {isSending ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              <span className="text-base">Transmitting...</span>
                            </>
                          ) : status.type === 'success' ? (
                            <>
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                              <span className="text-base">Message Received</span>
                            </>
                          ) : (
                            <>
                              <span className="text-base">Send Message</span>
                              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </>
                          )}
                        </div>
                      </button>
      
                      {status.message && (
                        <div
                          className={`p-4 rounded-xl ${status.type === 'success'
                            ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                            : 'bg-red-500/10 border border-red-500/20 text-red-400'
                          }`}
                        >
                          {status.message}
                        </div>
                      )}
                    </form>
                  </div>
                </div>
            </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={200}>
                <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        Let's Connect
                      </h3>
                      <p className="text-white/60 leading-relaxed">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
                      </p>
                    </div>

                    <div className="space-y-4">
                        <div className="group relative p-px rounded-2xl transition-all duration-500">
                          <div className="absolute inset-0 bg-highlight/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-2xl" />
                          <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300">
                            <div className="flex items-start gap-4">
                              <div className="p-3 bg-highlight/10 border border-highlight/20 rounded-xl">
                                <Mail className="w-6 h-6 text-highlight" />
                              </div>
                              <div>
                                <p className="text-sm text-white/60 mb-1">Email</p>
                                <a
                                  href={`mailto:${PERSONAL_INFO.email}`}
                                  className="text-white hover:text-highlight transition-colors font-medium"
                                >
                                  {PERSONAL_INFO.email}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                    
                        <div className="group relative p-px rounded-2xl transition-all duration-500">
                          <div className="absolute inset-0 bg-highlight/20 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 rounded-2xl" />
                          <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300">
                            <div className="flex items-start gap-4">
                              <div className="p-3 bg-highlight/10 border border-highlight/20 rounded-xl">
                                <MapPin className="w-6 h-6 text-highlight" />
                              </div>
                              <div>
                                <p className="text-sm text-white/60 mb-1">Location</p>
                                <p className="text-white font-medium">{PERSONAL_INFO.location}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
            
                <div>
                      <p className="text-sm text-white/60 mb-4">Connect with me</p>
                      <div className="flex gap-4">
                        {Object.entries(SOCIAL_LINKS).slice(0, 5).map(([platform, url]) => {
                          const Icon = socialIcons[platform];
                          return Icon ? (
                            <a
                              key={platform}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-4 bg-white/5 rounded-xl border border-white/10 hover:border-highlight/50 hover:scale-110 transition-all duration-300 group"
                            >
                              <Icon className="w-6 h-6 text-white/60 group-hover:text-highlight transition-colors" />
                            </a>
                          ) : null;
                        })}
                      </div>
                </div>
                </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;