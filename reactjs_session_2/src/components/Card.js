import React from 'react'

const Card = (props) => {
    // const name = props.name
    const {name, id, print} = props
    print(() => console.log('This is text of child component'))
    return (
        <div>
            {name} with id: {id}
        </div>
    )
}

export default Card