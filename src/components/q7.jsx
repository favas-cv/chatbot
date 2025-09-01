import React, { useEffect, useState } from 'react'

function Jokefetch() {
    const [joke, setjoke] = useState({});
    const [load, setload] = useState(false);
    function getjoke() {
        setload(true)
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(res => res.json())
            .then(datas => {
                setjoke(datas)
                setload(false);
            });
    }
    useEffect(() => {
        getjoke();

    }, []);

    function fresh() {
        getjoke();
    }
    return (
        <>
            {load ? (<p>loading</p>) : (<ul>
                <li>{joke.setup}</li>
                <li>{joke.punchline}</li>

            </ul>)}
            <button onClick={fresh}>{load ? 'loading' : 'refresh'}</button>

        </>)
}

export default Jokefetch