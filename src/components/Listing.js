import React from 'react'
import PropTypes from 'prop-types'

function Listing({ items }) {
    if (!items) {
        return null;
    }

    if(items.state === 'removed') {
        return null;
    }

    const maxLength = 50;
    let text = String(items.title);
    if (text.length > maxLength) {
        text = `${text.slice(0, maxLength + 1)}...`;
    }

    let priceWithCurrency = '';
    if (items.currency_code === 'USD') {
        priceWithCurrency = `$ ${items.price}`;
    } else if (items.currency_code === 'EUR') {
        priceWithCurrency = `€ ${items.price}`;
    } else {
        priceWithCurrency = `${items.price} ${items.currency_code}`;
    }

    const itemsQuantity = items.quantity;
    let quantityClassName = 'item-quantity ';
    if (itemsQuantity < 10) {
        quantityClassName += 'level-low'
    } else if (itemsQuantity <= 10) {
        quantityClassName += 'level-medium'
    } else {
        quantityClassName += 'level-high'
    }
    
  return (
        <div className="item">
            <div className="item-image">
                <a href={items.url}>
                    <img src={items.MainImage?.url_570xN} alt={items.title}></img>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{text}</p>
                <p className="item-price">{priceWithCurrency}</p>
                <p className={quantityClassName}>{items.quantity} left</p>
            </div>
        </div>
  )
}

Listing.defaultProps = {
    items: []
}

Listing.propTypes = {
    items: PropTypes.object
}

export default Listing
