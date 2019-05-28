import test from 'ava'
import moment from 'moment'

/**
 * Library under test
 */

import yearsBetween from '../src/years-between'

test('should return one year when start is equal to end', t => {
    const start = moment.utc()
    const end = moment.utc()
    t.deepEqual([start.year()], yearsBetween(start.toDate(), end.toDate()))
})

test('should return two years when start is one year before end', t => {
    const start = moment.utc().startOf('year')
    const end = moment.utc().startOf('year').add(1, 'year')
    t.deepEqual([start.year(), end.year()], yearsBetween(start.toDate(), end.toDate()))
})

test('should return three years when start is two years before end', t => {
    const start = moment.utc().startOf('year')
    const end = moment.utc().startOf('year').add(2, 'year')
    t.deepEqual(
        [start.year(), start.clone().add(1, 'year').year(), end.year()],
        yearsBetween(start.toDate(), end.toDate())
    )
})

test('should be curried', t => {
    const start = moment.utc().startOf('year')
    const end = moment.utc().startOf('year').add(3, 'year')
    t.deepEqual(
        [
            start.year(),
            start.clone().add(1, 'year').year(),
            start.clone().add(2, 'year').year(),
            end.year()
        ],
        yearsBetween(start.toDate()) (end.toDate())
    )
})

test('should return expected years', t => {
    const start = moment.utc('10/14/2016', 'MM/DD/YYYY')
    const end = moment.utc('04/15/2018', 'MM/DD/YYYY')
    t.deepEqual([2016, 2017, 2018], yearsBetween(start.toDate(), end.toDate()))
})
