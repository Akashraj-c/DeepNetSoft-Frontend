import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

const MenuUser = () => {


    return (
        <>
            <Header />
            <div style={{overflowX:'hidden'}}>
                <div className='d-flex flex-column justify-content-center align-items-center py-4 w-100 Menu' style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <h1 className='fw-bolder'>MENU</h1>
                    <p className='w-50 text-center' style={{ color: 'rgba(202, 198, 195, 1)' }}>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>
                </div>
    
                <div className='bg-black' >
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                        <Col className='w-100 d-flex flex-column justify-content-center align-items-center'>
                            <Col sm={3} className='w-100 menuBg' >
                                <Nav variant="pills" className='d-flex justify-content-center py-3 '>
                                    <Nav.Item className='me-3'>
                                        <Nav.Link eventKey="first">FOOD</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='me-3'>
                                        <Nav.Link eventKey="second">DRINKS</Nav.Link>
                                    </Nav.Item>
    
                                </Nav>
                            </Col>
    
                            <Col sm={9} className='main w-100 d-flex flex-column align-items-center py-5' >
                                <Tab.Content className=' d-flex flex-column justify-content-center align-items-center w-75' style={{ border: '1px solid rgba(235, 173, 4, 1)' }}>
    
                                    <Tab.Pane eventKey="first">
                                        <div className='d-flex justify-content-between align-items-center w-100'>
                                            <img className='imgs' src="https://static.vecteezy.com/system/resources/previews/048/094/697/non_2x/chicken-seekh-kabab-isolated-on-transparent-background-free-png.png" alt="no img" style={{ width: '150px', marginLeft: '-55px' }} />
                                            <h3 className='fw-bold'>APPENTIZERS</h3>
                                            <img className='imgs' src="http://pakistanatlas.com/wp-content/uploads/2020/09/Pakistani-Food_0034_35-Chappli-kabab.png" alt="no img" style={{ width: '150px', marginRight: '-55px' }} />
                                        </div>
                                        <div className="container-fluid ">
                                            <div className="row px-5" >
                                                <div className="col-md-6">
                                                    <h5>FRIED RED SNAPPER BITES__________$ 18</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, architecto facilis. Dolor, fugiat quae. </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <h5>FRIED RED SNAPPER BITES__________$ 18</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, architecto facilis. Dolor, fugiat quae. </p>
                                                </div>
                                                <div className="col-md-6">
                                                    <h5>FRIED RED SNAPPER BITES__________$ 120</h5>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, architecto facilis. Dolor, fugiat quae. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center w-100'>
                                            <img className='imgs' src="https://png.pngtree.com/png-clipart/20231114/original/pngtree-grilled-sandwich-on-a-tray-with-success-png-image_13540989.png" alt="no img" style={{ width: '150px', marginLeft: '-55px' }} />
                                            <h3></h3>
                                            <p></p>
                                        </div>
                                        <div className='w-100 d-flex justify-content-center mb-5'>
                                            <div className='d-flex rounded flex-column align-items-center py-3 w-50' style={{ border: 'dotted' }}>
                                                <h3>SALADS</h3>
                                                <p>Option to add protein</p>
                                                <p>----------------------</p>
                                                <div className='d-flex flex-md-row flex-column align-items-center justify-content-around w-100'>
                                                    <h5>HOUSE SALAD ..... $6</h5>
                                                    <h2>|</h2>
                                                    <h5>CAESAR SALAD ..... $6</h5>
                                                </div>
                                            </div>
                                            <div>
                                                <img src="https://png.pngtree.com/png-clipart/20220927/original/pngtree-vegetable-salad-salad-healthy-eating-png-image_8636211.png" alt="no img" style={{ width: '150px', marginLeft: '-80px', marginTop: '-50px' }} />
                                            </div>
                                        </div>
                                    </Tab.Pane>
    
                                </Tab.Content>
                            </Col>
                        </Col>
                    </Tab.Container>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default MenuUser