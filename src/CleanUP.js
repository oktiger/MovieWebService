import { useState, useEffect } from "react";

function Hello() {
    useEffect(() => {
        console.log('Created :)')
        return () => {console.log("destroyed :(")} // {}는 생략도 가능하다.
    }, [])
    // console.log('test')
    return <h1>Hello</h1>
}


function CleanUP () {
    const [showing, setShowing] = useState(false)
    // prev란 현재상태를 => 다르게 바꿔주는 것 
    const onClick = () => setShowing((prev) => !prev) 
    return (
    <div>
        {showing ? <Hello /> : null}
        <button onClick={onClick}> {showing ? "Hide" : "Show"} </button>
    </div>
    )
}

export default CleanUP;