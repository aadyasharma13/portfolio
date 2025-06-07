import { myArtworksVertical } from  '../constants/index.js';
import { myArtworksHorizontal } from  '../constants/index.js'; 

const AboutMeDetails = () => {
  return (
    <div id="about-me-details" className="min-h-screen p-10 bg-black text-white">
      <h1 className="text-4xl font-bold mb-4 text-white-600">More About Me</h1>
      <p className="text-lg leading-relaxed mb-8 ">
      I'm also a left-brained and right-brained thinker—quite literally, as a left-hander! This duality allows me to tap into both logic and creativity, which is why I also love to paint. Below, you'll find a curated glimpse into my artwork—a personal reflection of the creative side that complements my technical journey.
      </p>

      <div className="text-white-600">
        <h2 className="text-3xl font-semibold mb-4 ">My Artworks</h2>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
          {myArtworksVertical.map((art, i) => (
            <div
            key={i}
            className="min-w-[260px] max-w-[300px] flex-shrink-0 bg-black-200 p-5 rounded-xl shadow-lg border border-white/10 snap-start"
          >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-80 object-cover rounded-lg mb-4"
              />
              {/* <p className="text-lg font-semibold mb-2">{art.title}</p> */}
              {/* <p className="text-sm text-white-600">{art.description}</p> */}
            </div>
          ))}
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
          {myArtworksHorizontal.map((art, i) => (
           <div
           key={i}
           className="min-w-[400px] max-w-[500px] flex-shrink-0 bg-black-200 p-5 rounded-xl shadow-lg border border-white/10 snap-start"
         >
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-61 object-cover rounded-lg mb-4"
              />
              {/* <p className="text-lg font-semibold mb-2">{art.title}</p> */}
              {/* <p className="text-sm text-white-600">{art.description}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMeDetails;