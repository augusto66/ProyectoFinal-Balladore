# **CourtMaster** 🛒

CourtMaster es una **aplicación de comercio electrónico (e-commerce)** desarrollada en **React**. Permite a los usuarios **visualizar productos**, **filtrarlos por categoría**, **seleccionarlos individualmente** para agregarlos al carrito de compras y **confirmar la compra** mediante un formulario.

---

## **Características Principales** 🚀

- **Visualización de Productos**:
   - Todos los productos disponibles se muestran en un catálogo.
   - Opciones para agrupar productos por **categoría**.

- **Carrito de Compras**:
   - Posibilidad de agregar productos individualmente al carrito.
   - Visualización de los productos seleccionados y total acumulado.
   - Funcionalidad para **eliminar** productos del carrito antes de confirmar la compra.

- **Formulario de Compra**:
   - Los usuarios completan sus datos (**nombre**, **correo electrónico** y **teléfono**) para confirmar la orden.
   - La orden se almacena en **Firebase**.

- **Estilización Moderna**:
   - Integración de **Material UI** y **Bootstrap** para una interfaz limpia y amigable.

---

## **Tecnologías y Dependencias** 🛠️

El proyecto utiliza las siguientes tecnologías y librerías:

| Dependencia                  | Descripción                                 | Documentación Oficial                                                                 |
|-----------------------------|---------------------------------------------|--------------------------------------------------------------------------------------|
| **React**                   | Librería principal para la interfaz de usuario. | [React Docs](https://reactjs.org/docs/getting-started.html)                           |
| **React-DOM**               | Manipulación del DOM virtual.               | [React DOM Docs](https://reactjs.org/docs/react-dom.html)                             |
| **React-Router-DOM**        | Manejo de rutas en la aplicación.           | [React Router Docs](https://reactrouter.com/en/main)                                  |
| **Bootstrap**               | Framework de CSS para el diseño responsivo. | [Bootstrap Docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/)     |
| **React-Bootstrap**         | Componentes de Bootstrap adaptados a React. | [React Bootstrap Docs](https://react-bootstrap.github.io/)                                                           |
| **Firebase**                | Plataforma para backend y base de datos.    | [Firebase Docs](https://firebase.google.com/docs)                                     |

---

## **Estructura del Proyecto** 📂

```plaintext
CourtMaster/
├── public/                        # Archivos estáticos
│   └── index.html                 # Plantilla principal
├── src/
│   ├── components/                # Componentes reutilizables
│   │   ├── Cart.jsx               # Vista del carrito de compras
│   │   ├── CartWidget.jsx         # Icono del carrito con contador
│   │   ├── Item.jsx               # Componente para un producto individual
│   │   ├── ItemCount.jsx          # Selector de cantidad de productos
│   │   ├── ItemDetail.jsx         # Detalle de un producto
│   │   ├── ItemDetailContainer.jsx# Lógica para mostrar detalles del producto
│   │   ├── ItemList.jsx           # Lista de productos
│   │   ├── ItemListContainer.jsx  # Contenedor de la lista de productos
│   │   └── NavBar.jsx             # Barra de navegación principal
│   │
│   ├── context/                   # Contextos globales
│   │   ├── carContext.jsx         # Contexto para categorías
│   │   ├── CartProvider.jsx       # Contexto del carrito de compras
│   │   └── useCart.js             # Hook personalizado para el carrito
│   │
│   ├── firebase/                  # Configuración de Firebase
│   │   ├── config.js              # Configuración de conexión con Firebase
│   │   └── db.js                  # Función para crear órdenes en Firebase
│   │
│   ├── styles/                    # Archivos de estilos
│   │   └── Navbar.css             # Estilos específicos para la barra de navegación
│   │
│   ├── App.jsx                    # Componente principal
│   ├── main.jsx                   # Punto de entrada de la aplicación
│   └── assets/                    # Imágenes y recursos
└── package.json                   # Archivo de configuración de dependencias