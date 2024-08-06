import styled from "styled-components"

interface TextAreaProps {
    placeholder: string;
    className: string,
    value: string;
    setValue: (value: string) => void;
}

const TextAreaContainer = styled.div`
  flex: 1;
  display: flex;
  gap: 16px;
    
  @media screen and (max-width: ${props => props.theme.screens.md}) {
    flex-direction: column;
  }
`

const StyledTextArea = styled.textarea`
  min-height: 150px;
  background: transparent;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: ${props => props.theme.colors.lightgrey};
  outline: 0;
  border-width: 0 0 3px;
  border-color: ${props => props.theme.colors.lightgrey};
  padding-bottom: 4px;

  &::placeholder {
    color: ${props => props.theme.colors.lightgrey};
  }

  &:focus{
    color: ${props => props.theme.colors.white};
    outline: none;
    border-color: ${props => props.theme.colors.brand};
    &::placeholder {
      color: ${props => props.theme.colors.white};
    }
  }
`

const SendBtn = styled.div`

  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
  }

  margin-top: auto;
  padding: 12px 36px;
  border-radius: ${props => props.theme.borderRadius.components.small};
  background: ${props => props.theme.colors.brand};

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.colors.brandlight};
  }

  @media screen and (max-width: ${props => props.theme.screens.md}) {
    margin: auto;
    width: auto;
  }
`

const CustomTextArea = ({
    placeholder,
    className,
    value,
    setValue
  }: TextAreaProps) => {
  
    return (
        <TextAreaContainer>
            <StyledTextArea
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={className}
            />
            <SendBtn>
                <span>Submit</span>
            </SendBtn>
        </TextAreaContainer>
    )
  }

export default CustomTextArea