import React from "react";
import styled from "styled-components";
import { useClock } from "../customHook/useClock";

const Footer = () => {
  const [time, ampm] = useClock();
  return (
    <Wrapper>
      <div className="copy-right">
        <h5>
          &copy; {new Date().getFullYear()}
          <span>DITAGIS</span>
        </h5>
        <h5>All rights reserved</h5>
      </div>
      <div
        style={{
          backgroundColor: "#222",
          fontSize: "1rem",
          display: "inline-block",
          padding: "0.3rem",
          color: "hsl(22, 31%, 88%)",
        }}
      >
        {time}
        <span>{ampm}</span>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  height: 5rem;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }

  .copy-right {
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
`;

export default Footer;
