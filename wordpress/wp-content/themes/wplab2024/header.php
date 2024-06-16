<html>
  <head>
    <?php wp_head(); ?>

    <?php if(is_single()) { 
    ?>
      <?php 
        if (has_excerpt()) {
      ?>
          <meta name="description" content="<?php echo esc_attr(get_the_excerpt()); ?>" />
      <?php
        } else {
      ?>
          <meta name="description" content="meta sample" />
      <?php
        }
      ?>
    <?php
    } else {
    ?>
      <meta name="description" content="meta sample" />
    <?php 
    }
    ?>
    <link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/css/styles.min.css">
  </head>
<body>