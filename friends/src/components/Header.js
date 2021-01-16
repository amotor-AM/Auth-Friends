import React from 'react'
import { Link } from 'react-router-dom';
import {Button} from "@material-ui/core";

function Header() {
    let userInfo = localStorage.getItem("token")
    console.log(userInfo)

     const signOut = (e) => {
         e.preventDefault();
         localStorage.removeItem("token");
     }
    return (
        <div className="header">
            <h1>Friend's List</h1>
            <div className="links">
                <Link to="/friends-list">
                    <h2>Friend's List</h2>
                </Link>
                <Link to="/add-friend">
                    <h2>Add Friend</h2>
                </Link>
                {userInfo ? (
                <Button onClick={signOut}>
                     Sign Out
                </Button>
                ) : (
                    <Link to="/signin">
                        <h2>Sign In</h2>
                    </Link>
                )}
            </div>
            
        </div>
    )
}

export default Header