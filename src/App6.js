import {useState, useEffect} from "react";
// useEffect는 한 동작을 한번만 실행할 수 있도록 한다.

function App6() {
    const [counter, setValue] = useState(0);
    const [keyword, setKeyword] = useState(" ");
    const onChange = (event) => setKeyword(event.target.value);
    const onClick = () => setValue((prev) => prev + 1);
    console.log("i run all the time");
    useEffect(()=> {
        console.log("Call The Api");
    }, [])
    useEffect(()=>{
        if (keyword !== "" && keyword.length > 6) {
            console.log("Search for", keyword)
        }
    }, [keyword])
    return(
        <div>
            <input 
            value={keyword}
            onChange={onChange} 
            type="text"
            placeholder="Search here.." />
            <h1>{counter}</h1>
            <button onClick={onClick}>Click me!</button>
        </div>
    )
}

export default App6;