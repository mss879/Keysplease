'use client';

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Lightbulb, Smartphone, Zap } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Home,
    title: "Find Your Dream Home",
    description:
      "Explore a vast collection of properties. From cozy apartments to luxury villas, find the perfect place to call your own.",
  },
  {
    icon: Zap,
    title: "Sell with Confidence",
    description:
      "List your property with ease and reach a wide audience of potential buyers. We make selling simple and stress-free.",
  },
  {
    icon: Smartphone, // Or Lightbulb, but Smartphone fits "digital platform"
    title: "Rentals Made Easy",
    description:
      "Looking for a rental? Browse verified listings and connect directly with landlords for a hassle-free experience.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-12 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            {/* Title Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-500 uppercase tracking-widest text-sm font-medium">
                  Your Property Partner
                </span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1a2333] tracking-tighter leading-[1.1]">
                The easiest way to buy, sell, or rent your property.
              </h2>
            </div>

            {/* Left Image & Carousel Area */}
            <div className="relative w-full aspect-[4/4] md:aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden group">
              <Image
                src="https://framerusercontent.com/images/FnA7jYeAK4yGRdZW7wbRn33uvU.png"
                alt="Property Detail"
                fill
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Overlay Gradient for text readability if needed, but styling suggests cards are distinct */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating Carousel Cards */}
              <div className="absolute bottom-6 left-6 right-6">
                <Carousel
                  plugins={[
                    Autoplay({
                      delay: 3500,
                    }),
                  ]}
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full relative"
                >
                  <CarouselContent className="-ml-4">
                    {features.map((feature, index) => (
                      <CarouselItem key={index} className="pl-4 basis-full">
                        <Card className="border-0 shadow-lg bg-white rounded-xl overflow-hidden h-full relative group/card">
                          <CardContent className="p-4 flex gap-3 items-start pr-16">
                            <div className="p-2.5 bg-gray-50 rounded-lg shrink-0 border border-gray-100">
                              <feature.icon className="w-5 h-5 text-black" strokeWidth={1.5} />
                            </div>
                            <div className="space-y-1">
                              <h3 className="font-semibold text-base text-black leading-none">
                                {feature.title}
                              </h3>
                              <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                                {feature.description}
                              </p>
                            </div>

                            {/* In-Card Navigation */}
                            <div className="absolute top-4 right-4 flex gap-1.5">
                              <CarouselPrevious className="static translate-y-0 translate-x-0 h-7 w-7 border-gray-200 bg-gray-50 hover:bg-gray-100 disabled:opacity-50" />
                              <CarouselNext className="static translate-y-0 translate-x-0 h-7 w-7 border-gray-200 bg-gray-50 hover:bg-gray-100 disabled:opacity-50" />
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 h-full justify-between">
            {/* Top Right Image */}
            <div className="w-full aspect-[5/4] rounded-2xl overflow-hidden shadow-sm mt-0 md:mt-16">
              <Image
                src="https://framerusercontent.com/images/uKGWWyiCuoTYwdD09yXItP9FOY.jpg"
                alt="Interior View"
                width={800}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Bottom Right Content */}
            <div className="flex flex-col gap-8 justify-end flex-1 pb-12 md:pb-32">
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                We bridge the gap between buyers, sellers, and renters. Whether you are looking for a new investment,
                selling your current home, or searching for a temporary stay, our platform offers a seamless and
                secure experience for all your real estate needs.
              </p>

              <Button
                asChild
                className="w-fit h-auto rounded-xl bg-[#c89e36] text-white px-8 py-3 text-sm font-medium hover:bg-[#b08b2f] transition-all shadow-md"
              >
                <Link href="#properties" className="flex items-center gap-2">
                  Explore Properties
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
