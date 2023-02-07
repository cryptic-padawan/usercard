import React from "react";

const Users = ({ loading, users }) => {

    return loading ? (
        <div id="main">
            <div className="message">
                Welcome Viewers
            </div>
            
        </div>
    ) :
        (
            <div className="row" id="main">

                {users.map(user =>
                    <div className="col-sm-6 col-md-4">
                        <div className="info">
                            <img src={user.avatar} alt={user.avatar} className="image"></img>
                            <p><b>ID: {user.id}</b></p>
                            <h3 className="name">
                                {user.first_name} {user.last_name}
                            </h3>
                            <p className="email"> {user.email} </p>
                        </div>
                    </div>
                )
                }
            </div>
        )
}

export default Users;