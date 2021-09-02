import React from 'react';

const Gallery = () => {

  return (

    <section className="gallery">
      <div className="container">
        <div className="galleryInner">
          <div className="gallery__header">
            <h2 className="gallery__title">
            <span className='common__number common__number_pink'>
                02
            </span>NFT Gallery</h2>
            <a className="gallery__link" href="">
              <span></span>
              Go to 3d Gallery
            </a>
          </div>
        </div>
      </div>
      <div className="galleryInnerContainer">
        <div className="gallery__items">
          <div className="gallery__item">
            <div className="gallery__itemImg gallery__itemImg_1"></div>
            <div className="gallery__itemInfo">
              <div className="gallery__itemInfoNumber">
                <span>12.4</span>
                <span></span>
              </div>
              <div className="gallery__itemInfoDesc">
                <p>TRANSITION: Nature</p>
                <p>by POKRAS LAMPAS ®</p>
              </div>
            </div>
          </div>
          <div className="gallery__item">
            <div className="gallery__itemImg gallery__itemImg_2"></div>
            <div className="gallery__itemInfo">
              <div className="gallery__itemInfoNumber">
                <span>38.2</span>
                <span></span>
              </div>
              <div className="gallery__itemInfoDesc">
                <p>Prophet #5/7</p>
                <p>by Diplo</p>
              </div>
            </div>
          </div>
          <div className="gallery__item">
            <div className="gallery__itemImg gallery__itemImg_3"></div>
            <div className="gallery__itemInfo">
              <div className="gallery__itemInfoNumber">
                <span>77.1</span>
                <span></span>
              </div>
              <div className="gallery__itemInfoDesc">
                <p>Outer #3/53</p>
                <p>by Chad Knight</p>
              </div>
            </div>
          </div>
          <div className="gallery__item">
            <div className="gallery__itemImg gallery__itemImg_4"></div>
            <div className="gallery__itemInfo">
              <div className="gallery__itemInfoNumber">
                <span>128</span>
                <span></span>
              </div>
              <div className="gallery__itemInfoDesc">
                <p>CANCER #21/28</p>
                <p>by Sage Vaughn</p>
              </div>
            </div>
          </div>
          <div className="gallery__item">
            <div className="gallery__itemImg gallery__itemImg_5"></div>
            <div className="gallery__itemInfo">
              <div className="gallery__itemInfoNumber">
                <span>12.4</span>
                <span></span>
              </div>
              <div className="gallery__itemInfoDesc">
                <p>TRANSITION: Nature</p>
                <p>by POKRAS LAMPAS ®</p>
              </div>
            </div>
          </div>
          <div className="gallery__item">
            <div className="gallery__itemImg gallery__itemImg_6"></div>
            <div className="gallery__itemInfo">
              <div className="gallery__itemInfoNumber">
                <span>12.4</span>
                <span></span>
              </div>
              <div className="gallery__itemInfoDesc">
                <p>TRANSITION: Nature</p>
                <p>by POKRAS LAMPAS ®</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
