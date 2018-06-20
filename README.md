## react-native-frame-loading [![NPM version](https://img.shields.io/badge/npm-v0.1.1-blue.svg)](https://www.npmjs.com/package/react-native-frame-loading)

##### This package offers Loading indicator with frame by frame view or image

#### Install 
```
yarn add react-native-frame-loading
# or 
npm install react-native-frame-loading --save
```   

#### Screenshot
<img src="https://raw.githubusercontent.com/heyman333/react-native-frame-loading/master/screenshot.gif" width="320" height="568">

#### Props 
|props     |default|type  |description                                          |
|:--------:|:-----:|:----:|-----------------------------------------------------|
|animating |false  |bool  |Determines wheter the loading indicator shows or not
|view      |[]     |array |Specific views that will be shown frame by frame 
|duration  |450    |number|Determines how long a frame lasts         
|modalProps|{}     |object|original [Modal component](https://facebook.github.io/react-native/docs/modal.html) props          
|loadingContainerStyle|`flex: 1, "center"`|object|style object of floating view container




#### Usage 
```js
import FrameLoading from "./FrameLoading"
import Icon from "react-native-vector-icons/FontAwesome"

const VIEWS = [
  <View key={1}>
    <Icon name="arrow-up" size={50} />
  </View>,
  <View key={2}>
    <Icon name="arrow-right" size={50} />
  </View>
  ...
  
]

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this._fetchSomeData} title="show animation" />\
        <FrameLoading
          animating={this.state.loading}
          views={VIEWS}
          duration={250}
          modalProps={{ transparent: true }}
          loadingContainerStyle={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            backgroundColor: "rgba(49,49,49,0.4)"
          }}
        />
      </View>
    )
  }
}

```