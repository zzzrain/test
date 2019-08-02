// 根据天数计算日期
function date(t) {
	let date = new Date(Date.now()+t*24*3600*1000).toLocaleDateString();
	return date;
}


// 做一个倒计时
function djs(t) {
	let endDate = new Date(t).getTime();
	let timer = function () {
		let nowDate = new Date().getTime();
		let setDate = endDate - nowDate;
		let d = parseInt(setDate/1000/60/60/24);
		let h = parseInt(setDate/1000/60/60%24);
		let m = parseInt(setDate/1000/60%60);
		let s = parseInt(setDate/1000%60);
		console.log(d + '天' + h + '时' + m + '分' + s + '秒');
	};
	timer();
	setInterval(timer,1000);
}
djs('2019-4-2')