function formatDuration(seconds) {
    if (seconds === 0) {
        return 'now'
    } else {
        let year = Math.floor(seconds / 31536000)
        let day = Math.floor((seconds -= year * 31536000) / 86400)
        let hour = Math.floor((seconds -= day * 86400) / 3600)
        let min = Math.floor((seconds -= hour * 3600) / 60)
        let sec = seconds % 60

        let arr = []
        if (year === 1) {
            arr.push(`${year} year, `)
        } else if (year > 1) {
            arr.push(`${year} years, `)
        }

        if (day === 1) {
            arr.push(`${day} day, `)
        } else if (day > 1) {
            arr.push(`${day} days, `)
        }

        if (hour === 1) {
            if (min === 0) {
                arr.push(`${hour} hour`)
            } else {
                if (sec === 0) {
                    arr.push(`${hour} hour and `)
                } else {
                    arr.push(`${hour} hour, `)
                }
            }
        } else if (hour > 1) {
            if (min === 0) {
                arr.push(`${hour} hours`)
            } else {
                if (sec === 0) {
                    arr.push(`${hour} hours and `)
                } else {
                    arr.push(`${hour} hours, `)
                }
            }
        }

        if (min === 1) {
            if (sec === 0) {
                arr.push(`${min} minute`)
            } else {
                arr.push(`${min} minute and `)
            }
        } else if (min > 1) {
            if (sec === 0) {
                arr.push(`${min} minutes`)
            } else {
                arr.push(`${min} minutes and `)
            }
        }

        if (sec === 1) {
            arr.push(`${sec} second`)
        } else if (sec > 1) {
            arr.push(`${sec} seconds`)
        }
        return arr.join('')
    }
}


console.log(formatDuration(7093724))







