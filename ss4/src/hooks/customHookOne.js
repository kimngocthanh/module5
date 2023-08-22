import useIncrement from "../components/UseIncrement";
function CountOne() {
    const [count,increase] = useIncrement(1);
    
    return (
        <>
        <p>Count: {count}</p>
        <button onClick={increase}>add 1</button>
        </>
    )
}

export default CountOne;