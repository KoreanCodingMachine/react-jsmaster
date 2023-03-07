import { DefaultTheme } from 'styled-components';


// 다크모드 , 라이트모드를 가지려면 css의 property가 같아야한다.
export const lightTheme:DefaultTheme = {
    bgColor:'white',
    textColor:'black',
    btnColor:'tomato'
}

export const darkTheme:DefaultTheme = {
    bgColor:'black',
    textColor:'white',
    btnColor:'teal'
}