import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  position: fixed;
  bottom: 0;
  right: 3%;
  display: inline-flex;
  flex-direction: column;

  &:after {
    content: "";
    height: 15vh;
    width: 1px;
    border-left: solid 1px ${themeGet("colors.slate")};
    align-self: center;
  }

  a {
    writing-mode: vertical-rl;
    color: ${themeGet("colors.slate")};
    font-size: var(--fz-xs);
    letter-spacing: 1.3px;
    font-weight: 400;
    margin-bottom: 2rem;
    transition: all 0.4s;

    &:hover {
      transform: translateY(-7px);
      color: ${themeGet("colors.yellow")};
    }
  }
`
