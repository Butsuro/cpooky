const MerchSection = () => {
  return (
    <section className="min-h-screen bg-black relative flex items-center overflow-hidden px-10">

      <div className="w-full py-1">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4">
          {/* Left Content */}
          <div className="relative space-y-8">            
            <div className=" relative space-y-1">
              <p className="text-white/60 text-sm tracking-wider md:pt-5">
                Coming soon
              </p>
              
              {/* CPOOKY Logo Image */}
              <div className="">
                <img 
                  src="/assets/cpooky.png" 
                  alt="CPKY"
                  className="w-80 h-34 -ml-4"
                />
                <h1 className="mt-0 pb-20 lg:text-7xl md:text-[3.2rem] sm:text-8xl font-serif text-white tracking-tight ml-10">
                  TANK TOP
                </h1>
              </div>

              <p className="text-white text-lg leading-relaxed max-w-md">
                Black CPOOKY Tank Top. Coming soon. Have sabr! First drop will be unforgettable.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Merch Image */}
            <img 
              src="/assets/merch.jpg" 
              alt="CPKY Tank Top"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchSection;