/**
 * years-between
 * List of years between two dates, inclusive
 */

import ow from 'ow'
import moment from 'moment'


/**
 * Returns list of years between `a` and `b`, inclusive.
 *
 * @remarks
 * - order of `a` and `b` does not matter
 * - returned years are sorted numerically
 * - supports function currying
 *
 * @param a - First endpoint of dates to compare
 * @param b - Second endpoint of dates to compare
 * @returns List of years between `a` and `b`, inclusive
 */
function yearsBetween(a: Date, b: Date): number[]
function yearsBetween(a: Date): (b: Date) => number[]
function yearsBetween(a: Date, b?: Date): number[] | ((b: Date) => number[]) {

    ow(a, ow.date)

    const curried = (b: Date): number[] => {
        ow(b, ow.date)

        const [start, end] = [a, b]
            .map(date => date.valueOf())
            .sort((x: number, y: number) => x - y)
            .map(time => moment.utc(time))

        const diff = moment.utc(end).diff(moment.utc(start), 'years')

        return [...Array(1 + diff).keys()]
            .map(year => year + start.year())
    }

    return b === undefined ? curried : curried(b)
}

export default yearsBetween
