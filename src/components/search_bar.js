import React from 'react'; // need to import react here as the below line need to be rendered from react

/*const SearchBar = () => {
    return <input />
};*/


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {term : '' };
    }
    render() {
        return (
        <div className ="search-bar">
        <input 
        value = {this.state.term}
        onChange={event => this.onInputChange(event.target.value)}/>
        </div>
        )
       // return <input onChange={this.onInputChange}/>;
    }
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
       // console.log(event.target.value);
    }
    
}

export default SearchBar;
