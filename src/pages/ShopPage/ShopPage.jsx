import React from 'react';

import {SHOP_DATA as ShopData} from './shopData';
import CollectionPreview from "../../components/preview collection/CollectionPreview";


function ShopPage() {
    console.log(ShopData);
    return (
        <div className='shop-page'>
        { ShopData.map( ({id, ...data}) => (

            <CollectionPreview key={id} {...data}/>
        ))}
        </div>
    )
}

export default ShopPage
