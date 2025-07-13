# 🌀 Django + React User Data Fetcher

This project is a complete **React + Django REST Framework** example that includes the following features:

✅ Fetch user data from external API  
✅ Send data to Django backend and store in database  
✅ Retrieve and display stored data from backend on a separate page  
✅ CORS management and complete Frontend-Backend communication

---

## 🧩 Technologies Used

- [Django 5.2.4](https://www.djangoproject.com/) - Backend Framework
- [Django REST Framework](https://www.django-rest-framework.org/) - API Layer
- [django-cors-headers](https://pypi.org/project/django-cors-headers/) - Cross-Origin Management
- [React](https://react.dev/) - Frontend Framework
- [Fetch API](https://developer.mozilla.org/docs/Web/API/Fetch_API) - API Communication
- [SQLite](https://www.sqlite.org/) - Default Project Database
- Python 3.10+

---

## 🚀 Quick Start

### 1️⃣ Clone the Project

```bash
git clone <YOUR_REPO_URL>
cd <YOUR_REPO_FOLDER>
```

### 2️⃣ Backend Setup

Create virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

### 3️⃣ Database Setup

```bash
python manage.py migrate
```

### 4️⃣ Run Django Server

```bash
python manage.py runserver
```

Server will be available at:

```
http://127.0.0.1:8000/
```

### 5️⃣ Frontend Setup

Navigate to the frontend folder in your project or create a React project:

```bash
npx create-react-app frontend
cd frontend
```

If React project is ready, install dependencies:

```bash
npm install
```

### 6️⃣ Run React

```bash
npm start
```

React application will be available at:

```
http://localhost:3000
```

---

## ⚙️ Key Files

```
.
├── backend/
│   ├── manage.py
│   ├── project/
│   ├── users/          # Django Application
│       ├── models.py   # User Model Definition
│       ├── views.py    # API Endpoints
│       ├── serializers.py
│       └── urls.py
├── frontend/
│   ├── src/
│       ├── components/
│           ├── FetchUsers.js   # Fetch and Send Data
│           └── ShowUsers.js    # Display Stored Data
│       ├── App.js
│       └── index.js
├── requirements.txt
└── README.md
```

---

## 🌐 API Endpoints

### 1️⃣ Fetch Data from External API

Frontend:

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
```

### 2️⃣ Save Data to Django

```
POST /api/save-users/
Content-Type: application/json
```

Body:

```json
[
  {
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "phone": "1-770-736-8031",
    "website": "http://hildegard.org"
  },
  ...
]
```

Response:

```json
{"message": "Users saved successfully"}
```

### 3️⃣ Get List of Stored Users

```
GET /api/users/
```

Response:

```json
[
  {
    "id": 1,
    "name": "...",
    "username": "...",
    ...
  }
]
```

---

## ⚠️ Important Notes

If you encounter errors when saving data:

- Phone field length: Must not exceed 20 characters.
- Website: Must be a complete URL (with http://).

In React, make sure to sanitize data when sending.

---

## 🛡️ Security & Development

This project is built for testing purposes only and does not include Authentication.

For Production use:

- Configure ALLOWED_HOSTS and DEBUG=False
- Use PostgreSQL
- Set up HTTPS
- Add Token Authentication

---

## 🚢 Server Deployment

### Django:

- Configure settings.py
- Set up Gunicorn + Nginx

### React:

Build:

```bash
npm run build
```

Serve build through Nginx or cloud services

---

## 🛠️ Development

Ideas for extending the project:

- Add user creation form from React
- Add user editing and deletion
- Add JWT Authentication
- Use Docker Compose for simultaneous Frontend and Backend execution

---

## 👤 Author

This project was developed as an educational example by [Your Name].
For support or collaboration:

📧 Email: your.email@example.com  
🌐 Website: yourwebsite.com  
🐙 GitHub: yourgithub  

---

## 🌟 License

This project is released under the MIT License. Free to use.

⭐ If the project was helpful to you, I'd be happy if you Star it!