import React from "react";
import HeroCarousel from "./HeroCarousel";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          tempor lobortis leo, id rhoncus lorem condimentum sit amet. Fusce eu
          sem luctus, tincidunt orci sed, rhoncus ligula. Donec scelerisque
          finibus arcu quis varius. Nulla vitae lorem ornare metus mollis
          consequat.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href={"/products"}>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
