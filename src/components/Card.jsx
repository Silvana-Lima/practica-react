export const Card = ({ product }) => {

    const { img, title, type, price, onSale, isAvailable } = product;

    return (
        <>
        <div className="card">
            <img src={img} alt={title} width={"200px"}/>
            <h2>{title}</h2>
            <p>{type}</p>
            <p>${price}</p>
            
            {onSale ? <p>OFERTA!!</p>: null }
            {isAvailable ? <button> Add to cart </button> : <button disabled> Not available </button>}
        </div>
       </>
        
    )
}

