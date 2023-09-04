import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../constants";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container border-2 border-red-400 p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival <br /> <span className="text-coral-red inline-block mt-3">Nike</span>{" "}
            Shoes
          </span>
        </h1>
        <p className="font-montserrat mt-6 mb-10 text-xl text-slate-gray leading-8">
          Discover stylish Nike arrival, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconUrl={arrowRight}/>

        <div className="flex justify-start items-start flex-wrap w-full mt-14 gap-16">
          {statistics.map((item,index)=>(
            <div key={index}>
              <p className="font-palanquin text-4xl font-bold">{item.value}</p>
              <p className="font-montserrat leading-7 font-bold text-slate-gray">{item.label}</p>
            </div>
            ))}
        </div>

      </div>            
    </section>
  );
};

export default Hero;
