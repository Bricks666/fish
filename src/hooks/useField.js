import { useCallback, useState } from "react"

export const useField = (defaultValue = "") => {
    const [value, setValue ]= useState(defaultValue)

    const onChange = useCallback((evt) => {
        setValue(evt.target.value)
    }, [])

    const reset = useCallback(() => { 
        setValue(defaultValue)
    }, [defaultValue])

    return { value, onChange, reset }
}