// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// In-memory storage for demo
let bookings = [
  // Example booking
  // { _id: '1', petOwner: 'Alice', petName: 'Bunny', vetName: 'Dr. Bob', date: '2025-10-25', status: 'pending' }
];

let orders = [
  // Example order
  // { _id: '1', petOwner: 'Alice', medicineName: 'Vitamin B', quantity: 5, deliveryAddress: '123 Street', orderDate: '2025-10-22', status: 'pending' }
];

// Utility to generate unique IDs
const generateId = () => Date.now().toString();

// ------------------ BOOKINGS API ------------------

// Get all bookings
app.get('/api/bookings', (req, res) => {
  res.json(bookings);
});

// Add new booking
app.post('/api/bookings', (req, res) => {
  const { petOwner, petName, vetName, date } = req.body;
  const newBooking = {
    _id: generateId(),
    petOwner,
    petName,
    vetName,
    date,
    status: 'pending'
  };
  bookings.push(newBooking);
  res.json({ success: true, booking: newBooking });
});

// Update booking status
app.put('/api/bookings/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const booking = bookings.find(b => b._id === id);
  if (!booking) return res.status(404).json({ error: 'Booking not found' });
  booking.status = status;
  res.json({ success: true, booking });
});

// ------------------ ORDERS API ------------------

// Get all orders
app.get('/api/orders', (req, res) => {
  res.json(orders);
});

// Add new order
app.post('/api/orders', (req, res) => {
  const { petOwner, medicineName, quantity, deliveryAddress } = req.body;
  const newOrder = {
    _id: generateId(),
    petOwner,
    medicineName,
    quantity,
    deliveryAddress,
    orderDate: new Date().toISOString().split('T')[0],
    status: 'pending'
  };
  orders.push(newOrder);
  res.json({ success: true, order: newOrder });
});

// Update order status
app.put('/api/orders/:id', (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const order = orders.find(o => o._id === id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  order.status = status;
  res.json({ success: true, order });
});

// ------------------ START SERVER ------------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
