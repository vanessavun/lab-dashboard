import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;

    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: '${xval} : data ${yval}',
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        //dataSource={data}
        //dataSource={[
              //     { x: 0, xval: '2005', yval: 20090440 },
              //     { x: 1, xval: '2006', yval: 20264080 },
              //     { x: 2, xval: '2007', yval: 20434180 },
              //     { x: 3, xval: '2008', yval: 21007310 },
              //     { x: 4, xval: '2009', yval: 21262640 },
              //     { x: 5, xval: '2010', yval: 21515750 },
              //     { x: 6, xval: '2011', yval: 21766710 },
              //     { x: 7, xval: '2012', yval: 22015580 },
              //     { x: 8, xval: '2013', yval: 22262500 },
              //     { x: 9, xval: '2014', yval: 22507620 },
              // ]} 
        xName='xval' 
        yName='yval'
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine;