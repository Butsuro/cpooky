import { Instagram, Heart, MessageCircle, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const InstagramSection = () => {
  // Mock Instagram posts data
  const posts = [
    {
      id: 1,
      image: "/src/assets/post1.png",
      likes: 234,
      caption: "Dawn runs hit different 🌅",
      comments: 12
    },
    {
      id: 2,
      image: "/src/assets/post2.png",
      likes: 189,
      caption: "Brotherhood over everything 💪",
      comments: 8
    },
    {
      id: 3,
      image: "/src/assets/post3.png",
      likes: 312,
      caption: "The art of disappearing ✨",
      comments: 15
    },
    {
      id: 4,
      image: "/src/assets/post4.png",
      likes: 276,
      caption: "Fajr gang 🏃‍♂️",
      comments: 20
    },
    {
      id: 5,
      image: "/src/assets/post5.png",
      likes: 198,
      caption: "Post-run vibes 🔥",
      comments: 9
    },
    {
      id: 6,
      image: "/src/assets/post6.png",
      likes: 245,
      caption: "All paces welcome 🤝",
      comments: 11
    }
  ];

  return (
    <section id="instagram" className="py-24 bg-black relative">
      {/* Neon Glow Orbs - Ambient Lighting */}
      <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[150px]" style={{ animation: 'pulse 4s ease-in-out infinite' }}></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/15 rounded-full blur-[140px]" style={{ animation: 'pulse 5s ease-in-out infinite', animationDelay: '1s' }}></div>
      <div className="absolute bottom-0 left-1/4 w-[550px] h-[550px] bg-pink-500/18 rounded-full blur-[160px]" style={{ animation: 'pulse 6s ease-in-out infinite', animationDelay: '2s' }}></div>
      <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[140px]" style={{ animation: 'pulse 5.5s ease-in-out infinite', animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/12 rounded-full blur-[130px]" style={{ animation: 'pulse 4.5s ease-in-out infinite', animationDelay: '0.5s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Instagram Profile Header */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-yellow-400 via-orange-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-black p-1">
                  <img
                    src="/src/assets/hero-bg.jpg"
                    alt="CPKY"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
                <h2 className="font-[Poppins] text-3xl text-white font-light">@ccpooky</h2>
                <Button
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold rounded-lg px-6"
                  onClick={() => window.open('https://instagram.com/ccpooky', '_blank')}
                >
                  Follow
                </Button>
              </div>
              

              {/* Stats */}
              <div className="flex gap-8 justify-center md:justify-start mb-4">
                <div className="text-center">
                  <div className="font-[Poppins] text-white font-semibold text-lg">10</div>
                  <div className="text-gray-400 text-sm">Posts</div>
                </div>
                <div className="text-center">
                  <div className="font-[Poppins] text-white font-semibold text-lg">2.7k</div>
                  <div className="text-gray-400 text-sm">Followers</div>
                </div>
                <div className="text-center">
                  <div className="font-[Poppins] text-white font-semibold text-lg">5</div>
                  <div className="text-gray-400 text-sm">Following</div>
                </div>
              </div>

              {/* Bio */}
              <div className="text-white font-[Poppins] mb-2">
                <p className="font-semibold mb-1">CPKY</p>
                <p className="text-gray-300 text-sm">The art of Disappearing 🏃‍♂️</p>
                <p className="text-gray-300 text-sm">Muslim run club</p>
                <p className="text-gray-300 text-sm">Deen over everything 💪</p>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className="aspect-square relative overflow-hidden cursor-pointer group"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => window.open('https://instagram.com/ccpooky', '_blank')}
              >
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Heart className="w-6 h-6 fill-white" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <MessageCircle className="w-6 h-6 fill-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/20 hover:border-white/40 rounded-full px-8 gap-3 font-[Poppins] transition-all"
              onClick={() => window.open('https://instagram.com/ccpooky', '_blank')}
            >
              <Instagram className="w-5 h-5" />
              View Full Profile on Instagram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;