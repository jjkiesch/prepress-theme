<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) :the_post(); ?>
  <?php get_template_part( 'partials/content', get_post_format() ); ?>
<?php endwhile; else: ?>
  no content found
<?php endif; ?>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
