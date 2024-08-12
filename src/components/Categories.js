import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories : [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'T-shirt',
                    name: 'T-shirt'
                },
                {
                    key: 'Hoody',
                    name: 'Hoody'
                },
                {
                    key: 'Shorts',
                    name: 'Shorts'
                },
                {
                    key: 'Bag',
                    name: 'Bag'
                },
                {
                    key: 'Svitshot',
                    name: 'Svitshot'
                },
                {
                    key: 'Jewerly',
                    name: 'Jewerly'
                },
            ]
        }
    }
    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Categories