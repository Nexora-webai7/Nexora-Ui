import { ChevronRight, Send, Smartphone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto glass p-8 md:p-16 rounded-[40px] border-white/10 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/20 blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-outfit font-bold text-white mb-6">Let's build <br /> <span className="text-gradient">something great.</span></h2>
            <p className="text-zinc-400 mb-8 max-w-sm">
              Ready to take your digital presence to the next level? Connect with us and let's discuss your vision.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-zinc-300">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><Send size={18} className="text-blue-500" /></div>
                <span>hello@nexora.agency</span>
              </div>
              <div className="flex items-center space-x-4 text-zinc-300">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"><Smartphone size={18} className="text-purple-500" /></div>
                <span>+1 (555) 000-0000</span>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Name</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Email</label>
                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest pl-1">Message</label>
              <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell us about your project..." />
            </div>
            <button className="w-full py-5 rounded-2xl bg-white text-black font-bold text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center group overflow-hidden relative">
              <span className="relative z-10">Send Message</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 group-hover:text-white transition-colors ml-2"><ChevronRight size={20} /></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};