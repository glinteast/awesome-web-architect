
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useEffect, useState } from "react";
import { ServiceBooking } from "@/components/booking/ServiceBooking";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";
import { Contact as ContactSection } from "@/components/home/Contact";

// List of available services for booking
const availableServices = [
  {
    id: "digital-marketing",
    title: "Digital Marketing"
  },
  {
    id: "web-development",
    title: "Web Development"
  },
  {
    id: "seo",
    title: "SEO Optimization"
  },
  {
    id: "social-media",
    title: "Social Media Marketing"
  },
  {
    id: "content-marketing",
    title: "Content Marketing"
  },
  {
    id: "mobile-apps",
    title: "Mobile App Development"
  }
];

const Contact = () => {
  const [activeTab, setActiveTab] = useState("booking");
  
  // Smooth scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-20 px-6 md:px-10 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <SectionTitle 
              eyebrow="Contact Us" 
              title="Get In Touch With Our Team"
              description="We're here to answer your questions and help your business grow. Book a service or send us a message."
              align="center"
              titleSize="large"
              className="text-white"
              eyebrowClassName="text-primary"
              descriptionClassName="text-white/80"
            />
          </div>
        </section>
        
        {/* Contact Tabs Section */}
        <section className="py-20 px-6 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            <Tabs
              defaultValue="booking"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="booking" className="text-base py-3">Book a Service</TabsTrigger>
                  <TabsTrigger value="contact" className="text-base py-3">Contact Form</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="booking" className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  <div className="lg:col-span-3">
                    <ServiceBooking 
                      services={availableServices} 
                      onComplete={() => setActiveTab("contact")}
                    />
                  </div>
                  
                  <div className="lg:col-span-2 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Why Book with Us</h3>
                      
                      <div className="space-y-6">
                        <div className="bg-secondary/5 p-5 rounded-lg">
                          <h4 className="font-medium text-lg mb-2">Expert Consultation</h4>
                          <p className="text-muted-foreground">
                            Get personalized advice from our industry experts tailored to your specific business needs.
                          </p>
                        </div>
                        
                        <div className="bg-secondary/5 p-5 rounded-lg">
                          <h4 className="font-medium text-lg mb-2">Flexible Scheduling</h4>
                          <p className="text-muted-foreground">
                            Choose a date and time that works best for you. We offer both in-person and virtual meetings.
                          </p>
                        </div>
                        
                        <div className="bg-secondary/5 p-5 rounded-lg">
                          <h4 className="font-medium text-lg mb-2">Custom Solutions</h4>
                          <p className="text-muted-foreground">
                            Each service is tailored to meet your specific goals, ensuring measurable results for your business.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="contact" className="mt-0">
                <ContactSection />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
