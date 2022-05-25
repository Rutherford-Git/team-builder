import React from "react";

export default function NewMember(props) {

    const {values, update, submit} = props

    const onChange = evt => {

        const name = evt.target.name;
        const { value } = evt.target;

        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
        console.log(props);
    }

    return(
      <form onSubmit={onSubmit}>
        <div>
            <label> First Name
                <input
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={onChange}
            placeholder="Type your first name..."
            maxLength="30"
              />
            </label>
         
            <label> Last Name
                <input
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={onChange}
            placeholder="Type your first name..."
            maxLength="30"
              />
            </label>
            <br/>
            <label>Email
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={onChange}
            placeholder="Type an email..."
          />
        </label>

        <label>Phone Number
            <input 
            type='number'
            name='number'
            value={values.number}
            onChange={onChange}
            placeholder="#-###-###-###"
            maxLength="9"
            />
        </label>

        <div>
            <button disabled={!values.firstName || !values.lastName || !values.email || !values.number}> submit </button>
        </div>

        </div>
      </form>
    )

}