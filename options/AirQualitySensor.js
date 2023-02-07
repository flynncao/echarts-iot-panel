export default  {
    title: {
        text: 'AirQualitySensor',
        show: true,
        left: 'center',
        bottom: '2%',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 15,
        },
    },
    series: [
        {
            z: 20,
            type: 'gauge',
            radius: 50,
            axisLabel: { //环坐标文字
                show: false,
            },
            startAngle: 233,
            endAngle: -30,
            itemStyle: {
                width: 5,
                color: 'red',
                shadowColor: 'rgba(0,138,255,0.45)',
                shadowBlur: 10,
                shadowOffsetX: 2,
                shadowOffsetY: 2,
                z: -10,
            },
            progress: {
                show: false,
                roundCap: true,
                width: 50,
                itemStyle: {
                    opacity: 1
                }
            },
            axisLine: { //环坐标主体
                show: false,
                roundCap: false,
                lineStyle: {
                    width: 10,
                    color: [
                        [0.3, '#ccc'],
                        [0.7, '#ccc'],
                        [1, '#ccc']
                    ]
                }
            },
            pointer: { //环坐标指针
                show: false,
                itemStyle: {
                    color: 'auto'
                }
            },
            axisTick: { //环坐标刻度
                show: false,
                distance: -20,
                length: 8,
                lineStyle: {
                    color: '#fff',
                    width: 2
                }
            },
            splitLine: { //环坐标分割线
                distance: -10,
                length: 10,
                type: 'solid',
                lineStyle: {
                    color: '#eee',
                    width: 2,
                }
            },
        }, {
            z: 2,
            type: 'gauge',
            radius: 50,

            itemStyle: {
                width: 5,
                color: 'red',
                shadowColor: 'transparent',
                shadowBlur: 10,
                shadowOffsetX: 1,
                shadowOffsetY: 1,
                z: -10,
            },
            progress: {
                show: true,
                roundCap: true,
                width: 10,
                itemStyle: {
                    opacity: 1
                }
            },
            axisLine: { //环坐标主体
                roundCap: true,
                lineStyle: {
                    width: 10,
                    color: [
                        [0.3, '#ccc'],
                        [0.7, '#ccc'],
                        [1, '#ccc']
                    ]
                }
            },
            pointer: { //环坐标指针
                show: false,
                itemStyle: {
                    color: 'auto'
                }
            },
            axisTick: { //环坐标刻度
                show: false,
                distance: -20,
                length: 8,
                lineStyle: {
                    color: '#fff',
                    width: 2
                }
            },
            splitLine: { //环坐标分割线
                distance: -10,
                length: 10,
                show: false,
                lineStyle: {
                    color: '#eee',
                    width: 2,
                    z: 100,

                }
            },
            axisLabel: { //环坐标文字
                color: '#000',
                distance: -10,
                fontSize: 10,
                formatter: (value) => {
                    if (value == 100 || value == 0) {
                        return value
                    } else {
                        return ''
                    }
                }
            },
            // Data Display
            detail: {
                valueAnimation: true,
                color: 'auto',
                fontSize: 17,
                offsetCenter: ['0%', '-15%'],
            },
            // Unit Display
            data: [{
                value: 20,
                name: "PPB",
                title: {
                    offsetCenter: ['0%', '20%'],
                }
            }]
        }]
};
