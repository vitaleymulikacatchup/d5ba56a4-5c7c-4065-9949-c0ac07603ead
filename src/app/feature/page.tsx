"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import { PlayCircle } from "lucide-react";

export default function FeaturePage() {
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
              "button": {"text": "Book Now", "href": "booking"}
            },
            {
              "title": "Comedy Special",
              "description": "Laugh out loud with the funniest comedy of the year",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645895550-tml1anck.jpg",
              "imageAlt": "Comedy movie poster",
              "button": {"text": "Book Now", "href": "booking"}
            },
            {
              "title": "Drama Masterpiece",
              "description": "An emotional journey that will touch your heart and soul",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645896581-r59cm05s.jpg",
              "imageAlt": "Drama movie poster",
              "button": {"text": "Book Now", "href": "booking"}
            },
            {
              "title": "Horror Thriller",
              "description": "Spine-chilling scares that will keep you on the edge of your seat",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645897650-lxp615mp.jpg",
              "imageAlt": "Horror movie poster",
              "button": {"text": "Book Now", "href": "booking"}
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}