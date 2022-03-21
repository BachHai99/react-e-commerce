import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "Trung tâm DITAGIS là một trong những đơn vị tiên phong trong việc nghiên cứu khoa học và chuyển giao công nghệ thuộc lĩnh vực Thông tin Địa lý (GIS) tại Việt Nam. Chủ trì và tham gia nhiều đề tài, dự án cấp Nhà nước, cấp Bộ/ĐHQG, cấp Tỉnh/Thành phố và nhiều dự án quốc tế.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "Luôn nhận thức về trách nhiệm và vai trò của mình trong sự nghiệp phát triển của nhà Trường và của đất nước, Trung tâm DITAGIS dưới sự hướng dẫn của các nhà khoa học đầu ngành không ngừng nỗ lực phát triển đội ngũ nhân lực chất lượng cao trong lĩnh vực GIS và Môi trường",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "Trung tâm Công nghệ Thông tin Địa lý (DITAGIS) là Trung tâm khoa học - công nghệ trực thuộc và chịu sự quản lý của Trường Đại học Bách Khoa TP.HCM, được thành lập theo Quyết định số 3029/GD&ĐT ngày 20/10/1994 của Bộ Giáo dục và Đào tạo.",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
