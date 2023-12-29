import styled from "styled-components"

export default component => styled(component)`
  margin-top: 15vh;
  font-family: var(--font-sans);

  .heading {
    max-width: 900px;
    font-size: var(--fz-xxl);
    &:after {
      display: none;
    }
  }
`
