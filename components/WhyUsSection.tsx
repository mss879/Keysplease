'use client';

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, Lightbulb, Smartphone, Zap } from "lucide-react";

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
    icon: Smartphone,
    title: "Modern living upgrades",
    description:
      "Upgrade your daily life with smart home automation that gives you full control from the palm of your hand.",
  },
  {
    icon: Zap,
    title: "Smart home innovations",
    description:
      "Enhance your lifestyle with a seamless automation system that brings all home controls to your fingertips.",
  },
  {
    icon: Lightbulb,
    title: "Intelligent living solutions",
    description:
      "Transform your everyday living with an integrated home automation system that puts everything control right in your hands.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="flex flex-col gap-10">
            {/* Title Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-500 uppercase tracking-widest text-sm font-medium">
                  Why choose our property?
                </span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1a2333] tracking-tighter leading-[1.1]">
                Discover the story behind this beautiful and dope property.
              </h2>
            </div>

            {/* Left Image & Carousel Area */}
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-2xl overflow-hidden group">
              <img
                src="https://framerusercontent.com/images/FnA7jYeAK4yGRdZW7wbRn33uvU.png"
                alt="Property Detail"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay Gradient for text readability if needed, but styling suggests cards are distinct */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Floating Carousel Cards */}
              <div className="absolute bottom-6 left-6 right-6">
                <Carousel
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
                          <CardContent className="p-5 flex gap-4 items-start pr-24">
                             <div className="p-3 bg-gray-50 rounded-lg shrink-0 border border-gray-100">
                               <feature.icon className="w-6 h-6 text-black" strokeWidth={1.5} />
                             </div>
                             <div className="space-y-2">
                               <h5 className="font-semibold text-lg text-black leading-none">
                                 {feature.title}
                               </h5>
                               <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                                 {feature.description}
                               </p>
                             </div>

                             {/* In-Card Navigation */}
                             <div className="absolute top-5 right-5 flex gap-2">
                                <CarouselPrevious className="static translate-y-0 translate-x-0 h-8 w-8 border-gray-200 bg-gray-50 hover:bg-gray-100 disabled:opacity-50" />
                                <CarouselNext className="static translate-y-0 translate-x-0 h-8 w-8 border-gray-200 bg-gray-50 hover:bg-gray-100 disabled:opacity-50" />
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
          <div className="flex flex-col gap-10 h-full justify-between">
            {/* Top Right Image */}
            <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-sm">
              <img
                src="https://framerusercontent.com/images/uKGWWyiCuoTYwdD09yXItP9FOY.jpg"
                alt="Interior View"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Bottom Right Content */}
            <div className="flex flex-col gap-8 justify-end flex-1">
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                Control every corner of your home effortlessly through voice
                commands or mobile apps. From climate control to smart locks,
                redefine your lifestyle with cutting-edge technology. Let your
                home do the thinking.
              </p>
              
              <Button
                asChild
                className="w-fit h-auto rounded-xl bg-[#c89e36] text-white px-8 py-3 text-sm font-medium hover:bg-[#b08b2f] transition-all shadow-md"
              >
                <Link href="#gallery" className="flex items-center gap-2">
                  Gallery Overview
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
