# Clickup
Proyecto tfg

📦 Tecnologías Utilizadas
Frontend:

React

Tailwind CSS

TypeScript

Backend:

Node.js

Express

MongoDB

Mongoose

JWT

bcrypt

Cloudinary

Formidable

Herramientas de Desarrollo:

TypeScript

Nodemon

ts-node-dev

dotenv

📁 Estructura del Proyecto
pgsql
Copiar
Editar
clickup/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── index.ts
│   ├── .env
│   └── tsconfig.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── main.tsx
│   ├── index.html
│   └── tsconfig.json
├── package.json
└── README.md
🚀 Instalación y Ejecución
Requisitos Previos
Node.js (versión 14 o superior)

npm o yarn

MongoDB (local o Atlas)

Clonar el Repositorio
bash
Copiar
Editar
git clone https://github.com/danidpv/Clickup.git
cd Clickup
Configuración del Backend
Navega al directorio del backend:

bash
Copiar
Editar
cd backend
Instala las dependencias:

bash
Copiar
Editar
npm install
Crea un archivo .env con las siguientes variables:

env
Copiar
Editar
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
Compila el proyecto:

bash
Copiar
Editar
npm run build
Inicia el servidor:

bash
Copiar
Editar
npm start
El backend estará corriendo en http://localhost:5000.

Configuración del Frontend
Navega al directorio del frontend:

bash
Copiar
Editar
cd ../frontend
Instala las dependencias:

bash
Copiar
Editar
npm install
Inicia la aplicación:

bash
Copiar
Editar
npm run dev
La aplicación estará disponible en http://localhost:3000.

🧪 Scripts Disponibles
Backend
npm run dev: Inicia el servidor en modo desarrollo con Nodemon.

npm run build: Compila el proyecto TypeScript.

npm start: Ejecuta el servidor compilado.

Frontend
npm run dev: Inicia la aplicación en modo desarrollo.

npm run build: Compila la aplicación para producción.

npm run preview: Previsualiza la aplicación compilada.

📄 Licencia
Este proyecto está licenciado bajo la Licencia ISC.
