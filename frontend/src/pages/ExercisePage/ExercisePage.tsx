import React from 'react'
import { useParams } from 'react-router-dom'
import { PageContainer } from '../../styles/page'
import { ScreenHeader } from '../../components/ScreenHeader'
import useGetSingleDataFromAPI from '../../hooks/useGetSingleDataFromAPI'
import { Card } from '../../components/Card'

const ExercisePage = () => {
  const params: any = useParams()
  const [exercise]: any = useGetSingleDataFromAPI('exercises', params.id)
  const getFields = (label: string, value: string) => [{
    label,
    value,
  }]
  return (
    <PageContainer>
      <ScreenHeader title={exercise.name} />
      {exercise?.results?.map((result: string) => (
        <Card
          key={result}
          fields={getFields('Weight', result)}
        />
      )) }
    </PageContainer>
  )
}

export default ExercisePage
