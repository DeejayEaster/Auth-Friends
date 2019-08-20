// here you  need to call to the server and get  the info. Log it out to see what it looks like. You will also need to create a card for the users and then map over the data applying the card to each friend item.

import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import AddFriend from "./AddFriend";
import FriendCard from "./FriendCard";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => getData(), []);
  function getData() {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(error => console.log(error.res));
  }
  return (
    <div>
      <AddFriend />
      <div className="card-container">
        {friends.length > 0
          ? friends.map(friend => (
              <FriendCard key={friend.id} friend={friend} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Friends;
