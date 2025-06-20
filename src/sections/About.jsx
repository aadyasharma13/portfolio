import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('aadyasindia@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-10" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/d-icon-avatar-cartoon-cute-freelancer-woman-working-online-learning-laptop-transparent-png-background-works-embodying-345422695.jpg-removebg-preview.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain " />

            <div>
              <p className="grid-headtext">Hi, I’m Aadya Sharma</p>
              <p className="grid-subtext">
                Passionate about creating innovative solutions that make a difference.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/creative1.jpeg" alt="grid-2" className="w-full sm:h-[274px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">More About Me</p>
              <p className="grid-subtext">
                Get to know me beyond tech
                <a href="#about-me-details" className="block w-full sm:w-fit mt-4">
                  <Button name="Explore My Creative Side" isBeam containerClass="sm:min-w-72" />
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[250px] h-[200px] flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Hyderabad, India', color: 'white', size: 15 }]}
              />
            </div>
            <div> 
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Hyderabad, India and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/iwinlogo.jpeg"
              alt="grid-3"
              className="w-48 h-48 mx-auto rounded-full object-cover aspect-square drop-shadow-lg"
              style={{ boxShadow: '0 4px 20px rgba(0, 132, 255, 0.3)' }}
            />

            <div>
              <p className="grid-headtext">I-Win</p>
              <p className="grid-subtext">
                Learn more about I-Win, we are a community of patients, caregivers and medical professionals that come together to share their journey and personal experiences.
              </p>
              <a href="" className="block w-full mt-4">
                <Button name="Coming Soon" isBeam containerClass="w-full" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full h-[180px] object-cover object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">aadyasindia@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
