import React from "react";
import { ReactDOM } from "react";
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native'

interface SearchInputProps{
    placeholder:string
    onSubmit?: any
}

interface StateProps{
    text:string
}

export class SearchInput extends React.Component<SearchInputProps>{

    state:StateProps;

    handleSubmitEditing = () => {
        const {onSubmit} = this.props
        const {text} = this.state
        if(!text) return
        onSubmit(text)
        this.setState({text: ''})
    }

    constructor(props:SearchInputProps){
        super(props);
        
        this.state = {
            text:''
        }
    }
    render() {
        const {text} = this.state

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="white"
                    onChangeText={text => this.setState({text})}
                    onSubmitEditing={this.handleSubmitEditing}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:40,
        marginTop:20,
        backgroundColor:'#666',
        marginHorizontal:40,
        paddingHorizontal:10,
        borderRadius:5,
    },
    input:{
        flex: 1,
        color:'white',

    }
})