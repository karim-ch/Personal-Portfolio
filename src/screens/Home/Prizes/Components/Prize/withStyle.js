import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px 0;
  flex-direction: ${({ odd }) => (odd ? "row" : "row-reverse")};
  text-align: ${({ odd }) => (odd ? "left" : "right")};

  a {
    text-decoration: none;
  }

  .text-container {
    width: 45%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: ${({ odd }) => (!odd ? "flex-end" : "flex-start")};

    .type {
      color: ${themeGet("colors.yellow")};
    }

    .title {
      color: ${themeGet("colors.slate")};
      transition: all 0.3s;

      &:hover {
        text-decoration: underline;
        color: ${themeGet("colors.yellow")};
      }
    }

    > p {
      background-color: ${themeGet("colors.navy")};
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);

      padding: 20px;
      width: 120%;
      z-index: 1;
      margin: 15px 0;
    }
  }

  .image-container {
    width: 55%;

    img {
      width: 100%;
      max-height: 350px;
      object-fit: cover;
      object-position: center;
    }
  }

  @media (max-width: ${themeGet("devices.sizes.medium")}px) {
    text-align: center;
    position: relative;

    .image-container {
      width: 100%;

      &:before {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        transition: all 0.2s;
        top: 0;
        left: 0;
        background-color: ${themeGet("colors.navy")};
      }

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        object-position: center;
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1) blur(1px);
        opacity: 0.7;
      }
    }

    .text-container {
      padding: 30px;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;

      .type {
        color: ${themeGet("colors.yellow")};
      }

      .date {
        color: ${themeGet("colors.white")};
      }

      .title {
        color: ${themeGet("colors.yellow")};
        transition: all 0.3s;

        &:hover {
          text-decoration: underline;
          color: ${themeGet("colors.yellow")};
        }
      }

      > p {
        padding: 0;
        background-color: transparent;
        color: ${themeGet("colors.white")};
        box-shadow: none;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 7; /* number of lines to show */
        -webkit-box-orient: vertical;
      }
    }
  }
`
