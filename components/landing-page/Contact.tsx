import { ChevronRight, Send, Smartphone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 flex justify-center items-center"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Initiate
              <span className="px-2 text-gradient">Project.</span>
            </h2>

            <p className="text-zinc-400 max-w-md">
              Discuss your business objectives with an expert architect. We
              provide detailed technical roadmaps and quotes tailored to your
              goals.
            </p>
          </div>

          <div className="space-y-8 text-zinc-300">

            {/* Email */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                Electronic Mail
              </h4>

              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Mail size={18} className="text-blue-500" />
                  </div>
                  <span>hello@pipebit.dev</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Mail size={18} className="text-purple-500" />
                  </div>
                  <span>support@pipebit.dev</span>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                Phone Link
              </h4>

              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Smartphone size={18} className="text-blue-500" />
                  </div>
                  <span>+91 98183 23890</span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Smartphone size={18} className="text-purple-500" />
                  </div>
                  <span>+91 88003 50878</span>
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                Headquarters
              </h4>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mt-1">
                  <MapPin size={18} className="text-pink-500" />
                </div>
                <div>
                  <p>Delhi, India</p>
                  <p className="text-zinc-400 text-sm">
                    110085, New Delhi
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm text-zinc-500 pt-4 border-t border-white/10">
              Most project inquiries receive a response within 24 business hours
              from an engineer.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="glass p-8 md:p-12 rounded-[32px] border border-white/10 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">
                    Organization
                  </label>
                  <input
                    type="text"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="name@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">
                  Primary Need
                </label>
                <input
                  type="text"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Web / Mobile / AI / SaaS"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">
                  Project Brief
                </label>
                <textarea
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Outline your requirements..."
                />
              </div>

              <button className="w-full py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center group overflow-hidden relative">
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 group-hover:text-white transition-colors ml-2">
                  <ChevronRight size={20} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
