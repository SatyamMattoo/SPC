import efficiencyImg from "../assets/efficiency.jpg";
import batteryImg from "../assets/components/battery.jpg";
import noiseImg from "../assets/noise.jpg";
import costImg from "../assets/cost.jpg";
import navigationImg from "../assets/navigation.jpg";
import dustbinImg from "../assets/dustbin.jpg";

const DeliverablesSection = () => {
  const deliverables = [
    {
      title: "✨ Enhance Cleaning Efficiency",
      points: [
        "Ensure thorough cleaning in hard-to-reach areas.",
        "Improve suction power for better debris removal.",
      ],
      image: efficiencyImg,
    },
    {
      title: "🔋 Extend Battery Life and Optimize Charging",
      points: [
        "Longer cleaning sessions with extended battery life.",
        "Fast and efficient charging mechanisms.",
      ],
      image: batteryImg,
    },
    {
      title: "🔇 Reduce Noise Levels",
      points: [
        "Minimize operational noise for quieter cleaning.",
        "Enhance user experience in noise-sensitive areas.",
      ],
      image: noiseImg,
    },
    {
      title: "💰 Optimize Cost-Performance Ratio",
      points: [
        "Deliver value for money without compromising features.",
        "Maintain an affordable price with top-notch performance.",
      ],
      image: costImg,
    },
    {
      title: "🗺️ Enhance Navigation and Mapping Technology",
      points: [
        "Use advanced mapping for efficient cleaning coverage.",
        "Improve navigation in complex layouts.",
      ],
      image: navigationImg,
    },
    {
      title: "🧹 Increase Dustbin Capacity",
      points: [
        "Larger dustbins to reduce emptying frequency.",
        "Enhance convenience during extended cleaning tasks.",
      ],
      image: dustbinImg,
    },
  ];

  return (
    <div className="py-12 px-4 md:px-6 bg-gray-100 w-full mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Deliverables
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-4/5 mx-auto">
        {deliverables.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-lg "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-52 object-cover rounded-md mb-4 md:mb-0 md:mr-6"
            />
            <div className="text-left p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {item.points.map((point, i) => (
                  <li key={i} className="flex items-start mb-2">
                    <span className="text-gray-800 mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliverablesSection;
