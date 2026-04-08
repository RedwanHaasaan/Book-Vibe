import React from 'react';
import BookBarChart from '../components/sections/BookBarChart';
import useBookVibe from '../hooks/useBookVibe';

const PagesToRead = () => {
    const{Books}= useBookVibe();
    return (
        <div>
            <BookBarChart books={Books} dataKey='totalPages' />
        </div>
    );
};

export default PagesToRead;