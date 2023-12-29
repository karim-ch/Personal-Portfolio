import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  height: 88vh;
  position: relative;
  width: 100%;

  .container {
    width: 100%;
    position: absolute;
    top: 42%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    filter: url(#threshold) blur(0.6px);

    .text1,
    .text2 {
      position: absolute;
      left: 0;
      width: 100%;
      display: inline-block;
      font-size: var(--fz-name);
      text-align: center;
      user-select: none;
      font-family: var(--font-sans);
      font-weight: bolder;
      color: ${themeGet("colors.slate")};
    }
  }

  .scroll__down {
    width: 100%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);

    display: flex;
    align-items: center;
    flex-direction: column;
    animation: appear 4.5s ease-in;

    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .scroll {
        font-family: var(--font-mono);
        letter-spacing: 1px;
        color: ${themeGet("colors.slate")};
        font-weight: normal;
        margin-bottom: 4px;
      }

      .mouse {
        width: 3px;
        padding: 8px 13px;
        height: 35px;
        border: 2px solid #000;
        border-radius: 25px;
        opacity: 0.75;
        box-sizing: content-box;

        .scroller {
          width: 3px;
          height: 12px;
          border-radius: 25%;
          background-color: #000;
          animation-name: scroll;
          animation-duration: 2.2s;
          animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
          animation-iteration-count: infinite;
        }
      }
    }
  }

  @keyframes scroll {
    0% {
      opacity: 0;
    }
    10% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }
`
