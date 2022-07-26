import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as AppAction from './store/AppAction';
import { StyleSheet, Text, View } from 'react-native';

class mainContainer extends Component{
  handleLoading = () =>{
    
  }
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Text style={styles.loadingText}>"Loading..."</Text>
      </View>
    </View>
  );
}
}
const mapStateToProps = (state) => ({
  loading : state.index.get('loading')

});
const mapDispatchToProps = (dispatch) => ({
  is_loading: (index) => dispatch(AppAction.is_loading(index)),
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    flex: 1,
    backgroundColor: '#989796',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  }
});
export default connect(mapStateToProps, mapDispatchToProps)(mainContainer);
