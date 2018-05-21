import React, { Component } from 'react';
import GalleryComponent from 'react-photo-gallery';
import Lightbox from 'react-images';


const PHOTO_SET = [{"src": "https://i.imgur.com/yyYunJP.jpg", "width": 3, "height": 4}, {"src": "https://i.imgur.com/PleLcX6.jpg", "width": 4, "height": 3}, {"src": "https://i.imgur.com/Xs5UV91.jpg", "width": 3, "height": 4}, {"src": "https://i.imgur.com/SBfTjna.jpg", "width": 4, "height": 3}, {"src": "https://i.imgur.com/tRlLvsB.jpg", "width": 4, "height": 3}, {"src": "https://i.imgur.com/uwAPdGE.jpg", "width": 4, "height": 3}, {"src": "https://i.imgur.com/2m4XhKP.jpg", "width": 4, "height": 3}, {"src": "https://i.imgur.com/FpOoBv0.jpg", "width": 3, "height": 4}, {"src": "https://i.imgur.com/fFQ2Fw5.jpg", "width": 4, "height": 3}, {"src": "https://i.imgur.com/EjziFOt.jpg", "width": 4, "height": 3}, {"src": "https://i.imgur.com/dpQCcNc.jpg", "width": 4, "height": 3}, {"src": "https://i.imgur.com/xk0ob3X.jpg", "width": 3, "height": 4}, {"src": "https://i.imgur.com/kmM0fzT.jpg", "width": 3, "height": 4}, {"src": "https://i.imgur.com/pehPNEk.jpg", "width": 4, "height": 3}, {"src": "https://i.imgur.com/Ghab47G.jpg", "width": 3, "height": 4}, {"src": "https://i.imgur.com/E9npbgI.jpg", "width": 3, "height": 4}, {"src": "https://i.imgur.com/PVqbPja.jpg", "width": 3, "height": 4}, {"src": "https://i.imgur.com/Ka8Gjau.jpg", "width": 3, "height": 4}, {"src": "https://i.imgur.com/xYq3O2X.jpg", "width": 3, "height": 4}, {"src": "https://i.imgur.com/BxAI8UA.jpg", "width": 3, "height": 4}, {"src": "https://i.imgur.com/YiJXH0m.jpg", "width": 3, "height": 4}]

class Gallery extends Component {

  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
  	this.setState({
  		currentImage: this.state.currentImage-1
  	});
  }

  gotoNext() {
  	this.setState({
  		currentImage: this.state.currentImage+1
  	});
  }





  render() {
    return (
    	<div>
	    	<GalleryComponent photos={PHOTO_SET} onClick={this.openLightbox}/>
	    	<Lightbox images={PHOTO_SET}
	    		onClose={this.closeLightbox}
	    		onClickPrev={this.gotoPrevious}
	    		onClickNext={this.gotoNext}
	    		currentImage={this.state.currentImage}
	    		isOpen={this.state.lightboxIsOpen}
	    	/>
    	</div>
    );
  }
}

export default Gallery;
