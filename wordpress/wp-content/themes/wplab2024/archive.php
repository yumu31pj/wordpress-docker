<?php get_header(); ?>
<div>
  <h2>Archive</h2>
  <?php 
    if(have_posts()) {
      while(have_posts()) {
        the_post();
  ?>
  <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
  <?php
      }
    }
  ?>
</div>
<?php get_footer(); ?>