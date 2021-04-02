import ProductFrame from '../../ProductFrame'
import products from "../../../data/pancakes"
function Gallery() {
  return (

     <div className="promoted-wrapper">

         {products.map((prod,index) => (
                <ProductFrame product={prod} key={index}/>
              
         ))}
       </div>

  )
}

export default Gallery
