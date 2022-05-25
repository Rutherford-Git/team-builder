import React from "react";

export default function NewMemberList(props) {
 const {person}= props;

 return(
     <div>
         <p>{person.firstName} can be contacted at {person.number}</p>
     </div>
 )
}

