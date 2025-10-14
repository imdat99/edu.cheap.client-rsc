import React from 'react'

const slideData = [
    {
        title: "Web Development",
        description: "Xây dựng website chuyên nghiệp với công nghệ hiện đại",
        price: "5.000.000₫",
        icon: "fas fa-laptop-code",
    },
    {
        title: "Mobile App",
        description: "Phát triển ứng dụng di động iOS và Android",
        price: "8.000.000₫",
        icon: "fas fa-mobile-alt",
    },
    {
        title: "Digital Marketing",
        description: "Chiến dịch marketing hiệu quả cho doanh nghiệp",
        price: "3.500.000₫",
        icon: "fas fa-chart-line",
    },
    {
        title: "UI/UX Design",
        description: "Thiết kế giao diện người dùng hiện đại, thân thiện",
        price: "4.500.000₫",
        icon: "fas fa-paint-brush",
    },
    {
        title: "Database Design",
        description: "Thiết kế và tối ưu hóa cơ sở dữ liệu hiệu quả",
        price: "6.000.000₫",
        icon: "fas fa-database",
    },
    {
        title: "Cyber Security",
        description: "Bảo mật hệ thống và dữ liệu doanh nghiệp",
        price: "10.000.000₫",
        icon: "fas fa-shield-alt",
    },
    {
        title: "AI & Machine Learning",
        description: "Giải pháp trí tuệ nhân tạo và học máy",
        price: "12.000.000₫",
        icon: "fas fa-robot",
    },
    {
        title: "Cloud Computing",
        description: "Giải pháp điện toán đám mây cho doanh nghiệp",
        price: "7.500.000₫",
        icon: "fas fa-cloud",
    },
    {
        title: "DevOps Solution",
        description: "Tối ưu hóa quy trình phát triển và triển khai",
        price: "9.000.000₫",
        icon: "fas fa-cogs",
    }
]

const CarouselSlide = () => {
  return (
    <>
   <div className="relative">
  {/* Carousel Container */}
  <div className="carousel-container overflow-hidden rounded-2xl shadow-2xl bg-white">
    <div
      id="carouselTrack"
      className="flex transition-transform duration-500 ease-in-out"
    >
      {/* Slide 1 - Mobile: 1 card, Desktop: 3 cards */}
      <div className="w-full flex-shrink-0 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <i className="fas fa-laptop-code text-3xl" />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                Mới
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Web Development</h3>
            <p className="text-white/80 mb-4">
              Xây dựng website chuyên nghiệp với công nghệ hiện đại
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">5.000.000₫</span>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Xem chi tiết
              </button>
            </div>
          </div>
          {/* Card 2 - Hidden on mobile */}
          <div className="hidden md:block bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <i className="fas fa-mobile-alt text-3xl" />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                Hot
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Mobile App</h3>
            <p className="text-white/80 mb-4">
              Phát triển ứng dụng di động iOS và Android
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">8.000.000₫</span>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Xem chi tiết
              </button>
            </div>
          </div>
          {/* Card 3 - Hidden on mobile and tablet */}
          <div className="hidden lg:block bg-gradient-to-br from-green-500 to-teal-500 rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <i className="fas fa-chart-line text-3xl" />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                Bán chạy
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Digital Marketing</h3>
            <p className="text-white/80 mb-4">
              Chiến dịch marketing hiệu quả cho doanh nghiệp
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">3.500.000₫</span>
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Slide 2 */}
      <div className="w-full flex-shrink-0 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 4 */}
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <i className="fas fa-palette text-3xl" />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                Trending
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-white/80 mb-4">
              Thiết kế giao diện người dùng hiện đại, thân thiện
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">4.500.000₫</span>
              <button className="bg-white text-orange-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Xem chi tiết
              </button>
            </div>
          </div>
          {/* Card 5 - Hidden on mobile */}
          <div className="hidden md:block bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <i className="fas fa-database text-3xl" />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                Premium
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Database Design</h3>
            <p className="text-white/80 mb-4">
              Thiết kế và tối ưu hóa cơ sở dữ liệu hiệu quả
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">6.000.000₫</span>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Xem chi tiết
              </button>
            </div>
          </div>
          {/* Card 6 - Hidden on mobile and tablet */}
          <div className="hidden lg:block bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <i className="fas fa-shield-alt text-3xl" />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                Security
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Cyber Security</h3>
            <p className="text-white/80 mb-4">
              Bảo mật hệ thống và dữ liệu doanh nghiệp
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">10.000.000₫</span>
              <button className="bg-white text-pink-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Slide 3 */}
      <div className="w-full flex-shrink-0 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 7 */}
          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <i className="fas fa-cloud text-3xl" />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                Cloud
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Cloud Computing</h3>
            <p className="text-white/80 mb-4">
              Giải pháp điện toán đám mây cho doanh nghiệp
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">7.500.000₫</span>
              <button className="bg-white text-yellow-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Xem chi tiết
              </button>
            </div>
          </div>
          {/* Card 8 - Hidden on mobile */}
          <div className="hidden md:block bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <i className="fas fa-robot text-3xl" />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                AI
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Artificial Intelligence</h3>
            <p className="text-white/80 mb-4">
              Phát triển giải pháp AI thông minh
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">15.000.000₫</span>
              <button className="bg-white text-teal-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Xem chi tiết
              </button>
            </div>
          </div>
          {/* Card 9 - Hidden on mobile and tablet */}
          <div className="hidden lg:block bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <i className="fas fa-cogs text-3xl" />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                DevOps
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">DevOps Solution</h3>
            <p className="text-white/80 mb-4">
              Tối ưu hóa quy trình phát triển và triển khai
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">9.000.000₫</span>
              <button className="bg-white text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Slide 4 */}
      <div className="w-full flex-shrink-0 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 10 */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <i className="fas fa-code text-3xl" />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                New
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Blockchain</h3>
            <p className="text-white/80 mb-4">
              Phát triển giải pháp blockchain an toàn và minh bạch
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">12.000.000₫</span>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Xem chi tiết
              </button>
            </div>
          </div>
          {/* Card 11 - Hidden on mobile */}
          <div className="hidden md:block bg-gradient-to-br from-green-600 to-teal-600 rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <i className="fas fa-vr-cardboard text-3xl" />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                VR/AR
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Virtual Reality</h3>
            <p className="text-white/80 mb-4">
              Trải nghiệm thực tế ảo và tăng cường thực tế
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">18.000.000₫</span>
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Xem chi tiết
              </button>
            </div>
          </div>
          {/* Card 12 - Hidden on mobile and tablet */}
          <div className="hidden lg:block bg-gradient-to-br from-red-600 to-pink-600 rounded-xl p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <i className="fas fa-brain text-3xl" />
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                ML
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Machine Learning</h3>
            <p className="text-white/80 mb-4">
              Giải pháp học máy thông minh cho doanh nghiệp
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">20.000.000₫</span>
              <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Navigation Buttons */}
  <button
    id="prevBtn"
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 btn-disabled"
  >
    <i className="fas fa-chevron-left" />
  </button>
  <button
    id="nextBtn"
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
  >
    <i className="fas fa-chevron-right" />
  </button>
  {/* Indicators */}
  <div className="flex justify-center mt-8 space-x-2">
    <button
      className="indicator w-3 h-3 rounded-full bg-purple-600 transition-all duration-300"
      data-slide={0}
    />
    <button
      className="indicator w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"
      data-slide={1}
    />
    <button
      className="indicator w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"
      data-slide={2}
    />
    <button
      className="indicator w-3 h-3 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"
      data-slide={3}
    />
  </div>
</div>


    </>
  )
}

export default CarouselSlide