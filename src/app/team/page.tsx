"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import { Users } from "lucide-react";

export default function TeamPage() {
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
    </ThemeProvider>
  );
}