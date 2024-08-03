import Image from "next/image";
import Navbar from "./components/Navbar";
import Body from "./components/Body"
export default function Home() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-[#e2e2e2] p-10  lg:py-24 overflow-hidden">
      <Navbar />
      <main>
        <Body />
      </main>
    </div>
  );
}
