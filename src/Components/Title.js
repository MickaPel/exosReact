import React from 'react'

function Title({userName}) {
  return (
    <div>
        {userName ?
            <h1>{`${userName}'s Library`}</h1>
            : <h1>My Library</h1>}
    </div>
  )
}

export default Title