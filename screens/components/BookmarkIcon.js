import React, { Component, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


function AddBookmark() {

    const [state, setState] = useState([])
    const [bookmarked, setBookmarked] = useState('');
    
   const _addBookmarkedEvent = () => {
        const newState = !state.toggle;
        setState({toggle: newState})
        
        const newBookmarkedList = [...bookmarked, 'hello']
        setBookmarked(newBookmarkedList)
    }

    const {toggle} = state;
    const bookmarkColor = toggle ? '#E57622' :  'black';
    const iconName = toggle ? 'bookmark' :  'bookmark-o';


    return(
        <>
            <TouchableWithoutFeedback onPress={() => _addBookmarkedEvent()} >
                <FontAwesome name={iconName} size={24} color={bookmarkColor} />
            </TouchableWithoutFeedback>
        </>
    )
    };


export default AddBookmark;