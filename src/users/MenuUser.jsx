import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { getAllItemsApi, getAllMenuApi } from '../services/allApi';
import { Link } from 'react-router-dom';

const MenuUser = () => {
    const [allMenu, setAllMenu] = useState([]);
    const [allItems, setAllItems] = useState([])
    const [token, setToken] = useState('')

    // Get all menus
    const GetAllMenus = async () => {
        const result = await getAllMenuApi();
        // console.log(result);

        if (result.status === 200) {
            setAllMenu(result.data);
        }
    };

    // Get all items
    const GetAllItems = async () => {
        const result = await getAllItemsApi()
        // console.log(result);
        if (result.status == 200) {
            setAllItems(result.data)
        }
    }

    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const tok = sessionStorage.getItem('token')
            setToken(tok)
        }
        GetAllMenus()
        GetAllItems()
    }, [])

    return (
        <>
            <Header />
            {allMenu?.length > 0 ?
                <div style={{ overflowX: 'hidden' }}>
                    <div className='d-flex flex-column justify-content-center align-items-center py-4 w-100 Menu' style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <h1 className='fw-bolder'>MENU</h1>
                        <p className='w-50 text-center' style={{ color: 'rgba(202, 198, 195, 1)' }}>Please take a look at our menu featuring  food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
                    </div>

                    <div className='bg-black' >
                        <Tab.Container id="left-tabs-example" defaultActiveKey={allMenu[0]?.name} >
                            <Col className='w-100 d-flex flex-column justify-content-center align-items-center'>
                                <Col sm={3} className='w-100 menuBg' >
                                    <Nav variant="pills" className='d-flex justify-content-center py-3 '>
                                        {allMenu?.map((item, index) => (
                                            <Nav.Item key={index} className="me-3">
                                                <Nav.Link eventKey={item?.name} style={{ textTransform: 'uppercase' }}>
                                                    {item?.name}
                                                </Nav.Link>
                                            </Nav.Item>
                                        ))}

                                    </Nav>
                                </Col>

                                {token ? <Col sm={9} className='main w-100 d-flex flex-column align-items-center py-5' >
                                    <Tab.Content className=' d-flex flex-column justify-content-center align-items-center w-75' style={{ border: '1px solid rgba(235, 173, 4, 1)' }}>

                                        {allMenu.map((menu, index) => (
                                            <Tab.Pane key={index} eventKey={menu?.name} className='w-100'>
                                                <div className="text-center my-3 mb-5">
                                                    <h3 className="fw-bold text-warning">{menu?.name}</h3>
                                                    <p style={{ color: 'rgba(175, 181, 181, 1)' }}>{menu?.description}</p>
                                                </div>

                                                <div className="container d-flex align-items-center justify-content-center">
                                                    <div className="row  w-100 ">
                                                        {allItems.filter((itm) => itm.menuId == menu._id).length > 0 ?
                                                            allItems
                                                                .filter(itm => itm.menuId == menu._id)
                                                                .map((itm, index) => (
                                                                    <div key={index} className="col-md-6 mb-4">
                                                                        <h5>{itm.name}........................... ${itm.price}</h5>
                                                                        <p className="text-white">{itm.description}</p>
                                                                    </div>
                                                                ))
                                                            :
                                                            <p className="text-center text-muted">No items added yet</p>
                                                        }
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                        ))}

                                    </Tab.Content>
                                </Col>
                                    :
                                    <Link to={'/login'}><p className='fs-5 mt-4 text-warning'>Please Login</p></Link>
                                }
                            </Col>
                        </Tab.Container>
                    </div>
                </div>
                :
                <p className="text-center mt-5">No Menu added</p>
            }
            <Footer />
        </>
    )
}

export default MenuUser