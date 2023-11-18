// Style your components here
import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  width: 50%;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: #d7dfe9;
  font-weight: bold;
  margin-bottom: 5px;
`
export const Input = styled.input`
  width: 100%;
  border: 1px solid #d7dfe9;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  outline: none;
  margin-bottom: 10px;
`
export const Select = styled.select`
  width: 100%;
  border: 1px solid #d7dfe9;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  outline: none;
  margin-bottom: 10px;
`
export const Div = styled.div`
  padding: 50px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #35469c;
  font-weight: bold;
`
export const Button = styled.button`
  color: white;
  background-color: #0b69ff;
  border-radius: 5px;
  height: 32px;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 5px;
  width: 130px;
`
export const FormDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 30px;
`
export const ImgDiv = styled.div`
  background-image: url(${props => props.img});
  background-size: cover;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 270px;
  width: 200px;
`
export const Text = styled.p`
  font-family: 'Roboto';
  font-size: ${props => props.size};
  color: white;
  font-weight: bold;
`
