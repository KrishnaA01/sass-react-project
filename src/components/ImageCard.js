import React from 'react'
import '../styles/ImageCard.scss';

const ImageCard = () => {
  return (
    <section className="second-section">
        <div className="allcards">
            <div className="card">
                <img src="https://picsum.photos/300/400" alt="" />
                <p>Men</p>
                <h1>Lorem Ipsum dolor sit</h1>
            </div>
            <div className="card">
                <img src="https://picsum.photos/300/400" alt="" />
                <p>Women</p>
                <h1>Lorem Ipsum dolor sit</h1>
            </div>
            <div className="card">
                <img src="https://picsum.photos/300/400" alt="" />
                <p>Kids</p>
                <h1>Lorem Ipsum dolor sit</h1>
            </div>
            <div className="card">
                <img src="https://picsum.photos/300/400" alt="" />
                <p>Unisex</p>
                <h1>Lorem Ipsum dolor sit</h1>
            </div>
        </div>
    </section>
  )
}

export default ImageCard;