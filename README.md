# Amazon-Clone-2025

# 🛒 Amazon Clone
A fully functional Amazon Clone that replicates key features of the original Amazon platform. Built with modern web technologies, this project includes secure authentication with Amazon Cognito, real-time payment integration, a responsive eCommerce UI, and dynamic product management. This project was developed as a showcase of full-stack development skills.

# 🚀 Features
🧑‍💼 Authentication & Authorization
Amazon Cognito Integration

Sign up, login, logout, and session management

Token-based authentication with secure access to protected routes

Role-based access (e.g., Admin vs Customer)

# 🛍 Product Browsing
Browse a wide range of products across categories

Product cards with images, titles, prices, and ratings

Filter and sort products by category, price, rating, etc.

Search bar with live filtering

# 🛒 Shopping Cart
Add/remove items from cart

Update quantities

View subtotal, tax, and total amount

Cart state persists using localStorage or global state

# 💳 Payment Integration
Checkout page with order summary

Real payment processing with Stripe / Amazon Pay

Payment success/failure handling

Order confirmation with order ID and details

👤 User Profile
View and edit user details

View order history

Secure logout and re-authentication

Manage products (add, edit, delete)

View and manage orders

# 🎨 UI & UX Design
Responsive layout for mobile, tablet, and desktop

Clean, professional UI modeled after Amazon

TailwindCSS or Bootstrap for styling

Framer Motion / CSS Transitions for animations

Icons and assets for cart, search, categories, etc.

# 🧠 Technologies Used

# 💻 Frontend
React + TypeScript – Component-based architecture

React Router DOM – For navigation and protected routing

Axios / Fetch – For communicating with APIs

Context API / Redux – For managing global state

TailwindCSS / Bootstrap – For responsive UI design

Framer Motion – For animation

# 🔐 Authentication
firebase/firestore

# 💳 Payment
Stripe / Amazon Pay – Payment processing during checkout

# 🌐 Backend
Node.js + Express – For handling API routes

MySQL / MongoDB – For storing products, orders, and users

RESTful API – Well-structured endpoints for CRUD operations

# 🖼 Screenshots
Add screenshots here of:

Homepage

![image](https://github.com/user-attachments/assets/ea0e2bd4-63d9-4163-bd76-3715638d9787)


Product Detail

![image](https://github.com/user-attachments/assets/cc941384-430e-4473-b726-96c9f1219a97)


Cart

![image](https://github.com/user-attachments/assets/202c964a-6941-4f20-b80e-561ed02fab44)


Checkout

![image](https://github.com/user-attachments/assets/1fa5fcc2-e69f-4edc-be85-b59181af29f1)
![image](https://github.com/user-attachments/assets/043a1eee-dbb8-463c-ad9d-870d4e2c155f)



sign in

![image](https://github.com/user-attachments/assets/ca4f34e8-290b-42fa-9d82-644bba9f6aad)



# 📦 Installation & Setup

# Clone the repository
git clone https://github.com/your-username/amazon-clone.git
cd amazon-clone

# Install frontend dependencies
npm install

# Set up environment variables (example)
REACT_APP_COGNITO_USER_POOL_ID=your_cognito_user_pool_id
REACT_APP_COGNITO_CLIENT_ID=your_cognito_client_id
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_key

# Run the frontend
npm start

for the backend 

# Navigate to backend directory
cd backend

# Install backend dependencies
npm install

# Set up backend .env file
PORT=5000
DB_URL=your_database_url
JWT_SECRET=your_jwt_secret

# Start backend
npm run dev

📈 Future Enhancements
Add product reviews and ratings

Integrate delivery tracking

Add user avatars and profile pictures

Add recommendation system
