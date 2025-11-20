"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function FooterPage() {
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

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="CineMax"
          columns={[
            {
              "title": "Movies",
              "items": [
                {"label": "Now Showing", "href": "movies"},
                {"label": "Coming Soon", "href": "coming-soon"},
                {"label": "Showtimes", "href": "showtimes"}
              ]
            },
            {
              "title": "Experience",
              "items": [
                {"label": "Theater Locations", "href": "locations"},
                {"label": "Premium Screens", "href": "premium"},
                {"label": "VIP Experience", "href": "vip"}
              ]
            },
            {
              "title": "Services",
              "items": [
                {"label": "Group Bookings", "href": "groups"},
                {"label": "Private Screenings", "href": "private"},
                {"label": "Gift Cards", "href": "gifts"}
              ]
            },
            {
              "title": "Support",
              "items": [
                {"label": "Contact Us", "href": "contact"},
                {"label": "Help Center", "href": "help"},
                {"label": "Feedback", "href": "feedback"}
              ]
            }
          ]}
          socialLinks={[
            {"icon": Facebook, "href": "https://facebook.com/cinemax", "ariaLabel": "Follow CineMax on Facebook"},
            {"icon": Twitter, "href": "https://twitter.com/cinemax", "ariaLabel": "Follow CineMax on Twitter"},
            {"icon": Instagram, "href": "https://instagram.com/cinemax", "ariaLabel": "Follow CineMax on Instagram"},
            {"icon": Youtube, "href": "https://youtube.com/cinemax", "ariaLabel": "Subscribe to CineMax on YouTube"}
          ]}
          copyrightText="© 2025 CineMax Theaters. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}