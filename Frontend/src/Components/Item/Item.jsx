import './Item.css'
import '../../Assets/data';

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt="Items_images" />

        <p>{props.name}</p>

        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
      
    </div>
  )
}

export default Item
