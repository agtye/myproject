console.log("hello world");
const MbtiModule = (function() {
	let types = {
		ISTJ: {title: "นักคำนวณ", percentage: "13.7%", description: "ซื่อสัตย์ ปฏิบัติได้ มีเหตุผล มีระเบียบแบบแผน", site: "https://www.16personalities.com/th/istj-บุคคลิกภาพ"},
		ISFJ: {title: "ผู้ตั้งรับ", percentage: "12.7%", description: "ซื่อสัตย์ ปฏิบัติ เกื้อกูล พิถีพิถัน", site: "https://www.16personalities.com/th/isfj-บคคลิกภาพ"},
		INFJ: {title: "ผู้แนะนำ ", percentage: "1.7%", description: "อุทิศตน สร้างสรรค์ เพ้อฝัน มีความเห็นอกเห็นใจ", site: "https://www.16personalities.com/th/infj-บุคคลิกภาพ"},
		INTJ: {title: "นักออกแบบ", percentage: "1.4%", description: "อิสระ สร้างสรรค์ วิเคราะห์ มีจุดมุ่งหมาย", site: "https://www.16personalities.com/th/intj-บุคคลิกภาพ"},
		ISTP: {title: "ผู้เชี่ยวชาญด้านศิลปะ", percentage: "6.4%", description: "สะดวก ปฏิบัติ วัตถุประสงค์ ปรับใช้ได้", site: "https://www.16personalities.com/th/istp-บุคคลิกภาพ"},
		ISFP: {title: "นักผจญภัย", percentage: "6.1%", description: "อดทน มีเหตุผล กลมกลืน ปรับเปลี่ยนได้", site: "https://www.16personalities.com/th/isfp-บุคคลิกภาพ"},
		INFP: {title: "ผู้ไกล่เกลี่ย", percentage: "3.2%", description: "เฉียบแหลม สร้างสรรค์ เพ้อฝัน ปรับเปลี่ยนได้", site: "https://www.16personalities.com/th/infp-บุคคลิกภาพ"},
		INTP: {title: "นักตรรกะ", percentage: "2.4%", description: "การตั้งคำถาม นวัตกรรม วัตถุประสงค์ นามธรรม", site: "https://www.16personalities.com/th/intp-บุคคลิกภาพ"},
		ESTP: {title: "ผู้ประกอบการ", percentage: "5.8%", description: "กระฉับกระเฉง, ใช้งานได้จริง, ใช้งานได้จริง, เป็นธรรมชาติ", site: "https://www.16personalities.com/th/estp-บุคคลิกภาพ"},
		ESFP: {title: "ผู้มอบความบันเทิง", percentage: "8.7%", description: "เป็นธรรมชาติ, ใช้งานได้จริง, เป็นมิตร, กลมเกลียว", site: "https://www.16personalities.com/th/esfp-บุคคลิกภาพ"},
		ENFP: {title: "นักรณรงค์", percentage: "6.3%", description: "มองโลกในแง่ดี สร้างสรรค์ มีความเห็นอกเห็นใจ เก่งกาจ", site: "https://www.16personalities.com/th/enfp-บุคคลิกภาพ"},
		ENTP: {title: "นักโต้วาที", percentage: "2.8%", description: "กล้าเสี่ยง สร้างสรรค์ ทันสมัย ​​ปรับตัวได้", site: "https://www.16personalities.com/th/entp-บุคคลืกภาพ"},
		ESTJ: {title: "ผู้บริหาร", percentage: "10.4%", description: "จัดระเบียบ ปฏิบัติ ตรรกะ ขาออก", site: "https://www.16personalities.com/th/estj-บุคคลิกภาพ"},
		ESFJ: {title: "ผู้ให้คำปรึกษา", percentage: "12.6%", description: "เป็นมิตร ใช้งานได้จริง ซื่อสัตย์ มีระเบียบ", site: "https://www.16personalities.com/th/esfj-บุคคลิกภาพ"},
		ENFJ: {title: "ตัวเอก", percentage: "2.8%", description: "เป็นมิตร สร้างสรรค์ เกื้อกูล เพ้อฝัน", site: "https://www.16personalities.com/th/enfj-บคคลิกภาพ"},
		ENTJ: {title: "ผู้บัญชาการ", percentage: "2.9%", description: "มุ่งมั่น สร้างสรรค์ มีกลยุทธ์ กล้าแสดงออก", site: "https://www.16personalities.com/th/entj-บุคคลิกภาพ"}
	};
	let e, i, s, n, t, f, j, p;
	let type;
	
	function resetScores() {
		e = i = s = n = t = f = j = p = 0;
		type = "";
	}
	
	function getScores() {
		const inputs = document.getElementsByTagName("input");
		Array.prototype.forEach.call(inputs, function(input) {
			if (input.checked) {
				switch(input.value) {
					case 'e': e++; break;
					case 'i': i++; break;
					case 's': s++; break;
					case 'n': n++; break;
					case 't': t++; break;
					case 'f': f++; break;
					case 'j': j++; break;
					case 'p': p++; break;
				}
			}
		});
	}
	
	function calculatePercentages() {
		e = Math.floor(e / 3.333 * 100);
		i = Math.floor(i / 3.333 * 100);
		s = Math.floor(s / 3.333 * 100);
		n = Math.floor(n / 3.333 * 100);
		t = Math.floor(t / 3.333 * 100);
		f = Math.floor(f / 3.333 * 100);
		j = Math.floor(j / 3.333 * 100);
		p = Math.floor(p / 3.333 * 100);
	}
	
	function createCharts() {
		document.querySelector("#eScore").innerHTML = e;
		document.querySelector("#iScore").innerHTML = i;
		document.querySelector("#sScore").innerHTML = s;
		document.querySelector("#nScore").innerHTML = n;
		document.querySelector("#tScore").innerHTML = t;
		document.querySelector("#fScore").innerHTML = f;
		document.querySelector("#jScore").innerHTML = j;
		document.querySelector("#pScore").innerHTML = p;
		
		document.querySelector("#eiChart").style.marginLeft = i / 2 + "%";
		document.querySelector("#snChart").style.marginLeft = n / 2 + "%";
		document.querySelector("#tfChart").style.marginLeft = f / 2 + "%";
		document.querySelector("#jpChart").style.marginLeft = p / 2 + "%";
	}
	
	function showResults() {
		type += (e >= i) ? "E" : "I";
		type += (s >= n) ? "S" : "N";
		type += (t >= f) ? "T" : "F";
		type += (j >= p) ? "J" : "P";
		document.querySelector("#type").innerHTML = type;
		document.querySelector("#type-title").innerHTML = types[type].title;
		document.querySelector("#type-percentage").innerHTML = types[type].percentage;
		document.querySelector("#type-description").innerHTML = types[type].description;
		document.querySelector("#type-site").href = types[type].site;
		
		document.querySelector("#type-details").classList.remove("hidden");
		document.querySelector("#scroll-down").classList.remove("hidden");
		document.querySelector("#results").classList.remove("hidden");
	}
	
	return {
		processForm: function() {
			resetScores();
			getScores();
			calculatePercentages();
			createCharts();
			showResults();
		}
	};
})();

document.querySelector("#submit").addEventListener("click", function() { MbtiModule.processForm(); });