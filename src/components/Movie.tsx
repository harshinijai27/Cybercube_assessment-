import axios from 'axios';
import * as React from "react";
import Coverflow from 'react-coverflow';

export interface ICustomInputProps {
    characters?: any[],
    charactersEvent?: any
}
export interface IMyState {
    movies: any[]
}
export default class Movie extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
        console.log(this.props);
    }
    public componentDidMount() {
        axios.get('https://swapi.co/api/films')
            .then((response) => {
                // handle success
                /*eslint no-console: "error"*/
                console.log(response);
                this.setState({ movies: response.data.results });
            })
            .catch((error) => {
                // handle error
                /*eslint no-console: "error"*/
                console.log(error);
            })
    }
    public handleClick = (self, data: any) => {
        this.props.charactersEvent(self.characters);
    }

    public moviewList() {
        return this.state.movies.map((data) => {
            return (
                <div key={data.id}>
                    <p>{data.title}</p>
                    <p><a href="javascript:void(0)" onClick={this.handleClick.bind(this, data)}>Characters</a></p>
                </div >
            )
        })

    }
    public render() {
        return (
            <div>
                <Coverflow width="960" height="500"
                    displayQuantityOfSide={2}
                    enableHeading={false}
                    navigation={false}
                    enableScroll={true}
                    clickable={true}
                    active={0}
                >
                    {this.moviewList()}
                </Coverflow>
            </div>
        );
    }
}