import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import StoryMap from './StoryMap';
import Gallery from './Gallery';

class Main extends Component {
  render() {
    return(

		  <main>
			<Switch>
				<Route exact path='/' component={StoryMap}/>
				<Route path='/gallery' component={Gallery}/>

			</Switch>
			</main>
		);
  }
}

export default Main;


			//	