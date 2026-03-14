import img2 from "../assets/mona-0.png";
import img3 from "../assets/mona lisa.jpg";
import img4 from "../assets/Salvator-Mundi-Expensive.jpg";
import img5 from "../assets/main-image.jpeg";
import img6 from "../assets/imgee.jpg";
import img7 from "../assets/border.png";
import img8 from "../assets/border2.png";
import img9 from "../assets/border3.png";
import img22 from "../assets/borde4.png";
import img23 from "../assets/border5.png";
import img24 from "../assets/border6.png";
import img25 from "../assets/border7.png";
import img26 from "../assets/border8.png";
import img27 from "../assets/image023.png";
import img28 from "../assets/image024.png";
import img29 from "../assets/image025.png";
import img30 from "../assets/image026.png";
import img32 from "../assets/image027.png";
import img34 from "../assets/image028.png";

const homepage = () => {
  return (
    <div className="bg-[linear-gradient(135deg,#b21f1f,#1a2a6c,#fdbb2d)] h-screen w-full">
      {/* ------------------part navbar------sticky top-0 ---------- */}
      <nav className=" flex   justify-between items-center ">
        <img
          className="max-w-[50px] ml-3 mb-0.5 "
          data-aos="fade-down"
          data-aos-duration="1500"
          src={img2}
        />
        {/* <h1
          className="font-serif text-[20px] text-white"
          data-aos="fade-down"
          data-aos-duration="1500"
        ></h1> */}
        <div
          className="text-[#EFEEEA] space-x-9 text-[15px] font-serif font-medium m-auto mr-[2rem]"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-delay="200"
        >
          <div></div>
          <a
            className="hover:text-gray-500 hover:transition duration-300"
            href="#"
          >
            Home
          </a>
          <a
            className="hover:text-gray-500 hover:transition duration-300"
            href="#About"
          >
            About
          </a>
          <a
            className="hover:text-gray-500 transition duration-300"
            href="#Sculpture"
          >
            Sculpture
          </a>
        </div>

        {/* <button className="mr-3 border rounded-3xl p-[7px] w-40 text-[15px] font-medium text-white hover:border-indigo-950 hover:underline  transition duration-300 ">
          <i class="fa-solid fa-bag-shopping mr-1.5 "></i>
          Online Boutique
        </button>
        <button className=" mr-4.5 border p-[7px] rounded-3xl text-white w-25  ">
          <i class="fa-solid fa-ticket mr-1.5"></i>Tickets
        </button> */}
      </nav>
      {/* ------------------part navbar ---------------- */}
      {/* ------------------------------------------------------------ */}
      {/* ------------------part homepage ---------------- */}
      <div className="flex mt-[5rem]">
        <div>
          <div>
            <h1
              className="ml-[4rem] mb-[45px] mt-[4rem] text-5xl font-serif text-white"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              The Mona Lisa
            </h1>
            <p
              className="ml-[4rem] mr-[4rem] font-serif text-white"
              data-aos="fade-right"
              data-aos-duration="1700"
            >
              <span className="underline">The Mona Lisa</span> is a half-length
              portrait painting by the Italian artist Leonardo da Vinci, widely
              regarded as one of the most famous and valuable artworks in the
              world. It is painted in oil on a poplar wood panel, measuring 77 x
              53 cm (30 x 20 7/8 in). The painting is traditionally believed to
              depict Lisa del Giocondo (née Gherardini), the wife of the
              Florentine silk merchant Francesco del Giocondo, which is why it
              is also known as La Gioconda in Italian, meaning "jocund" or
              "happy". The title "Mona Lisa" in English is derived from the
              Italian "Monna Lisa," a polite form of address meaning "My Lady
              Lisa".
            </p>
            <div data-aos="fade-right" data-aos-duration="2000">
              <button className=" rounded ml-[4rem] mt-[3rem] w-[15%] p-[5px] bg-white text-black transform hover:scale-95 transition duration-300 ">
                The Mona Lisa
              </button>
              <button className="border rounded text-white  ml-[1rem] mt-[3rem] w-[15%] p-[5px] transform hover:scale-95 transition duration-300 ">
                See More
              </button>
            </div>
          </div>
        </div>
        <div className="transform hover:rotate-x-[10deg]  rotate-y-[10deg] scale-1.05 duration-300">
          <img
            className="max-w-[300px]  mr-[2rem] shadow-sm rounded "
            src={img3}
            data-aos="fade-down-right"
            data-aos-duration="1500"
          />
        </div>
      </div>
      {/* part about */}
      <h1
        id="About"
        className="mt-[10rem] ml-[3rem] text-center text-4xl font-extralight"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
      >
        About
      </h1>
      <p
        className="text-center  ml-[2.5rem] text-2xl font-semibold"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
      >
        Expensive Paintings In The World 2025
      </p>
      {/* part about */}
      {/* part two in the home page */}
      <div className="flex mt-[5rem]">
        <img
          className="max-w-[330px] mt-[3.5rem] ml-[2rem] shadow-sm rounded"
          src={img4}
          data-aos="fade-right"
          data-aos-duration="1500"
        />
        <div>
          <div>
            <h1
              className="ml-[4rem] mb-[45px] mt-[4rem] text-5xl font-serif"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              The Salvator Mundi
            </h1>
            <p
              className="ml-[4rem] mr-[4rem] font-serif"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <span className="underline">The Salvator Mundi </span>
              meaning "Savior of the World" in Latin, is a painting attributed
              in whole or part to the Italian High Renaissance artist Leonardo
              da Vinci, dated approximately between 1499 and 1510. The artwork
              depicts Jesus Christ in anachronistic blue Renaissance attire,
              making a gesture of blessing with his right hand while holding a
              transparent, non-refracting crystal orb in his left hand,
              symbolizing the celestial sphere of the heavens. The painting was
              rediscovered in 2005 by New York dealers Robert Simon and Alex
              Parish, who purchased it from a small auction in New Orleans; at
              the time, it was not recognized as a work by Leonardo da Vinci. It
              underwent extensive restoration by art restorer Dianne Modestini,
              who removed overpainting and repaired the damaged wood support,
              leading to the belief that the work was by Leonardo. The painting
              was included in the 2011–2012 exhibition "Leonardo da Vinci:
              Painter at the Court of Milan" at the National Gallery in London,
              which caused a worldwide media sensation.
            </p>
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="flex mt-[6rem]">
        <div>
          <div>
            <h1
              className="ml-[4rem] mb-[45px] mt-[4rem] text-5xl font-serif"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              The Standard Bearer
            </h1>
            <p
              className="ml-[4rem] mr-[4rem] font-serif"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <span className="underline"> The Standard Bearer</span> is a
              half-length The term "Standard Bearer" has multiple meanings
              across history, art, religion, and modern usage. Historically, a
              standard-bearer was a soldier responsible for carrying the
              military standard or flag, a vital role on the battlefield for
              maintaining unit cohesion and serving as a visual beacon for
              troops, making the position both honorable and extremely
              dangerous. In the Roman military, this role was known as the
              Signifer, who also managed the unit's finances. The concept
              extends to modern ceremonial roles, such as the athlete who
              carries a nation's flag during the Olympic Games opening and
              closing ceremonies. In art, "The Standard Bearer" is a famous 1636
              self-portrait by Rembrandt, painted during his move from Leiden to
              Amsterdam, which is now housed in the Rijksmuseum in Amsterdam
              after being acquired for €175 million in 2021. The painting
              depicts Rembrandt in the attire of a militia standard-bearer,
              symbolizing his ambition to secure prestigious group portrait
              commissions. The term is also used.
            </p>
            <br />
          </div>
        </div>
        <img
          className="max-w-[330px] mt-[3.5rem] mr-[2rem] shadow-sm rounded"
          src={img5}
          data-aos="fade-right"
          data-aos-duration="1500"
        />
      </div>
      <div className="flex mt-[12rem]">
        <img
          className="max-w-[330px] mt-[3.5rem] ml-[2rem] shadow-sm rounded"
          data-aos="fade-right"
          data-aos-duration="1500"
          src={img6}
        />
        <div>
          <div>
            <h1
              className="ml-[4rem] mb-[45px] mt-[4rem] text-5xl font-serif"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              The Card Players
            </h1>
            <p
              className="ml-[4rem] mr-[4rem] font-serif"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <span className="underline"> The Card Players </span>
              is a series of five oil paintings by the French Post-Impressionist
              artist Paul Cézanne, created during his final period in the early
              1890s. The series is considered a cornerstone of Cézanne's art
              from that era and is seen as a "prelude" to his most acclaimed
              later works. Each painting depicts Provençal peasants, all male,
              intensely focused on playing cards and smoking pipes, portrayed
              with a sense of quiet, still concentration. Cézanne adapted the
              genre of card games, traditionally depicting rowdy, drunken
              gamblers in taverns, replacing them with stone-faced tradesmen in
              a simplified, natural setting, devoid of drama, narrative, or
              conventional characterization. The models were local farmhands,
              some of whom worked on Cézanne's family estate, the Jas de
              Bouffan.
            </p>
            <br />
          </div>
        </div>
      </div>
      {/* part Sculpture----------------- */}
      <h1
        id="Sculpture"
        className="mt-[10rem] ml-[3rem] text-center text-4xl font-extralight"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
      >
        Sculpture
      </h1>
      <p
        className="text-center  ml-[2.5rem] text-2xl font-semibold"
        data-aos="zoom-in-down"
        data-aos-duration="2000"
      >
        Expensive Paintings In The World 2025
      </p>
      {/* ------------------  start card ------------- */}
      <div className="all card flex mt-[9rem] ml-[5rem]">
        {/* ----------------------------- */}
        {/* ----------------------------- */}
        <div
          className="card w-[20%] ml-[2rem]"
          // data-aos="fade-down"
          // data-aos-easing="linear"
          // data-aos-duration="2000"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="max-w-[240px] m-auto mt-[5px] transform hover:rotate-x-[9deg]  rotate-y-[9deg] scale-1.05 duration-300"
            src={img7}
          />
          <div className="card-body">
            <h5 className="text-center mb-[9px] text-[20px]">Mona Lisa</h5>
            <p className="text-center mb-[9px]">
              The Mona Lisa is a half-length portrait painting by the Italian
            </p>
            <button className=" border rounded w-[50%] p-[3px] ml-[3.6rem] mb-[9px] transform hover:rotate-x-[9deg]  rotate-y-[9deg] scale-1.05 duration-300 hover:bg-[linear-gradient(135deg,#1a2a6c,#3ff,#67ed)] hover:text-white ">
              See More
            </button>
          </div>
        </div>
        {/* ----------------------------- */}
        {/* ----------------------------- */}
        <div
          className="card w-[20%] ml-[2rem]"
          // data-aos="fade-up"
          // data-aos-duration="2000"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="max-w-[240px] m-auto mt-[5px] transform hover:rotate-x-[9deg]  rotate-y-[9deg] scale-1.05 duration-300"
            src={img8}
          />
          <div className="card-body">
            <h5 className="text-center mb-[9px] text-[20px]">
              Standard Bearer
            </h5>
            <p className="text-center mb-[9px]">
              religion, and modern usage Historically, a standard-bearer
            </p>
            <button className=" border rounded w-[50%] p-[3px] ml-[3.6rem] mb-[9px] transform hover:rotate-x-[9deg]  rotate-y-[9deg] scale-1.05 duration-300 hover:bg-[linear-gradient(135deg,#1a2a6c,#3ff,#67ed)] hover:text-white ">
              See More
            </button>
          </div>
        </div>
        {/* ----------------------------- */}
        {/* ----------------------------- */}
        <div
          className="card w-[20%] ml-[2rem]"
          // data-aos="fade-down"
          // data-aos-easing="linear"
          // data-aos-duration="2000"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="max-w-[240px] m-auto mt-[5px] transform hover:rotate-x-[9deg]  rotate-y-[9deg] scale-1.05 duration-300"
            src={img9}
          />
          <div className="card-body">
            <h5 className="text-center mb-[9px] text-[20px]">Salvator Mundi</h5>
            <p className="text-center mb-[9px]">
              Savior of the World in Latin, is a painting attributed in whole
            </p>
            <button className=" border rounded w-[50%] p-[3px] ml-[3.6rem] mb-[9px] transform hover:rotate-x-[9deg]  rotate-y-[9deg] scale-1.05 duration-300 hover:bg-[linear-gradient(135deg,#1a2a6c,#3ff,#67ed)] hover:text-white ">
              See More
            </button>
          </div>
        </div>
        {/* ----------------------------- */}
        {/* ----------------------------- */}
        <div
          className="card w-[20%] ml-[2rem]"
          // data-aos="fade-up"
          // data-aos-duration="2000"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="max-w-[240px] m-auto mt-[5px] transform hover:rotate-x-[9deg]  rotate-y-[9deg] scale-1.05 duration-300"
            src={img22}
          />
          <div className="card-body">
            <h5 className="text-center mb-[9px] text-[20px]">
              Horace Van Ruth
            </h5>
            <p className="text-center mb-[9px]">
              Horace Van Ruith was a British painter active in the late 19th
            </p>
            <button className=" border rounded w-[50%] p-[3px] ml-[3.6rem] mb-[9px] transform hover:rotate-x-[9deg]  rotate-y-[9deg] scale-1.05 duration-300 hover:bg-[linear-gradient(135deg,#1a2a6c,#3ff,#67ed)] hover:text-white ">
              See More
            </button>
          </div>
        </div>
        {/* ------------------------------------ */}
        {/* ------------------------------------ */}
      </div>
      {/* part twoooooooooooo in card */}
      <div className="all card flex mt-[5rem] ml-[5rem]">
        {/* ----------------------------- */}
        {/* ----------------------------- */}
        <div
          className="card  w-[20%] ml-[2rem]"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="max-w-[240px] m-auto mt-[5px] transform hover:rotate-x-[9deg]  rotate-y-[9deg] scale-1.05 duration-300"
            src={img23}
          />
          <div className="card-body">
            <h5 className="text-center mb-[9px] text-[20px]">Liberté</h5>
            <p className="text-center mb-[9px]">
              This striking contemporary sculpture by Carole Belurier, aka
            </p>
            <button className=" border rounded w-[50%] p-[3px] ml-[3.6rem] mb-[9px] transform hover:rotate-x-[9deg]  rotate-y-[9deg] scale-1.05 duration-300 hover:bg-[linear-gradient(135deg,#1a2a6c,#3ff,#67ed)] hover:text-white ">
              See More
            </button>
          </div>
        </div>
        {/* ----------------------------- */}
        {/* ----------------------------- */}
        <div
          className="card w-[20%] ml-[2rem]"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="max-w-[240px] m-auto mt-[5px] transform hover:rotate-x-[9deg]  rotate-y-[9deg] scale-1.05 duration-300"
            src={img24}
          />
          <div className="card-body">
            <h5 className="text-center mb-[9px] text-[20px]">
              Natural concrete
            </h5>
            <p className="text-center mb-[9px]">
              expression, accentuated by pink and white facial markings
            </p>
            <button className=" border rounded w-[50%] p-[3px] ml-[3.6rem] mb-[9px] transform hover:rotate-x-[9deg]  rotate-y-[9deg] scale-1.05 duration-300 hover:bg-[linear-gradient(135deg,#1a2a6c,#3ff,#67ed)] hover:text-white ">
              See More
            </button>
          </div>
        </div>
        {/* ----------------------------- */}
        {/* ----------------------------- */}
        <div
          className="card w-[20%] ml-[2rem]"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="max-w-[240px] m-auto mt-[5px] transform hover:rotate-x-[9deg]  rotate-y-[9deg] scale-1.05 duration-300"
            src={img25}
          />
          <div className="card-body">
            <h5 className="text-center mb-[9px] text-[20px]">Stone Woman</h5>
            <p className="text-center mb-[9px]">
              The artwork is available for pickup at BelArt Gallery
            </p>
            <button className=" border rounded w-[50%] p-[3px] ml-[3.6rem] mb-[9px] transform hover:rotate-x-[9deg]  rotate-y-[9deg] scale-1.05 duration-300 hover:bg-[linear-gradient(135deg,#1a2a6c,#3ff,#67ed)] hover:text-white ">
              See More
            </button>
          </div>
        </div>
        {/* ----------------------------- */}
        {/* ----------------------------- */}
        <div
          className="card w-[20%] ml-[2rem]"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            className="max-w-[240px] m-auto mt-[5px] transform hover:rotate-x-[9deg]  rotate-y-[9deg] scale-1.05 duration-300"
            src={img26}
          />
          <div className="card-body">
            <h5 className="text-center mb-[9px] text-[20px]">
              The girl in red
            </h5>
            <p className="text-center mb-[9px]">
              This striking artwork features a bold portrait of a female
            </p>
            <button className=" border rounded w-[50%] p-[3px] ml-[3.6rem] mb-[9px] transform hover:rotate-x-[9deg]  rotate-y-[9deg] scale-1.05 duration-300 hover:bg-[linear-gradient(135deg,#1a2a6c,#3ff,#67ed)] hover:text-white ">
              See More
            </button>
          </div>
        </div>
        {/* ------------------------------------ */}
        {/* ------------------------------------ */}
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default homepage;
