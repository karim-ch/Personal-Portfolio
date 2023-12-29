import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  min-height: 55vh;
  margin-top: 10vh;
  padding: 0 20%;

  .article-title {
    margin-bottom: 2vh;
    font-size: var(--fz-article-title);
  }
  .article-title-cover-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .article-title-cover {
      margin: 4vh 0;
      max-height: 70vh;
      width: 68%;
      object-fit: cover;
    }
  }

  .article-body {
    margin-bottom: 15vh;
    .code {
      margin: 3vh 0;
      font-size: var(--fz-xs);
    }
    .slice {
      font-family: var(--font-sans);
      > p {
        margin-bottom: 2vh;
        text-align: justify;
        line-height: 1.6;
      }
      em {
        background-color: ${themeGet("colors.lightenGrey")};
      }
      a {
        text-decoration: underline;
      }
    }
  }
`
