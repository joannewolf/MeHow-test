'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
    initializePage();
})

function initializePage() {
    console.log("entry connected!");
    $("#edit-text").height( $("#edit-text")[0].scrollHeight );
    $("#edit-button").click(edit);
    $("#save-button").click(save);
}

function edit(e) {
    e.preventDefault();
    console.log("edit!!");
    document.getElementById("edit-text").disabled = false;
    $(this).hide();
}

function save(e) {
    e.preventDefault();
    console.log("save!!");
    var content = $("#edit-text").val();
    document.getElementById("edit-text").disabled = true;
    $("#edit-button").show();
}

// function setHeight(fieldId){
//     document.getElementById(fieldId).style.height = document.getElementById(fieldId).scrollHeight+'px';
// }