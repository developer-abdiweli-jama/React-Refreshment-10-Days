import PropTypes from "prop-types";

function UserFavoriteFoods({ food = [] }) {
    return (
        <>
            <h4>Favorite Foods</h4>
            <ul>
                {food.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

        </>
    );
}

UserFavoriteFoods.propTypes = {
    food: PropTypes.arrayOf(PropTypes.string)
}

export default UserFavoriteFoods;