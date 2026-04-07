import { BookVibeContext } from "./BookVibeContext";

const BookVibeProvider = ({ children}) => {
    return (
        <BookVibeContext.Provider >
            {children}
        </BookVibeContext.Provider>
    );
};

export default BookVibeProvider;