import Image from "next/image";
import Navbar from "./components/Navbar";
import Body from "./components/Body"
export default function Home() {
  return (
    <>
      <main className="grid lg:grid-cols-2  bg-[#e2e2e2]">
        <Navbar />
        <Body/>
      </main>
    </>
  );
}
