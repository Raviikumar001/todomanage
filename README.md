# todomanage


Prerequisites

Git: https://git-scm.com/downloads
Node.js and npm: https://nodejs.org/
Project Setup

Clone the Repository:

Bash
```
git clone https://github.com/Raviikumar001/todomanage.git

Navigate to Project Directory:

Bash
cd todomanage

Frontend Setup

Change Directory:

Bash
cd frontend

Install Dependencies:

Bash
yarn install  # Or use 'npm install'

Create .env file:

Create a file named .env.

Add the following variable:

VITE_REACT_APP_API_URL = "http://localhost:5000"
Start Frontend Server:

Bash
yarn run dev  # Or use 'npm run dev'

Backend Setup

Change Directory (Back to Root):

Bash
cd .. 

Install Dependencies:

Bash
cd backend
npm install  # Or use 'yarn install'

Create .env file:

Create a file named .env.
Add your PostgreSQL database connection variables (from Railway).
Start Backend Server:

Bash
npm start 

Important Note: The database credentials might be temporary. If you face connection issues, you might need to get new credentials
