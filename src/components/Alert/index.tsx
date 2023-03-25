import { reloadAsync } from "expo-updates";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import RNModal from "react-native-modal";
import { BLACK, GRAY_300 } from "../../constants/colors";
import { ERROR_MESSAGES } from "../../constants/common";
import t from "../../config/theme";

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={{ flex: 1 }}>
      <Alert ref={Alert.instance} />
      {children}
    </View>
  );
};

type AlertConfig = {
  title: string;
  message: string;
  onHide?: () => void;
  buttonText?: string;
  buttonTextColor?: string;
};

type AlertState = {
  visible: boolean;
  config?: AlertConfig;
};

export class Alert extends React.Component<{}, AlertState> {
  static instance = React.createRef<Alert>();

  static show = (args: AlertConfig) => {
    Alert.instance.current?._open(args);
  };

  static hide = () => {
    Alert.instance.current?.close();
  };

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  _open = async (config) => {
    this.setState((prevState) => ({ ...prevState, visible: true, config }));
  };

  close = () => {
    if (!this.state.visible) {
      return;
    }

    if (!__DEV__) {
      reloadAsync();
    }

    const onHide = this.state.config?.onHide;
    this.setState((prevState) => ({
      ...prevState,
      config: undefined,
      visible: false,
    }));
    onHide?.();
  };

  render = () => {
    return (
      <RNModal
        isVisible={this.state.visible}
        animationInTiming={500}
        animationOutTiming={500}
        backdropTransitionInTiming={800}
        backdropTransitionOutTiming={800}
      >
        <View style={[t.justifyCenter, t.itemsCenter]}>
          <View style={container}>
            <View style={[headerStyle, { height: 285 }]}>
              {/* HEADER */}
              <Text style={headerTitleStyle}>{this.state.config?.title}</Text>

              {/* BODY */}
              <Text style={headerSubTitleStyle}>
                {this.state.config?.message}
              </Text>
            </View>
            {/* FOOTER */}
            <TouchableOpacity onPress={this.close} style={[buttonItemStyle]}>
              <Text
                style={[
                  t.fontSansBold,
                  {
                    color: this.state.config?.buttonTextColor
                      ? this.state.config?.buttonTextColor
                      : BLACK,
                  },
                ]}
              >
                {this.state.config?.buttonText
                  ? this.state.config?.buttonText
                  : ERROR_MESSAGES.footer}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </RNModal>
    );
  };
}

const container = [t.bgWhite, t.borderR3, t.w4_5, t.overflowHidden];
const headerStyle = [
  t.flexCol,
  t.itemsCenter,
  t.justifyAround,
  t.wFull,
  t.pX10,
  t.pY10,
];
const headerTitleStyle = [t.fontSansBold, t.text2xl];
const headerSubTitleStyle = [t.textBase, t.textCenter];
const buttonItemStyle = [
  t.itemsCenter,
  t.pY4,
  { borderTopWidth: 1, borderTopColor: GRAY_300 },
];
