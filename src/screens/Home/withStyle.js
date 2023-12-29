import styled from "styled-components"
import { themeGet } from "@styled-system/theme-get"

export default component => styled(component)`
  .section {
    padding: 0 20%;
  }

  @media (max-width: ${themeGet("devices.sizes.medium")}px) {
    .section {
      padding: 0 8%;
    }
  }
`
