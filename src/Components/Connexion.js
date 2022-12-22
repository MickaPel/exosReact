import React from 'react'

function Connexion({connected, value, submit, change, logout}) {

  return (
    <div>
        {connected ?
            <button onClick={logout}>Deconnexion</button>
            :   <div>
                    <h2>Connectez-vous</h2>
                    <form onSubmit={submit}>
                        <input value={value} placeholder='Votre Nom' onChange={change}></input>
                        <button type='submit'>Connexion</button>
                    </form>
                </div>
        }
        
    </div>
  )
}

export default Connexion