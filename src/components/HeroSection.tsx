import { Button } from "@/components/ui/button";
import { MessageSquare, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Left Scrolling Images */}
      <div className="absolute left-0 top-0 h-full w-48 md:w-48 lg:w-64 pointer-events-none overflow-hidden">
        <div className="relative h-full">
          {/* Fade overlay - top and bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          
          {/* Scrolling container - scrolls DOWN */}
          <div className="hidden lg:visible sm:block absolute left-0 top-0 w-full animate-scroll-down">
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            {/* Duplicate set for seamless loop */}
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
          </div>
        </div>
      </div>

      {/* Right Scrolling Images */}
      <div className="absolute right-0 top-0 h-full w-48 md:w-48 lg:w-64 pointer-events-none overflow-hidden">
        <div className="relative h-full">
          {/* Fade overlay - top and bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10" />
          
          {/* Scrolling container - scrolls UP */}
          <div className="hidden sm:block absolute right-0 top-0 w-full animate-scroll-up">
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            {/* Duplicate set for seamless loop */}
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
            <img src="/src/assets/heroPattern.png" alt="" className="w-full block opacity-60" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Member Badge */}
          <div className="mt-6 font-[Poppins] inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-[#95E402] to-[#FF8914] text-black font-bold text-sm">
            ✨ 2.5k+ Brothers
          </div>
          
          {/* Logo/Brand */}
          <div className="mb-4">
            <h1 className="font-ahsing text-[6rem] md:text-[9rem] lg:text-[12rem] leading-none tracking-wider text-white font-thin"
                 style={{
                   textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2), 0 0 40px rgba(147, 51, 234, 0.3)'
                 }}>
              CPKY
            </h1>
          </div>
          
          {/* Tagline */}
          <p className="text-2xl md:text-3xl text-gray-400 mb-8 font-[Poppins] font-light tracking-widest">
            The art of Disappearing
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <Button 
              size="lg"
              className="bg-[#2C2C2C] hover:bg-gray-700 text-white rounded-3xl px-4 py-7 text-3xs gap-3 font-[Poppins] font-light"
              onClick={() => window.open('https://chat.whatsapp.com/FUX8CdTF4TvCNhc9YWWUjj', '_blank')}
            >
              <MessageSquare className="w-5 h-5" />
              Join Brotherhood
            </Button>
          </div>

          {/* Social Link */}
          <button 
            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white hover:bg-gray-400 border border-gray-400 transition-colors"
            onClick={() => window.open('https://instagram.com/ccpooky', '_blank')}
          >
            <Instagram className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>

      <style jsx>{`
        @keyframes scroll-down {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-up {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0%);
          }
        }

        .animate-scroll-down {
          animation: scroll-down 15s linear infinite;
        }

        .animate-scroll-up {
          animation: scroll-up 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;