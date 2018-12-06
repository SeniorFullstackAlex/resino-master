import React from 'react';
import {Table} from 'rendition';
import Switch from '../Switch';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    PanResponder
} from 'react-native';
//import Svg,{Path,Circle,G} from 'react-native-svg';
//import CircularSlider from '../CircularSlider';
import CircularSlider from 'react-circular-slider-bar';
//import Svg,{Path,Circle,G} from 'react-native-svg';

const API = 'http://localhost:3000/api/v1/device/';
const styles = StyleSheet.create({
  root: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  container: {
    position: 'relative',
    width: 200,
    height: 200
  },
  slider: {
    position: 'absolute',
    top: 0,
    left: 0
  }
});
const columns = [
  {
    field: 'name',
    label: 'Room',
    sortable: true
  },
  {
    field: 'active',
    label: 'State',
    sortable: false,
    render: value => {
    	if(value == null) {
    		return null
    	}

    	return (
    		<div>
    			<Switch isChecked = {value} /> 
    			{value ? 'On' : 'Off'}
    		</div>
    	)
    }
  },
  {
    field: 'brightness',
    label: 'Brightness',
    sortable: false,
    render: value => {
    	if(value == null) {
    		return null
    	}

    	return (
    		<span>{value} %</span>
    	)
    }
  }
];

export default class Dashboard extends React.Component {

	constructor(props) {
	    super(props);

	    this.state = {
	      dataLighting: [],
	      error: null,
	      isLoaded: false,
	      slider1: 270
	    };
	}

	componentDidMount() {
		fetch(API)
		  .then(response => {
	        if (response.ok) {
	          return response.json();
	        } else {
	          throw new Error('Something went wrong ...');
	        }
	      })		  
		  .then(
		  	(result) => {
		  		this.setState({ 
		  			isLoaded: true,
		  			dataLighting: result.data
		  		});
			},
			(error) => {
		          this.setState({
		          	isLoaded: true,
		            error
		          });
		        }
		   )
	}

	handleGetValue = value => {
      console.log('VALUE', value);
    };

	render() {		
		const { error, isLoaded, dataLighting, value } = this.state;
		if (error) {
	      	return <div>Error: {error.message}</div>;
	    } else if (!isLoaded) {
	      	return <div>Loading...</div>;
	    } else {
			return (
				<div>
					<Table 
						columns={columns} 
						data={dataLighting}
						rowKey='id'
						//onRowClick={action('row-clicked')}
					/>
             <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.slider}>
            <CircularSlider width={200} height={200} meterColor='#0cd' textColor='#fff'
              value={this.state.slider} onValueChange={(value)=>this.setState({slider:value})}/>
          </View>
        </View>
      </View>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    

			</div>
					
			);
		}
	}
}