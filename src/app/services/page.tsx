import Link from "next/link";
import Hero from "@/components/hero";
import Icon from "@/components/micro/icon";

export default function Index() {
  return (
    <main>
      <Hero>
        <h1 className="px-4 font-serif text-3xl font-semibold tracking-tight text-teal-700 lg:text-4xl xl:text-5xl">
          <div className="leading-snug">Web and digital services</div>
          <div className="leading-snug">for the here and now.</div>
        </h1>
      </Hero>

      <section className="overflow-x-auto bg-neutral-100 text-neutral-700">
        <div className="container flex items-center justify-center gap-2 mx-auto text-center md:gap-4 lg:gap-6 xl:gap-8">
          <a
            className="p-3 lg:p-4 xl:p-5 hover:bg-cyan-500 hover:text-white whitespace-nowrap"
            href="#design"
          >
            <h2 className="font-medium tracking-tight ">
              <Icon
                className="inline-block mb-1 mr-1 lg:mr-2 xl:mr-3 2xl:mr-4"
                label="Design"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4"></path>
                <path d="M13.5 6.5l4 4"></path>
              </Icon>
              Graphics design
            </h2>
          </a>
          <a
            className="p-3 lg:p-4 xl:p-5 hover:bg-sky-500 hover:text-white whitespace-nowrap"
            href="#development"
          >
            <h2 className="font-medium tracking-tight">
              <Icon
                className="inline-block mb-1 mr-1 lg:mr-2 xl:mr-3 2xl:mr-4"
                label="Development"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 12h-1v5h1"></path>
                <path d="M14 12h1v5h-1"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
              </Icon>
              Web development
            </h2>
          </a>

          <a
            className="p-3 lg:p-4 xl:p-5 hover:bg-violet-500 hover:text-white whitespace-nowrap"
            href="#infrastructure"
          >
            <h2 className="font-medium tracking-tight">
              <Icon
                className="inline-block mb-1 mr-1 lg:mr-2 xl:mr-3 2xl:mr-4"
                label="Infrastructure"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 9m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0"></path>
                <path d="M12 3c1.333 .333 2 2.333 2 6s-.667 5.667 -2 6"></path>
                <path d="M12 3c-1.333 .333 -2 2.333 -2 6s.667 5.667 2 6"></path>
                <path d="M6 9h12"></path>
                <path d="M3 19h7"></path>
                <path d="M14 19h7"></path>
                <path d="M12 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M12 15v2"></path>
              </Icon>
              Infrastructure
            </h2>
          </a>
        </div>

        {/* <div className="p-3 hover:bg-teal-500 hover:text-white lg:p-4 xl:p-5 2xl:p-6">
            <h2 className="font-medium tracking-tight">
              <Icon
                className="inline-block mb-1 mr-1 lg:mr-2 xl:mr-3 2xl:mr-4"
                label="Design"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M8 8m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"></path>
                <path d="M3 8l1 0"></path>
                <path d="M3 16l1 0"></path>
                <path d="M8 3l0 1"></path>
                <path d="M16 3l0 1"></path>
                <path d="M20 8l1 0"></path>
                <path d="M20 16l1 0"></path>
                <path d="M8 20l0 1"></path>
                <path d="M16 20l0 1"></path>
              </Icon>
              Graphics and design
            </h2>
          </div> */}
        {/* <div className="p-3 hover:bg-sky-500 hover:text-white lg:p-4 xl:p-5 2xl:p-6">
            <h2 className="font-medium tracking-tight">
              <Icon
                className="inline-block mb-1 mr-1 lg:mr-2 xl:mr-3 2xl:mr-4"
                label="Brand"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                <path d="M6 9h4"></path>
                <path d="M8 9v6"></path>
                <path d="M13 15v-6l2 3l2 -3v6"></path>
              </Icon>
              Brand
            </h2>
          </div> */}
        {/* <div className="p-3 hover:bg-blue-500 hover:text-white lg:p-4 xl:p-5 2xl:p-6">
            <h2 className="font-medium tracking-tight">
              <Icon
                className="inline-block mb-1 mr-1 lg:mr-2 xl:mr-3 2xl:mr-4"
                label="Marketing"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M11 3h10v8h-3l-4 2v-2h-3z"></path>
                <path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2"></path>
                <path d="M10 18v.01"></path>
              </Icon>
              Marketing
            </h2>
          </div> */}
        {/* <div className="p-3 hover:bg-violet-500 hover:text-white lg:p-4 xl:p-5 2xl:p-6">
            <h2 className="font-medium tracking-tight">
              <Icon
                className="inline-block mb-1 mr-1 lg:mr-2 xl:mr-3 2xl:mr-4"
                label="Content"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 12h6"></path>
                <path d="M9 16h6"></path>
              </Icon>
              Content
            </h2>
          </div> */}
        {/* <div className="p-3 hover:bg-fuchsia-500 hover:text-white lg:p-4 xl:p-5 2xl:p-6">
            <h2 className="font-medium tracking-tight">
              <Icon
                className="inline-block mb-1 mr-1 lg:mr-2 xl:mr-3 2xl:mr-4"
                label="Strategy"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
                <path d="M3 12h18"></path>
                <path d="M12 3v18"></path>
                <path d="M4 16l4 4"></path>
                <path d="M4 20l4 -4"></path>
                <path d="M16 4l4 4"></path>
                <path d="M16 8l4 -4"></path>
                <path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
              </Icon>
              Strategy
            </h2>
          </div> */}
      </section>
    </main>
  );
}
