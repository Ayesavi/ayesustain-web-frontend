import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Assess from "./pages/Assess";
import Assess2 from "./pages/Assess2";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="text-5xl text-neutral-700 text-center p-4">
      <Hero />
      <Divider className="my-10 w-[75%] mx-auto" />
      <Features />
      <Assess />
      <Assess2 />
    </div>
  );
}
