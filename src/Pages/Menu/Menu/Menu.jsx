import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Cover/Cover';
import coverImg from '../../../assets/menu/banner3.jpg'
import dessert from '../../../assets/menu/dessert-bg.jpeg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
import salad from '../../../assets/menu/salad-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'
import UseMenu from '../../../hooks/UseMenu';
import Sectiontitle from '../../../components/Sectiontitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = UseMenu();
    const offereds = menu.filter(item => item.category === "offered");
    const desserts = menu.filter(item => item.category === "dessert");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");

    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover 
            image={coverImg}
            title={"OUR Menu"}
            description={"WOULD YOU LIKE TO TRY A DISH?"}
            ></Cover>
            <Sectiontitle heading={"TODAY'S OFFER"} subheading={"Don't miss"}></Sectiontitle>
            <MenuCategory items={offereds}></MenuCategory>
            {/* desserts */}
            <MenuCategory items={desserts} title={"desserts"} description={"Distinctively evisculate premium thinking via progressive e-commerce. Efficiently facilitate high-payoff functionalities for business applications. Authoritatively innovate exceptional strategic theme areas before multimedia based growth strategies. Competently scale cross-platform e-services before seamless processes. Competently disseminate bleeding-edge technologies with team building schemas."} coverImg={dessert}></MenuCategory>
            {/* pizza */}
            <MenuCategory items={pizzas} title={"pizza"} coverImg={pizza} description={"Objectively engage reliable partnerships whereas premier e-commerce. Objectively enhance B2C infrastructures through plug-and-play intellectual capital. Monotonectally re-engineer just in time methods of empowerment before long-term high-impact technology. Quickly engage leading-edge metrics."}></MenuCategory>
            {/* salads */}
            <MenuCategory items={salads} title={"salad"} coverImg={salad} description={"Uniquely seize accurate web services vis-a-vis performance based users. Credibly restore enabled imperatives through customer directed functionalities. Professionally target user."}></MenuCategory>
            {/* salads */}
            <MenuCategory items={soups} title={"soup"} coverImg={soup} description={"Holisticly impact value-added systems for out-of-the-box action items. Distinctively envisioneer 24/7 vortals and enterprise functionalities. Collaboratively coordinate emerging niches via dynamic web services. Competently administrate bricks-and-clicks."}></MenuCategory>
        </div>
    );
};

export default Menu;