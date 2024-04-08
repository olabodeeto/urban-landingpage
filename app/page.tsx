import Image from "next/image";
import Navbar from "./shared/components/navbar/navbar";

export default function Home() {
  return (
    <main>
      <div className="w-full min-h-[88vh] bg-green-800">
        <Navbar />
        <h1 className="text-5xl font-extralight text-custom-yellow">
          Creato Display
        </h1>
      </div>
      <section className="min-h-[40vh] bg-slate-200"></section>
    </main>
  );
}
