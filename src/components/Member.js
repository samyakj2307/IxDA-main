import React from 'react'
import "../styles.css";

function Member({data}) {
    return (
        <div>
            <div className="img-name">
                <img src="https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg" alt={data.name}></img>
                <p>{data.name}</p>
            </div>
            <p className="designation">{data.designation}</p>
            <p className="skill">{data.skill}</p>
            <p className="desc">{data.desc}</p>
        </div>
    )
}

export default Member
