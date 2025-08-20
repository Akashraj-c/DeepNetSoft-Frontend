# Tech Stack :-
# Frontend
- React.js
- React Router
- React Bootstrap
- React Toastify
- React icons
- Axios

# Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT

# Admin Setup
- The Admin user is inserted manually in MongoDB
* Login Details :-
  -------------------------
    Email: dns@gmail.com
    Password: dns123
  -------------------------

# Admin Functionality
- Menu Management:-
    - Add new menus
    - View all menus

- Item Management:-
    - Add new items under a specific menu
    - Edit item details 
    - Delete items from menus
    - View all items

- User Management:-
    - Admin login with special credentials stored in MongoDB
    - Restrict menu/item management only to Admin role
    - Normal users can only view menus & items, but cannot modify

# API Routes 
* User Routes:-
- POST /register → Register a new user
- POST /login → Login and get authentication token

* Menu Routes:-
- POST /addmenu → Create a new menu (e.g., Drinks, Food, Brunch)
- GET /getmenu → Fetch all menus along with their items

* Item Routes:-
- POST /additems/:id → Add a new item to a specific menu (:id = menuId)
- GET /getallitems → Fetch all items (from all menus)
- PUT /edititem/:id → Edit/update an item by its ID
- DELETE /deleteitem/:id → Delete an item by its ID