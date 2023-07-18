# @dangttp97/demo-screen-module

Demo Module màn hình rời

## Cài đặt

NPM

```sh
npm install @dangttp97/demo-screen-module
```

Yarn

```sh
yarn add @dangttp97/demo-screen-module
```

## Cách dùng

### 1. Đầu tiên thêm vào trong navigator chính của app như sau:

```jsx
///App main navigator
export const AppNavigator = () => {
  import { createStackNavigator } from '@react-navigation/stack'
  import { createModuleNavigator } from '@dangttp97/demo-screen-module'

  // Tạo Stack navigator từ React Navigation
  const Stack = createStackNavigator()
  const ModuleComp = createModuleNavigator(Stack)

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      {ModuleComp}
    </Stack.Navigator>
  )
}
```

### 2. Module này bao gồm 2 màn hình với các params, extends screens type ECOModuleScreens sẽ xuất hiện 2 screens như dưới:

```js
type ECOModuleScreens = {
  ECOModuleLogin: {
    username: string
    password: string
  }
  ECOModuleRegister: {
    username: string
    fullName: string
  }
}
```

### 3. Để navigate sang màn hình trong Module này thì làm như sau:

```jsx
import { useNavigation, ECOModuleScreens } from '@dangttp97/demo-screen-module'

// Extends type chứa name và params của các screens trong app
type AppScreenParams = ECOModuleScreens & {
  Home: {}
}

// Gọi hooks để lấy navigator
const navigation = useNavigation<AppScreenParams>()

// Navigate tới 1 trong 2 màn hình dưới
navigation.navigate('ECOModuleLogin', { username: 'ABC', password: 'DEF' })
///OR
navigation.navigate('ECOModuleRegister', { fullName: 'ABC', username: 'DEF' })
```

### 4. Muốn lấy params ra thì chúng ta dùng như sau:

```jsx
import { useRoute, ECOModuleScreens } from '@dangttp97/demo-screen-module'

// Extends type chứa name và params của các screens trong app
type AppScreenParams = ECOModuleScreens & {
  Home: {
    username: string
  }
}

// Gọi hooks để lấy route
const route = useRoute<'Home'>()

// Lấy params như sau
const { username } = route.params

```

## Lưu ý:

- Khuyến khích sử dụng như dưới, vì sau khi import và khai báo như phần 3 ở Cách dùng thì navigation sẽ autosuggest screens name và params khi dùng hàm navigate.

```js
import { useNavigation } from '@dangttp97/demo-screen-module'
```
