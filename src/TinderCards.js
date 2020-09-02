import React, { useState, useEffect } from 'react';
import './TinderCards.css'
import TinderCard from 'react-tinder-card';
import db from './firebase';

function TinderCards() {
    const [people, setPeople] = useState([]);
    // above code is equivalent to 
    // const people = [];
    // people.push('a', 'b') which is avoided in react, instead below given is followed
    // setPeople([...people, 'a', 'b'])

    useEffect(() => {
        const unsubscribe = db.collection('people').onSnapshot((snapshot) => (
            setPeople(snapshot.docs.map((doc) => doc.data()))
        ));

        return() => {
            unsubscribe();
        };
    }, []);

    return (
        <div className="tinder-cards">
            <div className="tinder-cards__card-container">
                {people.map(person => (
                    <TinderCard 
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div className="tinder-cards__card" style={{ backgroundImage: `url(${person.url})`}}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>     
        </div>
    )
}

export default TinderCards
