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
        My Art <br />
      </div>
    </section>
    <section class='section-art row justify-content-center'>
      <div class='section-art__info col-12 col-sm-6 col-md-6'>
        <i class='fa fa-paint-brush mfa'></i><br /> <br />
        <div class= 'content'>
          CSS allows me to express my thoughts in a logical way. Explore the art pieces below. Click on the art to load it in (to prevent a lot of CSS rendering) <br />
          <a href='https://github.com/msg138' class='section-projects__link'><i class='fa fa-github mfa'></i>&nbsp;Visit My Github</a>
        </div>
      </div>
    </section>
    <section class='section-art-list row justify-content-center'>
      <div class='section-art__item col-12 col-sm-6 col-md-4'>
        <div class='section-art__include' loadref='art/djcontroller.php'>
            <div class='placeholder'>
                Click To Load Art
            </div>
        </div>
        <div class='subtitle'>
            DJ Controller
        </div>
        <div class= 'content'>
            Simple DJ Controller Animated with CSS. <br />
            <a href='https://github.com/msg138/PortfolioSite/blob/master/art/djcontroller.php' class='section-projects__link source'><i class='fa fa-github mfa'></i>&nbsp;Source</a>
        </div>
      </div>
    </section>
    <?php /* Include our contact / footer */ require('includes/footer.php'); ?>
    <?php /* Include necessary scripts for the site to work. */ require('includes/scripts.php'); ?>
  </body>
</html>