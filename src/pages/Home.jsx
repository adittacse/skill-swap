import { Suspense } from "react";
import { useLoaderData } from "react-router";
import HeroSlider from "../components/HeroSlider.jsx";
import Loading from "../components/Loading.jsx";
import PopularSkills from "../components/PopularSkills.jsx";
import TopRatedProvider from "../components/TopRatedProvider.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import LearningTracks from "../components/LearningTracks.jsx";
import Divider from "../components/Divider.jsx";

const Home = () => {
    const data = useLoaderData();

    return (
        <div className="my-element">
            <HeroSlider />

            <Suspense fallback={<Loading />}>
                <PopularSkills data={data} />
            </Suspense>

            <Divider />

            <TopRatedProvider data={data} />

            <Divider />

            <HowItWorks />

            <Divider />

            <LearningTracks />
        </div>
    );
};

export default Home;