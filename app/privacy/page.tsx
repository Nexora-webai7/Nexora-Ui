import { Metadata } from "next";
import privacyData from "@/data/privacy.json";
import { DottedSurface } from "@/components/dotted-surface";

export const metadata: Metadata = {
  title: `${privacyData.title} | Nexora`,
  description: privacyData.description,
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="fixed inset-0 pointer-events-none">
        <DottedSurface className="size-full" />
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold py-2 mb-8 text-center bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          {privacyData.title}
        </h1>
        
        <div className="space-y-8 text-gray-300">
          {privacyData.sections.map((section) => (
            <section key={section.id} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-semibold mb-4 text-white">{section.title}</h2>
              <p className="leading-relaxed">{section.content}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}
