import { useState } from "react";
import { ChevronRight, Send, Smartphone, Mail, MapPin, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  organization: string;
  email: string;
  need: string;
  message: string;
}

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    organization: '',
    email: '',
    need: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          organization: '',
          email: '',
          need: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to send message. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact"
      className="py-20 md:py-24 px-4 sm:px-6 flex justify-center items-center overflow-hidden"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-8 px-2 sm:px-0">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 text-center lg:text-left">
              Initiate
              <span className="px-2 text-gradient">Project.</span>
            </h2>

            <p className="text-zinc-400 max-w-md mx-auto lg:mx-0 text-center lg:text-left text-sm sm:text-base">
              Discuss your business objectives with an expert architect. We
              provide detailed technical roadmaps and quotes tailored to your
              goals.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 text-zinc-300">

            {/* Email */}
            <div className="flex flex-col items-center lg:items-start">
              <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
                Electronic Mail
              </h4>

              <div className="space-y-3">

                <div className="flex items-center gap-4 text-sm sm:text-base">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-purple-500" />
                  </div>
                  <span className="break-all">nexora.webai7@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center lg:items-start">
              <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
                Phone Link
              </h4>

              <div className="space-y-3 w-full max-w-xs sm:max-w-none">
                <div className="flex items-center justify-center lg:justify-start gap-4 text-sm sm:text-base">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Smartphone size={18} className="text-blue-500" />
                  </div>
                  <span>+91 63966 24377</span>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-4 text-sm sm:text-base">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Smartphone size={18} className="text-purple-500" />
                  </div>
                  <span>+91 63958 58698</span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center lg:items-start">
              <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
                Headquarters
              </h4>

              <div className="flex items-start justify-center lg:justify-start gap-4 text-sm sm:text-base">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mt-1 flex-shrink-0">
                  <MapPin size={18} className="text-pink-500" />
                </div>
                <div className="text-center lg:text-left">
                  <p>Bennett University, India</p>
                  <p className="text-zinc-400 text-xs sm:text-sm">
                    201301, Greater Noida
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-center lg:text-left text-zinc-500 pt-4 border-t border-white/10 px-4 sm:px-0">
              Most project inquiries receive a response within 24 business hours
              from an engineer.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="glass p-6 sm:p-8 md:p-12 rounded-[2rem] md:rounded-[32px] border border-white/10 relative overflow-hidden mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={24} className="text-green-500" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-zinc-400 text-sm sm:text-base">Thank you for your inquiry. We&apos;ll respond within 24 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1">
                    Primary Need
                  </label>
                  <input
                    type="text"
                    name="need"
                    value={formData.need}
                    onChange={handleInputChange}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm sm:text-base"
                    placeholder="Web / Mobile / AI / SaaS"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest pl-1">
                    Project Brief
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none text-sm sm:text-base"
                    placeholder="Outline your requirements..."
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl sm:rounded-2xl bg-red-500/10 border border-red-500/20">
                    <p className="text-red-400 text-xs sm:text-sm">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-white text-black font-bold text-base sm:text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center group overflow-hidden relative disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin mr-2" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Send Message</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 group-hover:text-white transition-colors ml-2">
                        <ChevronRight size={20} />
                      </span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
