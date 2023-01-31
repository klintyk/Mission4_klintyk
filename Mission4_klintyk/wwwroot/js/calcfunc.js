
//Build a JavaScript program that calculates and displays both a final percentage and a letter grade
//using the "Grade Calculator" form entries based on the weights listed in the syllabus.Use
//jQuery selectors(i.e.the “$”) in your program.

$("#btn_calc").click(function () {
    //collect values from form in jquery
    let gr_assignment = $("#gr_assignment").val();
    let gr_quiz = $("#gr_quiz").val();
    let gr_grp = $("#gr_grp").val();
    let gr_intex = $("#gr_intex").val();
    let gr_midterm = $("#gr_midterm").val();
    let gr_final = $("#gr_final").val();

    if (isNaN(gr_assignment) || isNaN(gr_quiz) || isNaN(gr_grp) || isNaN(gr_intex) || isNaN(gr_midterm) || isNaN(gr_final)) {
        alert("One or more inputs are not numbers. Please enter valid numbers.");
        return;
    }
    //calculate total grade with appropriate weights
    let gr= (parseFloat(gr_assignment) * 0.5) + (parseFloat(gr_quiz) * 0.1) + (parseFloat(gr_grp) * 0.1) + (parseFloat(gr_intex) * 0.1) + (parseFloat(gr_midterm) * 0.1) + (parseFloat(gr_final) * 0.1);

    let gr_perc;
    //grade scale options (each category)
    const gr_scale = [["A", 94], ["A-", 90], ["B+", 87], ["B", 84], ["B-", 80], ["C+", 77], ["C", 74], ["C-", 70], ["D+", 67], ["D", 64], ["D-", 60], ["E", 0]
    ];

    //determine what letter grade is achieved 
    $.each(gr_scale, function (i, v) {
        if (gr >= v[1]) {
            gr_perc = v[0];
            return false;
        }
    });
    // Print the letter grade to the form (not in an alert.)
    $("#display").html(gr_perc);

});