import Image from "next/image";
import Navbar from "./components/Navbar";
import Body from "./components/Body"
export default function Home() {
  return (
    <div
      className="min-h-screen grid lg:grid-cols-2   p-10  lg:py-24 lg:px-36 overflow-hidden  text-white bg-[#2B2C30]"
      // style={{
      //   backgroundImage: `url("/images/a.png")`,
      //   backgroundSize: "contain",
      // }}
    >
      <div className="">
        <Navbar />
      </div>

      <div className="">
        <Body />
      </div>
    </div>
  );
}
//[#202124]