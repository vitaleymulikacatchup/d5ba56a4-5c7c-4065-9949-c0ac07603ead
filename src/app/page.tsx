"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import MetricCardThree from '@/components/sections/metric/MetricCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Film, PlayCircle, Coffee, Ticket, Star, Crown, Sparkles, TrendingUp, Users, MapPin, MessageCircle, Handshake, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function HomePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="small"
      background="floatingGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { "name": "Movies", "id": "movies" },
            { "name": "Concessions", "id": "concessions" },
            { "name": "Pricing", "id": "pricing" },
            { "name": "About", "id": "about" },
            { "name": "Contact", "id": "contact" }
          ]}
          brandName="CineMax"
          button={{
            "text": "Book Now",
            "href": "booking"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Cinema Like Never Before"
          description="Immerse yourself in premium movie experiences with state-of-the-art theaters, gourmet concessions, and unforgettable entertainment."
          tag="CineMax Theaters"
          tagIcon={Film}
          buttons={[
            { "text": "Book Tickets", "href": "booking" },
            { "text": "View Showtimes", "href": "movies" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645893059-fjcbnqsh.jpg"
          imageAlt="Modern cinema theater interior"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About CineMax"
          description="We're passionate about bringing you the ultimate movie-going experience. From cutting-edge projection technology to gourmet concessions and luxury seating, every detail is crafted to make your visit extraordinary. Join millions of movie lovers who choose CineMax for unforgettable entertainment."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Now Showing"
          description="Discover the latest blockbusters and indie films playing at our theaters"
          tag="Movies"
          tagIcon={PlayCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              "title": "Action Adventure",
              "description": "High-octane thrills and spectacular stunts in the latest action blockbuster",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645894218-k3u8gw0i.jpg",
              "imageAlt": "Action movie poster",
              "button": { "text": "Book Now", "href": "booking" }
            },
            {
              "title": "Comedy Special",
              "description": "Laugh out loud with the funniest comedy of the year",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645895550-tml1anck.jpg",
              "imageAlt": "Comedy movie poster",
              "button": { "text": "Book Now", "href": "booking" }
            },
            {
              "title": "Drama Masterpiece",
              "description": "An emotional journey that will touch your heart and soul",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645896581-r59cm05s.jpg",
              "imageAlt": "Drama movie poster",
              "button": { "text": "Book Now", "href": "booking" }
            },
            {
              "title": "Horror Thriller",
              "description": "Spine-chilling scares that will keep you on the edge of your seat",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645897650-lxp615mp.jpg",
              "imageAlt": "Horror movie poster",
              "button": { "text": "Book Now", "href": "booking" }
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Concessions & Treats"
          description="Enhance your movie experience with our premium snacks and beverages"
          tag="Cinema Snacks"
          tagIcon={Coffee}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              "id": "popcorn",
              "name": "Gourmet Popcorn",
              "price": "$8.99",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645898544-m2jik51x.jpg",
              "imageAlt": "Movie theater popcorn bucket",
              "onProductClick": () => console.log('Popcorn selected')
            },
            {
              "id": "soda",
              "name": "Premium Beverages",
              "price": "$5.49",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645899542-jas4hqd4.jpg",
              "imageAlt": "Cinema soda drink",
              "onProductClick": () => console.log('Beverage selected')
            },
            {
              "id": "candy",
              "name": "Theater Candy",
              "price": "$4.99",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645900668-z0k7dszm.jpg",
              "imageAlt": "Movie theater candy",
              "onProductClick": () => console.log('Candy selected')
            },
            {
              "id": "nachos",
              "name": "Nachos & Cheese",
              "price": "$7.99",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645901942-grl8hmxl.jpg",
              "imageAlt": "Nachos with cheese",
              "onProductClick": () => console.log('Nachos selected')
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Ticket Packages"
          description="Choose the perfect movie experience for any occasion"
          tag="Pricing"
          tagIcon={Ticket}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              "id": "standard",
              "badge": "Popular Choice",
              "badgeIcon": Star,
              "price": "$12.99",
              "subtitle": "Standard Movie Experience",
              "buttons": [
                { "text": "Book Standard", "href": "booking" },
                { "text": "View Showtimes", "href": "movies" }
              ],
              "features": [
                "Digital projection",
                "Comfortable seating",
                "Dolby stereo sound",
                "All current movies",
                "Online booking"
              ]
            },
            {
              "id": "premium",
              "badge": "Best Value",
              "badgeIcon": Crown,
              "price": "$18.99",
              "subtitle": "Premium Theater Experience",
              "buttons": [
                { "text": "Book Premium", "href": "booking" },
                { "text": "Learn More", "href": "about" }
              ],
              "features": [
                "IMAX projection",
                "Luxury reclining seats",
                "Dolby Atmos sound",
                "Reserved seating",
                "Complimentary snack"
              ]
            },
            {
              "id": "vip",
              "badge": "Ultimate Experience",
              "badgeIcon": Sparkles,
              "price": "$29.99",
              "subtitle": "VIP Theater Package",
              "buttons": [
                { "text": "Book VIP", "href": "booking" },
                { "text": "Contact Us", "href": "contact" }
              ],
              "features": [
                "Private screening rooms",
                "Premium leather seating",
                "Waiter service",
                "Gourmet meal included",
                "VIP lounge access"
              ]
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardThree
          title="Cinema Excellence"
          description="Experience the numbers that showcase our commitment to entertainment"
          tag="Our Impact"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              "id": "1",
              "icon": Users,
              "title": "Happy Customers",
              "value": "2.5M+"
            },
            {
              "id": "2",
              "icon": Film,
              "title": "Movies Screened",
              "value": "15,000+"
            },
            {
              "id": "3",
              "icon": MapPin,
              "title": "Theater Locations",
              "value": "150+"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Meet Our Team"
          description="The dedicated professionals who make every movie experience exceptional"
          tag="Our People"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          members={[
            {
              "id": "1",
              "name": "Sarah Johnson",
              "role": "Theater Manager",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645903179-51cgm2sl.jpg",
              "imageAlt": "Sarah Johnson"
            },
            {
              "id": "2",
              "name": "Mike Chen",
              "role": "Technical Director",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645904073-vlz1y67g.jpg",
              "imageAlt": "Mike Chen"
            },
            {
              "id": "3",
              "name": "Emma Davis",
              "role": "Customer Experience",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645905129-5vw1pjal.jpg",
              "imageAlt": "Emma Davis"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Real experiences from movie lovers who choose CineMax"
          tag="Reviews"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              "id": "1",
              "name": "Jessica Williams",
              "role": "Movie Enthusiast",
              "company": "Regular Customer",
              "rating": 5,
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645903179-51cgm2sl.jpg",
              "imageAlt": "Jessica Williams"
            },
            {
              "id": "2",
              "name": "David Rodriguez",
              "role": "Film Critic",
              "company": "Local Reviewer",
              "rating": 5,
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645904073-vlz1y67g.jpg",
              "imageAlt": "David Rodriguez"
            },
            {
              "id": "3",
              "name": "Lisa Thompson",
              "role": "Family Customer",
              "company": "Parent & Moviegoer",
              "rating": 5,
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645905129-5vw1pjal.jpg",
              "imageAlt": "Lisa Thompson"
            },
            {
              "id": "4",
              "name": "Robert Kim",
              "role": "Cinema Professional",
              "company": "Industry Expert",
              "rating": 5,
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645906047-fwtvgrcg.jpg",
              "imageAlt": "Robert Kim"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Partners"
          description="Proudly partnering with industry leaders to bring you the best cinema experience"
          tag="Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645907018-kvoai5db.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645908034-a7s7qhoj.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645908944-ossb3gbn.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645909905-xf0nwi6a.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645910770-yojqz0qg.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645911731-k9ukr0an.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645912660-o5flfog6.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Book Your Perfect Movie Experience"
          description="Contact us for group bookings, private screenings, or any questions about our theaters and services."
          inputs={[
            { "name": "name", "type": "text", "placeholder": "Full Name", "required": true },
            { "name": "email", "type": "email", "placeholder": "Email Address", "required": true },
            { "name": "phone", "type": "tel", "placeholder": "Phone Number", "required": false },
            { "name": "moviePreference", "type": "text", "placeholder": "Movie Preference", "required": false }
          ]}
          textarea={{
            "name": "message",
            "placeholder": "Tell us about your booking requirements or any special requests...",
            "rows": 5,
            "required": true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645913538-02g98aiq.jpg"
          imageAlt="Cinema lobby interior"
          mediaPosition="right"
          buttonText="Send Inquiry"
          onSubmit={(data) => console.log('Contact form submitted:', data)}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="CineMax"
          columns={[
            {
              "title": "Movies",
              "items": [
                { "label": "Now Showing", "href": "movies" },
                { "label": "Coming Soon", "href": "coming-soon" },
                { "label": "Showtimes", "href": "showtimes" }
              ]
            },
            {
              "title": "Experience",
              "items": [
                { "label": "Theater Locations", "href": "locations" },
                { "label": "Premium Screens", "href": "premium" },
                { "label": "VIP Experience", "href": "vip" }
              ]
            },
            {
              "title": "Services",
              "items": [
                { "label": "Group Bookings", "href": "groups" },
                { "label": "Private Screenings", "href": "private" },
                { "label": "Gift Cards", "href": "gifts" }
              ]
            },
            {
              "title": "Support",
              "items": [
                { "label": "Contact Us", "href": "contact" },
                { "label": "Help Center", "href": "help" },
                { "label": "Feedback", "href": "feedback" }
              ]
            }
          ]}
          socialLinks={[
            { "icon": Facebook, "href": "https://facebook.com/cinemax", "ariaLabel": "Follow CineMax on Facebook" },
            { "icon": Twitter, "href": "https://twitter.com/cinemax", "ariaLabel": "Follow CineMax on Twitter" },
            { "icon": Instagram, "href": "https://instagram.com/cinemax", "ariaLabel": "Follow CineMax on Instagram" },
            { "icon": Youtube, "href": "https://youtube.com/cinemax", "ariaLabel": "Subscribe to CineMax on YouTube" }
          ]}
          copyrightText="© 2025 CineMax Theaters. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}