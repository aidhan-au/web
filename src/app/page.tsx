import Link from "next/link";
import Hero from "@/components/hero";
import Icon from "@/components/micro/icon";

export default function Index() {
  return (
    <main className="text-sm lg:text-base 2xl:text-lg">
      <Hero>
        <span className="">
          <h1 className="px-4 font-serif text-4xl font-bold italic tracking-tight text-teal-700 lg:text-5xl xl:text-6xl">
            We help businesses{" "}
            <em className="text-teal-600 underline decoration-4 underline-offset-4">
              thrive
            </em>{" "}
            online.
          </h1>
        </span>
      </Hero>

      <section className="overflow-x-auto bg-neutral-100 text-neutral-700">
        <div className="container mx-auto flex items-center justify-between text-center">
          <div className="p-3 hover:bg-teal-500 hover:text-white lg:p-4 xl:p-5 2xl:p-6">
            <h2 className="font-medium tracking-tight">
              <Icon
                className="mb-1 inline-block lg:mr-2 xl:mr-3 2xl:mr-4"
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
              Design
            </h2>
          </div>
          <div className="p-3 hover:bg-cyan-500 hover:text-white lg:p-4 xl:p-5 2xl:p-6">
            <h2 className="font-medium tracking-tight">
              <Icon
                className="mb-1 inline-block lg:mr-2 xl:mr-3 2xl:mr-4"
                label="Development"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M10 12h-1v5h1"></path>
                <path d="M14 12h1v5h-1"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
              </Icon>
              Development
            </h2>
          </div>
          <div className="p-3 hover:bg-sky-500 hover:text-white lg:p-4 xl:p-5 2xl:p-6">
            <h2 className="font-medium tracking-tight">
              <Icon
                className="mb-1 inline-block lg:mr-2 xl:mr-3 2xl:mr-4"
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
          </div>
          <div className="p-3 hover:bg-blue-500 hover:text-white lg:p-4 xl:p-5 2xl:p-6">
            <h2 className="font-medium tracking-tight">
              <Icon
                className="mb-1 inline-block lg:mr-2 xl:mr-3 2xl:mr-4"
                label="Marketing"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M11 3h10v8h-3l-4 2v-2h-3z"></path>
                <path d="M15 16v4a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1h2"></path>
                <path d="M10 18v.01"></path>
              </Icon>
              Marketing
            </h2>
          </div>
          <div className="p-3 hover:bg-violet-500 hover:text-white lg:p-4 xl:p-5 2xl:p-6">
            <h2 className="font-medium tracking-tight">
              <Icon
                className="mb-1 inline-block lg:mr-2 xl:mr-3 2xl:mr-4"
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
          </div>
          <div className="p-3 hover:bg-fuchsia-500 hover:text-white lg:p-4 xl:p-5 2xl:p-6">
            <h2 className="font-medium tracking-tight">
              <Icon
                className="mb-1 inline-block lg:mr-2 xl:mr-3 2xl:mr-4"
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
          </div>
          <div className="p-3 hover:bg-pink-500 hover:text-white lg:p-4 xl:p-5 2xl:p-6">
            <h2 className="font-medium tracking-tight">
              <Icon
                className="mb-1 inline-block lg:mr-2 xl:mr-3 2xl:mr-4"
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
          </div>
        </div>
      </section>
      <section className="w-full bg-teal-100 text-neutral-700">
        <div className="flex">
          <div className="h-full w-48 bg-teal-200 p-4 lg:w-72 lg:p-8 xl:w-96 xl:p-12">
            <h2 className="pr-2 text-3xl font-bold tracking-tighter lg:pr-6 lg:text-4xl xl:pr-8 xl:text-5xl">
              <Link href="/services/design">Design</Link>
            </h2>
            <ul className="mx-1 my-2 border-l-2 border-neutral-600 font-medium tracking-tight lg:mx-2 lg:my-4 xl:mx-3 xl:my-6">
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                <Link href="#design-responsive">Responsive</Link>
              </li>
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Engaging
              </li>
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Contemporary
              </li>
            </ul>
          </div>
          <div className="container mx-auto p-4 lg:p-8 xl:p-12">
            <div id="design-responsive">
              {/* On - any - surface - acress a phone, desktop and magazine/print */}
              Responsive design drives customer response. Now that&rsquo;s what
              we mean by responsive.
            </div>
            <div id="design-engaging">Engaging</div>
            <div id="design-"></div>
          </div>
        </div>
      </section>
      <section className="w-full bg-cyan-100 text-neutral-700">
        <div className="flex">
          <div className="h-fullw-48 bg-cyan-200 p-4 lg:w-72 lg:p-8 xl:w-96 xl:p-12">
            <h2 className="pr-2 text-3xl font-bold tracking-tighter lg:pr-6 lg:text-4xl xl:pr-8 xl:text-5xl">
              <Link href="/services/development">Development</Link>
            </h2>
            <ul className="mx-1 my-2 border-l-2 border-neutral-600 font-medium tracking-tight lg:mx-2 lg:my-4 xl:mx-3 xl:my-6">
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Responsive
              </li>
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Engaging
              </li>
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Contemporary
              </li>
            </ul>
          </div>
          <div className="container mx-auto p-12">dsfs</div>
        </div>
      </section>
      <section className="w-full bg-sky-100 text-neutral-700">
        <div className="flex">
          <div className="h-fullw-48 bg-sky-200 p-4 lg:w-72 lg:p-8 xl:w-96 xl:p-12">
            <h2 className="pr-2 text-3xl font-bold tracking-tighter lg:pr-6 lg:text-4xl xl:pr-8 xl:text-5xl">
              <Link href="/services/brand">Brand</Link>
            </h2>
            <ul className="mx-1 my-2 border-l-2 border-neutral-600 font-medium tracking-tight lg:mx-2 lg:my-4 xl:mx-3 xl:my-6">
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Responsive
              </li>
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Engaging
              </li>
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Contemporary
              </li>
            </ul>
          </div>
          <div className="container mx-auto p-12">dsfs</div>
        </div>
      </section>
      <section className="w-full bg-blue-100 text-neutral-700">
        <div className="flex">
          <div className="h-fullw-48 bg-blue-200 p-4 lg:w-72 lg:p-8 xl:w-96 xl:p-12">
            <h2 className="pr-2 text-3xl font-bold tracking-tighter lg:pr-6 lg:text-4xl xl:pr-8 xl:text-5xl">
              <Link href="/services/marketing">Marketing</Link>
            </h2>
            <ul className="mx-1 my-2 border-l-2 border-neutral-600 font-medium tracking-tight lg:mx-2 lg:my-4 xl:mx-3 xl:my-6">
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Responsive
              </li>
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Engaging
              </li>
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Contemporary
              </li>
            </ul>
          </div>
          <div className="container mx-auto p-12">dsfs</div>
        </div>
      </section>

      <section className="w-full bg-violet-100 text-neutral-700">
        <div className="flex">
          <div className="h-fullw-48 bg-violet-200 p-4 lg:w-72 lg:p-8 xl:w-96 xl:p-12">
            <h2 className="pr-2 text-3xl font-bold tracking-tighter lg:pr-6 lg:text-4xl xl:pr-8 xl:text-5xl">
              <Link href="/services/content">Content</Link>
            </h2>
            <ul className="mx-1 my-2 border-l-2 border-neutral-600 font-medium tracking-tight lg:mx-2 lg:my-4 xl:mx-3 xl:my-6">
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Responsive
              </li>
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Engaging
              </li>
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Contemporary
              </li>
            </ul>
          </div>
          <div className="container mx-auto p-12">dsfs</div>
        </div>
      </section>

      <section className="w-full bg-fuchsia-100 text-neutral-700">
        <div className="flex">
          <div className="h-fullw-48 bg-fuchsia-200 p-4 lg:w-72 lg:p-8 xl:w-96 xl:p-12">
            <h2 className="pr-2 text-3xl font-bold tracking-tighter lg:pr-6 lg:text-4xl xl:pr-8 xl:text-5xl">
              <Link href="/services/strategy">Strategy</Link>
            </h2>
            <ul className="mx-1 my-2 border-l-2 border-neutral-600 font-medium tracking-tight lg:mx-2 lg:my-4 xl:mx-3 xl:my-6">
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Responsive
              </li>
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Engaging
              </li>
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Contemporary
              </li>
            </ul>
          </div>
          <div className="container mx-auto p-12">dsfs</div>
        </div>
      </section>

      <section className="w-full bg-pink-100 text-neutral-700">
        <div className="flex">
          <div className="h-fullw-48 bg-pink-200 p-4 lg:w-72 lg:p-8 xl:w-96 xl:p-12">
            <h2 className="pr-2 text-3xl font-bold tracking-tighter lg:pr-6 lg:text-4xl xl:pr-8 xl:text-5xl">
              <Link href="/services/infrastructure">Infrastructure</Link>
            </h2>
            <ul className="mx-1 my-2 border-l-2 border-neutral-600 font-medium tracking-tight lg:mx-2 lg:my-4 xl:mx-3 xl:my-6">
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Responsive
              </li>
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Engaging
              </li>
              <li className="border-l-2 border-transparent px-4 py-2 hover:border-neutral-600 lg:px-6 lg:py-3 xl:px-8 xl:py-4">
                Contemporary
              </li>
            </ul>
          </div>
          <div className="container mx-auto p-12">dsfs</div>
        </div>
      </section>
    </main>
  );
}
