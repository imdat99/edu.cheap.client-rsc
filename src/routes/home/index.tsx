import { client } from "api/rpcclient";
import { HomeCounter } from "./HomeCounter";
import Block2 from "./Block2";
export default function Home() {
  return (
    <main className="[grid-area:main] 0 [[data-flux-container]_&]:px-0  relative">
      <section className="bg-dark py-20 banner-home">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                <div className="col-span-1">
                    <h1 className="text-white mb-4 text-3xl xl:text-5xl font-bold">
                        Nhanh<span className="text-primary d-inline-block">, </span>Ổn định<span className="text-primary d-inline-block">, </span>Miễn phí
                    </h1>
                    <p className="text-white text-opacity-75 mb-8 max-w-3xl ">
                        Tăng tốc website, tối ưu hiệu suất kinh doanh, bứt phá mọi giới hạn - giải pháp lưu trữ toàn diện từ Tino Group đã làm hài lòng <span className="text-success"> 100.000+ khách hàng</span> trong nhiều lĩnh vực khác nhau từ năm 2019 đến nay.  Trải nghiệm ngay nhé!

                    </p>
                    <div className="flex items-center gap-5 flex-wrap">
                        <a href="/cart/hosting-nvme?product_id=2090&amp;period=p5" rel="noreferrer noopener nofollow" target="_blank" className="btn btn-secondary btn-lg">
                            <span className="btn-arrow__text">
                                Dùng thử miễn phí
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </a>
                        <a rel="nofollow" href="#service-area" className="btn btn-outline-primary bg-white/5 dark:bg-white/5 btn-lg transition">
                            <span className="btn-arrow__text">
                                Dịch vụ của chúng tôi
                                <span className="btn-arrow__icon">
                                    <i className="las la-arrow-right"></i>
                                </span>
                            </span>
                        </a>
                    </div>

                    
                </div>
                <div className="col-span-1 justify-center hidden md:flex">
                    <img src="images/student_group.png" alt="image" className="img-fluid" />
                </div>
            </div>
        </div>
    </section>
    <Block2 />
      <HomeCounter />
    </main>
  );
}
export const loader = async () => {
  return import.meta.env.SSR ? {
    fallback: {
      count: await client.getCounter(),
    },
  } : {};
};