import { styled } from "styled-components"

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
border-radius:12px;
background-color:white;
width:70vw;
display:flex;
align-items:center;
flex-direction:column;
margin-top:40px;
margin-bottom:40px;
gap: 20px;
input{
    margin-top:30px;
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
    margin-bottom:20px;
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
.addServiceIcon{
    margin-top:20px;
    display:flex;
    align-items:center;
    p{
        margin-left:5px;
    }
}
`
export const HeaderContainer = styled.header`
width: 100vw;
background: #13AEC6;
height: 80px;
display:flex;
align-items:center;
justify-content: space-between;
p{
    font-weight:bold;
    font-size:25px;
    color:white;
}
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

export const ServiceContainer = styled.div`
border: 4px solid #13AEC6;
padding: 30px 10px;
width:100%;
margin: 30px;
display:flex;
border-radius:12px;
img{
    border-radius:6px;
    width:300px;
    margin-left:30px;
}
div{
    width:100%;
    text-align:center;
    word-break:break-all;
    display:flex;
    align-items:right;
    flex-direction:column;
    h2{
        font-weight:bold;
        font-size:20px;
        margin-bottom:10px;
    }
    p{
        width:90%;
        display:flex;
        margin-left:40px;
        font-size:20px;
        margin-top:20px;
        span {
            font-weight:bold;
            margin-right:10px;
        }
    }
}

.text{
        max-height:80px;
        text-overflow: ellipsis;
        height:10px;
        white-space: nowrap;
        overflow: hidden
    }
`