const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-black mb-6">
            <span className="text-gradient">ABOUT</span> HARAMAYA GYM
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Where champions are forged and limits are shattered. Located in Haramaya, Ethiopia, our state-of-the-art facility combines cutting-edge equipment with proven training methods.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="fade-in-left">
            <h3 className="text-3xl font-poppins font-bold mb-6 text-primary">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At Haramaya Gym, we believe that everyone has the potential to achieve greatness. Our mission is to provide you with the tools, knowledge, and support needed to transform not just your body, but your entire lifestyle.
            </p>
            
            <div className="space-y-4">
              {[
                "15,000+ sq ft of premium equipment",
                "Certified expert trainers with 10+ years experience",
                "Personalized workout and nutrition plans",
                "24/7 access for ultimate flexibility",
                "Supportive community of fitness enthusiasts"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full neon-glow"></div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-in-right">
            <div className="card-gradient rounded-2xl p-8 card-shadow">
              <h3 className="text-2xl font-poppins font-bold mb-6 text-center text-accent">
                What Sets Us Apart
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Access</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-accent mb-2">15</div>
                  <div className="text-sm text-muted-foreground">Expert Trainers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;