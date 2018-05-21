import React, { Component } from 'react';

class StoryMap extends Component {
  render() {
    return (
	    <div className="container-fluid w-100 p-0" style={{"height": "92vh", "margin":"0", "overflow": "hidden"}}>
	<iframe title="storymap" width="100%" height="100%" src="https://www.arcgis.com/apps/Cascade/index.html?appid=d26903b3fb0e4049a65d954f257bf356"></iframe>
	    </div>
    );
  }
}

export default StoryMap;
