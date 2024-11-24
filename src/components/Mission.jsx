import cleaner from "../assets/cleaner.jpg";
import problem from "../assets/problem.jpg";

const MissionProblemSection = () => {
  return (
    <div className="w-full">
      {/* Mission Statement */}
      <div className="py-16 px-6 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 w-full mx-auto text-center mb-12 flex flex-col md:flex-row items-center justify-center gap-10">
        <img src={cleaner} alt="Cleaner Image" className="w-auto h-96 rounded-lg shadow-md" />
        <div className="w-full md:w-1/2 flex flex-col align-top justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-left">
            At the heart of our project lies a commitment to creating healthier, cleaner, and more sustainable indoor environments. We strive to revolutionize cleaning solutions by providing a <b>smart, portable cleaner</b> that combines convenience, efficiency, and sustainability. Our mission is to make cleanliness effortless and accessible for everyone.
          </p>
        </div>
      </div>

      {/* Problem Statement */}
      <div className="py-16 px-6 bg-white w-full mx-auto text-center mb-12 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="w-full md:w-1/2 flex flex-col align-top justify-between gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Problem Statement
          </h2>
          {/* Problem Points */}
          <div className="space-y-8 text-left">
            {/* Problem 1 */}
            <div className="flex items-start gap-4">
              <div className="text-blue-500 text-3xl">🔍</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Limited Cleaning Efficiency
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <b>Issue:</b> Many RC portable cleaners struggle with comprehensive cleaning, particularly in hard-to-reach areas and corners. <br />
                  <b>Impact:</b> This limitation reduces their effectiveness, leaving dirt and debris in certain spots and compromising overall cleaning quality.
                </p>
              </div>
            </div>
            {/* Problem 2 */}
            <div className="flex items-start gap-4">
              <div className="text-blue-500 text-3xl">🔋</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Battery Life and Charging Concerns
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <b>Issue:</b> Some RC portable cleaners have limited battery life, requiring frequent recharging. <br />
                  <b>Impact:</b> This leads to interruptions in cleaning tasks, reducing efficiency and convenience for users who need sustained cleaning sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={problem} alt="Problem Image" className="w-auto h-96 rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default MissionProblemSection;
