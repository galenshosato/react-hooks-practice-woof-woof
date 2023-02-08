

function Button ({info, setInfo}) {
    
    function handleGoodClick(event) {
        fetch(`http://localhost:3001/pups/${info.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ isGoodDog: !info.isGoodDog }
            )

        })
        .then(resp=>resp.json())
        .then(updated => setInfo(updated))
        }
        


    return (
        <button onClick={handleGoodClick}>{info.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
    )
}

export default Button