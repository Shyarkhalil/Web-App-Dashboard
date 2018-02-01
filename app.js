


let hourly = document.getElementById("hourly").getContext('2d');
let daily = document.getElementById("daily").getContext('2d');
let weeklyy = document.getElementById("weekly").getContext('2d');
let monthly = document.getElementById("monthly").getContext('2d');
let barDaily = document.getElementById("bar-daily").getContext('2d');
let doughnutMobile = document.getElementById("mobile-user").getContext('2d');
let shakeBell = document.querySelector(".bell");

// Hourly chart
var hourlyChart = new Chart(hourly, {
    type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea

    data: {
        labels: ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm'],
        datasets: [{

            data: [100, 400, 200, 400 ,300 ,600 , 400, 600, 400, 900, 120 ],
            backgroundColor:'rgba(46, 155, 186, 0.24)',
            borderWidth: 2,
            borderColor: '#28d2d5',
            tension: 0,
            radius: 2
        }]
    },
    options:{
    responsive: 'true',
    maintainAspectRatio: false,
    legend: {
      display:false
    },
    animation: {
          duration: 4700,
          easing: 'easeOutElastic'
        }
    }

});


// Daily chart
var dailyChart = new Chart(daily, {
    type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea

    data: {
        labels: ['Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'],
        datasets: [{

            data: [2, 40, 16, 70 ,0 ,42 , 100, 150 ],
            backgroundColor:'rgba(46, 155, 186, 0.24)',
            borderWidth: 2,
            borderColor: '#28d2d5',
            tension: 0,
            radius: 3
        }]
    },
    options:{
    responsive: 'true',
    maintainAspectRatio: false,
    legend: {
      display:false
    },
    animation: {
          duration: 4700,
          easing: 'easeOutElastic'
        }
    }

});



// weekly chart
var weeklyChart = new Chart(weeklyy, {
    type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea

    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{

            data: [2, 40, 16, 70 ,0 ,42 , 100, 150 ],
            backgroundColor:'rgba(46, 155, 186, 0.24)',
            borderColor: '#28d2d5',
            borderWidth: 2,
            tension: 0,
            radius: 3
        }]
    },
    options:{
    responsive: 'true',
    maintainAspectRatio: false,
    legend: {
      display:false
    },
    animation: {
          duration: 4700,
          easing: 'easeOutElastic'
        }
    }

});



// Monthly chart
var monthlyChart = new Chart(monthly, {
    type: 'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea

    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
        datasets: [{

            data: [150, 300, 200, 400 ,300 ,600 , 400, 600, 400, 600, 500, 700],
            backgroundColor:'rgba(46, 155, 186, 0.24)',
            borderWidth: 2,
            borderColor: '#28d2d5',
            tension: 0,
            radius: 3
        }]
    },
    options:{
    responsive: 'true',
    maintainAspectRatio: false,
    legend: {
      display:false
    },
    animation: {
          duration: 4700,
          easing: 'easeOutElastic'
        }
    }

});



// Bar-daily chart
var barDailyChart = new Chart(barDaily, {
    type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea

    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{

            data: [200, 250, 90, 100, 150, 200, 300, 350],
            backgroundColor: 'rgba(40, 112, 133, 1)',
            borderWidth: 2,
            borderColor: '#28d2d5',
            tension: 0,
            radius: 3
        }]
    },
    options:{
    responsive: 'true',
    maintainAspectRatio: true,
    legend: {
      display:false
    },
    animation: {
          duration: 4700,
          easing: 'easeOutElastic'
        }
    }

});


//  Mobile-doughnut chart
var mobileDoughnutChart = new Chart(doughnutMobile, {
    type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea

    data: {
        labels: ['Phones', 'Tablets', 'Desktop'],
        datasets: [{

            data: [ 200, 200, 800],
            backgroundColor: [
                'rgb(200, 89, 119)',
                'rgb(196, 132, 198)',
                'rgb(63, 228, 150)'
            ],
            borderWidth: 2,
            tension: 0,
            radius: 2
        }]
    },
    options:{
    responsive: 'true',
    maintainAspectRatio: true,

    layout: {
            padding: {
                left:15,
                right: 30,
                top: 0,
                bottom: 0
            }
        },

    legend: {
    display: true,
    position: 'right',
    labels:{
      fontSize: 14,
      boxWidth: 30,
      fontStyle:'normal',
      fontColor:'#064a50'
    },

  },

    animation: {
          duration: 4700,
          easing: 'easeOutElastic'
        }
    }

});


//Notification

let notificationCounter = document.querySelector(".notification");
let notificationMenu = document.querySelectorAll(".menu");
let notiTriangularBubble = document.querySelector(".notification-container");

let notiCheckMark = document.querySelector(".first-notification");
let notiLikeMark = document.querySelector(".second-notification");
let notiPlusMark = document.querySelector(".third-notification");
let checkClose = document.querySelector(".check-close");
let favoriteClose = document.querySelector(".favorite-close");
let plusClose = document.querySelector(".plus-close");


notificationCounter.addEventListener("click", (e) =>{
  notiTriangularBubble.classList.add('dropDownMenu');
  for (var i = 0; i < notificationMenu.length; i++) {
    notificationMenu[i].classList.add('dropDownMenu');
  }
  notificationCounter.style.display = "none";
  shakeBell.classList.add('shake-bell');
});


checkClose.addEventListener("click", (e) => {
    notiCheckMark.style.display = "none";
    notiTriangularBubble.style.display = "none";
});

favoriteClose.addEventListener("click", (e) => {
   notiLikeMark.style.display = "none";
});

plusClose.addEventListener("click", (e) => {
   notiPlusMark.style.display = "none";
});



//Alert close


let alertClose = document.querySelector(".alertButton");
let alertNotification = document.querySelector(".alert");
let canvas = document.querySelector(".canvas");

let btnHourly = document.querySelector(".btn-hourly");
let dailyButton = document.querySelector(".btn-daily");
let weeklyButton = document.querySelector(".btn-weekly");
let monthlyBtn = document.querySelector(".btn-monthly");
let allCanves = document.querySelectorAll(".canvas");


window.onload = function () {
  load();
};


allCanves[1].style.display = "none";
allCanves[2].style.display = "none";
allCanves[3].style.display = "none";




btnHourly.addEventListener('click', (e) => {
  allCanves[1].style.display = "none";
  allCanves[2].style.display = "none";
  allCanves[3].style.display = "none";
  allCanves[0].style.display = "block";
});


dailyButton.addEventListener('click', (e) => {
  allCanves[1].style.display = "block";
  allCanves[0].style.display = "none";
  allCanves[2].style.display = "none";
  allCanves[3].style.display = "none";
});

weeklyButton.addEventListener('click', (e) => {
  allCanves[2].style.display = "block";
  allCanves[0].style.display = "none";
  allCanves[1].style.display = "none";
  allCanves[3].style.display = "none";
});

monthlyBtn.addEventListener('click', (e) => {
  allCanves[3].style.display = "block";
  allCanves[0].style.display = "none";
  allCanves[1].style.display = "none";
  allCanves[2].style.display = "none";
});


alertClose.addEventListener('click', (e) => {
  alertNotification.style.display = "none";
});



// Form validation
let messageTextArea = document.getElementById('user_message');
let userTextArea = document.getElementById('name');
let submitButton = document.querySelector('button');
let successContainer = document.querySelector(".success_container");
let userErrorContainer = document.querySelector(".user_error_container");
let messageErrorContainer = document.querySelector(".message_error_container");
let messageErrorMessage = document.querySelector(".user_error_message");
let successCloseSign = document.querySelector(".close-success");
let closeSign = document.querySelector(".close-error");
let messageClose = document.querySelector(".message_close");
let successMessage = document.querySelector(".success_message");
let dataList = document.querySelectorAll('#datalist1 option');


submitButton.addEventListener('click', (e) => {
     e.preventDefault();
   let button = e.target;
      if (button) {
      if (userTextArea.value === '') {
        let p = document.createElement("p");
        p.className = "error_title";
        p.textContent = "Oops! You forgot search for name";
        messageErrorMessage.appendChild(p);
        userErrorContainer.style.display= "block";


      }else if (messageTextArea.value === '') {
        messageErrorContainer.style.display= "block";

      } else {
        let valid = false;
        for (var i = 0; i < dataList.length; i++) {
          let options = dataList[i];
         if (userTextArea.value === options.value) {
             valid = true;
              break;
         }
        }
        if (valid === false) {
          let p = document.createElement("p");
          p.className = "error_title";
          p.textContent = "Oops! The name doesn't match";
          messageErrorMessage.appendChild(p);
          userErrorContainer.style.display= "block";
          userTextArea.value = "";
        }else {
          successContainer.style.display= "block";
          userTextArea.value = "";
          messageTextArea.value = "";
        }

      }
   }
});



successCloseSign.addEventListener('click', (e) => {
  successContainer.style.display = 'none';
  userTextArea.value = "";
  messageTextArea.value = "";
});

closeSign.addEventListener('click', (e) => {
  let p = document.querySelector(".user_error_message p")
  userErrorContainer.style.display = 'none';
  messageErrorMessage.removeChild(p);
});
messageClose.addEventListener('click', (e) => {
  messageErrorContainer.style.display = 'none';
});


//Local Storage

function supportsLocalStorage() {
      try {
        return 'localStorage' in window && window['localStorage'] !== null;
      } catch (e) {
       return false;
      }

    }

 if (supportsLocalStorage()) {
   console.log("It supports localStorage");
   const saveButton = document.getElementById("save_button");

   const onOffSwitch = document.getElementById("emailonoffswitch");
   const onOffProfileSwitch = document.getElementById("profile-onoffswitch");
   const timeZone = document.querySelector(".time_zone");

   saveButton.addEventListener("click", (e) => {
   localStorage.setItem( 'onOfSwitch', onOffSwitch.checked);
   localStorage.setItem( 'onOffProfileSwitch', onOffProfileSwitch.checked);
   localStorage.setItem( 'timeZone', timeZone.selectedIndex);

  });
 }

function load() {
  let storedEmailValue = JSON.parse(localStorage.getItem("onOfSwitch"));
  let storedProfileValue = JSON.parse(localStorage.getItem("onOffProfileSwitch"));
  let storedTimeZoneIndex = JSON.parse(localStorage.getItem("timeZone"));
  document.getElementById("emailonoffswitch").checked = storedEmailValue;
  document.getElementById("profile-onoffswitch").checked = storedProfileValue;
  document.querySelector(".time_zone").selectedIndex = storedTimeZoneIndex;
  if (storedEmailValue) {
    return storedEmailValue;
  }else {
    return [];
  }
  if (storedProfileValue) {
    return storedEmailValue;
  }else {
    return [];
  }
  if (storedTimeZoneIndex) {
     return storedTimeZoneIndex
  } else {
    return [];
  }
}


function removeItems() {
  localStorage.clear();
}
 const cancelButton = document.getElementById("cancel_button");


 cancelButton.addEventListener("click", (e) => {
  removeItems();
 });


//Smooth Scrolling
$(document).ready(function() {
  $('a[href^="#"]').on("click", function(e) {
    e.preventDefault();
    $('html, body').animate({
       scrollTop: $(this.hash).offset().top
    }, 1000, 'swing');
  });
});
