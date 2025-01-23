import { useState } from "react"

export default function Button() {
    const [count, setCount] = useState(0)
    return (
        <button className="px-4 py-2 rounded  text-white" onClick={() => setCount(count + 1)}>Click {count}</button>
    )
}