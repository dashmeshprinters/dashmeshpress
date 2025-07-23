import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
  useEffect(() => {
    document.title = 'Terms of Service | Dashmesh Printers and Card Gallery';
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'Review the terms and conditions that govern your use of Dashmesh Printers and Card Gallery\'s services and website.');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container-max py-6">
          <div className="flex items-center">
            <Link to="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-max py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to Dashmesh Printers and Card Gallery. These Terms of Service ("Terms") govern your access to and use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Services</h2>
              <p className="text-gray-700 mb-4">
                Dashmesh Printers and Card Gallery provides professional printing services including but not limited to business cards, wedding cards, flex printing, and other related services (collectively, the "Services").
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Orders and Payment</h2>
              <p className="text-gray-700 mb-4">
                a. All orders are subject to acceptance and product availability.
                <br />
                b. Prices are subject to change without notice.
                <br />
                c. Payment is required before production begins unless otherwise agreed in writing.
                <br />
                d. We accept various payment methods as indicated on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                a. All content on our website, including text, graphics, logos, and images, is our property and protected by copyright laws.
                <br />
                b. By submitting designs or content for printing, you represent that you have the right to use and reproduce such materials.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Delivery</h2>
              <p className="text-gray-700 mb-4">
                a. Delivery times are estimates and not guaranteed.
                <br />
                b. We are not responsible for delays caused by third-party delivery services.
                <br />
                c. Risk of loss passes to you upon delivery to the carrier.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Returns and Refunds</h2>
              <p className="text-gray-700 mb-4">
                a. Due to the custom nature of our products, returns are only accepted for defective or incorrectly printed items.
                <br />
                b. Claims must be made within 7 days of delivery.
                <br />
                c. Refunds will be issued at our discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, Dashmesh Printers shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify and hold harmless Dashmesh Printers from any claims, damages, liabilities, and expenses arising from your use of our services or violation of these Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these Terms at any time. We will provide notice of any changes by updating the "Last updated" date at the top of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about these Terms, please contact us at:
              </p>
              <address className="not-italic text-gray-700 mt-2">
                Dashmesh Printers and Card Gallery<br />
                Gole Market, Behind Gurudwara<br />
                Rudrapur, Uttarakhand - 263153, India<br />
                Email: dashmeshprinters99@gmail.com<br />
                Phone: +91 9917387299, +91 8958335609
              </address>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
