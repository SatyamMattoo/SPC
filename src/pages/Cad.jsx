import sectionalViewXImg from '../assets/cad/sectionalViewX.png';
import sectionalViewYImg from '../assets/cad/sectionalViewY.png';
import outerChassisImg from '../assets/cad/outer.png';
import innerComponentsImg from '../assets/cad/inner.png';
import explodedViewImg from '../assets/cad/exploded.png';
import backgroundImage from "../assets/cad/manufacturing.jpg"
import live1 from '../assets/cad/live-1.jpeg';
import live2 from '../assets/cad/live-2.jpeg';
import live3 from '../assets/cad/live-3.jpeg';
import live4 from '../assets/cad/live-4.jpeg';
import overview from '../assets/cad/overview.png';
import cadVideo from '../assets/cad/cadVideo.mp4';

// import cadModelVideo from '../assets/cad/cad_model_video.mp4'; // Assuming the video is in .mp4 format

const cadModels = [
    { src: sectionalViewXImg, alt: 'Sectional View in X Plane', caption: 'Sectional View in X Plane' },
    { src: sectionalViewYImg, alt: 'Sectional View in Y Plane', caption: 'Sectional View in Y Plane' },
    { src: outerChassisImg, alt: 'Outer Chassis (No Arduino, Sensors, Motors)', caption: 'Outer Chassis (No Arduino, Sensors, Motors)' },
    { src: innerComponentsImg, alt: 'Inner Components (No Outer Chassis)', caption: 'Inner Components (No Outer Chassis)' },
    { src: explodedViewImg, alt: 'Exploded View of CAD Model', caption: 'Exploded View of CAD Model' },
];

const livePreviewImages = [
    // Replace these placeholders with your actual live preview images
    { src: live1, alt: 'Live Preview 1' },
    { src: live2, alt: 'Live Preview 2' },
    { src: live3, alt: 'Live Preview 3' },
    { src: live4, alt: 'Live Preview 4' },
];

const SectionHeading = ({ text }) => (
    <div className="relative p-4">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center relative z-10">
            {text}
        </h3>
    </div>
);

const CadManufacturingPage = () => {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <div
                className="bg-cover bg-center text-white py-24 px-6 relative"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">CAD and Manufacturing</h2>
                    <p className="text-lg text-white mt-4 max-w-2xl mx-auto">
                        Discover the intricate details and precision engineering behind our Smart Portable Cleaner.
                        Below, you&apos;ll find sectional views, CAD models, and live visuals of the key components and their arrangements.
                    </p>
                </div>
            </div>
            <div className="bg-gray-200 py-8">
                <SectionHeading text="CAD Models" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
                    {cadModels.map((image, index) => (
                        <div key={index} className="flex flex-col items-center bg-white rounded-lg shadow-md">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover rounded-md mb-4"
                            />
                            <h3 className="text-md font-semibold text-gray-800 p-4">{image.caption}</h3>
                        </div>
                    ))}
                </div>
            </div>
            {/* Live Preview Section */}
            <div className="bg-white py-8">
                <SectionHeading text="Live Images" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto">
                    {livePreviewImages.map((image, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-60 object-cover rounded-md mb-4"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gray-200 py-8">
                {/* Video Section */}
                <SectionHeading text="CAD Model Video" />
                <div className="mt-4 text-center">
                    <div className="w-full max-w-4xl mx-auto">
                        <video
                            className="w-full rounded-lg shadow-lg"
                            controls
                            poster={overview}
                            autoPlay
                        >
                            <source
                                src={cadVideo}
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CadManufacturingPage;
