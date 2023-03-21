import Image from "next/image";
import Yeremia from "../../public/aku.png";
const Teams = () => {
  return (
    <div className="container flex items-center justify-between flex-col md:flex-row gap-3">
      <div>
        <Image src={Yeremia} alt="Yeremia" />
        <h2 className="mt-3 text-xl font-bold text-">Alex Gondrong</h2>
        <p>Chief Executive Officer </p>
      </div>
      <div>
        <Image src={Yeremia} alt="Yeremia" />
        <h2 className="mt-3 text-xl font-bold text-">Agus Krisdianto</h2>
        <p>Chief Marketing Officer</p>
      </div>
      <div>
        <Image src={Yeremia} alt="Yeremia" />
        <h2 className="mt-3 text-xl font-bold text-">Yeremia Chris Saragi</h2>
        <p>Chief Technology Officer </p>
      </div>
    </div>
  );
};

export default Teams;
