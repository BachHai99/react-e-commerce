import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Trung tâm Công nghệ Thông tin Địa lý (Center for Developing
            Information Technology And Geographic Information System - DITAGIS)
            là Trung tâm khoa học - công nghệ trực thuộc và chịu sự quản lý của
            Trường Đại học Bách Khoa TP.HCM, được thành lập theo Quyết định số
            3029/GD&ĐT ngày 20/10/1994 của Bộ Giáo dục và Đào tạo.
          </p>
          <p>
            Trung tâm DITAGIS là một trong những đơn vị tiên phong trong việc
            nghiên cứu khoa học và chuyển giao công nghệ thuộc lĩnh vực Thông
            tin Địa lý (GIS) tại Việt Nam. Trung tâm Công nghệ Thông tin Địa lý
            đã chủ trì và tham gia nhiều đề tài, dự án cấp Nhà nước, cấp
            Bộ/ĐHQG, cấp Tỉnh/Thành phố và nhiều dự án quốc tế. Những kết quả
            nghiên cứu đều được triển khai ứng dụng thực tế tại các địa phương
            và góp phần nâng cao hiệu quả quản lý trong lĩnh vực kinh tế, xã hội
            và môi trường.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
