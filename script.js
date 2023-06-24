//your JS code here. If required.
function updateTime() {
	const now = new Date();
	const sec = now.getSeconds();
	const min = now.getMinutes();
	const hr = now.getHours();
    const dt = now.getDate();
	const mo = now.getMonth();
	const yr = now.getFullYear();

	document.getElementById("timer").innerText=`${dt}/${mo}/${yr}, ${hr}:${min}:${sec}`;
}

setInterval(updateTime, 500);