import yearsBetween from '../src/years-between'
import moment from 'moment'

console.log(
    yearsBetween(
        moment.utc().startOf('year').toDate(),
        moment.utc().startOf('year').toDate()
    )
)
//=>[ 2019 ]

console.log(
    yearsBetween(
        moment.utc().startOf('year').toDate(),
        moment.utc().startOf('year').add(1, 'years').toDate()
    )
)
//=>[ 2019, 2020 ]

console.log(
    // Note: supports function currying
    yearsBetween(moment.utc().startOf('year').toDate())
    (moment.utc().startOf('year').add(2, 'years').toDate())
)
//=>[ 2019, 2020, 2021 ]
