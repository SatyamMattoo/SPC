import componentsBackground from "../assets/components/components.jpg";
import batteryImg from "../assets/components/battery.jpg";
import motorImg from "../assets/components/motor.jpg";
import circuitBoardImg from "../assets/components/circuit.jpg";
import switchImg from "../assets/components/switch.jpg";
import wiresImg from "../assets/components/wires.jpg";
import irLedImg from "../assets/components/ir-led.jpg";
import arduinoImg from "../assets/components/arduino.jpg";
import wheelsImg from "../assets/components/wheels.jpg";
import sensorsImg from "../assets/components/sensors.jpg";

const components = [
  {
    title: "Lithium-Ion Battery 🔋",
    description: (
      <ul className="list-disc pl-5">
        <li>
          <strong>IEC 62133:</strong> Safety requirements for lithium-ion batteries used in portable devices, ensuring fire resistance, temperature limits, and safe charging/discharging processes.
        </li>
      </ul>
    ),
    image: batteryImg,
  },
  {
    title: "Motors ⚙️",
    description: (
      <ul className="list-disc pl-5">
        <li>
          <strong>IEC 60335:</strong> Safety standards for household appliances, ensuring motors operate without electrical hazards or mechanical failure in home cleaning devices.
        </li>
        <li>
          <strong>UL 60730-1:</strong> Controls automatic operations for motor-based systems, such as air suction and wheel rotation.
        </li>
      </ul>
    ),
    image: motorImg,
  },
  {
    title: "Circuit Board 🖥️",
    description: (
      <ul className="list-disc pl-5">
        <li>
          <strong>IEC 60335:</strong> Ensures electrical safety for control systems in household appliances like circuit boards.
        </li>
        <li>
          <strong>EN 61010:</strong> Electrical safety requirements for equipment used in measurement and control, protecting users from electrical hazards.
        </li>
      </ul>
    ),
    image: circuitBoardImg,
  },
  {
    title: "Switch 🔌",
    description: (
      <ul className="list-disc pl-5">
        <li>
          <strong>IEC 60335:</strong> Ensures the on/off switch is safe, preventing accidental electrical hazards when powering up or down.
        </li>
      </ul>
    ),
    image: switchImg,
  },
  {
    title: "Electronic Wires 📡",
    description: (
      <ul className="list-disc pl-5">
        <li>
          <strong>IEC 60335:</strong> Standards to ensure wires are insulated and prevent accidental short circuits or exposure to electrical components.
        </li>
      </ul>
    ),
    image: wiresImg,
  },
  {
    title: "IR LED 💡",
    description: (
      <ul className="list-disc pl-5">
        <li>
          <strong>IEC 60335:</strong> Ensures that the IR LEDs used for navigation or obstacle detection are safely installed to prevent electrical shock or heat damage.
        </li>
      </ul>
    ),
    image: irLedImg,
  },
  {
    title: "Arduino Board 🤖",
    description: (
      <ul className="list-disc pl-5">
        <li>
          <strong>IEC 60335:</strong> Controls and ensures safe electrical operations of microcontrollers and related devices, including Arduino-based systems in the cleaner.
        </li>
      </ul>
    ),
    image: arduinoImg,
  },
  {
    title: "Wheels 🚗",
    description: (
      <ul className="list-disc pl-5">
        <li>
          <strong>ISO 13849:</strong> Ensures that the wheels, part of the control system, remain mechanically safe and can withstand failure without posing a risk.
        </li>
      </ul>
    ),
    image: wheelsImg,
  },
  {
    title: "Infrared Sensors 🌟",
    description: (
      <ul className="list-disc pl-5">
        <li>
          <strong>ISO 13482:</strong> Ensures safety in robots used for personal care by preventing collisions and safely navigating the environment with infrared sensors.
        </li>
      </ul>
    ),
    image: sensorsImg,
  },
];

const ComponentsPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center text-white py-24 px-6 relative"
        style={{
          backgroundImage: `url(${componentsBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Components Used in the Cleaner 🛠️
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Explore the high-quality components that make our Smart Portable
            Cleaner a reliable and efficient solution for modern needs.
          </p>
        </div>
      </div>

      {/* Components Grid */}
      <div className="py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {components.map((component, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center hover:scale-105 transition-transform duration-100 ease-in-out"
            >
              <img
                src={component.image}
                alt={component.title}
                className="w-full h-64 object-cover rounded-t-md mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-800 mb-2 p-2">
                {component.title}
              </h2>
              <p className="text-gray-600 text-sm text-left p-2">
                {component.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;
