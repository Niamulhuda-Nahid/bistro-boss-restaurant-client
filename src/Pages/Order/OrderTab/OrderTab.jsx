import React from 'react';
import ItemCard from '../../../components/ItemCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-7 mt-10'>
            {
               items.map(item => <ItemCard key={item._id} item={item}></ItemCard>)
            }
        </div>
    );
};

export default OrderTab;