import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Settings, UserRoundCog, BadgeCheck, Badge } from "lucide-react";

export default function Features() {
  return (
    <>
      <div className="mx-4 md:mx-10 my-10 md:my-20">
        <p className="font-bold text-xl md:text-3xl">
          Explore Premium Features
        </p>
        <p className="text-neutral-500 text-sm md:text-lg m-2">
          We provide ESG services, focusing on sustainable growth, transparent
          compliance, <br /> and proactive stakeholder engagement.
        </p>
        <div className="flex flex-col md:flex-row justify-center my-10">
          <Card className="w-full md:w-[20%] md:mx-5 px-2 py-2 md:py-5 my-2">
            <CardHeader className="relative mx-5 mt-5 bg-cyan-200/50 rounded-full h-8 w-8">
              <Settings className="absolute -translate-x-5 -translate-y-2 h-8 w-8" />
            </CardHeader>
            <CardBody className="mb-5">
              <p className="font-bold text-medium md:text-xl my-2">
                Strategy Development
              </p>
              <p className="text-sm md:text-medium text-neutral-500">
                {" "}
                Craft sustainable business growth strategies.{" "}
              </p>
            </CardBody>
          </Card>
          <Card className="w-full md:w-[20%] md:mx-5 px-2 py-2 md:py-5 my-2">
            <CardHeader className="relative mx-5 mt-5 bg-orange-300/50 rounded-full h-8 w-8">
              <UserRoundCog className="absolute -translate-x-5 -translate-y-2 h-8 w-8" />
            </CardHeader>
            <CardBody className="mb-5">
              <p className="font-bold text-medium md:text-xl my-2">
                Stakeholder Engagement
              </p>
              <p className="text-sm md:text-medium text-neutral-500">
                {" "}
                Foster proactive communication for positive impact.{" "}
              </p>
            </CardBody>
          </Card>
          <Card className="w-full md:w-[20%] md:mx-5 px-2 py-2 md:py-5 my-2">
            <CardHeader className="relative mx-5 mt-5 bg-pink-300/50 rounded-full h-8 w-8">
              <BadgeCheck className="absolute -translate-x-5 -translate-y-2 h-8 w-8" />
            </CardHeader>
            <CardBody className="mb-5">
              <p className="font-bold text-medium md:text-xl my-2">
                ESG Reporting and Disclosure
              </p>
              <p className="text-sm md:text-medium text-neutral-500">
                {" "}
                Ensure transparent compliance and accountability.{" "}
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}
