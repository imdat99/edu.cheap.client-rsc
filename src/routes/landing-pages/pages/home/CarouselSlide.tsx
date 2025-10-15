"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "Components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const slideData = [
  {
    title: "Web Development",
    description: "Xây dựng website chuyên nghiệp với công nghệ hiện đại",
    price: "50",
    icon: "fas fa-laptop-code",
    tag: "Phổ biến"
  },
  {
    title: "Mobile App",
    description: "Phát triển ứng dụng di động iOS và Android",
    icon: "fas fa-mobile-alt",
    tag: "Mới"
  },
  {
    title: "Digital Marketing",
    description: "Chiến dịch marketing hiệu quả cho doanh nghiệp",
    icon: "fas fa-chart-line",
    tag: "Hot"
  },
  {
    title: "UI/UX Design",
    description: "Thiết kế giao diện người dùng hiện đại, thân thiện",
    icon: "fas fa-paint-brush",
    tag: "Yêu thích"
  },
  {
    title: "Database Design",
    description: "Thiết kế và tối ưu hóa cơ sở dữ liệu hiệu quả",
    icon: "fas fa-database",
    tag: "Tiêu chuẩn"
  },
  {
    title: "Cyber Security",
    description: "Bảo mật hệ thống và dữ liệu doanh nghiệp",
    icon: "fas fa-shield-alt",
    tag: "Quan trọng"
  },
  {
    title: "AI & Machine Learning",
    description: "Giải pháp trí tuệ nhân tạo và học máy",
    icon: "fas fa-robot",
    // background: "teal-500,blue-500",
    tag: "Công nghệ"
  },
  {
    title: "Cloud Computing",
    description: "Giải pháp điện toán đám mây cho doanh nghiệp",
    icon: "fas fa-cloud",
    tag: "Linh hoạt"
  },
  {
    title: "DevOps Solution",
    description: "Tối ưu hóa quy trình phát triển và triển khai",
    icon: "fas fa-cogs",
    tag: "Hiệu quả"
  }
]
const buildStype = (background: string) => {
  const [from, to] = background.split(",");
  return {
    "background": `linear-gradient(135deg, ${from} 0%, ${to} 100%)`
  }
}
const CarouselSlide = () => {
  return (
    <>
      <Carousel className="w-full md:p-6" plugins={[Autoplay()]} opts={{ loop: true }} orientation="horizontal">
        <CarouselContent className="-ml-6">
          {slideData.map((slide, index) => (
            <CarouselItem key={index} className="pl-6 md:basis-1/3 lg:basis-1/5">
              <div className=":uno: min-h-[230px] flex flex-col select-none rounded-xl overflow-hidden p-6 text-white h-full bg-info-light">
                <div className="flex items-center justify-between mb-4">
                  <i className={`${slide.icon} text-3xl`} />
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    {slide.tag}
                  </span>
                </div>
                <div className='flex-1'>
                  <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                  <p className="text-white/80 mb-4">
                    {slide.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition text-secondary">
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