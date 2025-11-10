"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonials.css";
import Image from "next/image";
import { Container } from "@/components/layouts/container";
import { ExpandableText } from "../expandable-text";
import { SpringSVG } from "../icons";

interface Testimonial {
  comment: string;
  name: string;
  role: string;
  image: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string;
}

const TestimonialCard = ({ comment, name, role, image }: Testimonial) => {
  return (
    <div className="bg-white rounded-3xl px-11.5 py-10.5 flex gap-12.5 overflow-hidden">
      <div className="flex flex-col justify-between">
        <ExpandableText content={comment} />
        <div className="flex items-center gap-2 mt-20">
          <h4 className="font-semibold text-black text-lg font-montserrat">
            {name}
          </h4>
          <p className="text-black text-xs font-normal">— {role}</p>
        </div>
      </div>
      {image && (
        <div className="flex items-center w-[212px] h-[265px]">
          <Image
            src={image}
            alt={name}
            width={212}
            height={265}
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
      )}
    </div>
  );
};

export const Testimonials = ({
  testimonials,
  title = "Testimonials",
}: TestimonialsProps) => {
  return (
    <section className="w-full  bg-warm relative overflow-hidden">
      <Container className="relative py-20">
        <div className="absolute left-0 top-25 z-2">
          <SpringSVG />
        </div>
        <div className="max-w-7xl mx-auto  relative z-10">
          <h2 className="text-4xl font-semibold text-center text-black font-montserrat mb-13.5 relative z-3">
            {title}
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 24,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};
