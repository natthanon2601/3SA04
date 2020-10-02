# 3SA03 React Nativ
- ก่อนที่จะใช้ React-Natieve จะต้องมีการติดตั้ง Node.js, Yarn และ Git ไว้ก่อน
- ต่อมาติดตั้ง create-react-app CLI ผ่าน Command Prompt (ที่รันด้วยสิทธิ์ Administrator) ด้วยคำสั่ง
```
>> yarn global add expo-cli 
```
- เริ่มสร้าง Project สำหรับการพัฒนา React Native ด้วย expo ด้วยคำสั่ง
``` 
>>  expo init wt-app
>>  cd wt-app 

```
- ทำการรันโปรแกรมโปรแกรมขึ้นมา แล้วใช้สมาร์ทโฟนรันโปรแกรม Expo Client แล้วสั่งสแกน QR Code ที่ได้จากคำสั่ง yarn start หรือใช้ Android Studio
```
>> yarn start
```
- ทำการรันติดตั้ง Navigation Library
```
>> expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
>> yarn add @react-navigation/stack @react-navigation/native
```
