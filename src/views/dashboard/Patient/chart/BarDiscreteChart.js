import React from 'react';
import NVD3Chart from 'react-nvd3';

const BarDiscreteChart = ({frequencys}) => {
    const datum = [
        {
            key: 'Cumulative Return',
            values: [
                {
                    label: '0-50',
                    value: parseInt(frequencys[0]),
                    color: '#dcdedf'
                },
                {
                    label: '50-100',
                    value: parseInt(frequencys[1]),
                    color: '#dcdedf'
                },
                {
                    label: '100-150',
                    value: parseInt(frequencys[2]),
                    color: '#dcdedf'
                },
                {
                    label: '150-200',
                    value: parseInt(frequencys[3]),
                    color: '#dcdedf'
                },
                {
                    label: '200-250',
                    value: parseInt(frequencys[4]),
                    color: '#dcdedf'
                },
                {
                    label: '250-300',
                    value: parseInt(frequencys[5]),
                    color: '#dcdedf'
                },
                {
                    label: '300-350',
                    value: parseInt(frequencys[6]),
                    color: '#dcdedf'
                },
                {
                    label: '350-400',
                    value: parseInt(frequencys[7]),
                    color: '#dcdedf'
                },
                {
                    label: '400+',
                    value: parseInt(frequencys[8]),
                    color: '#0074B7'
                }
            ]
        }
    ];

    return <NVD3Chart tooltip={{ enabled: true }} type="discreteBarChart" datum={datum} x="label" y="value" height={300} showValues />;
};

export default BarDiscreteChart;
