import React from 'react'

const ShowArticle = ({ title, urlToImage, publishedAt, author, description, url }) => {
  return (
    <div className="column is-one-third">
      <div className="card">
        <div className="card-content">
          <p className="title"><strong>
            {title}
          </strong></p>
          <div className="image-tag">
            <img src={urlToImage} alt={title} />
          </div>
          <div className="media-content">
            <p className="subtitle is-6">
              {author} - {publishedAt.split('T').join(' ').split('Z')}
            </p>
            <div className="content">
              {description}
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </div>
      </div>
    </div >
  )
}




export default ShowArticle