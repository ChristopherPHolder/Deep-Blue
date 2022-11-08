import React, { useState } from 'react';

const ImageSizeCompairer = () => {

  const [imageInput, setImage] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const image = form.image.files[0];
    const imgBlob = URL.createObjectURL(image);
    const imgElem = document.createElement('img');
    imgElem.src = imgBlob;
    imgElem.onload = () => {
      console.log(imgElem, imgElem.naturalHeight, imgElem.naturalWidth)
    }
    setImage(imgBlob)
  }

  const compairerStyle = `
    margin: 50px;
    height: 500px;
    width: 600px;
    background: aliceblue;
  `;
  const deviceBlockStyle = `
    height: ${853/2}px;
    width: ${480/2}px;
    border: 2px solid #f00;
    margin: 5px;
  `;

  return (
    <section className="contact-area pb-100">
      <div className="container" style="padding-top: 20px; padding-bottom: 20px;">
        <div className="row">
          <div className="contact-form">
            <form id="compairerForm" onSubmit={onSubmit} >
              <div className="row">
                <div className="col-lg-12 col-md-3">
                  <input
                    type="file" 
                    name="image"
                    id="image_input"
                    className="default-btn"
                    style="padding: 12px 25px 12px 25px !important;"
                    accept="image/png, image/jpg, image/webp"
                  />
                </div>
              </div>
              <div className="row" >
                <div className="col-lg-12 col-md-6">
                  <div className="form-group" >
                  <label for="deviceDimentions">Choose Device:</label>
                  <select
                    name="deviceDimentions"
                    className="form-control"
                    required
                    placeholder="High"
                  >
                    <option value="volvo">Mobile</option>
                    <option value="saab">Desktop</option>
                  </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-12">
                  <button id="submit" type="submit" className="default-btn"  >
                    <i className="flaticon-right"></i> Generate Image <span></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div style={compairerStyle}>
              <div style={deviceBlockStyle}></div>
              <img id="image_element" src={imageInput}/>
          </div>
        </div>
      </div>
    </section>

  )
}
export default ImageSizeCompairer;