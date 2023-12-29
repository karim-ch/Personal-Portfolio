import styled, { css } from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 9;
  top: 0;
  animation: slideFromBottom 0.5s ease-in-out;
  animation-fill-mode: both;
  background-color: ${themeGet("colors.darkNavy")};
  font-size: var(--fz-lg);

  ${({ isDrawerBeingClosed }) =>
    isDrawerBeingClosed &&
    css`
      animation: slideToTop 0.49s ease-in-out;
    `}

  .drawer-sections {
    width: 100%;
    list-style: none;
    padding: 0;
    text-align: center;
    margin-top: 18vh;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    text-align: -webkit-center;

    .menu {
      color: ${themeGet("colors.lightGrey")};
      letter-spacing: 1px;
      font-size: var(--fz-sm);
    }

    .li {
      margin: 1rem;
      font-size: var(--fz-drawer-item);
      font-weight: bold;
      color: ${themeGet("colors.lightGrey")};
      transition: all 0.3s;
      position: relative;
      display: inline;

      &--active {
        color: ${themeGet("colors.navy")};
        &:before {
          content: "";
          width: 10rem;
          height: 1rem;
          position: absolute;
          top: 50%;
          transform: translateX(-120%);
          background-color: white;
          animation: none !important;
        }
      }

      &:hover {
        color: ${themeGet("colors.navy")};
        &:before {
          content: "";
          width: 10rem;
          height: 1rem;
          position: absolute;
          top: 50%;
          transform: translateX(-120%);
          background-color: white;
          animation: left 1s;
        }
      }
    }
  }

  @keyframes slideFromBottom {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translate(0);
    }
  }

  @keyframes slideToTop {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translateY(-100vh);
    }
  }

  @keyframes left {
    0% {
      transform: translateX(-200%);
    }
    100% {
      transform: translateX(-120%);
    }
  }
`
