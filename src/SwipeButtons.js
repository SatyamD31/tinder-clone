import React from 'react';
import './SwipeButtons.css';
import { Replay, Close, StarRate, Favorite, FlashOn } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function SwipeButtons() {
    return (
        <div className="swipe-buttons">
            <IconButton className="swipe-buttons__repeat">
                <Replay fontSize="large" />
            </IconButton>
            
            <IconButton className="swipe-buttons__left">
                <Close fontSize="large" />
            </IconButton>
            
            <IconButton className="swipe-buttons__star">
                <StarRate fontSize="large" />
            </IconButton>
            
            <IconButton className="swipe-buttons__right">
                <Favorite fontSize="large" />
            </IconButton>
            
            <IconButton className="swipe-buttons__lightning">
                <FlashOn fontSize="large" />
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons
