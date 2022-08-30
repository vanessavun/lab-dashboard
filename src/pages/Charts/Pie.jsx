import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, Inject } from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';
import { Header } from '../../components';

const Pie = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Chart' title='Samples' />
      <div className='w-full'>
      <AccumulationChartComponent id='charts'>
        <Inject services={[PieSeries]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' type='Pie'>
  test
          </AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
      </div>
    </div>

  )
}

export default Pie