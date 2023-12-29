import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  font-family: var(--font-sans);
  max-width: 900px;

  a {
    color: ${themeGet("colors.yellow")};

    &:hover {
      text-decoration: underline;
    }
  }

  .img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
    float: left;
    margin-right: 20px;
  }

  p {
    line-height: 28px;
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 240px);
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: "▰";
        position: absolute;
        left: 0;
        color: ${themeGet("colors.yellow")};
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`
