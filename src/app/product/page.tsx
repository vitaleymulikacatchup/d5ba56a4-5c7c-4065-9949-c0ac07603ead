"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import { Coffee } from "lucide-react";

export default function ProductPage() {
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
              "onProductClick": "() => console.log('Popcorn selected')"
            },
            {
              "id": "soda",
              "name": "Premium Beverages",
              "price": "$5.49",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645899542-jas4hqd4.jpg",
              "imageAlt": "Cinema soda drink",
              "onProductClick": "() => console.log('Beverage selected')"
            },
            {
              "id": "candy",
              "name": "Theater Candy",
              "price": "$4.99",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645900668-z0k7dszm.jpg",
              "imageAlt": "Movie theater candy",
              "onProductClick": "() => console.log('Candy selected')"
            },
            {
              "id": "nachos",
              "name": "Nachos & Cheese",
              "price": "$7.99",
              "imageSrc": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1763645901942-grl8hmxl.jpg",
              "imageAlt": "Nachos with cheese",
              "onProductClick": "() => console.log('Nachos selected')"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}