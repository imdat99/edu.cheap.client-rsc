import React from "react";
import { Link } from "react-router";
import Block2 from "./Block2";
import { HomeCounter } from "./HomeCounter";
import { ArrowRight, ChartLine, DollarSign } from "lucide-react";

const home = () => {
    return (
        <>
            <section className="bg-dark pb-20 pt-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                        <div className="col-span-1 mb-10 md:mb-0">
                            <h1 className="text-white mb-4 text-3xl xl:text-5xl font-bold">
                                Nhanh
                                <span className="text-primary d-inline-block">
                                    ,{" "}
                                </span>
                                Ổn định
                                <span className="text-primary d-inline-block">
                                    ,{" "}
                                </span>
                                Miễn phí
                            </h1>
                            <p className="text-white text-opacity-75 mb-8 max-w-3xl ">
                                Tăng tốc, tối ưu hiệu suất học tập,
                                bứt phá mọi giới hạn.<br/> EduCheap mong muốn làm hài lòng{" "}
                                <span className="text-success">
                                    {" "}
                                    hàng ngàn học viên
                                </span>{" "}
                                trong nhiều lĩnh vực khác nhau. Trải nghiệm ngay nhé!
                            </p>
                            <div className="flex items-center gap-5 flex-wrap">
                                <Link
                                    to="/cart/hosting-nvme?product_id=2090&amp;period=p5"
                                    rel="noreferrer noopener nofollow"
                                    className="btn btn-secondary text-sm transition"
                                >
                                    Bắt đầu ngay
                                    <ArrowRight />
                                </Link>
                                <Link
                                    rel="nofollow"
                                    to="#service-area"
                                    className="btn bg-white/5 text-white text-sm dark:bg-white/5 btn-lg transition"
                                >
                                    Danh sách khoá học
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1 justify-center hidden md:flex relative">
                            <img
                                src="images/student_group.png"
                                alt="image"
                                className="img-fluid"
                            />
                            <div className="absolute text-light bottom-6 right-6 glass-effect rounded-2xl p-2 shadow-lg w-48 z-20">
                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-3 overflow-hidden">
                                        <DollarSign
                                            size={32}
                                            className="text-green-600 text-xl"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            Miễn phí 100%
                                        </div>
                                        <div className="text-sm">
                                            Chi phí 0 đồng
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Block2 />
        </>
    );
};

export default home;
