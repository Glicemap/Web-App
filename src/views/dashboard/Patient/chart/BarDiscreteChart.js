import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    {
        key: 'Cumulative Return',
        values: [
            {
                label: '0-50',
                value: 32,
                color: '#dcdedf'
            },
            {
                label: '50-100',
                value: 256,
                color: '#dcdedf'
            },
            {
                label: '100-150',
                value: 144,
                color: '#dcdedf'
            },
            {
                label: '150-200',
                value: 168,
                color: '#dcdedf'
            },
            {
                label: '200-250',
                value: 248,
                color: '#dcdedf'
            },
            {
                label: '250-300',
                value: 96,
                color: '#dcdedf'
            },
            {
                label: '300-350',
                value: 144,
                color: '#dcdedf'
            },
            {
                label: '350-400',
                value: 168,
                color: '#dcdedf'
            },
            {
                label: '400+',
                value: 40,
                color: '#0074B7'
            }
        ]
    }
];

const BarDiscreteChart = () => {
    return <NVD3Chart tooltip={{ enabled: true }} type="discreteBarChart" datum={datum} x="label" y="value" height={300} showValues />;
};

export default BarDiscreteChart;
