import * as React from "react";
import Characters from './Characters';
import Movie from './Movie';

interface IMovieProps {
    characters?: any,
    charactersEvent?: any,
}
export default class MainContainer extends React.PureComponent<IMovieProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            view: true
        };
    }

    public setCharacters = (chars) => {
        this.setState({ characters: chars, view: false });
    }

    public render() {
        return (
            <div>
                {this.state.view ? (
                    <Movie charactersEvent={this.setCharacters} />
                ) : (
                        <Characters charactersData={this.state.characters} />
                    )}
            </div>
        );
    }
}