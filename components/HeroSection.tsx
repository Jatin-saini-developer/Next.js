function HeroSection() {
    return (
        <section className="w-full bg-white">
            <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 lg:py-20
                      grid grid-cols-1 md:grid-cols-2
                      items-center gap-10 md:gap-12 lg:gap-16">

                {/* LEFT */}
                <div className="flex flex-col gap-5">
                    <h1 className="text-4xl md:text-5xl lg:text-[3.5rem]
                         font-bold leading-tight tracking-tight text-gray-900">
                        Meet your <br /> 24/7 AI team
                    </h1>

                    <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-sm">
                        Infinite minds, built for teamwork. Answer questions, prioritize
                        tasks, and write reports—all while you sleep.
                    </p>

                    <div className="flex items-center gap-3 flex-wrap mt-1">
                        {/* Primary CTA */}
                        <button
                            className="px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700
                         active:scale-[0.98] text-white text-sm font-medium
                         transition-colors duration-150 cursor-pointer"
                        >
                            Try for free
                        </button>

                        {/* Ghost / Secondary */}
                        <button
                            className="px-5 py-2.5 rounded-md border border-gray-300
                         hover:bg-gray-50 active:scale-[0.98] text-gray-700
                         text-sm font-medium transition-colors duration-150 cursor-pointer"
                        >
                            Request a demo
                        </button>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-full">
                    <video
                        className="w-full  rounded-lg object-contain block"
                        src="https://videos.ctfassets.net/spoqsaf9291f/5aPgcRxfr53cMSHMjtYD71/48f0520889e9b6e1eae514eb7e891e55/ai-hero-animation.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>

            </div>
        </section>
    );
}

export default HeroSection;