import styled, { css } from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  display: flex;
  flex-direction: row;
  height: 7rem;
  justify-content: space-between;
  align-items: center;
  font-family: var(--font-sans);
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: transparent;

  .logo {
    padding: 0 3rem;
    display: flex;
    align-items: center;
    transition: all 0.3s;
    color: ${({ drawerVisible }) =>
      drawerVisible ? themeGet("colors.lightGrey") : themeGet("colors.black")};

    &:hover {
      color: ${({ drawerVisible }) =>
        drawerVisible ? themeGet("colors.navy") : themeGet("colors.lightGrey")};
      svg {
        fill: ${({ drawerVisible }) =>
          drawerVisible
            ? themeGet("colors.navy")
            : themeGet("colors.lightGrey")};
      }
    }

    svg {
      transition: all 0.3s;
      width: 5.3rem;
      height: 5.3rem;
      fill: ${({ drawerVisible }) =>
        drawerVisible
          ? themeGet("colors.lightGrey")
          : themeGet("colors.black")};
    }

    .me {
      .name {
        display: block;
        letter-spacing: 0.9px;
        font-size: var(--fz-lg);
        font-weight: 600;
      }
      .job {
        display: block;
        letter-spacing: 1.2px;
        font-size: var(--fz-xxs);
        font-weight: 500;
      }
    }
  }

  .burger {
    background: none;
    border: none;
    display: flex;
    padding: 0 3rem;
    align-items: center;
    color: ${({ drawerVisible }) =>
      drawerVisible ? themeGet("colors.lightGrey") : themeGet("colors.black")};

    span {
      font-weight: 600;
      margin-right: 1rem;
      letter-spacing: 1px;
      transition: all 0.3s;
    }

    svg {
      transition: all 0.3s;
      width: 2.5rem;
      height: 2.8rem;
      fill: ${({ drawerVisible }) =>
        drawerVisible
          ? themeGet("colors.lightGrey")
          : themeGet("colors.black")};
    }

    ${({ drawerVisible }) => {
      return drawerVisible
        ? css`
            &:hover svg {
              transform: rotate(90deg);
            }
          `
        : css`
            &:hover svg #top {
              transform: translateY(-3rem);
            }
            &:hover svg #bottom {
              transform: translateY(3rem);
            }
          `
    }}

    &:hover {
      color: ${({ drawerVisible }) =>
        drawerVisible ? themeGet("colors.navy") : themeGet("colors.lightGrey")};
      svg {
        fill: ${({ drawerVisible }) =>
          drawerVisible
            ? themeGet("colors.navy")
            : themeGet("colors.lightGrey")};
      }
    }
  }
`
