import React from 'react'

const PostSlug = ({params}) => {
  const { slug } = params; // Access the slug from params
  return (
    <div style={{marginTop:"5%",marginBottom:"30%",marginLeft:"5%"}}>{slug}</div>

  )
}

export default PostSlug