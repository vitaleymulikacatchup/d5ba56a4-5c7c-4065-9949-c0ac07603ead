"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';

export default function ContactPage() {
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

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Book Your Perfect Movie Experience"
          description="Contact us for group bookings, private screenings, or any questions about our theaters and services."
          inputs={[
            {"name": "name", "type": "text", "placeholder": "Full Name", "required": true},
            {"name": "email", "type": "email", "placeholder": "Email Address", "required": true},
            {"name": "phone", "type": "tel", "placeholder": "Phone Number", "required": false},
            {"name": "moviePreference", "type": "text", "placeholder": "Movie Preference", "required": false}
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
          onSubmit={"(data) => console.log('Contact form submitted:', data)"}
        />
      </div>
    </ThemeProvider>
  );
}