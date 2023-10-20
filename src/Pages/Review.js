import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Card } from '@mui/material'

const Review = () => {
  return (
    <div>
      <Layout>
      <Box sx={{ display: "flex",margin:'3rem', flexWrap: "wrap", justifyContent: "center" }}>
      
          <Card sx={{ Width: "350px",margin:'3rem',   Height:'700px', display: "flex", m: 2,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <h2 style={{padding:'5rem'}}>Thank you for  contact us...</h2>
          </Card>

      </Box>
    </Layout>
    </div>
  )
}

export default Review
