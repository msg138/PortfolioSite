<!doctype html>
<html lang="en">
  <head>
    <?php /* include style sheets and such */ require('includes/head.php'); ?>
  </head>
  <body class='container-fluid'>
    <?php /* include top bar */ require('includes/topbar.php'); ?>
    <section class='section-intro row'>
      <img class='section-intro__background col-12 svg' src='img/spaceneedle.svg'/>
      <div class='section-intro__content col-12'>
        This is me.<br />
        Michael G.
      </div>
    </section>
    <section class='section-about row'>
      <div class='section__title col-12'>
        Who Am I?
      </div>
      <div class='section-about__whoami col-12 col-sm-6 col-md-6 col-lg-4'>
        <!-- img class='whoami-image' href='img/placeholder-320x.png' /-->
        <div class= 'content'>
          Web Developer straight out of Seattle, Washington. <br /><br />
          Code is in my flesh and bones. <br /><br />
          <i class='fa fa-tint mfa droplet-animation'></i>
        </div>
      </div>
      <div class='section-about__passions col-12 col-sm-6 col-md-6 col-lg-4'>
        <!-- img class='passions-image' href='img/placeholder-320x.png' /-->
        <div class= 'content'>
          I am passionate about learning new Technologies, and building tools to help control them. <br /><br />
          <i class='fa fa-cog mfa cog-animation'></i>
        </div>
      </div>
      <div class='section-about__aspirations col-12 col-sm-12 col-md-12 col-lg-4'>
        <!-- img class='passions-image' href='img/placeholder-320x.png' /-->
        <div class= 'content'>
          With Web Development, there is always more to learn. I aspire to expose myself, and utilize the many options. <br /><br />
          <i class='fa fa-heart mfa heart-animation'></i>
        </div>
      </div>
    </section>
    <section class='section-skills row justify-content-center'>
      <div class='section__title col-12'>
        How I Can Help.
      </div>
      <div class='section-about__whoami col-12 col-sm-6 col-md-6 col-lg-4'>
        <!-- img class='whoami-image' href='img/placeholder-320x.png' /-->
        <div class= 'content'>
          <i class='emphasis'>Design</i> <br /><br />
          I can convey your message through the use of unique visuals, and simple direction.<br /><br />
          <i class='fa fa-envelope mfa mail-animation'></i>
        </div>
      </div>
      <div class='section-about__passions col-12 col-sm-6 col-md-6 col-lg-4'>
        <!-- img class='passions-image' href='img/placeholder-320x.png' /-->
        <div class= 'content'>
          <i class='emphasis'>Develop</i> <br /><br />
          I will create a fully responsive site, using modern tools and technologies. <br /> <br />
          <i class='fa fa-shield mfa cubes-animation'></i>
        </div>
      </div>
    </section>
    <?php /* Include our contact / footer */ require('includes/footer.php'); ?>
    <?php /* Include necessary scripts for the site to work. */ require('includes/scripts.php'); ?>
  </body>
</html>