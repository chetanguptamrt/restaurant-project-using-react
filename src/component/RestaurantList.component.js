import React, { useEffect, useState } from 'react'
import { Container, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faSearch, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const RestaurantList = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        getRestaurantList();
    }, []);

    const getRestaurantList = async (name) => {
        fetch(name
            ? `http://localhost:3000/restaurants?name=${name}`
            : `http://localhost:3000/restaurants`).then(response => {
                response.json().then(result => {
                    setList(result);
                })
            })
    }

    const deleteRestaurant = async (id) => {
        fetch(`http://localhost:3000/restaurants/${id}`, {
            method: 'DELETE'
        }).then(() => {
            let temp = list.filter(li => li.id !== id);
            setList(temp);
        }).catch(err => {
            alert(err);
        })
    }

    return (
        <Container>
            <h1 className='mt-3 text-center mb-3'>Restaurant List</h1>
            <div className='mb-3'>
                <InputGroup style={{ width: '200px', marginLeft: 'auto' }}>
                    <Form.Control
                        placeholder="Restaurant name"
                        aria-label="Restaurant name"
                        aria-describedby="basic-addon2"
                        onKeyUp={(e) => getRestaurantList(e.target.value)}
                    />
                    <InputGroup.Text id="basic-addon2">
                        <FontAwesomeIcon icon={faSearch} />
                    </InputGroup.Text>
                </InputGroup>
            </div>
            <table className="table table-hover table-striped">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.length === 0
                            ? <tr>
                                <td className='text-center' colSpan={6} >
                                    No data...
                                </td>
                            </tr>
                            : list.map((item, i) =>
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.rating}</td>
                                    <td>{item.address}</td>
                                    <td>
                                        <Link to={`/update/${item.id}`} >
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Link>
                                        <button
                                            className='border-0 ml-3 text-danger'
                                            onClick={() => deleteRestaurant(item.id)}
                                        >
                                            <FontAwesomeIcon icon={faTrashCan} />
                                        </button>
                                    </td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </Container>
    )
}

export default RestaurantList;