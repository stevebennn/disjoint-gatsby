import React, { useEffect, useState } from 'react'

const ProductOptions = ({ options, setVariant, variants }) => {
  // State to keep track of selected options, ie: size and color
  const [localOptions, setLocalOptions] = useState(null)

  // Set initial state on mount to match the first value of each of the product's options
  useEffect(() => {
    let initialState = {}
    options.forEach(option => {
      initialState = { ...initialState, [option.name]: option.values[0] }
    })
    setLocalOptions(initialState)
  }, [])

  // Each time you click an option, find the variant and setVariant
  useEffect(() => {
    localOptions && setVariant(findVariant())
  }, [localOptions])

  // Find the variant based of what options have been selected
  const findVariant = () => {
    let result
    variants.forEach(variant => {
      const stateValues = Object.values(localOptions)
      const variantMatch = stateValues.filter(stateOption =>
        variant.title.includes(stateOption)
      )
      // If variant title includes all the values in localOptions, return the variant
      if (stateValues.length === variantMatch.length) {
        result = variant
      }
    })
    return result
  }
  return (
    <div>
      {options.map((option, index) => {
        return (
          <div key={option.name + index}>
            <label>{option.name}</label>
            <select
              onChange={e =>
                setLocalOptions({
                  ...localOptions,
                  [option.name]: e.target.value,
                })
              }
              name={option.name}
              id={option.name}
            >
              {option.values.map((value, index) => (
                <option key={value + index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        )
      })}
    </div>
  )
}
export default ProductOptions
