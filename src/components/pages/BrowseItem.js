import React from 'react'

const BrowseItem = ({img, desc}) => {
    return (
        <div className="browseItem">
            <div className="itemTitle">{desc}</div>  
            <img src={img} alt="" />          
        </div>
    )
}

export default BrowseItem
