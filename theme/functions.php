<?php

/**
 * Custom template tags.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Enqueue scripts and styles.
 */
function prepress_scripts() {
  wp_enqueue_style( 'prepress-style', get_template_directory_uri() . '/css/main.css' );

  // bower:css
  // endbower

  // bower:js
  wp_enqueue_script( 'prepress-jquery', get_template_directory_uri() . '/bower_components/jquery/dist/jquery.js', array(), null, true );
  wp_enqueue_script( 'prepress-affix', get_template_directory_uri() . '/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix.js', array(), null, true );
  wp_enqueue_script( 'prepress-alert', get_template_directory_uri() . '/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert.js', array(), null, true );
  wp_enqueue_script( 'prepress-button', get_template_directory_uri() . '/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button.js', array(), null, true );
  wp_enqueue_script( 'prepress-carousel', get_template_directory_uri() . '/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel.js', array(), null, true );
  wp_enqueue_script( 'prepress-collapse', get_template_directory_uri() . '/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js', array(), null, true );
  wp_enqueue_script( 'prepress-dropdown', get_template_directory_uri() . '/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown.js', array(), null, true );
  wp_enqueue_script( 'prepress-tab', get_template_directory_uri() . '/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js', array(), null, true );
  wp_enqueue_script( 'prepress-transition', get_template_directory_uri() . '/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js', array(), null, true );
  wp_enqueue_script( 'prepress-scrollspy', get_template_directory_uri() . '/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy.js', array(), null, true );
  wp_enqueue_script( 'prepress-modal', get_template_directory_uri() . '/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal.js', array(), null, true );
  wp_enqueue_script( 'prepress-tooltip', get_template_directory_uri() . '/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip.js', array(), null, true );
  wp_enqueue_script( 'prepress-popover', get_template_directory_uri() . '/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover.js', array(), null, true );
  // endbower

  if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
    wp_enqueue_script( 'comment-reply' );
  }
}

add_action( 'wp_enqueue_scripts', 'prepress_scripts' );
