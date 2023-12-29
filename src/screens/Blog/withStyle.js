import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  min-height: 55vh;
  margin-top: 30vh;
  text-align: center;

  button {
    border: 1px solid ${themeGet("colors.slate")};
    color: ${themeGet("colors.slate")};
    background-color: transparent;
    padding: 20px 45px;
    border-radius: 4px;
    font-family: var(--font-mono);
    margin-top: 30px;
    &:hover {
      box-shadow: 0 0.4rem 0.5rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
  }
`
