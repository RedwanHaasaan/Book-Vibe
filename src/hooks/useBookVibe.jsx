import { useContext } from 'react';
import { BookVibeContext } from '../context/BookVibeContext';

const useBookVibe = () => {
    return useContext(BookVibeContext);
};

export default useBookVibe;