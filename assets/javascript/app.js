$(document).ready(function () {
    // console.log ("hello");
    //hide when the game starts
    $("#finalResult, #question, #donebtn").hide()

    var questionsArray = [

        ["What color shoes does Mickey Mouse traditionally wear?", "Yellow", ["Red", "Blue", "Yellow", "Black"]],
        ["What were Mickey's first spoken words?", "Hot Dogs!", ["Look out!", "Hot Dogs!", "Wanna Dance!", "Golly Gee Whillakers!"]],
        ["In what year did Mickey Mouse make his first comic strip appearance?", "1930", ["1930", "1934", "1942", "1946"]],
        ["What is the name of Mickey's sister?", "Amelia", ["Amelia", "Bonnie", "Carla", "Doreen"]]

    ];

    questionsArray.forEach((element, i) => {
        //  console.log(element)
        $("#question").append("<p>" + element[0] + "</p>")
        element[2].forEach(answerChoice => {
            $("#question").append(
                //    "<input type = 'radio' name ='qtn'"+i+">" + answerChoice + ""
                `<input class='userSelection' type='radio' correctAnswer='${element[1]}' name='qtn${i}' value='${answerChoice}'> ${answerChoice}`
            )
            //console.log(answerChoice)
        });
    });
    var correctAnswerCounter = 0;
    var incorrectAnswerCounter = 0;
    var temp = [];
    $(".userSelection").on("click", function () {
        //console.log("hi");   
        var correctAnswer = $(this).attr('correctAnswer');
        var userSelection = $(this).val()
        //console.log(correctAnswer, userSelection);
        if (correctAnswer === userSelection) { //stop it from adding up when selected
            if (temp.indexOf(correctAnswer) === -1) {
                correctAnswerCounter++;
                temp.push(correctAnswer)
                console.log(temp)
            }
            //correctAnswerCounter++;
            //console.log("correctAnswerCounter", correctAnswerCounter);
        } else {
            if (temp.indexOf(correctAnswer) === -1) {
                incorrectAnswerCounter++;
                temp.push(correctAnswer)
            }
            //incorrectAnswerCounter++;
            //console.log("incorrectAnswerCounter", incorrectAnswerCounter);
        }
    });
    var timer;
    var counter = 20;
    $("#startbtn").on("click", function () {
        //console.log("birungi");
        $("#startbtn, #logo").hide();
        //show qtns
        $("#question, #donebtn").show();

        timer = setInterval(() => {
            counter--;
            if (counter >= 0) {
                $("#countDown").text(counter);
            }
            else {
                $("#question, #donebtn").hide();
                $("#finalResult").show();
                $("#correctAnswer").text(correctAnswerCounter);
                $("#incorrectAnswer").text(incorrectAnswerCounter);

            }

        }, 1000);
    })

    $("#donebtn").on("click", function () {
        clearInterval(timer);
        counter = 20;
        $("#question, #donebtn").hide();
        $("#finalResult").show();
        $("#correctAnswer").text(correctAnswerCounter);
        $("#incorrectAnswer").text(incorrectAnswerCounter);
    })
    $("#restartbtn").on("click", function () {
        //refresh page
        window.location.href = '/'

    })

    //    for(var i =0; i<questionsArray.length; i++){
    //        var e = questionsArray[i];
    //        //console.log(e)
    //        for (let j = 0; j < e[2].length; i++) {
    //            //var x = e[j]
    //            //const element = questionsArray[i][j];
    //            //console.log(questionsArray[i][0])
    //            //console.log(x);
    //        }
    //    }
})

