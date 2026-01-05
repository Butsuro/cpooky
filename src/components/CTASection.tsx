import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-32 bg-card noise-overlay relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-display text-[20vw] text-foreground/[0.03] tracking-widest whitespace-nowrap">
          CPOOKY
        </span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl lg:text-8xl text-foreground mb-6 tracking-wider leading-none">
            Ready to<br />Disappear?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-xl mx-auto">
            Stop hitting snooze. Start building discipline. Join a brotherhood 
            that runs after Fajr and wins the day before it begins.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="minimal" 
              size="xl" 
              className="gap-3"
              onClick={() => window.open('https://l.instagram.com/?u=https%3A%2F%2Fchat.whatsapp.com%2FFUX8CdTF4TvCNhc9YWWUjj%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnOGMrt_G33hCrmBMxnroLPyX6j7IaOruNJHkAdIA8D4oJDAPxfoVCWD-6Z-E_aem_38kcULN07sqQKi5HJtBdhA&e=AT3wXU6JxfN_Yj0Kc7a8LZ0ZeVGPVpjdmbaegfl3x8sYy4EnaQ3P29oljqenzymY_N8zKdRk04TVoTIM2JtReEu2dT7uZ_0o4Va5u0eb_wEG3ZydoBMTm3RIBw', '_blank')}
            >
              Join via WhatsApp
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="minimalOutline" 
              size="xl" 
              className="gap-3"
              onClick={() => window.open('https://instagram.com/ccpooky', '_blank')}
            >
              <Instagram className="w-5 h-5" />
              Follow Us
            </Button>
          </div>

          {/* Trust Line */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs text-muted-foreground uppercase tracking-[0.2em]">
            <span>Free to Join</span>
            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span>All Levels</span>
            <span className="w-1 h-1 bg-muted-foreground rounded-full" />
            <span>Merch Soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;