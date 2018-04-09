function initMap() {
    var uluru = {lat: 56.964548, lng:  24.104220};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

  function check(){
    var firstInput = document.getElementById("password").value;
    var secondInput = document.getElementById("password-repeat").value;
    if (firstInput != secondInput){
       document.getElementById("password-repeat").value = '';
        alert('Wrong password!!!');
        
    }
};