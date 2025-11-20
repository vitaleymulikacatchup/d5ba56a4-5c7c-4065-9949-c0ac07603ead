"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { MessageCircle } from "lucide-react";

export default function TestimonialPage() {
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
    </ThemeProvider>
  );
}