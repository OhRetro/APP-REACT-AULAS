import React from 'react';
import {Button} from 'react-native'

export default props => {
    function execute() {
        console.warn('Cuidado')
    }

    return (
        <>
            <Button 
                title='Executar #1' 
                onPress={execute}
            />
            
            <Button 
                title='Executar #2' 
                onPress={function() {
                    console.warn('Avisei')
                }}
            />
        </>
    )
}