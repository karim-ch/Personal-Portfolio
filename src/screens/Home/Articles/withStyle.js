import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  margin-top: 10vh;
  font-family: var(--font-sans);

  .heading {
    max-width: 900px;
    font-size: var(--fz-xxl);

    &--sm {
      &:after {
        display: none;
      }
    }
  }

  .articles-container {
    .articles {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20px;
    }

    .article-item {
      display: flex;
      flex: 1 0 32%;
      box-sizing: border-box;
      padding: 10px;
      margin-left: 10px;
      margin-top: 10px;
    }
  }

  @media (max-width: ${themeGet("devices.sizes.large")}px) {
    .articles-container {
      .article-item {
        flex: 1 0 48%;
      }
    }
  }

  @media (max-width: ${themeGet("devices.sizes.medium")}px) {
    .line {
      &:after {
        width: 5vw;
      }
    }
    .articles-container {
      .article-item {
        flex: 1 0 100%;
      }
    }
  }

  .btn-container {
    text-align: center;
    .btn-see-more {
      &:link,
      &:visited {
        color: ${themeGet("colors.slate")};
        display: inline-block;
        text-decoration: none;
        border: 1px solid ${themeGet("colors.slate")};
        font-family: var(--font-mono);
        transition: all 0.2s;
        text-align: center;
        padding: 7px 20px;
        border-radius: 3px;
      }

      &:hover {
        box-shadow: 0 0.4rem 0.5rem rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
        .learn {
          animation: moveToLeft ease-in-out;
          animation-duration: 0.3s;
          animation-fill-mode: forwards;
        }

        .arrow {
          animation: appearFromLeft ease-in-out;
          animation-duration: 0.3s;
          animation-fill-mode: forwards;
        }
      }

      &:active {
        transform: translateY(-1px);
        box-shadow: 0 5px 1px rgba(0, 0, 0, 0.2);
      }
    }

    .learn {
      transform: translateX(5px);
    }

    .arrow,
    .learn {
      display: inline-block;
    }

    .arrow {
      opacity: 0;
      svg {
        width: 10px;
        height: 10px;
        fill: ${themeGet("colors.slate")};
      }
    }
  }

  @keyframes appearFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-30px);
    }
    100% {
      transform: translateX(2px);
      opacity: 1;
    }
  }

  @keyframes moveToLeft {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translateX(-10px);
    }
  }
`
