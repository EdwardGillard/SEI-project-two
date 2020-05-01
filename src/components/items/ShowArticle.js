import React from 'react'

const ShowArticle = ({ title, urlToImage, publishedAt, author, description, url }) => {
  return (
    <div className="column is-one-third-desktop is-half-tablet is-full-mobile">
      <div className="card">
        <div className="card-content">
          <h3 className="title-of-the-card">
            {title}</h3>
          <div className="image-tag">
            <img src={urlToImage} alt={title} />
          </div>
          <p className="author-name">
            {author} - {publishedAt.split('T').join(' ').split('Z')}
          </p>
          <div className="description">
            {description}
          </div>
          <div className="read-more">
            <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </div>
      </div>
    </div>
  )
}




export default ShowArticle