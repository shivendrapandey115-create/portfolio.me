import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, Copy, Check, AlertCircle, ArrowUpRight, MessageSquare } from 'lucide-react';
import { PersonalInfo } from '../types';

interface ContactProps {
  personal: PersonalInfo;
  enableForm?: boolean;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC<ContactProps> = ({ personal, enableForm = true }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email format.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus('submitting');

    // Simulate sending / preparing mailto action
    setTimeout(() => {
      // Create mailto link with encoded subject and body
      const mailSubject = encodeURIComponent(
        formData.subject ? `[Portfolio Inquiry] ${formData.subject}` : `[Portfolio Inquiry] Message from ${formData.name}`
      );
      const mailBody = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );

      // Open mail client
      window.location.href = `mailto:${personal.email}?subject=${mailSubject}&body=${mailBody}`;

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 600);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]"
    >
      {/* Header */}
      <div className="space-y-2 mb-14 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent-light text-xs font-mono uppercase tracking-wider">
          <MessageSquare size={12} />
          <span>05. Communication</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Get In Touch & Connect
        </h2>
        <p className="text-foreground-muted text-sm sm:text-base max-w-2xl">
          Whether you would like to discuss Python programming, student project collaborations, or artificial intelligence—I would love to connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact & Profiles */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#17171B]/70 border border-white/[0.06] space-y-5">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Direct Contact
            </h3>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Feel free to send an email or reach out via LinkedIn or GitHub. I am always eager to learn, exchange ideas, and collaborate.
            </p>

            {/* Email Box */}
            <div className="p-4 rounded-xl bg-[#111114] border border-white/[0.06] space-y-2">
              <div className="text-xs font-mono text-[#A1A1AA] uppercase flex items-center gap-1.5">
                <Mail size={13} className="text-accent" />
                <span>Primary Email</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-accent-light transition-colors truncate"
                >
                  {personal.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg bg-[#1F1F24] hover:bg-[#282830] text-zinc-300 hover:text-white transition-colors"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>
              {copied && (
                <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  ✓ Email copied to clipboard
                </div>
              )}
            </div>

            {/* Social & Code Profiles */}
            <div className="space-y-2.5 pt-2">
              <div className="text-xs font-mono uppercase text-[#A1A1AA]">Online Profiles</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {personal.github && (
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#111114] hover:bg-[#1A1A20] border border-white/[0.06] hover:border-accent/30 text-zinc-300 hover:text-white transition-all group"
                  >
                    <span className="flex items-center gap-2 text-xs font-medium">
                      <Github size={16} /> GitHub
                    </span>
                    <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                )}

                {personal.linkedin && (
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#111114] hover:bg-[#1A1A20] border border-white/[0.06] hover:border-accent/30 text-zinc-300 hover:text-white transition-all group"
                  >
                    <span className="flex items-center gap-2 text-xs font-medium">
                      <Linkedin size={16} /> LinkedIn
                    </span>
                    <ArrowUpRight size={14} className="text-zinc-500 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                )}
              </div>
            </div>

            {/* Response Time & Location */}
            <div className="pt-2 text-xs text-zinc-500 flex items-center justify-between border-t border-white/[0.04]">
              <span>📍 {personal.location}</span>
              <span>⚡ Fast Response Time</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        {enableForm && (
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#17171B]/70 border border-white/[0.08] shadow-xl">
              <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-foreground-muted mb-6">
                Fill out the form below to start a conversation. Your message will be formatted and opened directly in your email client.
              </p>

              {status === 'success' && (
                <div
                  role="status"
                  className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-start gap-3"
                >
                  <Check size={18} className="mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="font-semibold">Message prepared!</strong> Your default email client has been launched with your inquiry. If it didn't open automatically, you can also reach me directly at <a href={`mailto:${personal.email}`} className="underline font-mono">{personal.email}</a>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-[#A1A1AA]">
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#111114] border text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors ${
                        errors.name ? 'border-red-500/60' : 'border-white/[0.08]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-[#A1A1AA]">
                      Email Address <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-[#111114] border text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors ${
                        errors.email ? 'border-red-500/60' : 'border-white/[0.08]'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="block text-xs font-mono uppercase text-[#A1A1AA]">
                    Subject / Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry / Role Opportunity / Collaboration"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#111114] border border-white/[0.08] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-[#A1A1AA]">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, timeline, goals, or role..."
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-[#111114] border text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors resize-y ${
                      errors.message ? 'border-red-500/60' : 'border-white/[0.08]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-[11px] font-mono text-zinc-500">
                    No spam. Messages launch directly in your default mail app.
                  </p>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-accent hover:bg-accent-hover disabled:opacity-50 text-white shadow-glow-accent transition-all cursor-pointer"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
