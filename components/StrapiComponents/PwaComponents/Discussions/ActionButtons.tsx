import FAIcon from 'components/Bootstrap/FAIcon'
import {
  ButtonsContainer,
} from './styles'

export const ActionButtons = (props: any) => {
  return (
    <ButtonsContainer className='flex flex-row gap-4 justify-start items-center'>
      {!props.hideImpressions &&
        <div className='flex flex-row items-center'>
          <FAIcon
            icon={'fa-heart'}
            width={16}
            height={16}
          />
          <span>
            {props.impressions}
          </span>
        </div>
      }
      {!props.hideComments &&
        <div className='flex flex-row items-center'>
          <FAIcon
            icon={'fa-comment'}
            width={16}
            height={16}
          />
          <span>
            {props.comments}
          </span>
        </div>
      }
      <FAIcon
        icon={'fa-share'}
        width={16}
        height={16}
      />
    </ButtonsContainer>
  )
}