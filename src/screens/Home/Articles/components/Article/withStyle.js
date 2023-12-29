import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  width: 100%;
  background-color: ${themeGet("colors.navy")};
  display: flex;
  flex-direction: column;

  a {
    text-decoration: none;
    color: ${themeGet("colors.navyShadow")};
  }

  .article-title {
    height: 25vh;
    display: flex;
    .article-title-img {
      width: 100%;
      object-fit: cover;
      border-radius: 3px;
    }
  }
  .article-body {
    min-height: 35vh;

    padding: 5% 1%;
    > p {
      color: ${themeGet("colors.navyShadow")};
      font-size: 1.3rem;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-line-clamp: 7; /* Adjust the number of lines to show */
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: justify;
    }
  }
  .article-footer {
    display: flex;
    flex-direction: row;
    &-icon {
      width: 20%;
      display: flex;
      justify-content: left;
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }

  h3 {
    color: ${themeGet("colors.navyShadow")};
    padding-bottom: 7px;
  }
`
