
years-between [![Build status](https://travis-ci.org/strong-roots-capital/years-between.svg?branch=master)](https://travis-ci.org/strong-roots-capital/years-between) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/years-between.svg)](https://npmjs.org/package/@strong-roots-capital/years-between) [![codecov](https://codecov.io/gh/strong-roots-capital/years-between/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/years-between)
==========================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> List of years between two dates, inclusive

Install
-------

```shell
npm install @strong-roots-capital/years-between
```

Use
---

```typescript
import yearsBetween from '@strong-roots-capital/years-between'
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
```

## Index

---

