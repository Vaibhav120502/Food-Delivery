import React, { useEffect, useState } from 'react'
import './Orders.css'
import { toast } from "react-toastify"
import axios from "axios"

const Orders = ({ url }) => {

    const [orders, setOrders] = useState([]);

    const fetchAllOrders = async () => {
        const response = await axios.get(url + "/api/order/list");
        if (response.data.success) {
            setOrders(response.data.data);
            console.log(response.data.data);
        }
        else {
            toast.error("Error")
        }
    }

    useEffect(() => {
        fetchAllOrders();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="orders">
            <h2>Orders List</h2>
            {orders.length === 0 ? (
                <p>No orders available</p>
            ) : (
                <div className="orders-table">
                    {orders.map((order, index) => (
                        <div key={index} className="order-item">
                            <p><b>Order ID:</b> {order.id}</p>
                            <p><b>Customer Name:</b> {order.customerName}</p>
                            <p><b>Total:</b> ${order.total}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
    
}

export default Orders