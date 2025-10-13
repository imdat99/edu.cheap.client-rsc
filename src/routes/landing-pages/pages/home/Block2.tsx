import { cn } from 'lib/utils'
import React from 'react'

const suggestions = [
    {
        title: "Web Development",
        link: "#",
        bgColor: "bg-green-100",
        textColor: "text-green-600"
    },
    {
        title: "Data Science",
        link: "#",
        bgColor: "bg-blue-100",
        textColor: "text-blue-600"
    },
    {
        title: "Graphic Design",
        link: "#",
        bgColor: "bg-pink-100",
        textColor: "text-pink-600"
    },
    {
        title: "Đánh giá năng lực",
        link: "#",
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600"
    },
    {
        title: "HSA",
        link: "#",
        bgColor: "bg-purple-100",
        textColor: "text-purple-600"
    }
]

const Block2 = () => {
    return (
        <>
            <section className=" z-1 -mt-20">
                <div className="container">
                    <div className="card  md:py-10">
                        <div className="">
                            <div className="w-full">
                                <div className="rounded-3 p-4 md:py-md-16 md:px-md-6">
                                    <div className="flex flex-col justify-center">
                                        <div>
                                            <div className="text-center  ">
                                                <h2 className="text-[28px] md:text-[36px] mx-auto fw-500">
                                                    THOẢ SỨC HỌC TẬP -{" "}
                                                    <span className="text-primary">
                                                        HOÀN TOÀN MIỄN PHÍ
                                                        <span />
                                                    </span>
                                                </h2>
                                                <p className=" mx-auto">
                                                    Khám phá hàng trăm khóa học chất lượng, hoàn toàn miễn phí.
                                                </p>
                                                <p>
                                                    Không cần đăng ký, không cần thanh toán, chỉ cần tinh thần ham học hỏi!
                                                </p>
                                            </div>
                                            <div className="mt-5 mb-5 max-w-4xl mx-auto">
                                                <form>
                                                    <div
                                                        className="w-full relative block group/input"
                                                        data-flux-input=""
                                                    >
                                                        <input
                                                            type="text"
                                                            className=":uno: w-full border rounded-lg block disabled:shadow-none appearance-none text-base py-1.5 h-12 leading-[1.125rem] pl-3 pr-10 bg-white text-zinc-700 disabled:text-zinc-500 placeholder-zinc-400 disabled:placeholder-zinc-400/70 shadow-xs border-zinc-200 border-b-zinc-300/80 disabled:border-b-zinc-200"
                                                            placeholder="Nhập tên khoá học, giảng viên, từ khoá..."
                                                            name="sld"
                                                            data-flux-control=""
                                                            data-flux-group-target=""
                                                        />
                                                        <div className="absolute top-0 bottom-0 flex items-center justify-center text-xs text-zinc-400/75 pr-2 right-0">
                                                            <button
                                                                type="submit"
                                                                className=":uno: btn btn-primary h-9 px-3 text-sm rounded-md inline-flex items-center justify-center gap-2 disabled:opacity-75 dark:disabled:opacity-75 disabled:cursor-default disabled:pointer-events-none"
                                                                data-flux-button="data-flux-button"
                                                                data-flux-group-target="data-flux-group-target"
                                                            >
                                                                <div
                                                                    className="absolute inset-0 flex items-center justify-center opacity-0"
                                                                    data-flux-loading-indicator=""
                                                                >
                                                                    <svg
                                                                        className="shrink-0 [:where(&)]:size-4 animate-spin"
                                                                        data-flux-icon=""
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        aria-hidden="true"
                                                                        data-slot="icon"
                                                                    >
                                                                        <circle
                                                                            className="opacity-25"
                                                                            cx={12}
                                                                            cy={12}
                                                                            r={10}
                                                                            stroke="currentColor"
                                                                            strokeWidth={4}
                                                                        />
                                                                        <path
                                                                            className="opacity-75"
                                                                            fill="currentColor"
                                                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                        />
                                                                    </svg>
                                                                </div>
                                                                <svg
                                                                    className="shrink-0 [:where(&)]:size-4"
                                                                    data-flux-icon=""
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16"
                                                                    fill="currentColor"
                                                                    aria-hidden="true"
                                                                    data-slot="icon"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span>Tìm kiếm</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center gap-4 flex-wrap  mt-6">
                                            <span>
                                                Phổ biến:
                                            </span>
                                            {suggestions.map((item, index) => (
                                                <button className={cn("px-4 py-1.5 rounded-lg text-sm font-medium transition bg-opacity-80 hover:bg-opacity-100", item.bgColor, item.textColor)} key={index}>
                                                    {item.title}
                                                </button>
                                            ))}
                                            <span>
                                                
                                            </span>
                                            {/* <span
                                                role="button"
                                                className="relative p-2 bg-gray-100 gap-2 rounded-sm border border-gray-200 overflow-hidden dark:border-gray-600 flex justify-center items-center"
                                            >
                                                <img
                                                    src="https://tino.vn/mytino/assets/media/tlds/vn.svg"
                                                    alt=".vn"
                                                    className="w-10 h-6"
                                                />
                                                <span className=" text-gray-800 btn-hover:text-gray-300">
                                                    450,000 đ
                                                </span>
                                                <span className="absolute top-0 right-0 w-3 h-3 rounded-bl overflow-hidden">
                                                    <img src="https://tino.vn/mytino/assets/media/flags/vietnam.svg" alt="" />
                                                </span>
                                            </span>
                                            <span
                                                role="button"
                                                className="relative p-2 bg-gray-100 gap-2 rounded-sm border border-gray-200 overflow-hidden dark:border-gray-600 flex justify-center items-center"
                                            >
                                                <span className="text-xl font-semibold text-primary h-6">
                                                    .com.vn
                                                </span>
                                                <span className=" text-gray-800 btn-hover:text-gray-300">
                                                    350,000 đ
                                                </span>
                                                <span className="absolute top-0 right-0 w-3 h-3 rounded-bl overflow-hidden">
                                                    <img src="https://tino.vn/mytino/assets/media/flags/vietnam.svg" alt="" />
                                                </span>
                                            </span>
                                            <span
                                                role="button"
                                                className="relative p-2 bg-gray-100 gap-2 rounded-sm border border-gray-200 overflow-hidden dark:border-gray-600 flex justify-center items-center"
                                            >
                                                <span className="text-xl font-semibold text-primary h-6">
                                                    .io.vn
                                                </span>
                                                <span className=" text-gray-800 btn-hover:text-gray-300">
                                                    30,000 đ
                                                </span>
                                                <span className="absolute top-0 right-0 w-3 h-3 rounded-bl overflow-hidden">
                                                    <img src="https://tino.vn/mytino/assets/media/flags/vietnam.svg" alt="" />
                                                </span>
                                            </span>
                                            <span
                                                role="button"
                                                className="relative p-2 bg-gray-100 gap-2 rounded-sm border border-gray-200 overflow-hidden dark:border-gray-600 flex justify-center items-center"
                                            >
                                                <img
                                                    src="https://tino.vn/mytino/assets/media/tlds/com.svg"
                                                    alt=".com"
                                                    className="w-10 h-6"
                                                />
                                                <span className=" text-gray-800 btn-hover:text-gray-300">
                                                    310,000 đ
                                                </span>
                                            </span>
                                            <span
                                                role="button"
                                                className="relative p-2 bg-gray-100 gap-2 rounded-sm border border-gray-200 overflow-hidden dark:border-gray-600 flex justify-center items-center"
                                            >
                                                <img
                                                    src="https://tino.vn/mytino/assets/media/tlds/net.svg"
                                                    alt=".net"
                                                    className="w-10 h-6"
                                                />
                                                <span className=" text-gray-800 btn-hover:text-gray-300">
                                                    350,000 đ
                                                </span>
                                            </span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='pt-20'>
                <div className='container text-center'>
                    <h2 className='text-3xl font-semibold mb-4'>Tại sao chọn EduCheap?</h2>
                    <p className='mb-12 text-gray-600'>Khám phá những lợi ích khi học tập tại EduCheap</p>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                        <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
                            <div className='mb-4'>
                                <img src='https://my-next-app.imdat2999.workers.dev/assets/images/quality.svg' alt='Chất lượng hàng đầu' className='mx-auto h-16' />
                            </div>
                            <h3 className='text-xl font-semibold mb-2'>Chất lượng hàng đầu</h3>
                            <p className='text-gray-600'>Khoá học được thiết kế bởi các chuyên gia hàng đầu trong lĩnh vực.</p>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
                            <div className='mb-4'>
                                <img src='https://my-next-app.imdat2999.workers.dev/assets/images/flexible.svg' alt='Học tập linh hoạt' className='mx-auto h-16' />
                            </div>
                            <h3 className='text-xl font-semibold mb-2'>Học tập linh hoạt</h3>
                            <p className='text-gray-600'>Học mọi lúc, mọi nơi với các khoá học trực tuyến phù hợp với lịch trình của bạn.</p>
                        </div>
                        <div className='bg-white p-6 rounded-lg shadow hover:shadow-lg transition'>
                            <div className='mb-4'>
                                <img src='https://my-next-app.imdat2999.workers.dev/assets/images/community.svg' alt='Cộng đồng hỗ trợ' className='mx-auto h-16' />
                            </div>
                            <h3 className='text-xl font-semibold mb-2'>Cộng đồng hỗ trợ</h3>
                            <p className='text-gray-600'>Tham gia cộng đồng học viên năng động để trao đổi và học hỏi lẫn nhau.</p>
                        </div>
                    </div>
                </div>
            </section>                                   
        </>
    )
}

export default Block2