import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-display text-3xl tracking-widest text-foreground mb-2">
              CPKY
            </h3>
            <p className="text-xs text-muted-foreground uppercase tracking-[0.3em]">
              The Art of Disappearing
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-xs uppercase tracking-[0.2em]">
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors">
              Community
            </a>
            <a href="#join" className="text-muted-foreground hover:text-foreground transition-colors">
              Join
            </a>
          </div>

          {/* Social */}
          <a 
            href="https://instagram.com/ccpooky" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em]">
            © 2025 Cpooky · Faith · Discipline · Brotherhood
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;