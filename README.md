# React Shopping Cart - Context API & useReducer

A modern e-commerce shopping cart application built with React, demonstrating advanced state management using **Context API** and **useReducer** hook.

![Shopping Cart Demo](./src/assets/example-app.png)

## 🎯 Learning Objectives

This project was created to master:

- **React Context API** for global state management
- **useReducer** hook for complex state logic
- Advanced React patterns and best practices
- Modern CSS with grid layouts and animations

## ✨ Features

- 🛍️ **Product Catalog**: Browse through a curated collection of fashion items
- 🛒 **Shopping Cart**: Add/remove items with quantity management
- 💰 **Price Calculation**: Real-time total price updates
- 🎨 **Modern UI**: Beautiful gradient design with smooth animations
- 📱 **Responsive Design**: Works seamlessly on all devices
- ⚡ **Optimized Performance**: Efficient state management with useReducer

## 🏗️ Architecture

### State Management Pattern

```jsx
// Context API for global state
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemsQuantity: () => {},
});

// useReducer for complex state logic
function shoppingCartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
    // Complex logic for adding items
    case "UPDATE_ITEM_QUANTITY":
    // Complex logic for updating quantities
    default:
      return state;
  }
}
```

### Component Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation and cart button
│   ├── Shop.jsx           # Product grid container
│   ├── Product.jsx        # Individual product card
│   ├── Cart.jsx           # Cart items display
│   └── CartModal.jsx      # Cart modal overlay
├── store/
│   └── shopping-cart-context.jsx  # Context provider & reducer
├── assets/                # Product images
├── dummy-products.js      # Product data
└── App.jsx               # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd react-state-api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🧠 Key Learning Concepts

### 1. Context API Implementation

**Provider Setup:**

```jsx
export default function CartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    { items: [] }
  );

  const contextValue = {
    items: shoppingCartState.items,
    addItemToCart,
    updateItemsQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}
```

**Consumer Usage:**

```jsx
function Product({ id, title, price }) {
  const { addItemToCart } = useContext(CartContext);

  return <button onClick={() => addItemToCart(id)}>Add to Cart</button>;
}
```

### 2. useReducer for State Management

**Benefits over useState:**

- ✅ Handles complex state logic
- ✅ Predictable state transitions
- ✅ Better for multiple related state updates
- ✅ Easier to test and debug

**Action Types:**

```jsx
const actions = {
  ADD_ITEM: "ADD_ITEM",
  UPDATE_ITEM_QUANTITY: "UPDATE_ITEM_QUANTITY",
};
```

### 3. Advanced Patterns

- **Immutable State Updates**: Always returning new state objects
- **Action Payload Pattern**: Structured action dispatching
- **Provider Pattern**: Wrapping components with context
- **Custom Hooks**: Could be extended with useCart() hook

## 🎨 Styling Features

- **CSS Grid**: Responsive product layout
- **Flexbox**: Component alignment and spacing
- **CSS Animations**: Smooth modal transitions
- **Gradient Backgrounds**: Modern visual appeal
- **Hover Effects**: Interactive button states

## 📱 Responsive Design

The application adapts to different screen sizes:

- **Desktop**: Multi-column grid layout
- **Tablet**: Adjusted grid columns
- **Mobile**: Single column layout

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🛠️ Technologies Used

- **React 19** - Frontend framework
- **Vite** - Build tool and dev server
- **Context API** - State management
- **useReducer** - Complex state logic
- **CSS3** - Styling and animations
- **ESLint** - Code linting

## 📚 What I Learned

### Context API

- Creating and providing context
- Consuming context with useContext
- Avoiding prop drilling
- Performance considerations

### useReducer

- When to use over useState
- Action-based state updates
- Reducer function patterns
- State immutability

### React Patterns

- Provider pattern implementation
- Component composition
- State lifting and sharing
- Event handling optimization

## 🎯 Future Enhancements

- [ ] Add product search and filtering
- [ ] Implement persistent cart (localStorage)
- [ ] Add user authentication
- [ ] Include product reviews and ratings
- [ ] Add checkout process
- [ ] Implement custom useCart hook
- [ ] Add unit and integration tests

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ while learning React Context API and useReducer**
