import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function VideoArticles() {
    return <section className="my-16 mx-[10%] flex flex-col place-content-center">
        <iframe className="rounded-xl col-span-3 self-center" width="1280" height="720" src="https://www.youtube.com/embed/AkbGz3CYvqE" title="Environmental, Social and Governance (ESG) | Overview and Framework" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" frameBorder="0" allowFullScreen />
        <div className="grid grid-cols-2 md:grid-cols-3 mx-16 my-10">
            <p className="md:col-span-2 text-left text-2xl my-6">Related Articles</p>
            <Link href='#' className="text-primary text-medium flex justify-end my-6">All Videos <ChevronRight /></Link>
            <iframe className="mx-3" width="425" height="240" src="https://www.youtube.com/embed/f_rrS-_giP8" title="ESG Ratings Are Not What They Seem" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <iframe className="mx-3" width="425" height="240" src="https://www.youtube.com/embed/OT3gsCbCKdI" title="Sustainability 101: ESG Reporting" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            <iframe className="mx-3" width="425" height="240" src="https://www.youtube.com/embed/Q48jat0B8K4" title="Environment, Social Governance ESG Report | Importance of ESG for Companies in India | Enterclimate" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
    </section>;
}