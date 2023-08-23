import useIncrement from "../hooks/useIncrement";

function CountTwo() {
    const [count,increase] = useIncrement(2);
    
    return (
        <>
        <p>Count: {count}</p>
        <button onClick={increase}>add 2</button>
        </>
    )
}

export default CountTwo;