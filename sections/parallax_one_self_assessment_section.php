<!-- =========================
 SECTION: SELF ASSESSMENT
============================== -->
<?php
	$parallax_one_self_assessment_title = get_theme_mod('parallax_one_self_assessment_title','Our Services');
	$parallax_one_self_assessment_subtitle = get_theme_mod('parallax_one_self_assessment_subtitle','Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
	$parallax_one_self_assessment = get_theme_mod('parallax_one_self_assessment_content',
		json_encode(
			array(
					array('choice'=>'parallax_icon','icon_value' => 'icon-basic-webpage-multiple','title' => esc_html__('Lorem Ipsum','parallax-one'),'text' => esc_html__('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.','parallax-one')),
					array('choice'=>'parallax_icon','icon_value' => 'icon-ecommerce-graph3','title' => esc_html__('Lorem Ipsum','parallax-one'),'text' => esc_html__('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.','parallax-one')),
					array('choice'=>'parallax_icon','icon_value' => 'icon-basic-geolocalize-05','title' => esc_html__('Lorem Ipsum','parallax-one'),'text' => esc_html__('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.','parallax-one'))
			)
		)
	);

	if(!empty($parallax_one_self_assessment_title) || !empty($parallax_one_self_assessment_subtitle) || !empty($parallax_one_self_assessment)){
?>
		<section class="services" id="services">
			<div class="section-overlay-layer">
				<div class="container">

					<!-- SECTION HEADER -->
					<div class="section-header">
						<?php


							if( !empty($parallax_one_self_assessment_title) ){
								echo '<h2 class="dark-text limit-size-heading">'.esc_attr($parallax_one_self_assessment_title).'</h2><div class="colored-line"></div>';
							} elseif ( isset( $wp_customize )   ) {
								echo '<h2 class="dark-text paralax_one_only_customizer"></h2><div class="colored-line paralax_one_only_customizer"></div>';
							}

						?>

						<?php


							if( !empty($parallax_one_self_assessment_subtitle) ){
								echo '<div class="sub-heading">'.esc_attr($parallax_one_self_assessment_subtitle).'</div>';
							} elseif ( isset( $wp_customize )   ) {
								echo '<div class="sub-heading paralax_one_only_customizer"></div>';
							}
						?>
					</div>


					<?php
						if( !empty($parallax_one_self_assessment) ){
							$parallax_one_self_assessment_decoded = json_decode($parallax_one_self_assessment);
							echo '<div id="our_services_wrap" class="services-wrap">';
								foreach($parallax_one_self_assessment_decoded as $parallax_one_self_assessment_box){
									if( (!empty($parallax_one_self_assessment_box->icon_value) && $parallax_one_self_assessment_box->icon_value!='No Icon' && $parallax_one_self_assessment_box->choice == 'parallax_icon')  || (!empty($parallax_one_self_assessment_box->image_url)  && $parallax_one_self_assessment_box->choice == 'parallax_image') || !empty($parallax_one_self_assessment_box->title) || !empty($parallax_one_service_box->text) ){
										echo '<div class="service-box"><div class="single-service border-bottom-hover">';

											if( !empty($parallax_one_self_assessment_box->choice) && $parallax_one_self_assessment_box->choice !== 'parallax_none'  ){
												if ( $parallax_one_self_assessment_box->choice == 'parallax_icon' ){
													if( !empty($parallax_one_self_assessment_box->icon_value) ) {
														echo '<div class="service-icon colored-text"><span class="'.esc_attr($parallax_one_self_assessment_box->icon_value).'"></span></div>';
													}
												}
												if( $parallax_one_self_assessment_box->choice == 'parallax_image' ){
													if( !empty($parallax_one_self_assessment_box->image_url)){
														echo '<img src="'.esc_url($parallax_one_self_assessment_box->image_url).'"/>';
													}
												}
											}

											if(!empty($parallax_one_self_assessment_box->title)){
												echo '<h3 class="colored-text">'.esc_attr($parallax_one_self_assessment_box->title).'</h3>';
											}

											if(!empty($parallax_one_self_assessment_box->text)){
												echo '<p>'. esc_attr($parallax_one_self_assessment_box->text).'</p>';
											}

											      if( !empty($parallax_one_self_assessment_box->link) ){

                                                        								echo '<a href="'.esc_url($parallax_one_self_assessment_box->link).'" class="btn btn-primary small-button">Start</a>';

                                                   									 }

										echo '</div></div>';
									}
								}
							echo '</div>';
						}
					?>
				</div>
			</div>
		</section>
<?php
	}
?>
