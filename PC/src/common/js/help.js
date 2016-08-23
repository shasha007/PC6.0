	var teacher=document.getElementById("L-teacher");
	var student=document.getElementById("L-student");
	var fahuo=document.getElementById("L-fahuo");
	var teacherid=document.getElementById("L-teacherid");
	var studentid=document.getElementById("L-studentid");
	var fahuoid=document.getElementById("L-fahuoid");
	teacher.addEventListener("click",toTeacher);
	student.addEventListener("click",toStudent);
	fahuo.addEventListener("click",toFahuo);
	//初期化
	document.getElementById("L-teacherhelp").style.display="block";
	document.getElementById("L-studenthelp").style.display="none";
	document.getElementById("L-fahelp").style.display="none";
	function toTeacher(){
		document.getElementById("L-teacherhelp").style.display="block";
		document.getElementById("L-studenthelp").style.display="none";
		document.getElementById("L-fahelp").style.display="none";
		teacherid.style.color="#E63F00";
		studentid.style.color="#000000";
		fahuoid.style.color="#000000";
	}
	function toStudent(){
		document.getElementById("L-teacherhelp").style.display="none";
		document.getElementById("L-studenthelp").style.display="block";
		document.getElementById("L-fahelp").style.display="none";
		teacherid.style.color="#000000";
		studentid.style.color="#E63F00";
		fahuoid.style.color="#000000";
	}
	function toFahuo(){
		document.getElementById("L-teacherhelp").style.display="none";
		document.getElementById("L-studenthelp").style.display="none";
		document.getElementById("L-fahelp").style.display="block";
		teacherid.style.color="#000000";
		studentid.style.color="#000000";
		fahuoid.style.color="#E63F00";
	}