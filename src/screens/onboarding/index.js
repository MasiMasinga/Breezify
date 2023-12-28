import React, { useState, createRef } from 'react';
import { ScrollView, Dimensions } from 'react-native';

// React Navigation
import { useNavigation } from '@react-navigation/native';

// Styled Components
import styled from 'styled-components/native';

// React Native Vector Icons
import Icon from 'react-native-vector-icons/MaterialIcons';

// Components
import Button from '../../common/components/Button';

// Colors
import { Colors, OnboardingSlides } from '../../common/utils/constants';

const screenWidth = Dimensions.get('window').width;

const StyledContainer = styled.ImageBackground`
    flex: 1;
`

const StyledIndicatorIcon = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: 15px;
`

const IndicatorDot = styled.View`
    width: 20px;
    height: 6px;
    border-radius: 3px;
    margin-horizontal: 5px;
    background-color: ${(props) => (props.active ? Colors.white : Colors.greyDark)};
`

const StyledFooter = styled.View`
    padding-horizontal: 20px;
    padding-bottom: 30px;
    gap: 16px;
`

const StyledSlideView = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    width: ${screenWidth};
    padding-bottom: 50px;
    gap: 10px;
    object-fit: contain;
`

const Title = styled.Text`
    font-size: 22px;
    color: ${Colors.greyMed};
    text-align: center;
    padding-horizontal: 20px;
    font-weight: 500;
`;

const Subtitle = styled.Text`
    font-size: 16px;
    color: ${Colors.white};
    text-align: center;
    padding-horizontal: 20px;
    font-weight: 600;
`;

const Description = styled.Text`
    font-size: 14px;
    color: ${Colors.greyLight};
    text-align: center;
    padding-horizontal: 50px;
`;


const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollViewRef = createRef();
    const navigation = useNavigation();

    const scrollToNextSlide = () => {
        if (currentIndex < 2) {
            const nextIndex = currentIndex + 1;
            scrollViewRef.current.scrollTo({ x: nextIndex * screenWidth, animated: true });
            setCurrentIndex(nextIndex);
        } else {
            navigation.navigate('TabNavigation');
        }
    };

    const handleNext = scrollToNextSlide;
    const handleAgreeAndContinue = scrollToNextSlide;

    const backgroundImages = [
        {
            image: require('../../assets/images/clouds.jpg'),
        },
        {
            image: require('../../assets/images/snow.jpg'),
        },
        {
            image: require('../../assets/images/thunderstorm.jpg'),
        },
    ];

    const renderSlides = () => {
        return OnboardingSlides.map((slide, index) => (
            <StyledSlideView key={index}>
                <Icon name={slide.icon} size={64} color={Colors.white} />
                <Title>{slide.title}</Title>
                <Subtitle>{slide.subtitle}</Subtitle>
                <Description>{slide.description}</Description>
            </StyledSlideView>
        ));
    };

    return (
        <StyledContainer source={backgroundImages[currentIndex].image}>
            <ScrollView
                ref={scrollViewRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(event) => {
                    const newIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
                    setCurrentIndex(newIndex);
                }}
            >
                {renderSlides()}
            </ScrollView>
            <StyledFooter>
                <StyledIndicatorIcon>
                    {[0, 1, 2].map((i) => (
                        <IndicatorDot
                            key={i}
                            active={currentIndex === i}
                        />
                    ))}
                </StyledIndicatorIcon>
                <Button
                    title={currentIndex === 0 ? "Agree and Continue" : "Next"}
                    onPress={currentIndex === 0 ? handleAgreeAndContinue : handleNext}
                />
            </StyledFooter>
        </StyledContainer>
    );
};

export default Onboarding;
