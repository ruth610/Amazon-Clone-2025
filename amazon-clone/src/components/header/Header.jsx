import React, { useContext } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShopIcon from '@mui/icons-material/Shop2'
import Flag from "react-world-flags";
{/* <Flag code="US" style={{ width: 50, height: 30 }} />; */}
import classes from './header.module.css';
import LowerHeader from './LowerHeader';
import { DataContext} from '../dataProvider/DataProvider';
const Header = () => {
    const [{basket},dispatch] = useContext(DataContext)
    // console.log(basket);
  return (
    <section className={classes.main}>
        <section className={classes.top_header}>
            <div className={classes.logo_country}>
                <Link to='/' className={classes.logo}>
                    <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon-logo" />
                </Link>
                <a className={classes.country}>
                    <span className={classes.location}><LocationOnIcon /></span>
                    <div className={classes.deliver}>
                        <span className={classes.message}>Deliver to</span>
                        <p>Ethiopia</p>
                    </div>
                </a>
            </div>
            <div className={classes.search_bar}>
                <select name="" id="" className={classes.select_menu}>
                    <option value="">All</option>
                </select>
                <input type="search" placeholder='Search Amazon' />
                <span className={classes.search_icon}><SearchIcon /></span>
            </div>
            <div className={classes.account_cart}>
                <a href='#' className='language'>
                    <select name="" id=""> 
                        <Flag code="US"/>
                        <option value="" className={classes.option}>EN</option>
                    </select>
                </a>
                
                <Link to='/Auth' className={classes.sign_in}>
                    <p>Hello, sign in</p>
                    <span>Account & Lists</span>
                </Link>
                <Link to='/order' className={classes.order}>
                    <p>Returns</p>
                    <span>& Orders</span>
                </Link>
                <Link to='/cart' className={classes.cart}>
                    <ShopIcon />
                    <span>{basket.length}</span>
                    <p>cart</p>
                </Link>
            </div>
        </section>
        <LowerHeader />
    </section>
  )
}

export default Header;