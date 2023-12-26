import React from "react";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import img2 from "../assets/coming1.jpg";
import img1 from "../assets/coming2.jpg";
import img3 from "../assets/coming3.jpg";
import Menu from "../components/Menu";
import background from "../assets/theater-02.jpg";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

const Membership = () => {
  return (
    <div className="bg-[#000000]">
      <div>
        <Menu />
      </div>
      <div
        className="flex  px-[3rem]  md:px-[12%] h-[25rem] md:h-[45rem]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${background})`,
          objectFit: "cover",
          backgroundSize: "cover",
        }}
      >
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">
            <p className="text-[#000000] mb-3 font-bold text-xl">
              THEATER PASSES
            </p>
            <h1 className="text-4xl md:text-8xl font-bold font-mono text-slate-100">
              <span className="font-thin"> ALL ACCESS </span> MOVIE PASSES
            </h1>
            <div className="flex justify-center">
              <button className="mt-8 bg-red-600 hover:bg-black text-xl font-bold px-7 py-3 rounded-md flex items-center gap-2 font-mono">
                <PermContactCalendarIcon className="w-6 h-6" />
                Join Today
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="three flex gap-[5rem] px-[15rem] ">
        <div className="border border-gray-500 border-solid border-4 mt-[3rem] md:w-[45%] md:mt-0 p-5">
          <h6 className="font-bold">Movie Go'er</h6>
          <p>
            Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus
            nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Donec
            rutrum congue leo eget malesuada. Donec sollicitudin molestie
            malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id
            enim.
          </p>
          <button className="border border-gray-500 border-solid border-2 mt-5 p-3 rounded hover:bg-[#6E42FF]  hover:border-none">
            Join today
          </button>
        </div>

        <div className="border border-purple-500 border-solid border-4 mt-[3rem] md:w-[45%] md:mt-0 p-5">
          <h6 className="font-bold">Family Pass</h6>
          <p>
            Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus
            nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Donec
            rutrum congue leo eget malesuada. Donec sollicitudin molestie
            malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id
            enim.
          </p>
          <button className="border border-purple-500 border-solid border-2  mt-5 p-3 rounded hover:bg-[#6E42FF]  hover:border-none">
            Join today
          </button>
        </div>
        <div className="border border-red-500 border-solid border-4 mt-[3rem] md:w-[45%] md:mt-0 p-5">
          <h6 className="font-bold">Movie Lover</h6>
          <p>
            Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus
            nibh. Vivamus suscipit tortor eget felis porttitor volutpat. Donec
            rutrum congue leo eget malesuada. Donec sollicitudin molestie
            malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id
            enim.
          </p>
          <button className="border border-red-500 border-solid border-2 mt-5 p-3 rounded hover:bg-[#6E42FF]  hover:border-none">
            Join Today
          </button>
        </div>
      </div>
      <div className="  gap-[5rem]  border border-purple-500 border-solid border-4 mt-[5rem] m-[15rem]">
        <div className="text-center pt-5">
          <p className="text-[#F9002B] mb-3 font-bold text-xl">MEMBERSHIP PERKS</p>
          <h1 className="text-4xl font-thin">Compare</h1>
        </div>
        <div>
          <div className="flex">
            <div className="mt-[3rem] md:w-[45%] md:mt-0 p-5">
              <h6 className="font-bold">MOVIE GO'ER</h6>
              <form>
                <input type="checkbox" id="checkbox1" name="checkbox1" />
                <label htmlFor="checkbox1">Sed Ut Perspicatis</label>
                <br />

                <input type="checkbox" id="checkbox2" name="checkbox2" />
                <label htmlFor="checkbox2">Lorem Ipsum</label>
                <br />

                <input type="checkbox" id="checkbox3" name="checkbox3" />
                <label htmlFor="checkbox3">Dolor Amet Sit</label>
                <br />

                <input type="checkbox" id="checkbox4" name="checkbox4" />
                <label htmlFor="checkbox4">Architector Vitae</label>
                <br />

                <input type="checkbox" id="checkbox5" name="checkbox5" />
                <label htmlFor="checkbox5">Dicta Sunt</label>
                <br />

                <input type="checkbox" id="checkbox6" name="checkbox6" />
                <label htmlFor="checkbox6">Quae Ab Illo</label>
                <br />
              </form>
              <button className="border border-gray-500 border-solid border-2 mt-5 p-3 rounded hover:bg-[#6E42FF]  hover:border-none">
                Join today
              </button>
            </div>
            <div className="mt-[3rem] md:w-[45%] md:mt-0 p-5">
              <h6 className="font-bold">FAMILY PASS</h6>
              <form>
                <input type="checkbox" id="checkbox1" name="checkbox1" />
                <label htmlFor="checkbox1">Sed Ut Perspicatis</label>
                <br />

                <input type="checkbox" id="checkbox2" name="checkbox2" />
                <label htmlFor="checkbox2">Lorem Ipsum</label>
                <br />

                <input type="checkbox" id="checkbox3" name="checkbox3" />
                <label htmlFor="checkbox3">Dolor Amet Sit</label>
                <br />

                <input type="checkbox" id="checkbox4" name="checkbox4" />
                <label htmlFor="checkbox4">Architector Vitae</label>
                <br />

                <input type="checkbox" id="checkbox5" name="checkbox5" />
                <label htmlFor="checkbox5">Dicta Sunt</label>
                <br />

                <input type="checkbox" id="checkbox6" name="checkbox6" />
                <label htmlFor="checkbox6">Quae Ab Illo</label>
                <br />
              </form>
              <button className="border border-purple-500 border-solid border-2  mt-5 p-3 rounded hover:bg-[#6E42FF]  hover:border-none">
                Join today
              </button>
            </div>
            <div className="mt-[3rem] md:w-[45%] md:mt-0 p-5">
              <h6 className="font-bold">MOVIE LOVER</h6>
              <form>
                <input type="checkbox" id="checkbox1" name="checkbox1" />
                <label htmlFor="checkbox1">Sed Ut Perspicatis</label>
                <br />

                <input type="checkbox" id="checkbox2" name="checkbox2" />
                <label htmlFor="checkbox2">Lorem Ipsum</label>
                <br />

                <input type="checkbox" id="checkbox3" name="checkbox3" />
                <label htmlFor="checkbox3">Dolor Amet Sit</label>
                <br />

                <input type="checkbox" id="checkbox4" name="checkbox4" />
                <label htmlFor="checkbox4">Architector Vitae</label>
                <br />

                <input type="checkbox" id="checkbox5" name="checkbox5" />
                <label htmlFor="checkbox5">Dicta Sunt</label>
                <br />

                <input type="checkbox" id="checkbox6" name="checkbox6" />
                <label htmlFor="checkbox6">Quae Ab Illo </label>
                <br />
              </form>
              <button className="border border-red-500 border-solid border-2 mt-5 p-3 rounded hover:bg-[#6E42FF]  hover:border-none">
                Join Today
              </button>
            </div>
            <div className="mt-[3rem] md:w-[45%] md:mt-0 p-5">
              <h6 className="font-bold">HOW IT WORKS</h6>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam saepe temporibus fugiat provident asperiores distinctio beatae. Perferendis amet beatae nemo.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Banner />
      </div>
      <div>
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
};

export default Membership;
