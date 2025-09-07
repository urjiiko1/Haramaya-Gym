import { Button } from "@/components/ui/button";
import heroImage from "@/assets/haramaya-hero.png";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="fade-in-up">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-poppins font-black mb-6 leading-tight">
            <span className="text-foreground">START</span>{" "}
            <span className="text-gradient">TRAINING</span>{" "}
            <span className="text-foreground">NOW</span>
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
            Unleash your strength and start your fitness journey at Haramaya Gym. With top-quality equipment and an empowering environment, we're here to help you achieve every goal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('pricing')}
              className="text-lg px-12"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => scrollToSection('about')}
              className="text-lg px-12"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;