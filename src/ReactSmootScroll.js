import React, { useEffect } from 'react';
import Scrollbar from 'smooth-scrollbar';

const ReactSmootScroll = () => {

    var options ={
        damping :0.1,
        
    }

    useEffect(() => {
        Scrollbar.init(document.body, options);
    }, [])

    return null
};

export default ReactSmootScroll;