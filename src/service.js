import data from "./data"

const service = {
    getData: ({from, to}) => {

        const myData = data.slice(from, to)

        return new Promise((resolve, reject) => {
            resolve({
                count: data.length,
                data: myData
            })
        })
    }
}

export default service