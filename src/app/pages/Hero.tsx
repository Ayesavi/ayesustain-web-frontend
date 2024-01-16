import Image from "next/image";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around h-[75dvh] md:h-[90dvh] mx-4 md:mx-10">
        <div className="block md:hidden my-3 relative">
          <Image
            src="/images/home1.png"
            alt="hero img"
            className="translate-x-[12%] md:translate-x-[6%] md:-translate-y-[20%]"
            width={500}
            height={1}
          />
          <Image
            src="/images/home2.png"
            alt="hero img"
            className="absolute top-3 -right-[5%] md:top-8 md:right-[12%]"
            width={700}
            height={1}
          />
        </div>
        <div className="flex flex-col justify-center items-start p-[5%] text-left">
          <p className="text-sm md:text-xl font-bold ">
            Sustainifying Your Vision
          </p>
          <p className="text-3xl md:text-5xl text-primary font-bold my-2 md:my-4">
            AyeSustain,
          </p>
          <p className="text-medium md:text-3xl my-1">
            Where Success Meets Sustainability
          </p>
          <p className="text-neutral-500 text-medium md:text-xl my-1">
            Unlock exponential ESG growth with AyeSustain, Amplify your impact
            and Elevate sustainability.
          </p>
          <div className="my-4 flex items-center">
            <Button className="bg-primary text-white md:text-lg p-6">
              <Link href="#">Book a Demo</Link>
            </Button>
            <Link
              href="#"
              className="mx-3 md:mx-5 text-sm md:text-lg flex justify-start text-primary align-center"
            >
              Learn More
              <ExternalLink className="translate-y-0.5 h-4 w-4 mx-1 md:mx-2 pointer-events-none" />
            </Link>
          </div>
        </div>
        <div className="hidden md:block relative">
          <Image
            src="/images/home1.png"
            alt="hero img"
            className="hidden md:block md:translate-x-[6%] md:-translate-y-[20%]"
            width={1200}
            height={1}
          />
          <Image
            src="/images/home2.png"
            alt="hero img"
            className="hidden md:block absolute md:top-8 md:right-[12%]"
            width={700}
            height={1}
          />
        </div>
      </div>
    </>
  );
}
