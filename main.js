import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

import aqsOption from "./options/AirQualitySensor.js";

var aqDOM = echarts.init(document.getElementById('aq'));
aqDOM.setOption(aqsOption)
