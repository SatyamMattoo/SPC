import hero from "../assets/hero.jpg";

const HeroSection = () => {
    return (
        <div className="relative h-[60vh] w-full">
            {/* Background Image */}
            <img
                src={hero}
                alt="Smart Cleaner Background"
                className="absolute inset-0 h-full w-full object-cover sm:"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            {/* Content */}
            <div className="h-full relative z-10 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Smart Portable Cleaner for Windows
                </h1>
                <p className="text-lg md:text-xl max-w-2xl">
                    Revolutionize your window cleaning experience with our compact, smart
                    cleaner that ensures a spotless shine, every time.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
