
import React from 'react'

const Delayer = (fn , timing) => {
    setTimeout(() => {fn}, timing);
}

export default Delayer