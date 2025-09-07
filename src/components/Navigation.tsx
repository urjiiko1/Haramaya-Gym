import { Button } from "@/components/ui/button";
import haramayaLogo from "@/assets/haramaya-logo.png";

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-glass border-b border-glow backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={haramayaLogo} alt="Haramaya Gym" className="h-10 w-10 mr-3" />
            <h1 className="text-2xl font-poppins font-black text-gradient">
              HARAMAYA GYM
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Pricing', id: 'pricing' },
                { name: 'Testimonials', id: 'testimonials' },
                { name: 'Contact', id: 'contact' },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-primary font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('pricing')}
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;