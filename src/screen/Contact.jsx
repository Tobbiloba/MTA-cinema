import { Fragment, useState } from "react";
import Menu from "../components/Menu";
import background from "../assets/movie-02.jpg";
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


const data = [
  {
    id: 1,
    question: "Vivamus suscipit tortor eget felis porttitor?",
    answer: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet q"
},
{
    id: 2,
    question: "Donec sollicitudin molestie malesuada?",
    answer: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet q"
},
{
    id: 3,
    question: "Donec sollicitudin molestie malesuada?",
    answer: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet q"
},
{
    id: 4,
    question: "Consectetur adipiscing lorem ipsum elit?",
    answer: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet q"
},
{
    id: 5,
    question: "Vivamus suscipit tortor eget felis porttitor?",
    answer: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet q"
}

]

const Contact = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };


  return (
    <div>
      <Menu />

      <div
        className=" top-0 w-[100vw] overflow-x-hidden z-0 md:flex h-[65rem] md:h-[55rem] justify-end items-end"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2019/12/theater-02.jpg)`,
          objectFit: "cover",
          backgroundSize: "cover",
        }}
      >
        <div className="w-[100%] font-mono md:w-[60%] md:px-[7.5%] md:min-w-[42.5rem] bg-black h-fit md:h-[100%] flex flex-col p-16">
          <p className="text-red-500 font-[600]">CONTACT</p>
          <h1 className="mt-6 text-6xl font-mono font-[500]">
            CONTACT <span className="font-[600]">US</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
            <div>
              <p className="text-purple-500 text-[14px] font-[600]">PHONE</p>
              <h1 className="mt-3 font-[600] text-[16px]">(245) 352-6258</h1>
            </div>
            <div>
              <p className="text-purple-500 text-[14px] font-[600]">ADDRESS</p>
              <h1 className="mt-3 font-[600] text-[16px]">
                58734 Extra Rd. #123 San <br />
                Francisco, CA 96120.
              </h1>
            </div>
            <div>
              <p className="text-purple-500 text-[14px] font-[600]">EMAIL</p>
              <h1 className="mt-3 font-[600] text-[16px]">
                hello@divtheater.com
              </h1>
            </div>
          </div>

          <div className="border-purple-800 border-solid border-4 mt-12 px-4 py-7">
            <div className="flex flex-col md:flex-row gap-4">
              <input placeholder="Name" className="w-[100%] px-2 py-4" />
              <input placeholder="Email" className="w-[100%] px-2" />
            </div>
            <textarea
              placeholder="Message"
              className="w-[100%] mt-5 px-2 py-4 h-[10rem] flex"
            />

            <div className="mt-6 flex items-end justify-end">
              <button className="border px-8 py-3"> SUBMIT</button>
            </div>
          </div>
        </div>
      </div>

      <div
        className=" top-0 w-[100vw] px-[1rem]  pb-6 md:px-[10%] z-0  h-[32rem] justify-center items-center text-center font-mono"
        style={{
          backgroundImage: `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.4) 100%), url('https://ali.sandbox.etdevs.com/divi/wp-content/uploads/sites/2/2019/09/movie-05.jpg)`,
          objectFit: "cover",
          backgroundSize: "cover",
        }}
      >

        {/* <div className="container"></div> */}
        {/*  */}
        <p className="text-red-600 text-[18px] font-[600]">REFUNDS</p>

        <h1 className="mt-4 text-6xl">Get a Refund</h1>

        <p className="text-center text-gray-500 mt-4">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
          <br />
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit.
        </p>

        <button className="border mt-10 px-8 py-4">REQUEST</button>
      </div>

      <div className=" overflow-hiddeen px-[1rem] md:px-[10%] py-16 bg-black">

      <p className="text-red-600 text-[18px] font-[600] text-center">FAQ</p>

<h1 className="mt-4 text-6xl text-center my-4">Search For Answers</h1>
        <div className="flex items-center justify-center">
          <input placeholder="SEARCH" className="bg-black border mt-4 px-2 py-2 text-[15px]"/>
        </div>


        <div className="mt-6  container mx-auto ">
           <Fragment>
          <div className="w-[100%] flex items-center flex-col justify-center">
            {data.map((item) => {
              return (

                <Accordion open={open === item.id} className="w-[100%] max-w-[55rem]">
                  <AccordionHeader onClick={() => handleOpen(item.id)} className="w-[100%]">
                    <h2 className="text-[16px] font-normal flex flex-row justify-between items-center bg-[#3B3837] px-5 py-3 w-[100%]">{item.question} <div className="bg-white h-4 w-4 flex items-center justify-center text-black rounded-xl">+</div></h2>
                  </AccordionHeader>
                  <AccordionBody className="leading-6 py-4 px-5 font-thin border-2 border-gray-200 border-b-gray-500 ">
                    {item.answer}
                  </AccordionBody>
                </Accordion>
              )
            })}
          </div>
        </Fragment>
        </div>

     

      </div>
      <div className="relative ">
        <Banner />
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
