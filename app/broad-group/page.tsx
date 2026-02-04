import { Metadata } from "next";
import bg from "@/public/images/bgbg.jpg";

export const metadata: Metadata = {
  title: "BROAD Group - Global Leader in Sustainable Technology | BROAD India",
  description:
    "Learn about BROAD Group, established in 1988, a pioneer in sustainable technology and energy-efficient solutions. Discover our commitment to original innovation and low-carbon technology for humanity's future.",
  keywords: [
    "BROAD Group",
    "sustainable technology",
    "low carbon technology",
    "energy efficient solutions",
    "original innovation",
    "green technology",
    "environmental solutions",
    "BROAD global",
  ],
  openGraph: {
    title:
      "BROAD Group - Global Leader in Sustainable Technology | BROAD India",
    description:
      "Learn about BROAD Group, established in 1988, a pioneer in sustainable technology and energy-efficient solutions.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "BROAD Group - Global Leader in Sustainable Technology | BROAD India",
    description:
      "Learn about BROAD Group, established in 1988, a pioneer in sustainable technology and energy-efficient solutions.",
  },
};

export default function BroadGroup() {
  return (
    <div>
      <div
        className="w-full h-[60vh] bg-cover bg-center bg-fixed flex justify-center items-center relative"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-start items-end p-10">
          <h1 className="text-5xl font-bold text-white">BROAD Group</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto my-20 px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p>
              BROAD Group is a privately held company that was established in
              1988 with RMB 30,000. Since its founding, the company has created
              hundreds of high-tech goods and has never imitated any of its
              competitors&quot; innovations. &quot;For Humanity&apos;s Future:
              Using Original Low Carbon & Durable Technology for the Earth&quot;
              is the mission statement of BROAD Group. employing innovative,
              human-safe, and clean technology. The BROAD Group, which has its
              headquarters in Changsha, exports its goods to more than 80
              nations.<br></br>
              <br></br>
              The following is a list of BROAD subsidiaries:
            </p>
            <ol className="list-decimal ml-5 mt-3 space-y-2">
              <li>
                Non-electric air conditioning systems are produced by BROAD Air
                Conditioning Co., Ltd.
              </li>
              <li>
                BROAD Clean Air Technology Co., Ltd. - Produces fresh air
                machines and air purifiers.
              </li>
              <li>
                Energy-efficient building retrofitting is the area of expertise
                for BROAD Nearly Zero Energy Building Co., Ltd.
              </li>
              <li>
                BROAD Energy Service Co., Ltd. - Provides energy consulting and
                management solutions.
              </li>
            </ol>
          </div>
          <div>
            <ol start={5} className="list-decimal ml-5 mt-3 space-y-2">
              <li>
                BROAD Renewable Resources Co., Ltd. uses waste resources to
                produce clean oil.
              </li>
              <li>
                BROAD Sustainable Building Co., Ltd. - Supplies ultra-strong and
                ultra-light B-CORE slabs.
              </li>
              <li>
                The B-CORE Holon buildings are manufactured in a plant by BROAD
                Holon Co., Ltd.
              </li>
              <li>
                BROAD Wind Power Co., Ltd. - Develops wind power generation
                systems.
              </li>
              <li>
                Bridges and elevated motorways are designed by BROAD B-CORE Road
                and Bridge Co., Ltd.
              </li>
              <li>
                BROAD Vacuum Loop Co., Ltd. - Works on high-speed vacuum
                transportation.
              </li>
            </ol>
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="https://en.broad.com" className="text-blue-600 font-semibold">
            Visit BROAD Group website
          </a>
        </div>
      </div>
    </div>
  );
}
