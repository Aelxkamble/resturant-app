import React from 'react'
import Layout from '../Components/Layout/Layout'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
  let navigate=useNavigate();
function goBack()
{
   navigate('/') 
}


  return (
    <Layout>
      <div  >
        <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'left',margin:'3rem'}}>
        <h1 >404</h1>
        <h2>Uh Oh! You're Lost.</h2>
        <p>The page you are looking for does not exist.How you got here is a mystry.But you can click the butoon below to go back to the homepage.</p>
        </div>
        <button onClick={()=>goBack()} style={{ padding:'0.5rem',border:'1px solid black', borderRadius:'5px' ,margin:'5%'}}>Go Back</button>
      </div>
    </Layout>
  )
}

export default PageNotFound
