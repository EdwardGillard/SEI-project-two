import React from 'react'
import { businessPage } from '../../../lib/api'
import NavbarTwo from '../../common/Navbar2'

class Business extends React.Component {

  state = {
    news: []
  }

  async componentDidMount() {
    try {
      const res = await businessPage()
      this.setState({ news: res.data.articles })
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    console.log(this.state.news)
    return (
      <>
        <NavbarTwo />
        <section className="container is-fluid">
          {this.state.news.map(item => {
            return <div key={item.title} className="card">
              <div className="notification">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <img src={item.urlToImage} alt={item.title} />
                      </figure>
                      <div className="media-content">
                        <p className="title is-4">
                          {item.title}
                        </p>
                        <p className="subtitle is-6">
                          {item.author}
                        </p>
                        <div className="content">
                          {item.description}
                        </div>
                        <div className="content">
                          {item.publishedAt.split('T')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          })}

        </section>
      </>
    )
  }
}
export default Business