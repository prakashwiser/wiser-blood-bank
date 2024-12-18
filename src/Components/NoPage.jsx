import React, {useEffect} from 'react'

function NoPage() {



  function getFunction() {
    console.log('this page works');
    
  }
  useEffect(() => {
    getFunction()
  }, [])
  
  return (
    <div>NoPage</div>
  )
}

export default NoPage