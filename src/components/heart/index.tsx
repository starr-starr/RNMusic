import React, { useEffect, useState, useRef } from "react";
import type { FC } from 'react'
import {
    Image,
    TouchableOpacity,
    StyleSheet,
    Animated
} from 'react-native';

import icon_heart from '@/assets/icon_heart.jpg';
import icon_heart_empty from '@/assets/icon_heart_empty.jpg';

type MyProps = {
    value: boolean;
    size?: number;
}

const Heart:FC<MyProps> = ({
    value,
    size = 30
}) => {
    const [showState, setShowState]= useState<boolean>(false);

    const scale = useRef<Animated.Value>(new Animated.Value(0)).current;

    const alpha = useRef<Animated.Value>(new Animated.Value(0)).current;

    useEffect(() => {
        setShowState(value);
    }, [value]);

    const onHeartPress = () => {
        const newState = !showState;
        setShowState(newState);
        if (newState) {
            alpha.setValue(1);
            const scaleAnim = Animated.timing(scale, {
                toValue: 1.8,
                duration: 300,
                useNativeDriver: false,
            });

            const alphaAnim = Animated.timing(alpha, {
                toValue: 0,
                duration: 400,
                useNativeDriver: false,
                delay: 200,
            });

            Animated.parallel([scaleAnim, alphaAnim]).start();
        } else {
            scale.setValue(0);
            alpha.setValue(0);
        }
    }

    return (
        <TouchableOpacity
            onPress={onHeartPress}
        >
            <Image
                style={[styles.container, { width: size, height: size }]}
                source={showState ? icon_heart : icon_heart_empty}
            />
            <Animated.View style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                borderWidth: size / 20,
                position: 'absolute',
                borderColor: '#ff2442',
                transform: [
                    {scale: scale}
                ],
                opacity: alpha,
            }} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});

export default Heart