import React from 'react'
import UserFavorite from './UserFavorite'
import UserName from './UserName';
export default function UserProfile() {
    return (
        <>
            <h2>User Profile Component</h2>
            <hr />
            <p>I am Hanad Hajji the user and the fun fuct is i am also the creatotr of this project for toutorials</p>
            <div>
                <span>Username: HanadHajji</span><br />
                <span>Email: hanadhajji@example.com</span><br />
                <span>Location: XYZ</span>
            </div>
            <section>
                <h3>About Me</h3>
                <p>This is a simple user profile component created to demonstrate React component structure and JSX syntax.</p>
                <span>Fovorite Colors: </span> <br />
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