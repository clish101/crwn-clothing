import React, { Component } from 'react'
import { Collection } from '../Collection-preview/Collection-preview'
import Shop_Data from './shopdata'

class ShopPage extends Component {
    constructor() {
        super()
        this.state = {
            collections: Shop_Data
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div>
                {
                    collections.map(({ id, ...OtherCollectionProps }) =>
                        <Collection key={id} {...OtherCollectionProps} />
                    )
                }
            </div>
        )
    }
}

export default ShopPage