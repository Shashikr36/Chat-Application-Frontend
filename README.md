ECHOS FRONTEND

Overview
--------

This is the frontend of the Echos real-time chat application. Built with React.js, Tailwind CSS, and DaisyUI, it offers a modern, responsive, and user-friendly interface. The frontend communicates with the backend via REST APIs and WebSocket (Socket.IO) to enable real-time messaging.

Features
--------

- Authentication: Secure user signup and login using JWT.
- Real-Time Messaging: Instant communication via WebSocket (Socket.IO).
- User Profiles: Users can view and update their profile pictures and account information.
- Online/Offline Status: Displays real-time user presence.
- Responsive Design: Seamless experience across devices using Tailwind CSS and DaisyUI.
- Theme Customization: Multiple themes for personalized UI.
- Image Sharing: Send and receive images in chat.

Tech Stack
----------

- React.js: Component-based UI library.
- Tailwind CSS & DaisyUI: Modern and responsive UI styling.
- Zustand: Lightweight and scalable state management.
- Socket.IO Client: Enables real-time, bidirectional communication.
- Axios: HTTP client for API calls.
- React Router DOM: Handles client-side routing.

Getting Started
---------------

Prerequisites:
- Node.js (v16 or higher)
- Backend server running (Refer to backend setup documentation)

Installation:

1. Clone the repository and navigate to the 'frontend' directory:
   cd frontend

2. Install the dependencies:
   npm install

3. Create a .env file in the frontend directory with the following content:
   VITE_API_URL=http://localhost:5000

Running the Application:
------------------------

Start the development server:
   npm run dev

Open the application in your browser at:
   http://localhost:5173

Project Structure
-----------------

src/
├── components/        - Reusable UI components (Navbar, Sidebar, ChatContainer)
├── pages/             - Page-level components (LoginPage, HomePage, SettingsPage)
├── store/             - Zustand stores for global state (auth, chat, theme)
├── lib/               - Utility functions and Axios instance
├── constants/         - Static constants (e.g., theme options)

Available Scripts
-----------------

- npm run dev: Start the development server.
- npm run build: Build the application for production.
- npm run preview: Preview the production build.
- npm run lint: Check for code quality issues using ESLint.

Detailed Features
-----------------

Authentication Pages:
- Signup: Register a new user.
- Login: Access an existing account.

Chat Interface:
- Sidebar: List of users with online/offline status.
- Chat Container: Displays chat messages with support for text and images.
- Message Input: Send messages with optional image attachments.

Settings:
- Theme Customization: Select from multiple pre-defined themes.

Profile:
- Profile Picture Update: Upload and update user avatar.
- Account Details: View name, email, and account creation date.

Dependencies
------------

React.js             - ^18.3.1  
React Router DOM     - ^7.1.1  
Zustand              - ^5.0.2  
Socket.IO Client     - ^4.8.1  
Axios                - ^1.7.9  
React Hot Toast      - ^2.5.1  
Lucide React         - ^0.469.0  
Tailwind CSS         - ^3.4.17  
DaisyUI              - ^4.12.23  


Author
------

Name  : Shashi Kumar  
Email : shashikrpatwa.work36@gmail.com
