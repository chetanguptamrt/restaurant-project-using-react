import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from '../component/Home.component';
import RestaurantCreate from '../component/RestaurantCreate.component';
import RestaurantDetails from '../component/RestaurantDetails.component';
import RestaurantList from '../component/RestaurantList.component';
import RestaurantUpdate from '../component/RestaurantUpdate.component';
import Login from '../component/Login.component';
import Logout from '../component/Logout.component';

const RestaurantRoute = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<RestaurantCreate />} />
            <Route path='/details' element={<RestaurantDetails />} />
            <Route path='/list' element={<RestaurantList />} />
            <Route path='/update/:id' element={<RestaurantUpdate />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Logout' element={<Logout />} />
        </Routes>
    )
}

export default RestaurantRoute