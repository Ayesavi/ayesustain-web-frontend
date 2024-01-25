import Image from "next/image";

export default function Roadmaps() {
  return (
    <section className="my-16 mx-[10%]">
      <p className="text-3xl font-bold my-3">Roadmaps</p>
      <p className="text-medium text-neutral-500 my-3">
        We provide ESG services, focusing on sustainable growth, transparent
        compliance, <br /> and proactive stakeholder engagement.
      </p>
      <div className="grid grid-cols-9 my-10">

        <div className="col-span-4 flex place-content-center">
          <div className="flex flex-col place-content-center mx-4">
            <p className="text-xl">Optimization</p>
            <p className="text-neutral-500 text-medium">
              Elevate ESG tool efficiency with AyeSustain&apos;s expert
              assessment.
            </p>
          </div>
        </div>
        <div className="col-span-1 w-full h-full flex place-content-center relative">
          <div className="h-full flex w-full absolute top-0 justify-center">
            <span className="w-4 h-4 rounded-t-full absoulte bg-primary/75"/>
          </div>
          <span className="w-1 h-full border-2" />
          <div className="flex h-full items-center absolute left-1">
            <span className="w-4 h-4 rounded-full bg-primary/75" />
            <span className="w-16 h-1 border-2" />
          </div>
        </div>
        <div className="col-span-4 flex place-content-center">
          <Image src="/images/timeline-1.png" alt="" height={1} width={500} />
        </div>


        <div className="col-span-4 flex place-content-center">
          <Image src="/images/timeline-1.png" alt="" height={1} width={500} />
        </div>
        <div className="col-span-1 w-full h-full flex place-content-center relative">
          <div className="flex h-full items-center absolute right-1">
            <span className="w-16 h-1 border-2" />
            <span className="w-4 h-4 rounded-full bg-primary/75" />
          </div>
          <div className="h-full w-1 border-2"></div>
        </div>
        <div className="col-span-4 flex place-content-center">
          <div className="flex flex-col place-content-center mx-4">
            <p className="text-xl">Optimization</p>
            <p className="text-neutral-500 text-medium">
              Elevate ESG tool efficiency with AyeSustain&apos;s expert
              assessment.
            </p>
          </div>
        </div>


        <div className="col-span-4 flex place-content-center">
          <div className="flex flex-col place-content-center mx-4">
            <p className="text-xl">Optimization</p>
            <p className="text-neutral-500 text-medium">
              Elevate ESG tool efficiency with AyeSustain&apos;s expert
              assessment.
            </p>
          </div>
        </div>
        <div className="col-span-1 w-full h-full flex place-content-center relative">
          <div className="flex h-full items-center absolute left-1">
            <span className="w-4 h-4 rounded-full bg-primary/75" />
            <span className="w-16 h-1 border-2" />
          </div>
          <div className="h-full w-1 border-2"></div>
        </div>
        <div className="col-span-4 flex place-content-center">
          <Image src="/images/timeline-1.png" alt="" height={1} width={500} />
        </div>


        <div className="col-span-4 flex place-content-center">
          <Image src="/images/timeline-1.png" alt="" height={1} width={500} />
        </div>
        <div className="col-span-1 w-full h-full flex place-content-center relative">
          <span className="w-1 h-full border-2" />
          <div className="flex h-full items-center absolute right-1">
            <span className="w-16 h-1 border-2" />
            <span className="w-4 h-4 rounded-full bg-primary/75" />
          </div>
          <div className="h-full flex w-full absolute top-0 justify-center items-end">
            <span className="w-4 h-4 rounded-b-full absoulte bg-primary/75"/>
          </div>
        </div>

        <div className="col-span-4 flex place-content-center">
          <div className="flex flex-col place-content-center mx-4">
            <p className="text-xl">Optimization</p>
            <p className="text-neutral-500 text-medium">
              Elevate ESG tool efficiency with AyeSustain&apos;s expert
              assessment.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
