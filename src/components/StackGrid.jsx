export default function StackGrid() {
  const stackItems = [
    {
      index: '01',
      name: 'javascript',
      category: 'CORE LANGUAGE',
      detail: 'ES6+, Async runtime, closures, event loop & DOM APIs',
    },
    {
      index: '02',
      name: 'react',
      category: 'UI LIBRARY',
      detail: 'Component architecture, custom hooks, memoization & lifecycle',
    },
    {
      index: '03',
      name: 'react router',
      category: 'CLIENT ROUTING',
      detail: 'Nested routes, dynamic loaders, actions & layout trees',
    },
    {
      index: '04',
      name: 'redux',
      category: 'STATE MANAGEMENT',
      detail: 'Redux Toolkit, RTK Query, slice architecture & immutability',
    },
    {
      index: '05',
      name: 'next.js',
      category: 'HYBRID FRAMEWORK',
      detail: 'App Router, Server Components, SSR/SSG & edge deployments',
    },
    {
      index: '06',
      name: 'node.js',
      category: 'RUNTIME ENVIRONMENT',
      detail: 'Event-driven I/O, streams, file systems & microservices',
    },
    {
      index: '07',
      name: 'express',
      category: 'BACKEND SERVER',
      detail: 'RESTful API contracts, middleware pipelines & secure auth',
    },
    {
      index: '08',
      name: 'mongodb',
      category: 'NOSQL DATABASE',
      detail: 'Schema modeling with Mongoose, aggregation pipelines & indexing',
    },
    {
      index: '09',
      name: 'framer motion',
      category: 'INTERACTION / MOTION',
      detail: 'Restrained spring/expo physics, scroll parallax & layout shifts',
    },
    {
      index: '10',
      name: 'postman',
      category: 'API TOOLING',
      detail: 'Endpoint testing, automated test suites & mock environments',
    },
    {
      index: '11',
      name: 'dsa practice',
      category: 'PROBLEM SOLVING',
      detail: 'Regular algorithmic practice, complexity optimization & patterns',
    },
  ]

  return (
    <section id="stack" className="py-20 md:py-28 border-b border-[#E2DFD7]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between pb-8 border-b border-[#E2DFD7] mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono-label text-[11px] text-[#35604C]">03 — STACK</span>
            <span className="h-px w-8 bg-[#35604C]" />
            <h2 className="font-grotesk lowercase text-2xl sm:text-3xl font-medium text-[#111111]">
              technical capabilities & tools
            </h2>
          </div>
          <span className="font-mono-label text-[11px] text-[#767571] mt-2 sm:mt-0">
            TEXT-ONLY ARCHITECTURAL GRID · NO LOGOS
          </span>
        </div>

        {/* Text Grid with 1px border rules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#E2DFD7]">
          {stackItems.map((item) => (
            <div
              key={item.index}
              className="group p-6 sm:p-8 border-b border-r border-[#E2DFD7] hover:bg-[#F1EFEB] transition-colors duration-300 flex flex-col justify-between min-h-[190px]"
            >
              <div className="flex items-center justify-between font-mono-label text-[10px] text-[#767571]">
                <span className="text-[#35604C] font-semibold">{item.index}</span>
                <span className="tracking-[0.15em]">{item.category}</span>
              </div>

              <div className="my-4">
                <div className="font-grotesk lowercase text-2xl sm:text-3xl font-medium text-[#111111] group-hover:text-[#35604C] group-hover:translate-x-1 transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
                  {item.name}
                </div>
              </div>

              <div className="font-mono-label text-[10px] text-[#555450] tracking-normal leading-relaxed pt-2 border-t border-[#E2DFD7]/60">
                {item.detail}
              </div>
            </div>
          ))}

          {/* Complementary slot to complete grid aesthetics */}
          <div className="p-6 sm:p-8 border-b border-r border-[#E2DFD7] bg-[#F3F1EC] flex flex-col justify-between min-h-[190px]">
            <div className="font-mono-label text-[10px] text-[#767571]">
              <span className="text-[#35604C] font-semibold">12</span> / METHODOLOGY
            </div>
            <div className="font-grotesk lowercase text-xl font-medium text-[#111111]">
              clean architecture & conversion focus
            </div>
            <div className="font-mono-label text-[10px] text-[#767571]">
              10+ client deliverables shipped
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
