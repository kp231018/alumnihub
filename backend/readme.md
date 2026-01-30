# AlumniHub Backend

Node.js/Express backend API server for AlumniHub application.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm run dev
```

## 📁 Structure

```
backend/
├── src/
│   └── config/
│       └── db.js          # MongoDB connection
├── app.js                 # Express app setup
├── server.js             # Server entry point
└── package.json
```

## 🔧 Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/alumnihub
JWT_SECRET=your_jwt_secret_key_here
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

## 📦 Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **jsonwebtoken** - JWT authentication
- **bcryptjs** - Password hashing
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variables
- **multer** - File upload handling
- **nodemailer** - Email sending

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login

### Events
- `GET /api/events` - Get all events
- `POST /api/events` - Create event (Alumni only)
- `PUT /api/events/:id` - Update event
- `DELETE /api/events/:id` - Delete event

### Donations
- `GET /api/donations` - Get all donations
- `POST /api/donations` - Create donation
- `PUT /api/donations/:id/status` - Update donation status (Admin)

## 🧪 Development

```bash
# Run with nodemon (auto-restart)
npm run dev

# Run in production
npm start
```

## 📝 Notes

- Ensure MongoDB is running before starting the server
- Update CORS settings in app.js for production
- Configure email service credentials for nodemailer
