import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { executives } from "../helper/executives";

const ExecutiveDetails = () => {
  const { name } = useParams();
  const executive = executives.find(
    (exec) => exec.name === decodeURIComponent(name)
  );

  if (!executive) {
    return <div className="text-center text-red-500">Executive not found!</div>;
  }

  return (
    <div className="flex flex-col md:flex-row items-center gap-[50px] px-6 py-10">
      <img
        src={executive.image}
        alt={executive.name}
        className="w-[300px] h-[400px] lg:w-[457px] lg:h-[537px] rounded-[10px] shadow-lg"
      />
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold">{executive.name}</h2>
        <p className="text-lg text-gray-600">{executive.title}</p>
        <p className="text-base">
          {/* Placeholder description */}
          {executive.name} is a dedicated leader at Bowen Tech Hub, bringing
          innovation and expertise to the team.
        </p>
        <Button
          text="Back to Executives"
          onClick={() => window.history.back()}
        />
      </div>
    </div>
  );
};

export default ExecutiveDetails;
