
  currentDay = $("#currentDay")

    .text(moment().format("dddd, MMMM D, YYYY"));

function getCurrentClass(rowHour) {

    var currentTime = moment();
    var rowTime = moment(currentTime);
    
    rowTime.set({hour: rowHour});

    if (currentTime.isSame(rowTime, "hour")) {
        return "present";
    }
    else if (currentTime.isAfter(rowTime, "hour")) {
        return "past";
    }
    else {
        return "future";
    }
}

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

for (var i = 0; i < hours.length; i++) {
    setColor(hours[i]);
    loadBlock(hours[i]);
}

function saveBlock(id) {
    var blockContent = $("#" + id).val();
    localStorage.setItem("blockContent" + id, blockContent);
}

function setColor(hour) {
    var row = $("#" + hour);
    var className = getCurrentClass(hour);
    row.attr("class", "col-9 time-block " + className);
}

displayCurrentDay();
addTimeClass();
getLocalStorage();


function loadBlock(id) {
    var blockContent = localStorage.getItem("blockContent" + id);
    $("#" + id).val(blockContent);
}
 

