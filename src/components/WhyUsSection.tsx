const MerchSection = () => {
  return (
    <section className="min-h-screen bg-black relative flex items-center overflow-hidden">

      <div className="w-full py-2">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4">
          {/* Left Content */}
          <div className="relative space-y-8">
            {/* Diamond shape behind text - half off screen */}
            
            <div className="relative space-y-1">
              <p className="text-white/60 text-sm tracking-wider uppercase">
                Coming soon
              </p>
              
              {/* CPOOKY Logo Image */}
              <div className="">
                <img 
                  src="/assets/cpooky.png" 
                  alt="CPKY"
                  className="w-80 h-34 -ml-4"
                />
                <h1 className="mt-0 pb-20 text-7xl md:text-8xl font-serif text-white tracking-tight ml-10">
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