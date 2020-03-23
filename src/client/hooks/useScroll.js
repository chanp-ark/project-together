import { useState } from 'react';

const useScroll = (callback) => {
    
    // state label is left blank - will grab the scrollTop directly
    const [, setScrollPosition] = useState(0);
    
    let previousScrollTop = 0;
    
    const handleDocumentScroll = () => {
        // .documentElement returns the element that is a direct child of the document, the <html>
        // .body returns the <body> element of current document
        
        const { scrollTop: currentScrollTop } = document.documentElement || document.body
        
        
        setScrollPosition (previousPosition => {
            previousScrollTop = previousPosition;
            return currentScrollTop
        })
        callback( { previousScrollTop, currentScrollTop})

    }
}

export default useScroll;