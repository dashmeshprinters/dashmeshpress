import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import weddingCards from '@/assets/wedding-cards.jpg';

const WeddingCards = () => {
  const features = [
    'Custom Design Consultation',
    'Premium Paper Options',
    'Gold Foil Printing',
    'Embossing & Debossing',
    'Multiple Format Options',
    'RSVP Card Printing',
    'Envelope Customization',
    'Fast Turnaround Time'
  ];



  return (
    <div>
      {/* Hero Section */}
      <section className="relative gradient-hero text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-transparent bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text">Wedding Cards</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Create beautiful wedding invitations that reflect your love story and set the perfect tone for your special day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent-light px-8 py-4 rounded-xl font-semibold text-lg">
                    Get Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={weddingCards}
                alt="Wedding Cards"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose Our <span className="text-gradient">Wedding Cards?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every detail matters when it comes to your wedding invitations. We ensure perfection in every card.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="card-elegant text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-pink-600 via-rose-600 to-pink-700 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Create Your Perfect Wedding Cards?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Let's work together to create wedding invitations that perfectly capture your love story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-xl font-semibold text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingCards;