import Button from "./Button"


function Info({info}) {
        return (
         <>
            <img src={info.image} alt={info.name} />
            <h2>{info.name}</h2>
            <Button info={info}/>
         </> 
     ) 
        
}

export default Info