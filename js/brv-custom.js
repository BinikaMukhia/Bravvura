var sliderSpeed = 1000;
	var sliderEase = "easeInSine";
	var zoomLeft = "-7%";
	var zoomTop = "-7%";
	var zoomWidth = "114%";
	var zoomHeight = "114%";
	
	function brvSlider(){
		   
	 $(".brv-slide-one").css("z-index", 1).animate({
		  left:0,
		  top:0
		 }, sliderSpeed, sliderEase, function(){
			$(this).animate({
				"left": zoomLeft,
				"top": zoomTop,
			  	"width": zoomWidth,
			  	"height": zoomHeight
			}, sliderSpeed, function(){
			
				$(".brv-slide-two").css("z-index", 2).animate({
					top:0,
					right:0
				}, sliderSpeed, sliderEase, function(){					
					$(this).animate({
						"left": zoomLeft,
						"top": zoomTop,
						"width": zoomWidth,
						"height": zoomHeight
					}, sliderSpeed, function(){
						
					$(".brv-slide-three").css("z-index", 3).animate({
						left:0
						}, sliderSpeed, sliderEase, function(){							
							$(this).animate({
								"left": zoomLeft,
								"top": zoomTop,
								"width": zoomWidth,
								"height": zoomHeight
							}, sliderSpeed, function(){
								
								$(".brv-slide-four").css("z-index", 4).animate({
									left:0
									}, sliderSpeed, sliderEase, function(){
										$(this).animate({
											"left": zoomLeft,
											"top": zoomTop,
											"width": zoomWidth,
											"height": zoomHeight
										}, sliderSpeed, function(){
										
											$(".brv-slide-five").css("z-index", 5).animate({
												top:0
												}, sliderSpeed, sliderEase, function(){
													$(this).animate({
														"left": zoomLeft,
														"top": zoomTop,
														"width": zoomWidth,
														"height": zoomHeight
													}, sliderSpeed, function(){
														
														$(".brv-slide-six").css("z-index", 6).animate({
															top:0
															}, sliderSpeed, sliderEase, function(){
																$(this).animate({
																	"left": zoomLeft,
																	"top": zoomTop,
																	"width": zoomWidth,
																	"height": zoomHeight
																}, sliderSpeed, function(){
																	
																$(".brv-slide-seven").css("z-index", 7).animate({
																	top:0,
																	left:0
																	}, sliderSpeed, sliderEase, function(){
																		$(this).animate({
																			"left": zoomLeft,
																			"top": zoomTop,
																			"width": zoomWidth,
																			"height": zoomHeight
																		}, sliderSpeed, function(){
																			
																			$(".brv-slide-eight").css("z-index", 8).animate({
																				top:0,
																				left:0
																				}, sliderSpeed, sliderEase, function(){
																					$(this).animate({
																						"left": zoomLeft,
																						"top": zoomTop,
																						"width": zoomWidth,
																						"height": zoomHeight
																					}, sliderSpeed, function(){
																						
																						$(".brv-slide-nine").css("z-index", 9).animate({
																							left:0
																							}, sliderSpeed, sliderEase, function(){
																								$(this).animate({
																									"left": zoomLeft,
																									"top": zoomTop,
																									"width": zoomWidth,
																									"height": zoomHeight
																								}, sliderSpeed, function(){
																									
																									$(".brv-slide-ten").css("z-index", 10).animate({
																										left:0
																										}, sliderSpeed, sliderEase, function(){
																											$(this).animate({
																												"left": zoomLeft,
																												"top": zoomTop,
																												"width": zoomWidth,
																												"height": zoomHeight
																											}, sliderSpeed, function(){
																												
																												$(".brv-slide-one").removeAttr("style");
																													
																												$(".brv-slide-one").css("z-index", 11).animate({
																													left:0,
																													top:0
																													}, sliderSpeed, sliderEase, function(){
																														$(this).animate({
																															"left": zoomLeft,
																															"top": zoomTop,
																															"width": zoomWidth,
																															"height": zoomHeight
																														}, sliderSpeed, function(){
																															$(".brv-slide-two").removeAttr("style");
																															$(".brv-slide-three").removeAttr("style");
																															$(".brv-slide-four").removeAttr("style");
																															$(".brv-slide-five").removeAttr("style");
																															$(".brv-slide-six").removeAttr("style");
																															$(".brv-slide-seven").removeAttr("style");
																															$(".brv-slide-eight").removeAttr("style");
																															$(".brv-slide-nine").removeAttr("style");
																															$(".brv-slide-ten").removeAttr("style");
																															
																															brvSlider();
																															
																															})
																																
																														
																														})
																																																									
																													
																												
																												})
																											
																											})
																									})
																								
																								})
																						
																						})
																					
																					})
																			
																			})
																		
																		})																	
																})
															})
													})													
												})
											
											})
										})
								
								})
							
							})
					
					})
					
					})
			
			})

		})
	}
	
	$(document).ready(brvSlider);