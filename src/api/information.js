export const about = () =>{
    const data ={
        moto : "A community of like minded individuals who support cybersecurity and FOSS.",
        body1 : {
            question : "what is capture the flag?",
            answer : "A capture the flag (CTF) contest is a special kind of cybersecurity competition designed to challenge its participants to solve computer security problems and/or capture and defend computer systems. The game consists of a series of challenges where participantsmust reverse engineer, break, hack, decrypt, or do whatever it takes to solve the challenge. The challenges are all set up with the intent of being hacked, making it an excellent, legal way to get hands-on experience."
        },
        body2 : {
            question : "About Lakshya CTF",
            answer : "Lakshya CTF is a sub event of PICT's Impetus and Concepts mega event where students partcipate from all over the world! Out aim is about spreading the importance of cybersecurity in today's community. Each and every person should be aware of different vulnerabilities in systems as well as how to protect onselves agains cyber attacks We believe gamification is the best technique to teach oneself about cybersecurity."
        },
        body3 : {
            question : "Who can play Lakshya CTF",
            answer : "Lakshya CTF is mainly focused at students who are undergraduates."
        }
    };
    return data;
}


export const instruction = () => {
    const data = {
        moto : "Now that you are a part of our community, you must know of some rules we follow around here.",
        rules : {
            general : {
                1 :"When you start the CTF, 45 minutes will be alloted to complete the challenges.",
                2 : "Each question has some points to it depending upon the difficulty. Taking a hint will deduce 10% of the points associated with the question. ",
                3 : "There is no particular order of solving the questions.",
                4 : "Judging of the round will be based on two parameters. The first is the score of the team and second is the time required",
                5 : "Ranks can be viewed on the leaderboard page. The leaderboard time is updated everytime a submission is made.",
                6 : "Flags found are of the format Some of the files may contain just the inner text within the brackets. Make sure you submit it in the format specified. Flag text is not case sensitive.",
                7 : "This is a competitive environment with the aim of learning cyber security and ethical hacking. Please do not share the flags & solutions with others.",
                8 : "Internet access is granted. Feel free to explore and read about the concept behind the problem."
            },
            special : {
                1 : "Dont try to hack anything apart from this CTF Network", 
                2 : "Dont try to hack other members", 
                3 : "Dont spoil! Dont share how you solved each challenge with other members.",
                4 : "Performing denial of service attacks on the server will lead to disqualification. You are requested to play ethically.",
                5: "Brute force attacks on the flag form is prohibited.",
                6 : "Remember, once the timer starts, it can't be paused. The timer will not resume if you logout and log back in."
            }
        }
    }

    return data;
}