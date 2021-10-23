import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl } = this.props;

        return (
            <div className="container my-3">
                <div class="card" style={{ width: "18rem" }}>
                    <img src={!imageUrl ? "https://indiaeducationdiary.in/wp-content/uploads/2020/08/Default-Image-IED.png" : imageUrl} className="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text">{description}</p>
                        <a rel="noreferrer"  href={newsUrl} target="_blank" class="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
