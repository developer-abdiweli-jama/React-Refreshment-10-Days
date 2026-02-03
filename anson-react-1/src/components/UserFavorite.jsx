//Old way of writing React Components using createElement
/* import { createElement } from "react";

// export function UserFavorite() {
//     return createElement(
//         "div",
//         null,
//         createElement("h2", null, "User Favorite Component"),
//         createElement("hr", null),
//         createElement("p", null, "This component showcases the user's favorite items."),
//         createElement("div", null,
//             createElement("span", null, "Favorite Movie: Inception"),
//             createElement("br", null),
//             createElement("span", null, "Favorite Book: 1984 by George Orwell"),
//             createElement("br", null),
//             createElement("span", null, "Favorite Sport: Soccer")
//         )
//     );
}*/

//New way of writing React Components using JSX
import React from "react";
export default function UserFavorite() {
    return (
        <>
            <h2>User Favorite Component</h2>
            <hr />
            <p>This component showcases the user's favorite items.</p>
            <div>
                <span>Favorite Movie: Inception</span><br/>
                <span>Favorite Book: 1984 by George Orwell</span><br/>
                <span>Favorite Sport: Soccer</span>
            </div> 

        </>
    );
}