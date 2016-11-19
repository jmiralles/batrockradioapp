import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { getPodcasts, _fetch } from '../components/fetcher';

export default class podcastList extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

        this.state = {
            dataSource: ds.cloneWithRows([
                'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
            ])
        };
    }

    componentDidMount() {
       const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

       getPodcasts()
       .then((titles) => {
           this.setState({
               dataSource: ds.cloneWithRows(titles)
           });
       });

    }

    render() {
        return (
            <ListView
               dataSource={this.state.dataSource}
               renderRow={(rowData) => <Text>{rowData}</Text>}
             />
        )
    }


}