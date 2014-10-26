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

  if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
    wp_enqueue_script( 'comment-reply' );
  }
}

add_action( 'wp_enqueue_scripts', 'prepress_scripts' );
