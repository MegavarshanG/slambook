import React from 'react';
import './styles/SlamBook.css';

const SlamBook = () => {
    return (
        <div className="slambook-body">
            <div className="container">
                <header className="slambook-header">
                    <h1>My Slam Book</h1>
                </header>

                <form action="#" method="post">
                    <div className="form-group">
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="nickname">Nickname:</label>
                        <input type="text" id="nickname" name="nickname" placeholder="Your nickname" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="hobbies">Your Hobbies:</label>
                        <textarea id="hobbies" name="hobbies" rows="4" placeholder="List your hobbies..."></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message for Me:</label>
                        <textarea id="message" name="message" rows="5" placeholder="Your personal message for me..."></textarea>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SlamBook;
