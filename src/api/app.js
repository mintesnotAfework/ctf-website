export const hackerRank = () => {
    const data = {
        1 : { 
            name : "liveoverflow",
            solvedChallange : 10,
            timeTake : 154740,
            score : 2540   
        },
        2 : { 
            name : "CR007",
            solvedChallange : 6,
            timeTake : 161940,
            score : 1900   
        },
        3: { 
            name : "anonymous",
            solvedChallange : 18,
            timeTake : 144000,
            score : 3100   
        },
        4 : { 
            name : "ashawe",
            solvedChallange : 9,
            timeTake : 54740,
            score : 700   
        }
    }
    return data;
}

const data = {
    1 : {
        name : "Headache",
        ip : "192.9.2.3",
        point : "128",
        solved : "32",
        diffculty : 7
    },
    2 : {
        name : "GreenHole",
        ip : "10.0.0.1",
        point : "10",
        solved : "34",
        diffculty : 8
    }, 
    3 : {
        name : "HenokDemo",
        ip : "23.12.22.11",
        point : "100",
        solved : "5",
        diffculty : 10
    },
    4 : {
        name : "HeadAche",
        ip : "10.9.21.93",
        point : "500",
        solved : "10",
        diffculty : 3
    }
}

export const machine = (id) => {
     return data[id];
}


export const machines = () => {
    return data;
}