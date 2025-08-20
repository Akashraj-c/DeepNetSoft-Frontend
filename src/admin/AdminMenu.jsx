import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlusSquare } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import { addMenuApi, addMenuItemApi, deleteItemApi, getAllItemsApi, getAllMenuApi, handleEditApi } from '../services/allApi';
import { FaPencilAlt } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";

const AdminMenu = () => {
    const [menu, setMenu] = useState({
        name: "",
        description: ""
    });
    const [allMenu, setAllMenu] = useState([]);
    const [menuStatus, setMenuStatus] = useState('');
    const [editItems, setEditItems] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Item Modal
    const [showItemModal, setShowItemModal] = useState(false);
    const [selectedMenuId, setSelectedMenuId] = useState('');
    // console.log(selectedMenuId);
    const [item, setItem] = useState({
        name: "",
        description: "",
        price: ""
    });
    // console.log(item);
    const [allItems, setAllItems] = useState([])

    // item modal close
    const handleItemClose = () => {
        setShowItemModal(false);
        setItem({
            name: "",
            description: "",
            price: ""
        });
    };

    //menu id
    const handleItemShow = (menuId) => {
        setSelectedMenuId(menuId);
        setShowItemModal(true);
    };


    // Add items to menu
    const handleAddItem = async () => {
        const { name, description, price } = item;
        if (!name || !description || !price) {
            toast.info("Please fill the form completely");
        }
        try {
            const reqBody = { name, description, price }
            const result = await addMenuItemApi(selectedMenuId, reqBody);
            console.log(result);
            if (result.status === 200) {
                toast.success("Item added successfully");
                handleItemClose();
                setMenuStatus(result.data); // refresh items
            } else if (result.status == 402) {
                toast.info(result.response.data);
            }
            else {
                toast.error('something went wrong')
            }
        } catch (err) {
            toast.error("Server error");
        }
    };

    // Get all items
    const GetAllItems = async () => {
        try {
            const result = await getAllItemsApi()
            console.log(result);
            if (result.status == 200) {
                setAllItems(result.data)
            }
        } catch (error) {
            toast.error('server error')
        }
    }

    // Reset menu form
    const handleReset = () => {
        setMenu({
            name: "",
            description: ""
        });
    };

    // Add new menu
    const handleADD = async () => {
        const { name, description } = menu;
        if (!name || !description) {
            toast.info('Please fill the form completely');
        }
        try {
            const result = await addMenuApi({ name, description });
            if (result.status === 200) {
                toast.success('Menu added successfully');
                handleReset();
                handleClose();
                setMenuStatus(result.data); // Refresh when menu added
            }
            else if (result.status === 402) {
                toast.info(result.response.data);
            }
            else {
                toast.error('Something went wrong');
            }
        } catch (err) {
            toast.error('Server error');
        }
    };

    // Get all menus
    const GetAllMenus = async () => {
        const result = await getAllMenuApi();
        if (result.status === 200) {
            setAllMenu(result.data);
        }
    };

    // Delete items
    const handleDeleteItem = async (id) => {
        console.log(id);

        const result = await deleteItemApi(id)
        console.log(result);
        if (result.status == 200) {
            toast.success('deleted successfuly')
            setMenuStatus(result.data)
        }
    }

    // Edit
    const handleEditItem = async (id) => {
        
    }

    useEffect(() => {
        
        GetAllMenus();
        GetAllItems()
    }, [menuStatus]);

    return (
        <>
            <Header />
            {allMenu?.length > 0 ?
                <div className="bg-black" style={{ overflowX: 'hidden' }}>
                    <Tab.Container id="left-tabs-example" defaultActiveKey={allMenu[0]?.name}>
                        <Col className="w-100 d-flex flex-column justify-content-center align-items-center">
                            {/* Menu Tabs */}
                            <Col sm={3} className="w-100 menuBg d-flex px-3 align-items-center px-5">
                                <Nav variant="pills" className="d-flex justify-content-center w-100 py-2">
                                    {allMenu?.map((item, index) => (
                                        <Nav.Item key={index} className="me-3">
                                            <Nav.Link eventKey={item?.name} style={{ textTransform: 'uppercase' }}>
                                                {item?.name}
                                            </Nav.Link>
                                        </Nav.Item>
                                    ))}
                                    <div className="d-flex align-items-center" onClick={handleShow} style={{ cursor: 'pointer' }}>
                                        <FaPlusSquare className="fs-4 text-warning" />
                                    </div>
                                </Nav>
                            </Col>

                            {/* Menu Content */}
                            <Col sm={9} className="main w-100 d-flex flex-column align-items-center py-5 ">
                                <Tab.Content className="d-flex flex-column justify-content-center align-items-center w-75 " style={{ border: '1px solid rgba(235, 173, 4, 1)' }}>
                                    {allMenu.map((menu, index) => (
                                        <Tab.Pane key={index} eventKey={menu?.name} className='w-100'>
                                            <div className="text-center my-3 mb-5">
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <h1></h1>
                                                    <h3 className="fw-bold text-warning" style={{ marginLeft: '60px' }}>{menu?.name}</h3>
                                                    {
                                                        !editItems ? <button className='btn ' onClick={() => setEditItems(!editItems)}><FaEdit className='text-success fs-5 ' /></button>
                                                            :
                                                            <button className='btn ' onClick={() => setEditItems(!editItems)}><FaPencilRuler className='fs-5 text-danger' /></button>
                                                    }
                                                </div>
                                                <p style={{ color: 'rgba(175, 181, 181, 1)' }}>{menu?.description}</p>
                                            </div>

                                            <div className="container d-flex align-items-center justify-content-center">
                                                <div className="row  w-100 ">
                                                    {allItems.filter((itm) => itm.menuId == menu._id).length > 0 ?
                                                        allItems
                                                            .filter(itm => itm.menuId == menu._id)
                                                            .map((itm, index) => (
                                                                <div key={index} className="col-md-6 mb-4">
                                                                    <div className={editItems ? 'border rounded p-2 border-danger' : ''}>
                                                                        {editItems && <div className='d-flex justify-content-end'>
                                                                            <button className='border btn' onClick={() => handleEditItem(itm?._id)}> <FaPencilAlt className='text-success' /></button>
                                                                        </div>}

                                                                        <h5>{itm.name}........................... ${itm.price}</h5>
                                                                        <p className="text-white">{itm.description}</p>

                                                                        {editItems && <div className='d-flex justify-content-end'>
                                                                            <button className='border btn' onClick={() => handleDeleteItem(itm?._id)}> <FaTrashAlt className='text-danger' /></button>
                                                                        </div>}
                                                                    </div>
                                                                </div>
                                                            ))
                                                        :
                                                        <p className="text-center text-muted">No items added yet</p>
                                                    }
                                                </div>
                                            </div>


                                            <div className="w-100 d-flex justify-content-center mb-5">
                                                {editItems ? <button disabled className="btn btn-success" onClick={() => handleItemShow(menu._id)}> Add Items</button>
                                                    :
                                                    <button className="btn btn-success" onClick={() => handleItemShow(menu._id)}> Add Items</button>
                                                }
                                            </div>
                                        </Tab.Pane>
                                    ))}
                                </Tab.Content>
                            </Col>
                        </Col>
                    </Tab.Container>
                </div>
                :
                <p className="text-center mt-5">No Menu added</p>
            }
            <Footer />

            {/* Add Menu Modal */}
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton className="bg-secondary">
                    <Modal.Title>Add Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <input type="text" value={menu.name} onChange={(e) => setMenu({ ...menu, name: e.target.value })} placeholder="Menu Name" className="form-control text-black" />

                        <textarea type="text" value={menu.description} onChange={(e) => setMenu({ ...menu, description: e.target.value })} placeholder="Description" className="form-control mt-3" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleReset}>
                        Reset
                    </Button>
                    <Button variant="primary" onClick={handleADD}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Add Item Modal */}
            <Modal show={showItemModal} onHide={handleItemClose} backdrop="static" keyboard={false} centered>
                <Modal.Header closeButton className="bg-secondary">
                    <Modal.Title>Add Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" value={item.name} onChange={(e) => setItem({ ...item, name: e.target.value })} placeholder="Item Name" className="form-control text-black mb-3" />

                    <textarea value={item.description} onChange={(e) => setItem({ ...item, description: e.target.value })} placeholder="Description" className="form-control mb-3" />

                    <input type="number" value={item.price} onChange={(e) => setItem({ ...item, price: e.target.value })} placeholder="Price" className="form-control text-black" />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleItemClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleAddItem}>
                        Add Item
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer position="top-center" autoClose={2000} theme="colored" />
        </>
    );
};

export default AdminMenu;
