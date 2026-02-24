import { useEffect, useRef } from 'react'

const AutoFocusInput = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus(); //Directly access DOM
    }, []);

    return (
        <input placeholder='Type here...' ref={inputRef} />
    )
}

export default AutoFocusInput