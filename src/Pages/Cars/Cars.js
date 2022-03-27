import React from 'react'
import logoKotak from '../../Assets/img/Rectangle 63.png'
import logoHome from '../../Assets/img/fi_home.png'
import logoTruck from '../../Assets/img/fi_truck.png'
import logoDashboard from '../../Assets/img/Rectangle 62.png'
import menu from '../../Assets/img/fi_menu.png'
import akun from '../../Assets/img/Group 15.png'
import chevron from '../../Assets/img/fi_chevron-down.png'
import chevronRright from '../../Assets/img/Vector.png'
import mobil from '../../Assets/img/image 1.png'
import key from '../../Assets/img/fi_key.png'
import watch from '../../Assets/img/fi_clock.png'

import { Button, Card, CardGroup, Container, Dropdown, DropdownButton, Form, FormControl, Nav, Navbar, Pagination, Table } from 'react-bootstrap'



import './Cars.css'

export const Cars = () => {
    const dataTable = () => {
        let data = [];
        for (let i = 0; i < 10; i++) {
            data.push(
                <tr>
                    <td>{i + 1}</td>
                    <td>User Email</td>
                    <td>Car{i + 1}</td>
                    <td>Start Rent</td>
                    <td>Finish Rent</td>
                    <td>Price</td>
                    <td>Status</td>
                </tr>
            );
        }
        return data;
    }

    const dataTable2 = () => {
        let data = [];
        for (let i = 0; i < 10; i++) {
            data.push(
                <tr>
                    <td>{i + 1}</td>
                    <td>Name</td>
                    <td>Ctegory</td>
                    <td>Price</td>
                    <td>Start rent</td>
                    <td>Finish Rent</td>
                    <td>Created at</td>
                    <td>Updated at</td>
                </tr>
            );
        }
        return data;
    }

    return (
        <div>
            <div className='main-container'>
                <div className='container-dashboard'>
                    <img alt='' src={logoKotak} className='logo-kotak' />

                    <div>
                        <a href='dashboard' className='tag'> <i>
                            <img alt='' src={logoHome} className='logo-home' />
                        </i>
                            Dashboard
                        </a>
                    </div>

                    <div>
                        <a href='cars' className='tag'> <i>
                            <img alt='' src={logoTruck} className='logo-truck' />
                        </i>
                            Cars
                        </a>
                    </div>

                    {/* <img alt='' src={logoTruck} className='logo-truck' />
        <div className='tag'>
            Cars
        </div> */}
                </div>

                <div className='navbar-content'>
                    <div className='container-navbar'>
                        <Navbar expand="lg" className='navbar-custom'>
                            <Container fluid>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll>
                                        <img alt='' src={logoDashboard} />
                                        <img alt='' src={menu} className='menu-hamburger' />

                                    </Nav>
                                    <Form className="d-flex">
                                        <FormControl
                                            type="search"
                                            placeholder="Search"
                                            className="me-2"
                                            aria-label="Search"
                                        />
                                        <Button variant="primary" className='btn-search'>Search</Button>
                                    </Form>

                                    <img alt='' src={akun} className='logo-akun' />
                                    <div className='akun-name'>
                                        Unis Badri
                                    </div>
                                    <img alt='' src={chevron} />
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>

                    <div className='container-content'>
                        <div className='menu'>
                            <div className='dashboard-up'>
                                CARS
                            </div>

                            <div className='dashboard-low'>
                                <div className='dashboard-low-title'>
                                    List Cars
                                </div>
                            </div>
                        </div>

                        <div className='container-table'>
                            <div className='main-container-table-cars'>

                                <div className='content-table'>
                                    <div className='dashboard-table'>
                                        Cars
                                    </div>

                                    <div className='chevron-right'>
                                        <img alt='' src={chevronRright} />
                                    </div>

                                    <div className='dashboard-table-2'>
                                        List Cars
                                    </div>

                                </div>

                                <div className='dashboard-3-cars'>
                                    List Cars
                                    <div className='container-btn-new-car'>
                                        <Button variant="primary" className='btn-new-car'>+ Add New Car</Button>{' '}
                                    </div>

                                </div>

                                <div className='list-btn'>
                                    <Button variant="outline-primary" className='btn-group'>All</Button>{' '}
                                    <Button variant="outline-primary" className='btn-group'>Small</Button>{' '}
                                    <Button variant="outline-primary" className='btn-group'>Medium</Button>{' '}
                                    <Button variant="outline-primary" className='btn-group'>Large</Button>{' '}
                                </div>


                                <div className='cards-group'>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={mobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={key} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={watch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                                <Button variant="outline-danger" className='btn-delete'>Delete</Button>{' '}
                                                <Button variant="outline-success" className='btn-edit'>Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={mobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={key} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={watch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                                <Button variant="outline-danger" className='btn-delete'>Delete</Button>{' '}
                                                <Button variant="outline-success" className='btn-edit'>Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={mobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={key} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={watch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                                <Button variant="outline-danger" className='btn-delete'>Delete</Button>{' '}
                                                <Button variant="outline-success" className='btn-edit'>Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={mobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={key} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={watch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                                <Button variant="outline-danger" className='btn-delete'>Delete</Button>{' '}
                                                <Button variant="outline-success" className='btn-edit'>Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={mobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={key} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={watch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                                <Button variant="outline-danger" className='btn-delete'>Delete</Button>{' '}
                                                <Button variant="outline-success" className='btn-edit'>Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={mobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={key} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={watch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                                <Button variant="outline-danger" className='btn-delete'>Delete</Button>{' '}
                                                <Button variant="outline-success" className='btn-edit'>Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={mobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={key} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={watch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                                <Button variant="outline-danger" className='btn-delete'>Delete</Button>{' '}
                                                <Button variant="outline-success" className='btn-edit'>Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={mobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={key} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={watch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                                <Button variant="outline-danger" className='btn-delete'>Delete</Button>{' '}
                                                <Button variant="outline-success" className='btn-edit'>Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    <Card style={{ width: '21.9375rem' }} className='card-mobil'>
                                        <Card.Img variant="top" src={mobil} className='img-mobil' />
                                        <Card.Body>
                                            <div className='tipe-mobil'>
                                                Nama/Tipe Mobil
                                            </div>
                                            {/* <Card.Title>Card Title</Card.Title> */}
                                            <div className='harga'>
                                                Rp 430.000 / hari
                                            </div>

                                            <div className='property-car'>
                                                <img alt='' src={key} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='property-car-2'>
                                                <img alt='' src={watch} />
                                                <div className='property-car-txt'>
                                                    Start rent - Finish rent
                                                </div>
                                            </div>

                                            <div className='btn-card'>
                                                <Button variant="outline-danger" className='btn-delete'>Delete</Button>{' '}
                                                <Button variant="outline-success" className='btn-edit'>Edit</Button>{' '}
                                            </div>

                                        </Card.Body>
                                    </Card>
                                    


                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
