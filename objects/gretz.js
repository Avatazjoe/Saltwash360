import React from 'react';
import Zone from '../constants/zoneconstants';
import {isZone} from '../helpers/zonehelpers';
import {connect} from '../store/store';
import {View, AmbientLight, PointLight, asset} from 'react-360';
import Entity from 'Entity';

class Gretz extends React.Component {

    render() {
        return (
            isZone(this.props.zone, Zone.Gretz) && 
            <View>
                <AmbientLight intensity={ 0.6 } />
                <PointLight 
                    distance={ 10 }
                    style={{
                        color: 'white', 
                        transform: [
                            {translate: [1.5, 3.5, 2]}
                        ]
                    }} 
                />
                <Entity
                    source={{
                        obj: asset('Light.obj'),
                        mtl: asset('Light.mtl')
                    }}
                    style={{
                        transform: [
                            {translate: [1.5, 3.5, 2]}
                        ]
                    }}
                />
                <Entity
                    source={{
                        obj: asset('Gretz.obj'),
                        mtl: asset('Gretz.mtl')
                    }}
                    style={{
                        transform: [
                            {translate: [0, -2, 0]},
                        ]
                    }}
                />
            </View>
        );
    };
};

const ConnectedGretz = connect(Gretz);

export default ConnectedGretz;
