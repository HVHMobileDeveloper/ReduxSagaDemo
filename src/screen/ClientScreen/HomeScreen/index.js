import * as React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { ACTION_GET_PROFILE } from '../../../redux/profile/actions';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const getProfile = () => { dispatch(ACTION_GET_PROFILE()) };

    const state = useSelector(state => state);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{`${JSON.stringify(state)}`}</Text>
            <TouchableOpacity
                onPress={getProfile}
                style={{ borderWidth: 1, borderColor: 'red', padding: 10, borderRadius: 5, }}
            >
                <Text>TAP TO GET PROFILE</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;
