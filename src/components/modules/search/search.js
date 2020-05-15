import React, { Component } from 'react'
import { Link } from 'gatsby'

// Search component
class Search extends Component {
  state = {
    query: '',
    results: [],
  }

  render() {
    const ResultList = () => {
      if (this.state.results.length > 0) {
        return this.state.results.map((page, i) => (
          <div className="py-2" key={i}>
            <Link to={`products/${page.url}`}>
              <h4>{page.title}</h4>
            </Link>
          </div>
        ))
      }
    }

    const Results = () => {
      if (this.state.results.length > 0) {
        return (
          <div className="search__list absolute bg-white p-5 text-base w-full+100 border-2 border-gray-300 bg-white text-sm focus:outline-none">
            <ResultList />
          </div>
        )
      } else if (this.state.query.length > 2) {
        return (
          <div className="search__list absolute bg-white p-5 text-base w-full+100 ">
            {'No results for ' + this.state.query}
          </div>
        )
      } else if (
        this.state.results.length === 0 &&
        this.state.query.length > 0
      ) {
        return (
          <div className="search__list absolute bg-white p-5 text-base w-full+100 ">
            Please insert at least 3 characters
          </div>
        )
      } else {
        return ''
      }
    }

    return (
      <div className="relative mx-auto text-gray-600 lg:block hidden">
        <input
          className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 text-sm focus:outline-none"
          type="text"
          onChange={this.search}
          placeholder={'Search'}
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
          <svg
            className="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
        <Results />
      </div>
      // <div className={this.props.classNames}>
      //   <input
      //     className="search__input"
      //     type="text"
      //     onChange={this.search}
      //     placeholder={'Search'}
      //   />
      //   <div className="search__list">
      //     <ResultList />
      //   </div>
      // </div>
    )
  }

  getSearchResults(query) {
    var index = window.__FLEXSEARCH__.en.index
    var store = window.__FLEXSEARCH__.en.store
    if (!query || !index) {
      return []
    } else {
      var results = []
      Object.keys(index).forEach(idx => {
        results.push(...index[idx].values.search(query))
      })

      results = Array.from(new Set(results))

      var nodes = store
        .filter(node => (results.includes(node.id) ? node : null))
        .map(node => node.node)

      return nodes
    }
  }

  search = event => {
    const query = event.target.value
    if (this.state.query.length > 2) {
      const results = this.getSearchResults(query)
      this.setState({ results: results, query: query })
    } else {
      this.setState({ results: [], query: query })
    }
  }
}

export default Search
