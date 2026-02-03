import React from 'react'
import UserFavorite from './UserFavorite'
import UserName from './UserName';

/**
 * UserProfile component serves as a container for detailed user information.
 * It integrates UserFavorite and UserName components.
 */
export default function UserProfile() {
    return (
        <>
            <h2>User Profile Component</h2>
            <hr />
            <p>I am Hanad Hajji the user and the fun fact is I am also the creator of this project for tutorials.</p>
            <div>
                <span><b>Username:</b> HanadHajji</span><br />
                <span><b>Email:</b> hanadhajji@example.com</span><br />
                <span><b>Location:</b> XYZ</span>
            </div>

            <section>
                <h3>About Me</h3>
                <p>This is a simple user profile component created to demonstrate React component structure and JSX syntax.</p>
                <span><b>Favorite Colors:</b></span> <br />
                <ul>
                    <li>Blue</li>
                    <li>Green</li>
                    <li>Red</li>
                </ul>
            </section>

            <div>
                <UserFavorite />
                <hr />
                <UserName username="hanadoow" age={25} isLogged={false} />
            </div>
        </>
    );
}