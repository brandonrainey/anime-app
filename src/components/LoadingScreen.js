import React from 'react'

export default function LoadingScreen(props) {
     if (props.loading === true) {
         return (
          <div className="lds-roller mt-60 bg-gray-200"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        )
     } else return null
        
    
}
