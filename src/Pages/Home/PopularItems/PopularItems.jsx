import React, { useEffect, useState } from 'react';
import Sectiontitle from '../../../components/Sectiontitle';
import ItemCard from '../../../components/ItemCard';
import UseMenu from '../../../hooks/UseMenu';

const PopularItems = () => {
    const [menu] = UseMenu();
    const popularMenu = menu.filter(item => item.category === "popular");

    return (
        <section className='mb-20'>
            <Sectiontitle
                heading={"CHEF RECOMMENDS"}
                subheading={"Should Try"}
            ></Sectiontitle>
            <div className='grid md:grid-cols-4 gap-7'>
                {
                    popularMenu.map(item => <ItemCard
                        key={item._id}
                        item={item}
                    ></ItemCard>)
                }
            </div>
        </section>
    );
};

export default PopularItems;