# ReactDemo4
react native弹窗的使用。
## 效果图
![dialog.gif](https://upload-images.jianshu.io/upload_images/13480509-1fcc8c7941b8e32a.gif?imageMogr2/auto-orient/strip)
## 理解
> - react中的弹窗使用的是Modal组件
> - Modal的弹出与关闭实际上是因为他有个属性```visible```可以控制其显示与隐藏。
> - 除弹窗的其他背景透明,为Modal的```transparent={true}```属性
## 需要注意点
> - 当使用背景图时不能让背景超出边界，这时需要在父布局中加入属性```overflow: 'hidden',```（溢出部分隐藏）。

## 项目下载后如何运行起来
> - 1.用visual studio code打开工程依次执行以下命令

>> - npm install //下载依赖包；不下载的话运行不起来。
>> - yarn
>> - yarn start
>
> - 2.用android studio将工程运行到手机上
> - 3.reload App,如果还是加载不出来那么把app进程杀死重启，然后再重复操作1.步骤。
> - 4.如果还是不行那么执行 react-native run-android命令。
