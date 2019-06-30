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
        My Work <br />
      </div>
    </section>
    <section class='section-projects row justify-content-center'>
      <div class='section__title col-12'>
        My Projects
      </div>
      <div class='section-projects__info col-12 col-sm-6 col-md-6'>
        <i class='fa fa-cog mfa cog-animation'></i><br /> <br />
        <div class= 'content'>
          Here you will find a collection of my professional and personal work. Additionally, you can view my most recent works that I have shared or made changes to from my Github.<br /><br />
          <a href='https://github.com/msg138' class='section-projects__link'><i class='fa fa-github mfa'></i>&nbsp;Visit My Github</a>
        </div>
      </div>
    </section>
    <section class='section-projects-list row justify-content-center'>
      <div class='section-projects__item col-12 col-sm-8 col-md-7'>
        <img class='project-image svg' src='img/windowframe.svg' />
        <div class='title'>
            Dickery Docker
        </div>
        <div class='subtitle'>
          Interface / UI
        </div>
        <div class= 'content'>
          Made with React / NodeJS, this is a control panel that acts as a Friendly Front end for Docker with User Management. Name is a play on words for the <i>Hickory Dickery Dock</i> nursery rhyme.<br /><br />
          <a href='https://github.com/msg138' class='section-projects__link source'><i class='fa fa-github mfa'></i>&nbsp;Source</a>
          <a href='#' class='section-projects__link demo not-available'>Demo</a>
        </div>
      </div>
      <div class='section-projects__item col-12 col-sm-8 col-md-7'>
        <img class='project-image svg' src='img/window-portfolio.svg' />
        <div class='title'>
            Porfolio Site
        </div>
        <div class='subtitle'>
          Web Design / UI
        </div>
        <div class= 'content'>
          This site was made with minimal PHP (primarily for reusable code), LESS/CSS and JQuery. A large amount of inspiration was taken from <a class='section-projects__link' href='http://seanhalpin.io/'>Sean Halpin</a> during design and creation.<br /><br />
          <a href='https://github.com/msg138/PortfolioSite' class='section-projects__link source'><i class='fa fa-github mfa'></i>&nbsp;Source</a>
          <a href='https://themichaelgeorge.com' class='section-projects__link demo'>Demo</a>
        </div>
      </div>
        
    </section>
    <?php /* Include our contact / footer */ require('includes/footer.php'); ?>
    <?php /* Include necessary scripts for the site to work. */ require('includes/scripts.php'); ?>
  </body>
</html>