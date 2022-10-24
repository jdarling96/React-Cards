import { useState } from "react";

const useFlip = (initialValue = true) => {
    const [flip, setFlip] = useState(initialValue)
    const toggle = () => {
        setFlip(flip => !flip)
    }

    return [flip, toggle];

}

export default useFlip