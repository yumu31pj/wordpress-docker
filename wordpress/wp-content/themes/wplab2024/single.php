<?php get_header(); ?>
<div>
  <?php 
    if(have_posts()) {
      while(have_posts()) {
        the_post();
  ?>
  <h2><?php the_title(); ?></h2>
  <div>
    <?php the_content(); ?>
  </div>
  <div>
    <h2>抜粋</h2>
    <?php the_excerpt(); ?>
  </div>
  <?php
      }
    }
  ?>
</div>

<?php get_footer(); ?>