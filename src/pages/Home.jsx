import React, {Suspense} from "react";
import { useLoaderData } from "react-router";
import PopularSkills from "../components/PopularSkills.jsx";

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            {/*hero slider*/}
            {/*popular skills*/}
            <Suspense fallback={<p>Loading...</p>}>
                <PopularSkills data={data} />
            </Suspense>
            {/*top-rated provider*/}
            {/*how it works*/}
            {/*personal extra section*/}
        </div>
    );
};

export default Home;