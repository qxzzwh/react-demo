import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    search = () => {

        const { keywordElement: { value: keyword } } = this
        // this.props.updateAppState({ isFirst: false, isLoading: true })
        PubSub.publish('qxz', { isFirst: false, isLoading: true })
        // console.log(keyword)
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then(
            response => {
                // this.props.updateAppState({ isLoading: false, users: response.data.items })
                PubSub.publish('qxz', { isLoading: false, users: response.data.items })
            },
            error => {
                // this.props.updateAppState({ isLoading: false, err: error.message })
                PubSub.publish('qxz', { isLoading: false, err: error.message })
            }
        )
    }

    render() {

        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keywordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search} >Search</button>
                </div>
            </section>
        )
    }
}
