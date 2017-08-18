let gr = document.getElementById('grades').getContext('2d');
		// Global Options
		Chart.defaults.defaultFontFamily = 'Lato';
		Chart.defaults.defaultFontSize = 16;
		Chart.defaults.defaultFontColor = '#777'
		Chart.defaults.global.elements.line.tension = 0.1;

		let gradesChart = new Chart(gr, {
			type:'bar',
			data:{
				labels:['1A', '1B', '2A', '2B', '3A'],
				datasets:[{
					label:'Term Average',
					data:[80.27, 84.18, 85.17, 81.00, 87.80],
					backgroundColor:['rgba(255, 99, 132, 0.6)',
					'rgba(54, 162, 235, 0.6)',
					'rgba(255, 206, 86, 0.6)',
					'rgba(75, 192, 192, 0.6)',
					'rgba(153, 102, 255, 0.6)'],
					borderWidth:1,
					borderColor:'#777',
					hoverBorderWidth:3,
					hoverBorderColor:'#000'
			}]
		},
			options:{
				scales:{
					yAxes:           
					[{ 	display: true,
						ticks: {
							min: 60,
							max: 100 
						}
					}]
				},
				title:{
					display:true,
					text:'University Term Averages',
					fontSize:22
				},
				legend:{
					display:false
				},
				layout:{
					padding: {
						top:5,
						bottom:5,
						left:20,
						right:20
					}
				},
				tooltips:{
					enabled:true
				},
				animation:{
					duration:1500,
					easing:'easeInQuad'
				}
			}
			});