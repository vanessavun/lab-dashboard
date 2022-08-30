import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, Inject } from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';

const Pie = () => {
  return (
    <AccumulationChartComponent id='charts'>
      <Inject services={[PieSeries]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' type='Pie'>
test
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default Pie