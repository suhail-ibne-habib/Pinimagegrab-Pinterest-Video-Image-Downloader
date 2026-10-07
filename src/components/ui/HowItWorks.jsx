import { Copy, Link, Check } from "lucide-react";
import { howToSteps } from "@/lib/site";

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 px-4 relative">
            <div className="container mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
                        How It <span className="relative inline-block">
                            Works
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <div className="glass border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 group">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Copy className="w-7 h-7 text-red-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{howToSteps[0].name}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {howToSteps[0].text}
                        </p>
                    </div>

                    <div className="glass border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 group">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Link className="w-7 h-7 text-red-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{howToSteps[1].name}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {howToSteps[1].text}
                        </p>
                    </div>

                    <div className="glass border border-white/5 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 group">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Check className="w-7 h-7 text-red-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{howToSteps[2].name}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {howToSteps[2].text}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
