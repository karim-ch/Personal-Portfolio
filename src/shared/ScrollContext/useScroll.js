import { useCallback, useState } from "react"
import { isArray, isEmpty, isPlainObject, isEqual } from "lodash"

const useScroll = ({ initials }) => {
  const [filters, setFilters] = useState(initials)

  const clearFilters = (...filtersToClear) => {
    if (isEmpty(filtersToClear)) {
      return setFilters({ ...initials })
    }
    const newFilters = filtersToClear.reduce(
      (acc, filter) => ({ ...acc, [filter]: initials[filter] }),
      {}
    )

    return setFilters({ ...filters, ...newFilters })
  }

  const setFilter = useCallback(
    key => value => {
      const oldFilterValue = filters[key]
      if (isPlainObject(oldFilterValue)) {
        setFilters({ ...filters, [key]: { ...oldFilterValue, ...value } })
      }
      if (isArray(oldFilterValue)) {
        setFilters({ ...filters, [key]: [...value] })
      } else {
        setFilters({ ...filters, [key]: value })
      }
    },
    [filters]
  )

  return {
    filters,
    clearFilters,
    setFilter,
    changed: !isEqual(filters, initials),
  }
}

export default useScroll
