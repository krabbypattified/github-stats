import React from 'react'

import Placeholder from 'components/Placeholder'

import './Title.css'


const Title = ({ data }) => {
  if (data.loading) return <Placeholder className="Title">krabbypattified/<b>github-stats</b></Placeholder>

  const owner = data.repository.owner.username
  const name = data.repository.name
  const url = `https://github.com/${encodeURIComponent(owner)}/${encodeURIComponent(name)}`

  return <a href={url} target="_blank" className="Title">{owner}/<b>{name}</b></a>
}


export default Title
