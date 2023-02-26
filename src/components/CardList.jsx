
import { Card } from "./Card"


export const CardList = ({ list })=>{
if (!list) {
    return <span>No hay productos, vuelva mas tarde.</span>
    
}
// console.log(list);
return(
        <div className="cards">
        {
        list.map((product)=> (
            
            <Card key={`${product.id}`} product={product} />
         ) )  
        }

    </div>
)
}