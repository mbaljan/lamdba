<!-- =========================
 SECTION: RIBBON   
============================== -->
<?php

	$ribbon_background = get_theme_mod('paralax_one_ribbon_background', parallax_get_file('/images/background-images/parallax-img/parallax-img1.jpg'));
	$parallax_one_ribbon_title = get_theme_mod('parallax_one_ribbon_title','Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
	$parallax_one_button_text = get_theme_mod('parallax_one_button_text','GET STARTED');
	$parallax_one_button_link = get_theme_mod('parallax_one_button_link','#');

	if(!empty($parallax_one_ribbon_title) || !empty($parallax_one_button_text)){
		
		if(!empty($ribbon_background)){
			echo '<section class="call-to-action ribbon-wrap" id="ribbon" >';
		} else {
			echo '<section class="call-to-action ribbon-wrap" id="ribbon" >';
		}
	
	
?>
		<div class="section-overlay-layer">
			<div class="container imageSpacer">
			
			</div>
		</div>
	</section>
	
<?php
	}
?>