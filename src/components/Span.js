

function Span ({pups, onHandleClick}) {
    return (pups.map(pup => {
             return (
                 <span key ={pup.id} onClick={() => onHandleClick(pup.id)}>{pup.name}</span>
                )
            })
        
    )
}

export default Span