import React, { useState, useEffect, useRef } from 'react'
import styled, { css } from 'styled-components'
import { Registration_Questions, Registration_Answers } from 'lib/queries/settings'
import { Button } from './LoginForm'
import { updateUser } from 'lib/queries/settings'
import { JsonObject, pushUniqueToJson, allValuesSame } from 'utils/helpers'

interface SignupQuestionsProps {
  questions?: [Registration_Questions]
  userId?: number
}

const SelectInput = styled.div`
  select option:disabled {
    color: gray;
  }
`

const extractHomepageId = (data: any) => {
  return data?.Homepage?.data?.id ?? ''
}

let homepageIds: JsonObject = {}

const SignupQuestions = ({
  questions,
  userId,
}: SignupQuestionsProps) => {

  const [homepageId, setHomepageId] = useState(null);

  function resetSelect() {
    let selects = document.querySelectorAll('select')
    selects.forEach((select) => {
      select.selectedIndex = 0
    })
  }

  function handleSelect(e: any) {
    e.preventDefault()
    let value = e.target.value
    let key = e.target.options[e.target.selectedIndex].getAttribute('data-key')
    if (value && questions?.length) {
      setHomepageId(value)
      pushUniqueToJson(homepageIds, key, value)
    } else {
      resetSelect()
      homepageIds = {}
    }
  }

  async function submitQuestions(e: any) {
    e.preventDefault()
    if (homepageId) {
      let idsLength = Object.keys(homepageIds).length
      if (allValuesSame(homepageIds) && idsLength === questions?.length) {
        let data = await updateUser(`${userId}`, homepageId)
        if (data) {
          
        } else {
          alert('err')
        }
      }
      document.getElementById('loginModal')?.click()
    }
  }

  return (
    <>
      {questions?.map((question: Registration_Questions, questionIndex: number) => (
        <SelectInput key={question.id} className='relative mb-3 w-full'>
          <label htmlFor={`question_${question.id}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{question.Question}</label>
          <select
            defaultValue={'DEFAULT'}
            id={`question_${question.id}`}
            onChange={(e) => handleSelect(e)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="DEFAULT" disabled>Select</option>
            {question.Answers?.map((answer: Registration_Answers, index: number) => (
              <option key={`answer_${answer.id}`} data-key={questionIndex} value={extractHomepageId(answer)}>{answer.Answer}</option>
            ))
            }
          </select>
        </SelectInput>
      ))
      }
      <Button className='w-full' onClick={submitQuestions}>
        SAVE
      </Button>
    </>
  );
}

export default SignupQuestions