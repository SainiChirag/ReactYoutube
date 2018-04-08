import React, {Component} from 'react';
import ReaactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // need to enter namespace for user defined files
//create a new component. This component should produce some html
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';
var keys = require('./keys');

const API_KEY = keys.api_key;

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            videos : [],
            selectedVideo: null
        };

        this.videoSearch('game of thrones');
    }

    videoSearch (term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos :videos,
                selectedVideo : videos[0]
            });
            //this.setState({videos : videos})
        });
    }
    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
    return (
    <div>
        <SearchBar onSearchTermChange= {videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
        onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos}/>
    </div>
    );
}
}

ReaactDOM.render(<App />, document.querySelector('.container')); 