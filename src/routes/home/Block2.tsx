import React from 'react'

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
                                                <h2 className="text-[28px] md:text-[36px] mx-auto">
                                                    CHỌN TÊN MIỀN -{" "}
                                                    <span className="text-primary">
                                                        TẠO KHÁC BIỆT
                                                        <span />
                                                    </span>
                                                </h2>
                                                <p className=" mx-auto">
                                                    Tên miền chuyên nghiệp – Dễ nhớ, dễ tìm kiếm
                                                </p>
                                                <p>
                                                    Giúp khách hàng nhận diện thương hiệu ngay từ lần đầu tiên!
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
                                                            className="w-full border rounded-lg block disabled:shadow-none dark:shadow-none appearance-none text-base py-1.5 h-12 leading-[1.125rem] pl-3 pr-10 bg-white dark:bg-white/10 dark:disabled:bg-white/[7%] text-zinc-700 disabled:text-zinc-500 placeholder-zinc-400 disabled:placeholder-zinc-400/70 dark:text-zinc-300 dark:disabled:text-zinc-400 dark:placeholder-zinc-400 dark:disabled:placeholder-zinc-500 shadow-xs border-zinc-200 border-b-zinc-300/80 disabled:border-b-zinc-200 dark:border-white/10 dark:disabled:border-white/5"
                                                            placeholder="Nhập tên thương hiệu của bạn"
                                                            name="sld"
                                                            data-flux-control=""
                                                            data-flux-group-target=""
                                                        />
                                                        <div className="absolute top-0 bottom-0 flex items-center justify-center text-xs text-zinc-400/75 pr-2 right-0">
                                                            <button
                                                                type="submit"
                                                                className="relative items-center font-medium justify-center gap-2 whitespace-nowrap disabled:opacity-75 dark:disabled:opacity-75 disabled:cursor-default disabled:pointer-events-none h-8 text-sm rounded-md px-3 inline-flex  bg-[var(--color-accent)] hover:bg-[color-mix(in_oklab,_var(--color-accent),_transparent_10%)] text-[var(--color-accent-foreground)] border border-black/10 dark:border-0 shadow-[inset_0px_1px_var(--color-white/.2)] [[data-flux-button-group]_&]:border-r-0 [:is([data-flux-button-group]>&:last-child,_[data-flux-button-group]_:last-child>&)]:border-r-[1px] dark:[:is([data-flux-button-group]>&:last-child,_[data-flux-button-group]_:last-child>&)]:border-r-0 dark:[:is([data-flux-button-group]>&:last-child,_[data-flux-button-group]_:last-child>&)]:border-l-[1px] [:is([data-flux-button-group]>&:not(:first-child),_[data-flux-button-group]_:not(:first-child)>&)]:border-l-[color-mix(in_srgb,var(--color-accent-foreground),transparent_85%)] *:transition-opacity [&[disabled]>:not([data-flux-loading-indicator])]:opacity-0 [&[disabled]>[data-flux-loading-indicator]]:opacity-100 [&[disabled]]:pointer-events-none lg:px-10"
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
                                            <span
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
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
  <label className="btn btn-primary active">
    <input type="radio" name="options" id="option1" autoComplete="off" checked /> Active
  </label>
  <label className="btn btn-primary">
    <input type="radio" name="options" id="option2" autoComplete="off" /> Radio
  </label>
  <label className="btn btn-primary">
    <input type="radio" name="options" id="option3" autoComplete="off" /> Radio
  </label>
</div>
            </section>

        </>
    )
}

export default Block2