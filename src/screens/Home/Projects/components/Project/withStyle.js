import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  width: 100%;
  height: 100%;
  background-color: ${themeGet("colors.navy")};
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: ${themeGet("colors.navyShadow")};
  }

  .project-title {
    height: 20%;
    padding: 4% 10%;
    display: flex;
    justify-content: space-between;

    svg {
      width: 30px;
      &:hover {
        color: ${themeGet("colors.yellow")};
      }
    }

    .green {
      color: ${themeGet("colors.yellow")};
    }
  }
  .project-body {
    height: 60%;
    padding: 5% 10%;
  }
  .project-footer {
    display: flex;
    overflow: hidden;
    list-style: none;
    justify-content: space-between;
    padding: 0 20px;

    li {
      position: relative;
      padding-left: 15px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: ${themeGet("colors.slate")};
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }

  h3 {
    color: ${themeGet("colors.navyShadow")};
    padding-bottom: 7px;
  }
`
