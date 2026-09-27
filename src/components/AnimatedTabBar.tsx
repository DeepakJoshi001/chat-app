import { Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import * as Haptics from "expo-haptics";
import React, { useEffect, useState } from "react";
import {
  LayoutChangeEvent,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";

const SPRING_CONFIG = {
  damping: 16,
  stiffness: 180,
  mass: 0.7,
};

const ROUTE_ICONS: Record<
  string,
  {
    active: keyof typeof Ionicons.glyphMap;
    inactive: keyof typeof Ionicons.glyphMap;
  }
> = {
  home: { active: "home", inactive: "home-outline" },
  chats: { active: "chatbubbles", inactive: "chatbubbles-outline" },
  chat: { active: "chatbubbles", inactive: "chatbubbles-outline" },
  profile: { active: "person", inactive: "person-outline" },
  settings: { active: "settings", inactive: "settings-outline" },
};

export default function AnimatedTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const [containerWidth, setContainerWidth] = useState(0);

  const activeIndex = state.index;
  const totalTabs = state.routes.length;
  const tabWidth = containerWidth > 0 ? containerWidth / totalTabs : 0;

  const translateX = useSharedValue(0);

  useEffect(() => {
    if (tabWidth > 0) {
      const targetPosition = activeIndex * tabWidth + tabWidth / 2;
      translateX.value = withSpring(targetPosition, SPRING_CONFIG);
    }
  }, [activeIndex, tabWidth]);

  const onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    if (width > 0 && width !== containerWidth) {
      setContainerWidth(width);
      translateX.value =
        activeIndex * (width / totalTabs) + width / totalTabs / 2;
    }
  };

  const activeBubbleStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value - 26 }],
  }));

  const notchStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value - 45 }],
  }));

  return (
    <View
      style={[
        styles.outerContainer,
        { paddingBottom: Math.max(insets.bottom, 12) },
      ]}
    >
      <View style={styles.tabBarContainer} onLayout={onLayout}>
        {/* Clipped Notch Layer preventing outer corner bleed */}
        {containerWidth > 0 && (
          <View style={styles.notchClippedWrapper}>
            <Animated.View style={[styles.notchContainer, notchStyle]}>
              <Svg width={90} height={35} viewBox="0 0 90 35">
                <Path
                  d="M0,0 C15,0 20,28 45,28 C70,28 75,0 90,0 Z"
                  fill="#18181B"
                />
              </Svg>
            </Animated.View>
          </View>
        )}

        {/* Floating Active Circle Badge */}
        {containerWidth > 0 && (
          <Animated.View style={[styles.activeBubble, activeBubbleStyle]}>
            <View style={styles.innerBubble}>
              <View style={styles.activeDot} />
            </View>
          </Animated.View>
        )}

        {/* Tab Buttons */}
        <View style={styles.tabsRow}>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                  ? options.title
                  : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              if (Platform.OS !== "web") {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }

              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            const defaultIcons = ROUTE_ICONS[route.name.toLowerCase()] || {
              active: "ellipse",
              inactive: "ellipse-outline",
            };

            const iconName = isFocused
              ? defaultIcons.active
              : defaultIcons.inactive;

            return (
              <TouchableOpacity
                key={route.key}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarButtonTestID}
                onPress={onPress}
                style={styles.tabItem}
                activeOpacity={0.8}
              >
                <AnimatedTabItem
                  isFocused={isFocused}
                  iconName={iconName}
                  label={typeof label === "string" ? label : route.name}
                  renderCustomIcon={options.tabBarIcon}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

interface AnimatedTabItemProps {
  isFocused: boolean;
  iconName: keyof typeof Ionicons.glyphMap;
  label: string;
  renderCustomIcon?: (props: {
    focused: boolean;
    color: string;
    size: number;
  }) => React.ReactNode;
}

function AnimatedTabItem({
  isFocused,
  iconName,
  label,
  renderCustomIcon,
}: AnimatedTabItemProps) {
  const progress = useSharedValue(isFocused ? 1 : 0);

  useEffect(() => {
    progress.value = withSpring(isFocused ? 1 : 0, {
      damping: 15,
      stiffness: 160,
    });
  }, [isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [0, -14],
          Extrapolation.CLAMP,
        ),
      },
      {
        scale: interpolate(
          progress.value,
          [0, 1],
          [1, 1.15],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  const animatedLabelStyle = useAnimatedStyle(() => ({
    opacity: interpolate(progress.value, [0, 1], [0.6, 1], Extrapolation.CLAMP),
    transform: [
      {
        translateY: interpolate(
          progress.value,
          [0, 1],
          [0, 2],
          Extrapolation.CLAMP,
        ),
      },
    ],
  }));

  const activeColor = "#FFFFFF";
  const inactiveColor = "#71717A";

  return (
    <View style={styles.tabItemInner}>
      <Animated.View style={[styles.iconContainer, animatedIconStyle]}>
        {renderCustomIcon ? (
          renderCustomIcon({
            focused: isFocused,
            color: isFocused ? activeColor : inactiveColor,
            size: 22,
          })
        ) : (
          <Ionicons
            name={iconName}
            size={22}
            color={isFocused ? activeColor : inactiveColor}
          />
        )}
      </Animated.View>
      <Animated.Text
        style={[
          styles.tabLabel,
          animatedLabelStyle,
          { color: isFocused ? activeColor : inactiveColor },
        ]}
      >
        {label}
      </Animated.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  tabBarContainer: {
    width: "92%",
    height: 64,
    backgroundColor: "#18181B",
    borderRadius: 32,
    flexDirection: "row",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 10,
    borderWidth: 1,
    borderColor: "#27272A",
  },
  notchClippedWrapper: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 32,
    overflow: "hidden",
    zIndex: 1,
  },
  notchContainer: {
    position: "absolute",
    top: -1,
    left: 0,
    width: 90,
    height: 35,
  },
  activeBubble: {
    position: "absolute",
    top: -18,
    left: 0,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#27272A",
    borderWidth: 2,
    borderColor: "#3F3F46",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  innerBubble: {
    width: "100%",
    height: "100%",
    borderRadius: 26,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 6,
    marginTop: 5,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#38BDF8",
  },
  tabsRow: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    zIndex: 3,
  },
  tabItem: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  tabItemInner: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: "600",
    marginTop: 2,
  },
});
