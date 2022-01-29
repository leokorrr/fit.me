import React from 'react'
import { Link } from 'react-router-dom'
import { ExerciseCard } from '../../components/ExcerciseCard'
import { ScreenHeader } from '../../components/ScreenHeader'
import useGetDataFromAPI from '../../hooks/useGetDataFromAPI'
import { PageContainer } from '../../styles/page'
import { ExerciseCardProps } from '../../types'
import { ExercisePageContainer } from './ExercisesPage.styles'

const ExercisesPage = () => {
  // const [exercisesData, setExercisesData] = useState<ExerciseCardProps[]>([])
  const [exercisesData]: any = useGetDataFromAPI('exercises')
  // const navigate = useNavigate()

  return (
    <PageContainer>
      <ExercisePageContainer>
        <ScreenHeader title="Exercises" />
        <div className="exercise-cards">
          {exercisesData.length > 0
            && exercisesData.map((exercise: ExerciseCardProps) => (
              exercise.name && (
                <Link to={`/exercise/${exercise._id}`}>
                  <ExerciseCard
                    key={exercise._id}
                    exerciseTitle={exercise.name}
                  />
                </Link>
              )
            ))}
        </div>
      </ExercisePageContainer>
    </PageContainer>
  )
}

export default ExercisesPage
