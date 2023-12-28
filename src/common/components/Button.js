//React/React Native
import React from 'react'
import { ActivityIndicator } from 'react-native';

// Styled Components
import styled from 'styled-components/native';

// Utils
import { Colors } from '../utils/constants';
import { fonts } from '../../assets/fonts/fonts';

const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    height: 55px;
    font-family: ${fonts.fontBold};
    background-color: ${(props) => (props.variant === "link" ? "transparent" : Colors.primary)};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    padding:  14px;
    margin: 0px;
    margin-bottom: ${(props) => (props.variant === "link" ? "40px" : "0px")};
`;

const ButtonText = styled.Text`
    font-size: 14px;
    font-family: ${fonts.fontBold};
    color: ${(props) => (props.variant === "link" ? Colors.primary : Colors.white)};
    margin: 0 8px;
    text-decoration: ${(props) => (props.variant === "link" ? "underline" : "none")};
    line-height: 21px;
`;

const Button = ({ title, onPress, isLoading, ...props }) => {
    return (
        <ButtonContainer onPress={onPress} {...props} activeOpacity={1}>
            <ButtonText {...props}>
                {title}
                {
                    isLoading
                    &&
                    <ActivityIndicator
                        size="small"
                        color={Colors.white}
                    />
                }
            </ButtonText>
        </ButtonContainer>
    )
}

export default Button