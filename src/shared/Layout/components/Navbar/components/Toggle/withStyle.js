import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  position: relative;
  width: 30px;
  height: 20px;
  border-radius: 40px;

  input[type="checkbox"] {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
  }

  span {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    opacity: 1;
    background-color: ${themeGet("colors.white")};
    border-radius: 40px;
    transition: 0.2s ease background-color, 0.2s ease opacity;
  }

  span:before,
  span:after {
    content: "";
    position: absolute;
    top: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    transition: 0.5s ease transform, 0.2s ease background-color;
  }

  span:before {
    background-color: ${themeGet("colors.white")};
    transform: translate(-11px, 0px);
    z-index: 1;
  }

  span:after {
    background-color: ${themeGet("colors.darkNavy")};
    transform: translate(4px, 0px);
    z-index: 0;
  }

  input[type="checkbox"]:checked + span {
    background-color: #2e2f30;
  }

  input[type="checkbox"]:active + span {
    opacity: 0.5;
  }

  input[type="checkbox"]:checked + span:before {
    background-color: #2e2f30;
    transform: translate(5px, -2px);
  }

  input[type="checkbox"]:checked + span:after {
    background-color: ${themeGet("colors.white")};
    transform: translate(11px, 0px);
  }
`
