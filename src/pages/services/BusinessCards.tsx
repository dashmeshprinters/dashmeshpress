import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CreditCard, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import businessCards from '@/assets/business-cards.jpg';

const BusinessCards = () => {
  const features = [
    'Professional Design Service',
    'Premium Quality Paper',
    'Multiple Finish Options',
    'Quick Turnaround',
    'Bulk Order Discounts',
    'Logo Integration',
    'Contact Information Layout',
    'Digital Proof Before Print'
  ];



  return (
    <div>
      {/* Hero Section */}
      <section className="relative gradient-hero text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">Business Cards</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Make a lasting first impression with professionally designed business cards that represent your brand perfectly.
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
                src={businessCards}
                alt="Business Cards"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional <span className="text-gradient">Business Cards</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stand out from the competition with high-quality business cards that make a memorable impression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="card-elegant text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-white" />
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
      <section className="section-padding bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Order Your Business Cards?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get professional business cards that help you make a great first impression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessCards;