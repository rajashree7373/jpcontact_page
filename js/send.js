var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function myfunction() {
    // alert('asp');
    var brandName = $('#brand').val();
    var catName = $('#category').val();
    var firstName = $('#insightly_firstName').val();
    var email = $('#insightly_Email').val();
    var phone = $('#insightly_Phone').val();

    var source = getUrlParameter('utm_source');
    var medium = getUrlParameter('utm_medium');
    var campaign = getUrlParameter('utm_campaign');
    var term = getUrlParameter('utm_term');
    var formData = { brandName : brandName, catName : catName, firstName : firstName, email : email, phone : phone, source : source, medium : medium, campaign : campaign, term : term };
    // alert(formData);
    // alert('i m here');


    if (callValidation()) // Calling validation function
    {
     $.ajax({
                type: 'POST',
                url: "fonmdata.php",
                data: formData,
                success: function(resultData) { //alert("Thank You, Your Form has been submitted Successfully");
                location.href = "thankyou.html"}
            });
    }
    
 
}



function callValidation(){
    // console.log('i m here');
	var str = 'Please Enter ';
	var name = document.getElementById('insightly_firstName').value;
	var email = document.getElementById('insightly_Email').value;
	var phone = document.getElementById('insightly_Phone').value;

    // console.log('i m here');

    if(name == '' && email == '' && phone == '') {
		alert ('Please fill all the Fields');
		return false;
	}

    else if(name == '' || email == '' || phone == '') {
        if(name == '') {
            str = str + 'Name';
            if(email == '' || phone == '') {
                str = str + ', ';
            } else {
                str = str + '.';
            }
        }
       
        if(email == '') {
            str = str + 'Email ID';
            if(name == '' || phone == '') {
                str = str + ', ';
            } else {
                str = str + '.';
            }
        }
        if(phone == '') {
            str = str + 'Contact No.';
        }
        
         
        
    alert(str);
    return false;
    }


	
    if(document.getElementById('insightly_firstName').value == ''){
        // console.log('i m if name');
        alert('Please enter Name');
        return false;
    } else {
        // console.log('i m else name');
        var x=document.getElementById('insightly_firstName').value; 
        var reg = /^[A-z ]+$/;
        if(!reg.test(x)) {
            // console.log('i m else if name');
            alert('Name must contain only characters');
            return false;
        }
    }


    if(document.getElementById('insightly_Email').value == ''){
        // console.log('i m if email');
            alert('Please enter Email');
            return false;
        } else {
            var email = document.getElementById('insightly_Email').value;
            var emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            if(!emailReg) {
               // console.log('i m in if');
                alert("You have entered an invalid email address!")
                return false;
            }
          //  console.log('i m outside if');
        }
    
    
    var p;
        p = document.getElementById('insightly_Phone').value;
        // If x is Not a Number or less than one or greater than 10
        if (isNaN(p) || p < 5999999999 || p > 10000000000) {
            // console.log('i m else if phone');
            alert("Enter a valid mobile number");
           return false;
        }
    

    return true;
};