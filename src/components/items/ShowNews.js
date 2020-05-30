import React from 'react'
import { getAllNews } from '../../lib/api'
import Navbar from '../common/Navbar'
import NavbarTwo from '../common/Navbar2'
import SelectCountry from '../common/SelectCountry'
import ShowArticle from './ShowArticle'
import Spinner from '../common/Spinner'
import Footer from '../common/Footer'


class ShowNews extends React.Component {
  state = {
    news: null,
    country: 'gb'
  }

  async componentDidMount() {
    try {
      this.loadPage()
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  loadPage = async () => {
    try {
      const res = await getAllNews(this.state.country)
      this.setState({ news: res.data.articles })
    } catch (err) {
      console.log(err)
      this.props.history.push('/notfound')
    }
  }

  handleChange = async (event) => {
    try {
      await this.setState({ country: event.target.value })
      this.loadPage()
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    if (!this.state.news) return <Spinner />
    const { news } = this.state
    return (
      <>
        <Navbar />
        <NavbarTwo />
        <SelectCountry handleChange={this.handleChange} />
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {news.map(item => (
                <ShowArticle key={item.name} {...item} />
              ))}
            </div>
          </div>
        </section >
        <Footer />
      </>
    )
  }
}
export default ShowNews