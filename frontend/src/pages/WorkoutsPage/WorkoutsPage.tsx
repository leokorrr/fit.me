import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../../components/Card'
// import { useNavigate } from 'react-router'
import { ScreenHeader } from '../../components/ScreenHeader'
import useGetDataFromAPI from '../../hooks/useGetDataFromAPI'
import { PageContainer } from '../../styles/page'

const WorkoutsPage = () => {
  const [workoutsData]: any = useGetDataFromAPI('workouts')
  // const navigate = useNavigate()
  return (
    <PageContainer>
      <ScreenHeader title="Workouts" />
      {workoutsData.length > 0
        && workoutsData.map((workout: any) => (
          <Link key={workout._id} to={`/workout/${workout._id}`}>
            <Card
              fields={[{ label: '', value: workout.name ?? 'shit' }]}
              date={workout.date}
            />
          </Link>
        ))}
    </PageContainer>
  )
}

export default WorkoutsPage
