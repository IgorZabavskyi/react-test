import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTracks } from './actions/tracks';

class App extends Component {
  addTrack() {
    console.log('addTrack', this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = '';
  }

  addList() {
    console.log('addList', this.listInput.value);
    this.props.onAddList(this.listInput.value);
    this.listInput.value = '';
  }

  findTrack() {
    console.log('findTrack', this.searchInput.value);
    this.props.onFindTrack(this.searchInput.value);
  }

  render() {
    console.log('props: ', this.props)
    console.log('tracks: ', this.props.tracks)
    console.log(this.props.tracks)
    return (
      <div>

        <div>
          <input type="text" ref={(input) => { this.trackInput = input }} />
          <button onClick={this.addTrack.bind(this)}>Add track</button>
        </div>
        <div>
          <input type="text" ref={(input) => { this.listInput = input }} />
          <button onClick={this.addList.bind(this)}>Add LIST</button>
        </div>
        <div>
          <input type="text" ref={(input) => { this.searchInput = input }} />
          <button onClick={this.findTrack.bind(this)}>Find track</button>
        </div>
        <div>
          <button onClick={this.props.onGetTracks}>Get tracks</button>
        </div>
        <ul>
          {this.props.tracks.map((track, index) =>
            <li key={index}>{track.name} ozz {index}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks) ),
    lists: state.lists
  }),
  dispatch => ({
    onAddTrack: (name) => {
      const payload = {
        id: Date.now().toString(),
        name
      }
      dispatch({ type: 'ADD_TRACK', payload });
    },
    onFindTrack: (name) => {
      console.log('name: ', name)
      dispatch({ type: 'FIND_TRACK', payload: name })
    },
    onGetTracks: () => {
      dispatch(getTracks());
    },
    onAddList: (name) => {
      const listload = {
        id: Date.now().toString(),
        name
      }
      dispatch({ type: 'ADD_PLAYLIST', listload });
      console.log('state', this.state)
    },
  })
)(App);