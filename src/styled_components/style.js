import {styled} from "styled-components"

export const LogoContainer = styled.div`
`

export const Container = styled.div`
width:100vw;
display:flex;
justify-content:center;
`
export const CenterContainer = styled.div`
margin-top: 80px;
display:flex;
align-items:center;
flex-direction:column;

`
export const FormContainer = styled.form`
display:flex;
align-items:center;
flex-direction:column;
margin-top:40px;
gap: 20px;
input{
    width:60vw;
    height:50px;
    border-radius:12px;
    border: 1px solid;
    padding:10px;
}
input:valid, input::placeholder{
    font-family: 'Lexend Deca', sans-serif;
    font-size:20px;
}
input:invalid {
    font-family: 'Lexend Deca', sans-serif;
    font-size:20px;
    color:red;
}

a{
    text-decoration:none;
    font-size:20px;
}
button{
    width:130px;
    height:50px;
    border-radius:12px;
    border:2px solid #CF1E34;
    color:white;
    background:#13AEC6;
    font-family: 'Lexend Deca', sans-serif;
    font-size:20px;
}
`
export const HeaderContainer = styled.header`
width: 100vw;
background: #13AEC6;
height: 80px;
display:flex;
align-items:center;
justify-content: space-between;
img{
    width:60px;
    margin-left:20px;
}

div{
    a{
        font-family: 'Lexend Deca', sans-serif;
        color: white;
        font-weight:bold;
        text-decoration:none;
    }
    gap:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-right:40px;
}
`