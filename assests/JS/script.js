$(document).ready(function () {
    $(".tutDropDown").click(function () {
        hideAllExecTut();
    });
    $(".RefDropDown").click(function () {
        hideAllExecRef();
    });
    $(".ExamDropDown").click(function () {
        hideAllExecExam();
    });
    $(".ExerDropDown").click(function () {
        hideAllExecExer();
    });
    $(".btnSearch").click(function () {
        $(".btnSearch span").toggleClass("fa-close");
        let object1 = $(".searchBar").css("display");
        if (object1 === "none"){
            $(".searchBar").css("display", "block");
        }else
            $(".searchBar").css("display", "none");
    });
    $(".btnChangeColor").click(function () {
        let object1 = $(".codeHTML").css("background-color");
        let object2 = $(".rightHTMLCode").css("background-color");
        if (object1 === "rgb(255, 255, 255)"){
            $(".codeHTML").css("background-color","#282C34");
            $(".codeHTML").css("color","#FFFFFF");
            $(".codesJS").css("color","#FFFFFF");
        }else{
            $(".codeHTML").css("background-color","#FFFFFF");
            $(".codeHTML").css("color","#000000");
            $(".codesJS").css("color","#000000");
        }
        if (object2 === "rgb(255, 255, 255)"){
            $(".rightHTMLCode").css("background-color","#282C34")
            $(".rightHTMLCode").css("color","#FFFFFF")
            $(".codesJS").css("color","#FFFFFF")
        }else{
            $(".rightHTMLCode").css("background-color","#FFFFFF")
            $(".rightHTMLCode").css("color","#000000")
            $(".codesJS").css("color","#000000")
        }
    });
    function hideAllExecRef() {
        let object = document.getElementById("hideRef");
        if (object.style.display === "block") {
            object.style.display = "none";
        } else{
            object.style.display = "block";
        }
        document.getElementById("hideExam").style.display = "none";
        document.getElementById("hideExer").style.display = "none";
        document.getElementById("hideTut").style.display = "none";
        $(".RefDropDown span").toggleClass("fa-caret-up");
        $(".tutDropDown span").removeClass("fa-caret-up");
        $(".tutDropDown span").add("fa-caret-down");
        $(".ExamDropDown span").removeClass("fa-caret-up");
        $(".ExamDropDown span").add("fa-caret-down");
        $(".ExerDropDown span").removeClass("fa-caret-up");
        $(".ExerDropDown span").add("fa-caret-down");
    }

    function hideAllExecTut() {
        let object = document.getElementById("hideTut");
        if (object.style.display === "block") {
            object.style.display = "none";
        } else{
            object.style.display = "block";
        }
        document.getElementById("hideExam").style.display = "none";
        document.getElementById("hideExer").style.display = "none";
        document.getElementById("hideRef").style.display = "none";
        $(".tutDropDown span").toggleClass("fa-caret-up");
        $(".RefDropDown span").removeClass("fa-caret-up");
        $(".RefDropDown span").add("fa-caret-down");
        $(".ExamDropDown span").removeClass("fa-caret-up");
        $(".ExamDropDown span").add("fa-caret-down");
        $(".ExerDropDown span").removeClass("fa-caret-up");
        $(".ExerDropDown span").add("fa-caret-down");
    }

    function hideAllExecExer() {
        let object = document.getElementById("hideExer");
        if (object.style.display === "block") {
            object.style.display = "none";
        } else{
            object.style.display = "block";
        }
        document.getElementById("hideExam").style.display = "none";
        document.getElementById("hideRef").style.display = "none";
        document.getElementById("hideTut").style.display = "none";
        $(".ExerDropDown span").toggleClass("fa-caret-up");
        $(".RefDropDown span").removeClass("fa-caret-up");
        $(".RefDropDown span").add("fa-caret-down");
        $(".tutDropDown span").removeClass("fa-caret-up");
        $(".tutDropDown span").add("fa-caret-down");
        $(".ExamDropDown span").removeClass("fa-caret-up");
        $(".ExamDropDown span").add("fa-caret-down");
    }

    function hideAllExecExam() {
        let object = document.getElementById("hideExam");
        if (object.style.display === "block") {
            object.style.display = "none";
        } else{
            object.style.display = "block";
        }
        document.getElementById("hideExer").style.display = "none";
        document.getElementById("hideRef").style.display = "none";
        document.getElementById("hideTut").style.display = "none";
        $(".ExamDropDown span").toggleClass("fa-caret-up");
        $(".RefDropDown span").removeClass("fa-caret-up");
        $(".RefDropDown span").add("fa-caret-down");
        $(".tutDropDown span").removeClass("fa-caret-up");
        $(".tutDropDown span").add("fa-caret-down");
        $(".ExerDropDown span").removeClass("fa-caret-up");
        $(".ExerDropDown span").add("fa-caret-down");
    }
    $(".loadLogIn").click(function () {
        let object1 = $(".login").css("display");
        if (object1 === "none"){
            $(".login").css("display", "block");
        }else
            $(".login").css("display", "none");
    });
    $(".btnClose").click(function () {
        $(".dorpdownMenus").css("display", "none");
        $(".login").css("display", "none");
        $(".tutDropDown span").removeClass("fa-caret-up");
        $(".tutDropDown span").add("fa-caret-down");
        $(".RefDropDown span").removeClass("fa-caret-up");
        $(".RefDropDown span").add("fa-caret-down");
        $(".ExamDropDown span").removeClass("fa-caret-up");
        $(".ExamDropDown span").add("fa-caret-down");
        $(".ExerDropDown span").removeClass("fa-caret-up");
        $(".ExerDropDown span").add("fa-caret-down");
    });
});