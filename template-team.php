<?php
/**
 * Template Name: Team
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package parallax-one
 */

    get_header();
    the_post();

$team_posts = get_posts( array(
    'post_type' => 'team',
    'posts_per_page' => -1, // Unlimited posts
    'orderby' => 'title', // Order alphabetically by name
) );

if ( $team_posts ):
?>

    </div>
    <!-- /END COLOR OVER IMAGE -->
</header>
<!-- /END HOME / HEADER  -->
<?php if (has_post_thumbnail()) {
        echo '<div class="header-teaser">';
        the_post_thumbnail('full');
        echo '</div>';
    } else {
        echo '<div class="spacing-header"></div>';
        } ?>

<div class="content-wrap">
    <div class="container">


            <main id="main" class="site-main" role="main">
<header class="entry-header">
        <h1 class="entry-title single-title"><?php echo get_the_title( 95 ); ?> </h1><div class="colored-line-left"></div>
        <div class="clearfix"></div>
    </header>
<div class="entry-content content-page">
                <?php
                    the_content(get_post(95));
                ?>
</div>


<section class="row profiles">

                <?php
                foreach ( $team_posts as $post ):
                setup_postdata($post);

                // Resize and CDNize thumbnails using Automattic Photon service
                $thumb_src = null;
                if ( has_post_thumbnail($post->ID) ) {
                    $src = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'team-thumb' );
                    $thumb_src = $src[0];
                }
                ?>




                <article class="col-sm-9 profile">
                    <div class="profile-header">
                        <?php if ( $thumb_src ): ?>
                        <img src="<?php echo $thumb_src; ?>" alt="<?php the_title(); ?>, <?php the_field('team_position'); ?>" class="img-team">
                        <?php endif; ?>
                    </div>

                    <div class="profile-content">
                        <h3><?php the_title(); ?></h3>
                        <p class="lead position"><?php the_field('team_position'); ?></p>
                        <?php the_content(); ?>
                    </div>

                    <div class="profile-footer">
                        <a href="tel:<?php the_field('team_phone'); ?>"><i class="icon-mobile-phone"></i></a>
                        <a href="mailto:<?php echo antispambot( get_field('team_email') ); ?>"><i class="icon-envelope"></i></a>
                        <?php if ( $twitter = get_field('team_twitter') ): ?>
                        <a href="<?php echo $twitter; ?>"><i class="icon-twitter"></i></a>
                        <?php endif; ?>
                        <?php if ( $linkedin = get_field('team_linkedin') ): ?>
                        <a href="<?php echo $linkedin; ?>"><i class="icon-linkedin"></i></a>
                        <?php endif; ?>
                    </div>
                </article><!-- /.profile -->
                <?php endforeach; ?>
            </section><!-- /.row -->
            <?php endif; ?>

            </main><!-- #main -->
        </div><!-- #primary -->



    </div>
</div><!-- .content-wrap -->

<?php get_footer(); ?>
