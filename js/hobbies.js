		let hob = document.getElementById('hobbieschart').getContext('2d');
		// Global Options
		Chart.defaults.defaultFontFamily = 'Lato';
		Chart.defaults.defaultFontSize = 16;
		Chart.defaults.defaultFontColor = '#777';
		Chart.defaults.global.elements.line.tension = 0.1;

		let hobbiesChart = new Chart(hob, {
			type:'radar',
			data:{
				labels:['Coding', 'Biking', 'Working on my Car', 'Bouldering', 'Hiking', 'Web Design', 'Ultimate Frisbee'],
				datasets:[{
					label:"Weekdays",
					data:[100, 60, 30, 60, 25, 85, 80],
					backgroundColor:
					'rgba(75, 192, 192, 0.2)',
					borderWidth:1,
					borderColor:'#000000',
					hoverBorderWidth:1,
					hoverBorderColor:'#000000'
			},
			{
				label:"Weekends",
					data:[80, 85, 80, 20, 80, 55, 100],
					backgroundColor:
					'rgba(255, 99, 132, 0.2)',
					borderWidth:1,
					borderColor:'#000000',
					hoverBorderWidth:1,
					hoverBorderColor:'#000000'				
			}
			]
		},
			options:{
				responsive:true,
				scale: {
					fontSize:40,
					ticks: {
						beginAtZero: true
					},
					pointLabels: {
						fontSize:14
					},
				},
				title:{
					display:false,
					text:'Hobbies',
					fontSize:22
				},
				legend:{
					display:true,
					fullWidth:false,
					position:'top',
				},
				layout:{
					padding: {
						top:0,
						bottom:100,
						left:10,
						right:10
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