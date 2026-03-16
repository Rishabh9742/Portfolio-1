export function Hero() {
  return (
    <section className="bg-[#1a2744] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="w-24 h-24 mb-4">
          <img
            src="/images/avatar.jpg"
            alt="Pete's avatar"
            className="w-full h-full rounded-full object-cover border-2 border-[#374151]"
          />
        </div>
        <p className="text-[#f1f5f9] text-sm mb-6">Hello, I am Pete!</p>
        <h1 className="text-[#f1f5f9] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-balance">
          A frontend developer
          <br />
          specialised in React
        </h1>
      </div>
    </section>
  )
}
