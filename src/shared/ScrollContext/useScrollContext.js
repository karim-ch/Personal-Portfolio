import { useContext } from "react"
import Context from "./context"

export default function useScrollContext() {
  return useContext(Context)
}
