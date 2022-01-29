import React from 'react'
import { Card } from '../../components/Card'
import { ScreenHeader } from '../../components/ScreenHeader'
import useGetDataFromAPI from '../../hooks/useGetDataFromAPI'
import { PageContainer } from '../../styles/page'
// import { MeasurementProps } from '../../types'

const MeasurementsPage = () => {
  // const [measurementsData, setMeasurements] = useState<MeasurementProps[]>([])
  const [measurementsData]: any = useGetDataFromAPI('measurements')
  return (
    <PageContainer>
      <ScreenHeader title="Measurements" />
      {measurementsData.map((item: any) => (
        <Card
          key={item._id}
          fields={[{ label: 'Weight', value: item.weight, unit: 'kg' }, { label: 'Waist', value: item.waist, unit: 'cm' }]}
          date={item.date}
        />
      ))}
    </PageContainer>
  )
}

export default MeasurementsPage
