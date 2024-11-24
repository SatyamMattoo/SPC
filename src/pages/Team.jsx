import teamBackground from "../assets/team/team.jpg";
import manav from "../assets/team/manav.jpg";
import manavSignature from "../assets/team/manavSign.jpeg";
import piyush from "../assets/team/piyush.jpeg";
import piyushSignature from "../assets/team/piyushSign.jpeg";
import tavish from "../assets/team/tavish.jpeg";
import tavishSignature from "../assets/team/tavishSign.jpeg";
import dhruva from "../assets/team/dhruva.jpeg";
import dhruvaSignature from "../assets/team/dhruvaSign.jpeg";

const teamMembers = [
  {
    name: "Manav Sharma",
    position: "Identification and Need Analysis",
    image: manav,
    signatureImage: manavSignature,
  },
  {
    name: "Tavish Bansal",
    position: "Need Analysis, Engineering Design Specifications And Objective Tree Formation",
    image: tavish,
    signatureImage: tavishSignature,
  },
  {
    name: "Piyush Dhawan",
    position: "Problem Definition / Deliverables, Engineering Design Specifications And Objective Tree Formation",
    image: piyush,
    signatureImage: piyushSignature,
  },
  {
    name: "Dhruva Verma",
    position: "Problem Definition / Deliverables, Engineering Design Specifications And Objective Tree Formation",
    image: dhruva,
    signatureImage: dhruvaSignature,
  },
];

const TeamPage = () => {
  return (
    <div className="bg-gray-100 pb-8">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center text-white py-24 px-6 relative"
        style={{
          backgroundImage: `url(${teamBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our Team 👨‍👨‍👦‍👦
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Behind every great innovation lies a team of passionate minds
            working together. Meet the creative individuals who brought this
            vision to life!
          </p>
        </div>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center p-6 m-4"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-40 h-40 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{member.position}</p>

            <div className="w-44 h-16 mb-4">
              <img
                src={member.signatureImage}
                alt={`${member.name} signature`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
