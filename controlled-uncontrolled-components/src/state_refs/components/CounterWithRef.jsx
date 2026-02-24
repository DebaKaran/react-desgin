import { useRef, useState } from 'react'

const CounterWithRef = () => {
    const counterRef = useRef(0); // persists between renders
    const [count, setCount] = useState(0); //forcing rendering

    const incrementUsingState = () => {
        //setCount(prev => prev + 1);
        setCount(count + 1);
        console.log("State Count: ", count);

    }

    const incrementUsingRef = () => {
        counterRef.current = counterRef.current + 1; //update ref
        console.log("Ref Count: ", counterRef.current);

    }

    return (
        <>
            <div>
                <h2>Ref Count: {counterRef.current}</h2>
                <button onClick={incrementUsingRef}>Increment Ref Count</button>
            </div>

            <div>
                <h2>Ref Count: {count}</h2>
                <button onClick={incrementUsingState}>Increment State Count</button>
            </div>
        </>
    )
}

export default CounterWithRef