import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-auto md:h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[105px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 md:mt-8`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white leading-[45px] sm:leading-tight md:leading-normal`}>
            Hello World, <span className='text-[#915EFF]'> <br className="block sm:hidden"/>I'm Azaan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-10 md:mt-4 text-white-100`}>
            {/* A Software Engineering student & full-stack developer <br className="sm:block hidden" /> */}
            Building things, Breaking bugs, Shipping ideas.
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
