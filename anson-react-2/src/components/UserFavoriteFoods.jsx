import React from "react";
import PropTypes from "prop-types";

/**
 * UserFavoriteFoods component renders a list of foods.
 * Demonstrates basic list rendering from an array prop.
 * 
 * @param {Object} props - Component properties.
 * @param {string[]} props.food - Array of food names.
 */
function UserFavoriteFoods({ food = [] }) {
    return (
        <div className="favorite-foods">
            <h4>Favorite Foods</h4>
            <ul>
                {food.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

UserFavoriteFoods.propTypes = {
    food: PropTypes.arrayOf(PropTypes.string)
}

export default UserFavoriteFoods;