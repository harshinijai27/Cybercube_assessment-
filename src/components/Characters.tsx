import axios from 'axios';
import * as React from "react";
import Coverflow from 'react-coverflow';

export interface IMyProps {
    movies?: any[],
    charactersData?: any[]
}
export default class Characters extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            characterSet: []
        };
    }
    public componentDidMount() {
        const characterRes: any = [];
        this.props.charactersData.map((data) => {
            axios.get(data)
                .then((response) => {
                    // handle success
                    /*eslint no-console: "error"*/
                    characterRes.push(response.data);
                    this.setState({ characterSet: characterRes });
                })
                .catch((error) => {
                    // handle error
                    /*eslint no-console: "error"*/
                    console.log(error);
                })
        });
    }
    public moviewList() {
        return this.state.characterSet.map((data) => {
            return (
                <div key={data.mass}>
                    <p>{data.name}</p>
                    <p><a href="javascript:void(0)">Sequesnce Number</a></p>
                </div>
            )
        })

    }
    public render() {
        console.log(this.state);
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