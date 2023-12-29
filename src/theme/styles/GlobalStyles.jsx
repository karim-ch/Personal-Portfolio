import { memo } from "react"
import { createGlobalStyle } from "styled-components"
import themeGet from "@styled-system/theme-get"
import Fonts from "./fonts"
import reset from "./reset"
import scrollbar from "./scrollbar"

const globalStyles = createGlobalStyle`
  ${reset}
  ${scrollbar}
  ${Fonts};

  :root {
    position: relative;
    background-color: ${themeGet("colors.navy")};
    
    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    
    // Root font size
    font-size: 10px;

    --fz-xxs: 1.2rem;
    --fz-xs: 1.3rem;
    --fz-sm: 1.4rem;
    --fz-md: 1.6rem;
    --fz-lg: 1.8rem;
    --fz-xl: 2.0rem;
    --fz-xxl: 2.2rem;
    --fz-heading: 3.2rem;
    --fz-description: 4rem;
    --fz-drawer-item: 7rem;
    --fz-name: 9rem;
    --fz-article-title: 4.2rem;
    
    @media (max-width: ${themeGet("devices.sizes.medium")}px) {
      --fz-xxs: 1rem;
      --fz-xs: 1.1rem;
      --fz-sm: 1.2rem;
      --fz-md: 1.4rem;
      --fz-lg: 1.6rem;
      --fz-xl: 1.8rem;
      --fz-xxl: 2.0rem;
      --fz-heading: 3.0rem;
      --fz-description: 3rem;
      --fz-drawer-item: 5rem;
      --fz-name: 6rem;
    }
  }

  body {
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: ${themeGet("colors.slate")};
    font-family: var(--font-sans); 
    font-size: var(--fz-md);
    line-height: 1.3;
  }

  a {
    text-decoration: none;
    color: ${themeGet("colors.slate")};
  }
  
  section {
    .heading {
      margin: 1rem 0 4rem;
      width: 100%;
      display: flex;
      align-items: center;
      white-space: nowrap;
      
      &:after {
        content: "";
        display: block;
        width: -webkit-fill-available;
        height: 1px;
        margin: 0 2rem;
        background-color: ${themeGet("colors.lightestNavy")};
      }
    }
    
     p {
      margin: 0 0 15px 0;
      &:last-child,
      &:last-of-type {
        margin: 0;
      }
    }
  }

`

export default memo(globalStyles)
