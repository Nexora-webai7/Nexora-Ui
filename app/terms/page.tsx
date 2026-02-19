import { Metadata } from "next";
import termsData from "@/data/terms.json";
import { DottedSurface } from "@/components/dotted-surface";

export const metadata: Metadata = {
  title: `Terms & Conditions | Nexora`,
  description: termsData.description,
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="fixed inset-0 pointer-events-none">
        <DottedSurface className="size-full" />
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold py-2 mb-8 text-center bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          {termsData.title}
        </h1>
        <p className="text-xl text-center text-gray-400 mb-12">
          {termsData.subtitle}
        </p>
        
        <div className="space-y-8 text-gray-300">
          {termsData.sections.map((section) => (
            <section key={section.id} className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-800">
              <h2 className="text-2xl font-semibold mb-4 text-white">{section.title}</h2>
              
              {section.items ? (
                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                  {section.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="leading-relaxed mb-4">{section.content}</p>
              )}
              
              {section.additionalContent && (
                <p className="leading-relaxed">{section.additionalContent}</p>
              )}
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
