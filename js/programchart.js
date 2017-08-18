		let ctx = document.getElementById('languages').getContext('2d');
		// Global Options
		Chart.defaults.defaultFontFamily = 'Lato';
		Chart.defaults.defaultFontSize = 16;
		Chart.defaults.defaultFontColor = '#777';
		Chart.defaults.global.elements.line.tension = 0.1;

		let languageChart = new Chart(ctx, {
			type:'doughnut',
			data:{
				labels:['Python', 'SQL', 'CSS3', 'JavaScript', 'C++', 'MatLab', 'HTML5', 'VBA', 'C#'],
				datasets:[{
					data:[91, 32, 88, 80, 57, 47, 90, 53, 21],
					backgroundColor:
					['rgba(255, 99, 132, 0.6)',
					'rgba(216, 216, 216, 0.6)',
					'rgba(255, 206, 86, 0.6)',
					'rgba(75, 192, 192, 0.6)',
					'rgba(153, 102, 255, 0.6)',
					'rgba(253, 181, 98, 0.6)',
					'rgba(54, 162, 235, 0.6)',
					'rgba(83, 253, 213, 0.6)',
					'rgba(251, 131, 229, 0.6)',
					'rgba(87, 161, 52, 0.6)'],
					borderWidth:3,
					borderColor:'#ffffff',
					hoverBorderWidth:3,
					hoverBorderColor:'#777'
			}]
		},
			options:{
				responsive:true,
				title:{
					display:true,
					text:'Programming Language Proficiency',
					fontSize:22
				},
				legend:{
					display:true,
					fullWidth:false,
					position:'left',
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