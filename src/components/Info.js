import Button from "./Button"


function Info({info, setInfo}) {
        return (
         <>
            <img src={info.image} alt={info.name} />
            <h2>{info.name}</h2>
            <Button info={info} setInfo={setInfo}/>
         </> 
     ) 
        
}

export default Info