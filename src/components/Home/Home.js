import React from 'react'
import Notes from "../Notes/Notes"


const Home = (props) => {
    const {showAlert} = props;
    return (
        <div>
        <br /><br/>
            <Notes showAlert={showAlert} />
        </div>
    )
}

export default Home
