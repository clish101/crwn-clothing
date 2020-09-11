import React, { Component } from 'react'
import Menu from '../menu-item/menu-item.components'
import './Directory.styles.scss'



export class Directory extends Component {
    constructor() {
        super()

        this.state = {
            section: [
                {
                    title: 'HATS',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'JACKETS',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'SNEAKERS',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'WOMENS',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: '',
                    size: 'large'
                },
                {
                    title: 'MENS',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: '',
                    size: 'large'
                }
            ]
        }
    }


    render() {
        return (
            <div className="directory-menu" >
                {
                    this.state.section.map(({ id, ...otherSections }) =>
                        (<Menu key={id} {...otherSections} />)
                    )
                }
            </div>
        )

    }
}

export default Directory
