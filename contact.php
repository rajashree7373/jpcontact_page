<?php include 'header.php';?>


<div class="contact_banner">
    <img src="img/Contact-us-banner.jpg" alt="contact_banner" class="contact_desk img-responsive">
    <img src="" alt="contact_image" class="contact_mob img-responsive">
</div>
<div class="contact_frm">
    <h1 data-aos="fade-up" data-aos-duration="3000">Find Us Here</h1>
    <div class="contact_line"></div>
    <div class="contact_finfo">
        <div class="contact_linfo">
            <h5><img src="img/add.png" alt="icon" class="contact_ifcon">JP Infra Mumbai Pvt. Ltd.</h5><p class="texxxt">4th Floor, Viraj Towers, Western Express Highway, Near WEH Metro Station, Andheri(E), Mumbai-400093</p>
            <p class="texxt"><img src="img/email.png" alt="icon" class="contact_ifcon">sales@jpinfra.com</p>
            <p class="texxt"><img src="img/phone.png" alt="icon" class="contact_ifcon">022 42415678</p>
            <p class="texxt"><img src="img/fax.png" alt="icon" class="contact_ifcon">022 42415679</p>
        </div>
        <div class="contact_rinfo">
            <form name="myform" action="" method="post" name="formdata">
                <h4>HAVE A QUESTION?</h4>
                <p class="texxt">Lorem ipsum dolor sit amet</p>
                <input type="hidden" name="Brand" class="form-control" value="M3M" id="brand">
                <input type="hidden" name="Category" class="form-control" value="Commercial" id="category" required>
                <input type="text" placeholder="Name:"  id="insightly_firstName" class="form-control" name="FullName" required>
                <input type="email" placeholder="Email" id ="insightly_Email" class="form-control" name="Email" required>
                <input type="text" placeholder="Phone" id="insightly_Phone" class="form-control" name="Phone" minlength="10" maxlength="10" required>
                <input type="text" name="message" placeholder="Message" class="form-control" name="Message" required>
                <br>
                <center>
                    <button type="submit" class="btn_moreee btn btn-primary form_group_button" onclick="myfunction();return(false);">
                    <img src="img/arrow1.png" class="arrow_button" alt="arrow">
                    SEND
                    </button>
                </center>
                
            
            </form>
        </div>
    </div>
</div>

<div class="contact_map">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7545.261529094156!2d73.12861135661599!3d18.991907445843854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x32f5bff31dcb3396!2sClassic%20Kalptaru!5e0!3m2!1sen!2sin!4v1580167030375!5m2!1sen!2sin" width="100%" height="500" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
</div>



<?php include 'footer.php';?>