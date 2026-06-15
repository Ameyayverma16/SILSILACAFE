import { MapPin, Clock, Phone, Navigation, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function VisitUs() {
  return (
    <section id="visit" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-accent"></div>
                <span className="text-accent font-semibold tracking-widest uppercase text-sm font-button">Find Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">Drop By & Say Hello</h2>
              <p className="text-muted-foreground font-body text-lg">
                Whether you're grabbing a quick morning brew or settling in for an afternoon of work, we're here to welcome you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-3 rounded-full text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-xl mb-1">Location</h4>
                  <p className="text-muted-foreground font-body">JK Tower, Bareilly-Nainital Road,<br/>Near Brij Lal Hospital, Tedhi Pulia, Bhotia Parao,<br/>Haldwani, Uttarakhand 263139</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-3 rounded-full text-accent shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-xl mb-1">Hours</h4>
                  <p className="text-muted-foreground font-body">Open Daily<br/>9:00 AM – 8:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/5 p-3 rounded-full text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-primary text-xl mb-1">Contact</h4>
                  <p className="text-muted-foreground font-body">+91 83778 93379</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                className="font-button tracking-wide rounded-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 px-6 shadow-md"
                onClick={() => window.open("https://maps.google.com/?q=Silsila+Cafe+Haldwani", "_blank")}
                data-testid="button-directions"
              >
                <Navigation className="mr-2" size={18} />
                Get Directions
              </Button>
              <Button 
                variant="outline"
                className="font-button tracking-wide rounded-full border-border hover:bg-accent/5 text-primary py-6 px-6"
                onClick={() => window.location.href = "tel:+918377893379"}
                data-testid="button-call"
              >
                <PhoneCall className="mr-2" size={18} />
                Call Us
              </Button>
            </div>
          </div>

          <div className="h-[400px] lg:h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.993540263654!2d79.5218751!3d29.2235948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a09bca3b22b649%3A0xc3b0ed8bd54203a9!2sSilsila%20Cafe!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: "grayscale(20%) contrast(110%) opacity(90%)" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Silsila Cafe Location"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
