import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/site";

export function FAQ() {
    return (
        <section id="faq" className="py-24 px-4 bg-[#0a0a0a]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Frequently Asked <span className="text-red-500">Questions</span>
                    </h2>
                    <p className="text-gray-400">
                        Everything you need to know about downloading Pinterest content.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <details
                            key={faq.question}
                            className="group border border-white/10 rounded-2xl bg-transparent open:bg-white/5 open:border-red-500/30"
                        >
                            <summary className="px-6 py-5 flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                <h3 className="text-lg font-semibold text-white group-open:text-red-400">
                                    {faq.question}
                                </h3>
                                <Plus className="w-5 h-5 text-gray-500 flex-shrink-0 ml-4 group-open:hidden" />
                                <Minus className="w-5 h-5 text-red-400 flex-shrink-0 ml-4 hidden group-open:block" />
                            </summary>
                            <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                                {faq.answer}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}
