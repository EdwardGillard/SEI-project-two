import React from 'react'
import { filterCategory } from '../../../lib/api'
import NavbarTwo from '../../common/Navbar2'
import SelectCountry from '../../common/SelectCountry'
import ShowArticle from '../ShowArticle'
import Spinner from '../../common/Spinner'


class Business extends React.Component {

  state = {
    news: null,
    country: 'gb'
  }

  async componentDidMount() {
    try {
      const res = await filterCategory(this.state.country, 'business')
      this.setState({ news: res.data.articles })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = async (event) => {
    console.log(event.target.value)
    try {
      await this.setState({ country: event.target.value })
      this.componentDidMount()
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    if (!this.state.news) return <Spinner />
    const { news } = this.state
    return (
      <>
        <NavbarTwo />
        <SelectCountry />
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {news.map(item => (
                <ShowArticle key={item.name} {...item} />
              ))}
            </div>
          </div>
        </section >
      </>
    )
  }
}
export default Business