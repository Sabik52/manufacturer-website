import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import BestProduct from '../BestProduct/BestProduct';
import NewDeal from '../NewDeal/NewDeal';
import Stat from '../Stat/Stat';
import Tools from '../Tools/Tools';
import Summary from './Summary/Summary';



const Home = () => {
    return (
        <div >
           <Banner></Banner>
           <Tools></Tools>
           <BestProduct></BestProduct>
           <Stat></Stat>
           <NewDeal></NewDeal>
           <Summary></Summary>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;