import FAIcon from 'components/Bootstrap/FAIcon'
import {
  ButtonsContainer,
} from './styles'
import styled from 'styled-components';

interface ActionButtonProps {
  impressions: number,
  comments?: number,
  impressionClicked?: boolean,
  canDelete?: boolean,
  onImpressionClick?: () => void,
  onCommentClick?: () => void,
  onShareClick?: () => void,
  onDeleteClick?: () => void,
  hideImpressions?: boolean,
  hideComments?: boolean,
}

const IconContainer = styled.div`
  &:hover {
    cursor: pointer;

    &svg-inline--fa
  }
`;

export const ActionButtons = (props: ActionButtonProps) => {
  return (
    <ButtonsContainer className='flex flex-row gap-4 justify-start items-center'>
      {!props.hideImpressions &&
        <IconContainer className='flex flex-row items-center' onClick={props.onImpressionClick && props.onImpressionClick}>
          <FAIcon
            icon={`${props.impressionClicked ? 'fa-solid' : 'fa-regular'} fa-heart`}
            width={16}
            height={16}
          />
          <span>
            {props.impressions}
          </span>
        </IconContainer>
      }
      {!props.hideComments &&
        <IconContainer className='flex flex-row items-center' onClick={props.onCommentClick && props.onCommentClick}>
          <FAIcon
            icon={'fa-comment'}
            width={16}
            height={16}
          />
          <span>
            {props.comments}
          </span>
        </IconContainer>
      }
      <IconContainer onClick={props.onShareClick && props.onShareClick}>
        <FAIcon
          icon={'fa-share'}
          width={16}
          height={16}
        />
      </IconContainer>
      {props.canDelete &&
        <IconContainer className='flex flex-row items-center' onClick={props.onDeleteClick && props.onDeleteClick}>
          <FAIcon
            icon={'fa-trash'}
            width={16}
            height={16}
          />
        </IconContainer>
      }
    </ButtonsContainer>
  )
}