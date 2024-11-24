import DeliverablesSection from "../components/Devilerables"
import GraphicalSurveySection from "../components/GraphicalSurvey"
import HeroSection from "../components/Hero"
import MissionProblemSection from "../components/Mission"

const Home = () => {
    return (
        <>
            <HeroSection />
            <MissionProblemSection />
            <GraphicalSurveySection />
            <DeliverablesSection />
        </>
    )
}

export default Home