import { FaDesktop } from 'react-icons/fa';

export default function ResponsiveGate() {



    return (
        <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-96 h-96 bg-amber-900/10 rounded-full filter blur-3xl "></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-800/10 rounded-full filter blur-3xl  "></div>
            </div>

            <div className="relative z-10 max-w-md mx-auto text-center space-y-8">
                <div className="flex justify-center gap-6 mb-8">
                </div>

                <div className="bg-zinc-900/50 backdrop-blur-sm rounded-2xl p-10 shadow-2xl border border-zinc-800/50 transform hover:border-amber-900/50 transition-all duration-500">
                    <div className="space-y-6">
                        <div className="inline-block">
                            <FaDesktop className="w-16 h-16 text-amber-600 mx-auto animate-pulse" />
                        </div>

                        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 leading-tight">
                            Desktop View Required
                        </h1>

                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div>

                        <p className="text-lg text-zinc-400 leading-relaxed">
                            Currently this website UI is incompatible with smaller screen sizes
                        </p>

                        <div className="pt-6 space-y-3 text-sm text-zinc-500">
                            <p className="flex items-center justify-center gap-2">
                                <span className="inline-block w-1.5 h-1.5 bg-amber-600 rounded-full animate-ping"></span>
                                Please visit us on a desktop or laptop
                            </p>

                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-2 pt-4">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-amber-700 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 bg-amber-800 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    );
}