import React from 'react'
import PropTypes from 'prop-types'

const Tabs = ({tabProp}) => {
    const [content, setContent] = React.useState('');
  return (
    <div>
        <ul>
            {tabProp.map((tab)=>
                <li onClick={()=>setContent(tab.content)}> {tab.title}</li>
            )}
        </ul>
        <p>{content}</p>
    </div>
  )
}

Tabs.propTypes = {}

export default Tabs