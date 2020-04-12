// Constants will be shared between client and server.
// They will be used as values in the DOM and in the URL of the referrer calls.
const RANGES_LAST_7_DAYS = { value: 'weekly', label: 'Last 7 days' }
const RANGES_LAST_30_DAYS = { value: 'monthly', label: 'Last 30 days' }
const RANGES_ALL_TIME = { value: 'allTime', label: 'All time' }

const toArray = () => [
	RANGES_LAST_7_DAYS,
	RANGES_LAST_30_DAYS,
	RANGES_ALL_TIME
]

const toValues = () => [
	RANGES_LAST_7_DAYS.value,
	RANGES_LAST_30_DAYS.value,
	RANGES_ALL_TIME.value
]

module.exports = {
	RANGES_LAST_7_DAYS,
	RANGES_LAST_30_DAYS,
	RANGES_ALL_TIME,
	toArray,
	toValues
}