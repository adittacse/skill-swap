import { Suspense } from "react";
import { useLoaderData } from "react-router";
import HeroSlider from "../components/HeroSlider.jsx";
import Loading from "../components/Loading.jsx";
import PopularSkills from "../components/PopularSkills.jsx";
import TopRatedProvider from "../components/TopRatedProvider.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import LearningTracks from "../components/LearningTracks.jsx";
import { Toaster } from "react-hot-toast";

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            {/* hero slider */}
            <HeroSlider />

            {/* popular skills */}
            <Suspense fallback={<Loading />}>
                <PopularSkills data={data} />
            </Suspense>

            {/* top-rated provider */}
            <TopRatedProvider data={data} />

            {/*<div className="border-t border-red-500"></div>*/}
            {/*<div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 opacity-80"/>*/}

            {/* how it works */}
            <HowItWorks />

            {/* personal extra section */}
            <LearningTracks />

            <Toaster />
        </div>
    );
};

export default Home;