import { useState } from 'react'
function useIncrement(addAmount) {
    const [count, setCount] = useState(0)

    const increase = () => {
        setCount((prev) => (prev + addAmount));
    }

    return [count, increase]
}

export default useIncrement;