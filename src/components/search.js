import React from "react";
import "./search.css";

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state= {
            query: "",
            results: {},
            loading: false,
            message: ""
        };
    }

    handleInputChange = (event) => {
        const query = event.target.value;
        this.setState({ query, loading: true, message:"" });
    };
    render() {
        return (
            <div className="container">
                {/*Heading*/}
                <h2 className="heading">
                    Live Search: React App
                </h2>
                {/*Search Input*/}
                <label className="search-label" htmlFor="search-input">
                    <input
                     type="text"
                     value=""
                     id="search-input"
                     placeholder="Search..."
                     onChange={this.handleInputChange}
                     />
                     <i className="fa fa-search search-icon"/>
                </label>
            </div>
        )
    }
}

export default Search;