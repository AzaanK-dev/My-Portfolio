import { styles } from "../styles";
import InteractiveTerminal from "./InteractiveTerminal";

const Hero = () => {
  const handleHireMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Azaan_Mehtab_Khan_CV.pdf";
    link.click();
  };

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes floatUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pingAnim {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes bounceDown {
          0%   { transform: translateY(0); }
          40%  { transform: translateY(4px); }
          70%  { transform: translateY(-2px); }
          100% { transform: translateY(0); }
        }
        .btn-hire {
          position: relative; padding: 11px 28px; border-radius: 8px;
          font-size: 14px; font-weight: 600; letter-spacing: 0.5px; color: #fff;
          background: linear-gradient(135deg, #7c3aed, #915EFF, #a78bfa, #915EFF, #7c3aed);
          background-size: 300% auto; border: none; cursor: pointer; overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          animation: floatUp 0.6s ease 0.8s both;
        }
        .btn-hire::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, #7c3aed, #915EFF, #c4b5fd, #915EFF, #7c3aed);
          background-size: 300% auto; opacity: 0; transition: opacity 0.3s ease; border-radius: inherit;
        }
        .btn-hire:hover::before { opacity: 1; animation: shimmer 1.5s linear infinite; }
        .btn-hire:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(145,94,255,0.55); }
        .btn-hire:active { transform: translateY(0px); }
        .btn-hire span { position: relative; z-index: 1; display: flex; align-items: center; gap: 6px; }
        .ping-dot { position: relative; width: 7px; height: 7px; }
        .ping-dot::before {
          content: ''; position: absolute; inset: 0; border-radius: 50%;
          background: #fff; animation: pingAnim 1.4s ease-in-out infinite;
        }
        .ping-dot::after { content: ''; position: absolute; inset: 1px; border-radius: 50%; background: #fff; }
        .btn-cv {
          position: relative; padding: 10px 26px; border-radius: 8px;
          font-size: 14px; font-weight: 600; letter-spacing: 0.5px; color: #a78bfa;
          background: transparent; cursor: pointer; overflow: hidden;
          transition: color 0.25s ease, transform 0.2s ease;
          animation: floatUp 0.6s ease 1s both;
        }
        .btn-cv::before {
          content: ''; position: absolute; inset: 0; border-radius: 8px; padding: 1.5px;
          background: linear-gradient(135deg, #7c3aed, #c4b5fd, #7c3aed);
          background-size: 200% auto;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out; mask-composite: exclude;
          animation: shimmer 2.5s linear infinite;
        }
        .btn-cv::after {
          content: ''; position: absolute; inset: 0; border-radius: 8px;
          background: rgba(145,94,255,0.08); opacity: 0; transition: opacity 0.25s ease;
        }
        .btn-cv:hover { color: #fff; transform: translateY(-2px); }
        .btn-cv:hover::after { opacity: 1; }
        .btn-cv:active { transform: translateY(0px); }
        .btn-cv span { position: relative; z-index: 1; display: flex; align-items: center; gap: 7px; }
        .btn-cv:hover .cv-icon { animation: bounceDown 0.5s ease; }
        .btns-wrapper { display: flex; align-items: center; gap: 14px; margin-top: 28px; flex-wrap: wrap; }
        @media (max-width: 640px) { .btns-wrapper { margin-top: 22px; } }
      `}</style>

      <section className="relative w-full min-h-screen mx-auto flex items-center">

        <div className={`w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-col lg:flex-row items-center gap-10 pt-28 pb-10`}>

          {/* ── LEFT: text + CTA ── */}
          <div className="flex flex-row items-start gap-5 flex-1 min-w-0">
            {/* accent line */}
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white leading-[45px] sm:leading-tight md:leading-normal`}>
                Hello World,{" "}
                <span className="text-[#915EFF]">
                  <br className="block sm:hidden" />I'm Azaan
                </span>
              </h1>

              <p className={`${styles.heroSubText} mt-8 mb-8 md:mt-4 text-white-100`}>
                Building things, Breaking bugs, Shipping ideas.
              </p>

              <div className="btns-wrapper">
                <button className="btn-hire" onClick={handleHireMe}>
                  <span>
                    <span className="ping-dot" />
                    Hire Me
                  </span>
                </button>

                <button className="btn-cv" onClick={handleDownloadCV}>
                  <span>
                    <svg className="cv-icon" width="15" height="15" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.2"
                      strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="M12 15V3" />
                      <path d="M7 10l5 5 5-5" />
                      <path d="M20 21H4" />
                    </svg>
                    Download CV
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* ── RIGHT: terminal ── */}
          <div className="flex-1 w-full min-w-0 h-[420px] sm:h-[480px] lg:h-[520px] rounded-2xl overflow-hidden">
            <InteractiveTerminal />
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;