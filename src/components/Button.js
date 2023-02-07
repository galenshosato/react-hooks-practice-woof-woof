

function Button ({info}) {
    function handleGoodClick(event) {
        fetch(`http://localhost:3001/pups/${info.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                //figure out what goes in here
            }
            )

        })
        .then(resp=>resp.json())
        .then(data => console.log(data))
        
        
    }

    return (
        <button onClick={handleGoodClick}>{//This needs to be controlled with state? "Good Dog!" : "Bad Dog!"}</button>
    )
}

export default Button