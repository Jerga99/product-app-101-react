

export function ProductItem({product}) {
 
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img 
            src={product.image}
            alt={product.name}
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <div className="title is-4">{product.name}</div>
          <div>{product.type}</div>
          <div>{product.price} {product.currency}</div>
        </div>
      </div>
    </div>
  )
}