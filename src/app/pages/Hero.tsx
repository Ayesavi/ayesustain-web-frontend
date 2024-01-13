import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="flex justify-around h-[90dvh] mx-10">
        <div className="flex flex-col justify-center items-start p-[5%] text-left">
          <p className="text-xl font-bold ">Sustainifying Your Vision</p>
          <p className="text-primary font-bold my-4">AyeSustain,</p>
          <p className="text-3xl my-1">Where Success Meets Sustainability</p>
          <p className="text-neutral-500 text-xl my-1">
            Unlock exponential ESG growth with AyeSustain, Amplify your impact
            and Elevate sustainability.
          </p>
          <div className="my-4 flex items-center">
            <Button className="bg-primary text-white text-lg p-6">
              <Link href="#">Book a Demo</Link>
            </Button>
            <Link
              href="#"
              className="mx-5 text-lg flex text-primary align-center"
            >
              Learn More{" "}
              <ExternalLink className="translate-y-0.5 mx-2 pointer-events-none" />
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/images/home1.png"
            alt="hero img"
            className="translate-x-[6%] -translate-y-[20%]"
            width={1200}
            height={1}
          />
          <Image
            src="/images/home2.png"
            alt="hero img"
            className="absolute top-8 right-[12%]"
            width={700}
            height={1}
          />
        </div>
      </div>
    </>
  );
}
