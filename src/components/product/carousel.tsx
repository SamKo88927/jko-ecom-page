import { Swiper, SwiperSlide } from "swiper/react";
// import "./banner.scss"
// import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "./pagination.scss";
// import { cn } from "../../lib/utils";

// const productImage = [
//   {
//     url: "https://shoplineimg.com/5eb233ef887c44005422cc79/63a2fd865df256001a895b12/800x.webp?source_format=jpg",
//   },
//   {
//     url: "https://shoplineimg.com/5eb233ef887c44005422cc79/6152cbff7251ea001a0f2776/800x.webp?source_format=jpg",
//   },
//   {
//     url: "https://shoplineimg.com/5eb233ef887c44005422cc79/6152e5d1b3f398001d76ae25/800x.webp?source_format=jpg",
//   },
//   {
//     url: "https://shoplineimg.com/5eb233ef887c44005422cc79/63a30161651f2e0014dc328c/800x.webp?source_format=jpg",
//   },
// ];
export interface CarouselImageType {
  id: string;
  url: string;
  altName?: string;
}
interface CarouselProps {
  data: CarouselImageType[];
}
// const defaultImg = productImage[0];
const Carousel = ({ data }: CarouselProps) => {
  return (
    <Swiper
      autoplay={{
        delay: 200,
      }}
      loop={true}
      className="min-w-[375px] min-h-[375px] customerCarousel"
      pagination={{
        type: "fraction",
      }}
      modules={[Pagination]}
    >
      {data?.map((i, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center">
          <img src={i.url} alt={i?.altName} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
