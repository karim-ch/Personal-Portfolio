import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  position: fixed;
  bottom: 0;
  left: 3%;
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
    color: ${themeGet("colors.slate")};
    text-decoration: none;
    transition: all 0.4s;

    &:hover {
      transform: translateY(-7px);
      color: ${themeGet("colors.yellow")};
    }
  }

  svg {
    margin-bottom: 2rem;
    width: 2rem;
    height: 2rem;
  }
`
