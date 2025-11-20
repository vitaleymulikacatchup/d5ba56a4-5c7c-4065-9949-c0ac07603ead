"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import { Crown, Sparkles, Star, Ticket } from "lucide-react";

export default function PricingPage() {
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
            {"name": "Movies", "id": "movies"},
            {"name": "Concessions", "id": "concessions"},
            {"name": "Pricing", "id": "pricing"},
            {"name": "About", "id": "about"},
            {"name": "Contact", "id": "contact"}
          ]}
          brandName="CineMax"
          button={{
            "text": "Book Now",
            "href": "booking"
          }}
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
                {"text": "Book Standard", "href": "booking"},
                {"text": "View Showtimes", "href": "movies"}
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
                {"text": "Book Premium", "href": "booking"},
                {"text": "Learn More", "href": "about"}
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
                {"text": "Book VIP", "href": "booking"},
                {"text": "Contact Us", "href": "contact"}
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
    </ThemeProvider>
  );
}