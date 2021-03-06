import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import Map from '../Map';

class Overlay extends Component {

  constructor(props) {
    super(props);

    this.OutSideHandleClick = this.OutSideHandleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  OutSideHandleClick(ev) {
    if (ev.target.className == "overlay") {
      this.props.closeOverlay();
    }
  }

  handleButtonClick() {
    this.props.closeOverlay();
  }

  mapingGalleryDefault () {
    var mapImg = [];

    for (var i = 0; i < 8; i++) {
      let path = "img/aptos/default/"+ (i+1) +".jpg";
      let pathThumbnail = "img/aptos/default/thumbnail/"+ (i+1) +".jpg";

      mapImg.push({original: path , thumbnail: pathThumbnail});
    }

    return mapImg;
  }

  mapingGallery (photos, name) {
    var mapImg = [];

    for (var i = 0; i < photos; i++) {
      let path = "img/aptos/"+ name +"/"+ (i+1) +".jpg";
      let pathThumbnail = "img/aptos/"+ name +"/thumbnails/"+ (i+1) +"_tn.jpg";

      mapImg.push({original: path , thumbnail: pathThumbnail});
    }

    return (<div className="gallery">
              <ImageGallery items={mapImg} slideInterval={2000}/>
            </div>);
  }

  render() {


    const { adresse, disponible, options, prix, type, name, date, zone, description, location, photos} = this.props.showApto;
    const galleryImages = (photos !== 0) ? this.mapingGallery(photos, name) : null;

    return(<div className="overlay" onClick={this.OutSideHandleClick}>

          <div className="wrapperCenter">
            <div className="wrapperCenter__header">
              <div className="showApto__adresse">{adresse}</div>
              <button className="wrapperCenter__close" onClick={this.handleButtonClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                  <path d="M28.94 31.786L.614 60.114c-.787.787-.787 2.062 0 2.85.393.393.91.59 1.424.59.516 0 1.03-.197 1.424-.59l28.54-28.544 28.54 28.54c.396.395.91.59 1.426.59s1.03-.195 1.424-.59c.788-.786.788-2.06 0-2.848L35.065 31.786 63.41 3.438c.787-.787.787-2.062 0-2.85-.787-.785-2.062-.785-2.848 0L32.002 29.15 3.442.59C2.653-.196 1.38-.196.59.59c-.786.787-.786 2.062 0 2.85l28.35 28.346z"/>
                </svg>
              </button>
            </div>
            <div className="wrapperCenter__body">
              <div className="wrapperRow wrapperRow--description">
                <div className="showApto__description" dangerouslySetInnerHTML={{__html: description}}></div>
                <div className="wrapper__gallery">
                  <div className="showApto__prix">{type}  {prix}$ <span>(par mois)</span></div>
                  {galleryImages}
                </div>
              </div>
              <div className="wrapperRow">
                <Map location={location}/>
              </div>
            </div>
          </div>
    </div>);
  }
}

export default Overlay;
