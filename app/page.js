import Image from "next/image";
import Navbar from "./components/Navbar";
import Body from "./components/Body"
export default function Home() {
  return (
    <>
      <main className="grid lg:grid-cols-2  bg-[#e2e2e2] p-10  lg:py-24">
        <Navbar className="fixed top-0 left-0" />
        <div>
          <Body />
        </div>
      </main>
    </>
  );
}
