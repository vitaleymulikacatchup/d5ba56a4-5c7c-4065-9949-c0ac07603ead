"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import MetricCardThree from '@/components/sections/metric/MetricCardThree';
import { Film, MapPin, TrendingUp, Users } from "lucide-react";

export default function MetricPage() {
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
    </ThemeProvider>
  );
}