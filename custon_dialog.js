import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

class custon_dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      alertTitle: '文本标题', //自定义文本标题
      alertContent: '文本内容', //自定义文本内容
      closeonPress: null,
    };
  }

  render() {
    return (
      <Modal
        visible={this.state.isShow}
        //显示是的动画默认none
        //从下面向上滑动slide
        //慢慢显示fade
        animationType={'fade'}
        //是否透明默认是不透明 false
        transparent={true}
        //关闭时调用
        onRequestClose={() => {}}>
        <View style={styles.container}>
          <View style={styles.AlertView}>
            {/*------------------头部-----------------*/}
            <View style={styles.header}>
              <Text style={{fontSize: 16, color: '#fff'}}>
                {this.state.alertTitle}
              </Text>
            </View>

            {/*------------------内容-----------------*/}
            <View style={styles.context}>
              <Text>{this.state.alertContent}</Text>
            </View>

            {/*----------------底部按钮---------------*/}

            <View style={styles.line} />

            <View style={styles.bottom_fu}>
              <TouchableOpacity
                onPress={() => {
                  this.state.closeonPress ? this.state.closeonPress() : null;
                  this.dissmiss();
                }}>
                <View style={styles.bt_fu}>
                  <Text>确定</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }

  //显示
  show(
    info = {
      title,
      content,
      closeonPress,
    },
  ) {
    this.setState({
      isShow: true, //显示弹窗
      alertTitle: info.title || '头部',
      alertContent: info.content || '内容',
      closeonPress: info.closeonPress,
    });
  }

  //消失弹窗
  dissmiss = delay => {
    // 延时0.5,据说体验比较好
    let duration = 0;

    if (delay == null || delay <= 0) {
      duration = 3;
    } else {
      duration = delay;
    }

    this.timer = setTimeout(() => {
      this.setState({
        isShow: false,
      });
      this.timer && clearTimeout(this.timer);
    }, duration * 100);
  };
}

export default custon_dialog;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  AlertView: {
    borderRadius: 10,
    borderWidth: 1,
    width: 300,
    height: 250,
    overflow: 'hidden',
  },
  header: {
    justifyContent: 'center',
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#000',
    alignItems: 'center',
  },
  context: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  line: {height: 0.5, backgroundColor: '#666666'},
  bottom_fu: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bt_fu: {
    width: 70,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#1D87D4',
  },
});
