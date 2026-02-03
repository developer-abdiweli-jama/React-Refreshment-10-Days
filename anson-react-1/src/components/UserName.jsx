export default function UserName(props) {
  

    return (
        <>
            <h2>User Name Component</h2>
            <hr />
            <p>This component displays the user's name information.</p>
            <div>
                <b>Username: </b><span>{props.username}</span><br />
                <b>Last Name: </b><span>Jama</span><br/>
                <b>First Name: </b><span>Hanad</span><br/>
                <b>Nickname: </b><span>Hanadoow</span><br/>
                <b>Age: </b><span>{props.age}</span>
                <br />
                <b>Logged in:</b> <span>{props.isLogged ? " " : "No"}</span>
            </div>
        </>
    );
}