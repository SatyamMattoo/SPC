import graph1 from "../assets/graph/graph-1.png";
import graph2 from "../assets/graph/graph-2.png";
import graph3 from "../assets/graph/graph-3.png";
import graph4 from "../assets/graph/graph-4.png";

const GraphicalSurveySection = () => {
  return (
    <div className="py-16 px-4 md:px-12 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 w-full mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
        Survey Insights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Question 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-6">
          <h3 className="text-xl font-semibold text-gray-800">
            1. Have you used an SPC before?
          </h3>
          <img
            src={graph3}
            alt="Graph for Question 1"
            className="w-auto h-64"
          />
        </div>

        {/* Question 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-6">
          <h3 className="text-xl font-semibold text-gray-800">
            2. Which areas do you find most difficult to clean?
          </h3>
          <img
            src={graph4}
            alt="Graph for Question 2"
            className="w-auto h-64"
          />
        </div>

        {/* Question 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-6">
          <h3 className="text-xl font-semibold text-gray-800">
            3. What should be the optimum size of the device?
          </h3>
          <img
            src={graph1}
            alt="Graph for Question 3"
            className="w-auto h-64"
          />
        </div>

        {/* Question 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-6">
          <h3 className="text-xl font-semibold text-gray-800">
            4. What type of motor will you prefer in the SPC?
          </h3>
          <img
            src={graph2}
            alt="Graph for Question 4"
            className="w-auto h-64"
          />
        </div>
      </div>
    </div>
  );
};

export default GraphicalSurveySection;
