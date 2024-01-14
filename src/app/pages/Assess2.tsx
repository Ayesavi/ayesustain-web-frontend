import Image from "next/image";

export default function Assess2() {
  return (
    <>
      <div className="mx-[10%] h-[70vh] relative">
        <div className="flex justify-center items-center px-10">
          <div className="flex flex-col items-start text-left">
            <p className="text-3xl font-bold my-3">
              Assess your own ESG managing tool with AyeSustain
            </p>
            <p className="text-neutral-500 text-medium my-3">
              Discover tailored ESG services, from impact assessments to <br />
              responsibility frameworks, for sustainable success.
            </p>
            <div className="flex flex-col items-start my-4 py-4 pl-4 justify-start w-[30vw] rounded-xl border-2">
              <div className="flex items-center ">
                <div className="bg-primary/75 h-4 w-4 rounded-full mx-4"></div>
                <p className="text-2xl font-bold">Optimization</p>
              </div>
              <p className="text-neutral-500 text-lg ml-12">
                Elevate ESG tool efficiency with AyeSustain&apos;s <br /> expert
                assessment.
              </p>
            </div>
            <div className="flex flex-col items-start my-4 py-4 pl-4 justify-start w-[30vw] rounded-xl border-2">
              <div className="flex items-center ">
                <div className="bg-primary/75 h-4 w-4 rounded-full mx-4"></div>
                <p className="text-2xl font-bold">Comprehensive</p>
              </div>
              <p className="text-neutral-500 text-lg ml-12">
                Explore AyeSustain&apos;s tailored ESG services for <br />{" "}
                holistic, sustainable success.
              </p>
            </div>
          </div>
          <Image
            src="/images/home4.png"
            alt=""
            width={700}
            height={1}
            className="relative z-10"
          />
        </div>
      </div>
    </>
  );
}
