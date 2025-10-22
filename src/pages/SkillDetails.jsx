import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import SkillDetailsCard from "../components/SkillDetailsCard.jsx";

const SkillDetails = () => {
    const [skillDetails, setSkillDetails] = useState({});
    const data = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const skillDetails = data.find(skill => skill.id == id);
        setSkillDetails(skillDetails);
    }, [data, id]);

    return (
        <div>
            <SkillDetailsCard skillDetails={skillDetails} />
        </div>
    );
};

export default SkillDetails;