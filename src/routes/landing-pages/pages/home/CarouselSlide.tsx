"use client";
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "Components/ui/carousel"
import { cn } from 'lib/utils';
const slideData = [
  {
    title: "Web Development",
    description: "Xây dựng website chuyên nghiệp với công nghệ hiện đại",
    price: "5.000.000₫",
    icon: "fas fa-laptop-code",
    background: "from-purple-500 to-pink-500",
  },
  {
    title: "Mobile App",
    description: "Phát triển ứng dụng di động iOS và Android",
    price: "8.000.000₫",
    icon: "fas fa-mobile-alt",
    background: "from-blue-500 to-cyan-500",
  },
  {
    title: "Digital Marketing",
    description: "Chiến dịch marketing hiệu quả cho doanh nghiệp",
    price: "3.500.000₫",
    icon: "fas fa-chart-line",
    background: "from-green-500 to-teal-500",
  },
  {
    title: "UI/UX Design",
    description: "Thiết kế giao diện người dùng hiện đại, thân thiện",
    price: "4.500.000₫",
    icon: "fas fa-paint-brush",
    background: "from-orange-500 to-red-500",
  },
  {
    title: "Database Design",
    description: "Thiết kế và tối ưu hóa cơ sở dữ liệu hiệu quả",
    price: "6.000.000₫",
    icon: "fas fa-database",
    background: "from-indigo-500 to-purple-500",
  },
  {
    title: "Cyber Security",
    description: "Bảo mật hệ thống và dữ liệu doanh nghiệp",
    price: "10.000.000₫",
    icon: "fas fa-shield-alt",
    background: "from-pink-500 to-rose-500",
  },
  {
    title: "AI & Machine Learning",
    description: "Giải pháp trí tuệ nhân tạo và học máy",
    price: "12.000.000₫",
    icon: "fas fa-robot",
    background: "from-teal-500 to-blue-500",
  },
  {
    title: "Cloud Computing",
    description: "Giải pháp điện toán đám mây cho doanh nghiệp",
    price: "7.500.000₫",
    icon: "fas fa-cloud",
    background: "from-yellow-500 to-orange-500",
  },
  {
    title: "DevOps Solution",
    description: "Tối ưu hóa quy trình phát triển và triển khai",
    price: "9.000.000₫",
    icon: "fas fa-cogs",
    background: "from-gray-700 to-gray-900",
  }
]

const CarouselSlide = () => {
  return (
    <>
      <Carousel className="w-full md:p-6">
        <CarouselContent className="-ml-6">
          {slideData.map((slide, index) => (
            <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/3 ">
              <div className={cn(":uno: min-h-[230px] flex flex-col bg-gradient-to-br rounded-xl overflow-hidden p-6 text-white", slide.background)}>
                <div className="flex items-center justify-between mb-4">
                  <i className="fas fa-shield-alt text-3xl" />
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    Security
                  </span>
                </div>
                <div className='flex-1'>
                  <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-white/80 mb-4">
                    {slide.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{slide.price}</span>
                  <button className="bg-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition" style={{
                    color: `var(${slide.background.split(" ")[0].replace("from", "--colors")})`
                  }}>
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}

export default CarouselSlide