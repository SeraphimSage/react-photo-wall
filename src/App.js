import React, { Component } from "react";
import "./App.css";

const PHOTO_URL = photoId => `https://picsum.photos/id/${photoId}/200/200`;

const PHOTO_LIST_URL = "https://picsum.photos/list";

class App extends Component {

	state = {
		photos: []
  };
  
	componentDidMount() {
		fetch(PHOTO_LIST_URL)
			.then(response => response.json())
			.then(responseBody => {
				console.log(responseBody);
				this.setState({ photos: responseBody });
			});
	}
	render() {
		const { photos = [] } = this.state;
		return (
			<React.Fragment>
				<header>
					<h1>Photo Wall</h1>
				</header>
				<div className="collage">
					{}
					{this.state.photos.map(photo => (
						<img
							alt={photo.filename}
							key={photo.id}
							src={PHOTO_URL(photo.id)}
						/>
					))}
				</div>
			</React.Fragment>
		);
	}
}

export default App;
