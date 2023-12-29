import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  margin-top: 20vh;
  margin-bottom: 20vh;
  font-family: var(--font-sans);
  text-align: center;
  text-align: -webkit-center;

  .heading {
    font-size: var(--fz-xxl);
    &:after {
      display: none;
    }
    justify-content: center;
  }

  .contact {
    max-width: 620px;
    text-align: center;
    text-align: -webkit-center;

    .phone__container {
      font-size: var(--fz-xs);
      .phone {
        font-style: italic;
      }
    }

    .contact-btn {
      border: 1px solid ${themeGet("colors.slate")};
      color: ${themeGet("colors.slate")};
      background-color: transparent;
      padding: 13px;
      border-radius: 4px;
      font-family: var(--font-mono);
      margin-top: 30px;
      transition: all 0.2s;

      &:hover {
        box-shadow: 0 0.4rem 0.5rem rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
      }
    }
  }
`
