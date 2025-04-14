import { createContext, useState } from "react";
import book1 from './assets/image/book.jpg'


export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books,setBooks] = useState([
        {
            id: 1,
            image: book1,
            title: "Truyen co tich",
            author: "Nguyen Van A",
            price: 270000
        },
        {
            id: 2,
            image: book1,
            title: "Truyen ngu ngon",
            author: "Nguyen Van B",
            price: 280000
        },
        {
            id: 3,
            image: book1,
            title: "Truyen ngon tinh",
            author: "Nguyen Van C",
            price: 280000
        },
        {
            id: 4,
            image: book1,
            title: "Truyen ngon tinh",
            author: "Nguyen Van C",
            price: 30000
        },
        {
            id: 5,
            image: book1,
            title: "Truyen ngu ngon",
            author: "Nguyen Van D",
            price: 290000
        },

    ])
    const [selectedBook,setSelectedBook] = useState(null);
    const [cart ,setCart ] = useState([]);

    const handleShowDetail = (id)=>{
        const selectBook = books.find((book)=>{
            return book.id === id
        })
        setSelectedBook(selectBook)
    }

    const handleAddToCart = (id)=>{
        const selectBook = books.find((book)=>{
            return book.id === id
        })
        setCart((prevCart)=>{
            const checkCart = prevCart.some(item => item.id === selectBook.id)
            if(checkCart){
                return [...prevCart]
            }else{
                return [
                    ...prevCart,
                    selectBook
                ]
            }
        })
    }

    const handleRemoveCart = (id)=>{
        const filterCart = cart.filter(item => item.id !== id)
        setCart(filterCart)
    }
  
  return (
    <BookContext.Provider value={{ 
        books, cart, selectedBook, 
        handleShowDetail,
        handleAddToCart,
        handleRemoveCart
    }}>
      {children}
    </BookContext.Provider>
  );
};
