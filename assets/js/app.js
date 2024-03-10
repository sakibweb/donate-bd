document.addEventListener("DOMContentLoaded", function() {
	var input = document.getElementById("amount");
	input.addEventListener("input", function() {
		this.value = this.value.replace(/\D/g, '');
		var numValue = parseInt(this.value, 10);
		if (isNaN(numValue) || numValue < 1) {
			this.value = "1";
		} else if (numValue > 25000) {
			this.value = "25000";
		}
		this.style.width = ((this.value.length + 1) * 0.75) + "rem";
	});
});

function increaseValue() {
	var value = parseInt(document.getElementById('amount').value, 10);
	value = isNaN(value) ? 1 : value;
	value++;
	value = Math.min(value, 25000);
	document.getElementById('amount').value = value;
	updateInputWidth();
}

function decreaseValue() {
	var value = parseInt(document.getElementById('amount').value, 10);
	value = isNaN(value) ? 1 : value;
	value = Math.max(value - 1, 1);
	document.getElementById('amount').value = value;
	updateInputWidth();
}

function updateInputWidth() {
	var input = document.getElementById("amount");
	input.style.width = ((input.value.length + 1) * 0.75) + "rem";
}



const motivation = [
    "A support from you can motivate me more.",
    "Your donation can illuminate someone's darkest days.",
    "Supporting one another is the bridge between despair and hope.",
    "Your contribution is the seed for tomorrow's bloom.",
    "Every donation is a step towards a brighter future.",
    "Your support today is a promise for a better tomorrow.",
    "A single act of kindness can be the foundation of change.",
    "Be the reason someone believes in the goodness of people.",
    "Your sponsorship can turn dreams into reality.",
    "Empower dreams, support aspirations, and inspire changes.",
    "Together, we can craft a world full of hope and opportunities.",
    "Your generosity is the light that guides us forward.",
    "Be the change you wish to see in the world, donate today.",
    "Supporting others is the currency of compassion.",
    "Leave a lasting legacy with your act of kindness.",
    "A helping hand today brings a hopeful tomorrow.",
    "Your sponsorship is the cornerstone of progress.",
    "Transform a life, inspire a heart, support a dream.",
    "Let your donation be the wings for someone's aspirations.",
    "Every bit of support adds up to monumental change.",
    "Join us in the movement of kindness and generosity.",
    "Your gift today can open the door to a new life for someone.",
    "Be a beacon of hope in someone's journey.",
    "Your partnership illuminates the path of innovation and change.",
    "Dare to make a difference—support our cause.",
    "Elevate spirits, foster dreams, and fuel change with your support.",
    "Your contribution today is the hero of tomorrow's story.",
    "Together, we're unstoppable in making a difference.",
    "You have the power to rewrite someone's story with hope.",
    "Let your legacy be one of compassion and support.",
    "The strength of our community is amplified by your support.",
    "Change lives, one donation at a time.",
    "Your generosity plants the seeds for a brighter future.",
    "Every act of support creates a ripple of positive change.",
    "Be the pillar on which hopeful futures are built.",
    "Your support casts a lifeline to those in need.",
    "Bridge the gap between dreams and reality with your donation.",
    "Your kindness is a catalyst for transformation.",
    "Empower, uplift, and inspire with your act of giving.",
    "Lead the way in kindness, and watch the world change before your eyes.",
    "Your donation is a testament to your compassion and humanity.",
    "Supporting others is a reflection of your empathy and love.",
    "Your sponsorship is a beacon of hope in a world that needs it.",
    "Every act of kindness, no matter how small, makes a difference.",
    "Your generosity has the power to change someone's life for the better.",
    "Your support is a vote for a better tomorrow.",
    "A little help can go a long way in someone's journey.",
    "Your donation is a reminder that we are all in this together.",
    "Supporting others is an act of love and solidarity.",
    "Your sponsorship is the key to unlocking potential.",
    "Your contribution is a beacon of light in times of darkness.",
    "Be the reason someone smiles today by showing your support.",
    "Your donation is a step towards a more equitable world.",
    "Your support is the fuel that drives positive change.",
    "A little kindness can create a ripple effect of positivity.",
    "Your sponsorship is a vote for a better, brighter future.",
    "Every act of giving is a testament to your compassion and humanity.",
    "Your support is a reminder that we can achieve great things together.",
    "Your donation is a beacon of hope for those in need.",
    "Your sponsorship is a catalyst for progress and innovation.",
    "Your generosity is a shining example of humanity at its best.",
    "Supporting others is a way to make the world a better place.",
    "Your donation is a vote for a more compassionate society.",
    "Your support is a reminder that we are stronger together.",
    "Your sponsorship is a testament to your belief in a better world.",
    "Your contribution is a beacon of hope for a brighter tomorrow.",
    "Your generosity is a powerful force for good in the world.",
    "Supporting others is a way to create a ripple effect of kindness.",
    "Your donation is a vote for a world where everyone can thrive.",
    "Your sponsorship is a beacon of hope for those facing challenges.",
    "Your generosity is a shining example of the power of community.",
    "Supporting others is a way to create a more inclusive world.",
    "Your donation is a testament to your belief in a better future.",
    "Your support is a reminder that we can make a difference together.",
    "Your sponsorship is a catalyst for positive change and growth.",
    "Your generosity is a beacon of hope for those in need.",
    "Supporting others is a way to create a world where everyone matters.",
    "Your donation is a vote for a more compassionate and understanding world.",
    "Your sponsorship is a testament to your commitment to making a difference.",
    "Your contribution is a beacon of hope for a brighter, more equitable future.",
    "Your generosity is a powerful force for good in the world.",
    "Supporting others is a way to create a ripple effect of positivity and change.",
    "Your donation is a vote for a world where everyone has the opportunity to succeed.",
    "Your sponsorship is a beacon of hope for those striving to achieve their dreams.",
    "Your generosity is a shining example of the power of human connection.",
    "Supporting others is a way to create a more empathetic and understanding world.",
    "Your support is a reminder that we can create a better world together.",
    "Your sponsorship is a catalyst for positive change and progress.",
    "Your generosity is a beacon of hope for those facing challenges and adversity.",
    "Supporting others is a way to create a world where everyone feels valued and supported.",
    "Your donation is a vote for a more compassionate, inclusive, and understanding world.",
    "Your donation is a vote for a world where everyone can live with dignity and respect.",
    "Your sponsorship is a beacon of hope for those pursuing their passions and dreams.",
    "Your generosity is a shining example of the power of human connection and empathy.",
    "Supporting others is a way to create a more just and equitable world for all.",
    "Your sponsorship is a beacon of hope for those working towards a better future.",
    "Your generosity is a shining example of the power of human connection and empathy.",
    "Your support is a reminder that we can make a positive impact on the lives of others.",
    "Your donation is a vote for a more equitable, just, and compassionate world.",
    "Your contribution is a beacon of hope for a world where everyone can live in harmony and peace.",
    "Make a difference in someone's life with your support.",
    "Your generosity paves the way for a brighter tomorrow.",
    "Supporting a cause is the greatest investment in humanity.",
    "Be the hand that lifts someone up in times of need.",
    "Your donation can be the key that unlocks someone's potential.",
    "Together, we can create a ripple effect of kindness and compassion.",
    "Supporting others is an act of empathy and solidarity.",
    "Your support today can change someone's tomorrow.",
    "Small acts of kindness can create waves of change.",
    "Your donation is a vote for a better world.",
    "Be a ray of hope in someone's darkest hour.",
    "Every donation is a vote for a brighter future.",
    "Your generosity knows no bounds.",
    "Supporting others is a reflection of your character and values.",
    "Together, we can build a world where everyone thrives.",
    "Your support is a lifeline for those in need.",
    "The impact of your donation goes far beyond its monetary value.",
    "Be the change you wish to see in the world by supporting a cause.",
    "Your kindness has the power to change lives.",
    "Supporting others is an investment in the future of humanity.",
    "Your support creates a ripple effect of positivity.",
    "Be the reason someone smiles today—support a cause.",
    "Your generosity is a beacon of hope in a world of uncertainty.",
    "Supporting others is an act of compassion and solidarity.",
    "Together, we can make the world a better place for all.",
    "Your support makes dreams possible.",
    "Be the light in someone's darkness—support a cause.",
    "Your donation is an investment in a brighter future.",
    "Supporting others is an expression of your values and beliefs.",
    "Together, we can achieve more than we ever could alone.",
    "Your support is a lifeline for those facing adversity.",
    "Be a catalyst for change—support a cause you believe in.",
    "Your generosity inspires others to give.",
    "Supporting others is a powerful expression of empathy and compassion.",
    "Together, we can create a world where everyone has the opportunity to thrive.",
    "Your support is a gift that keeps on giving.",
    "Be the change you wish to see in the world—support a cause that matters to you.",
    "Your donation has the power to transform lives.",
    "Supporting others is an act of kindness that has a lasting impact.",
    "Together, we can create a more compassionate and just world.",
    "Your support is a lifeline for those in need of hope.",
    "Be a force for good in the world—support a cause you believe in.",
    "Your generosity has the power to change the world.",
    "Supporting others is an investment in the future of our society.",
    "Together, we can make a positive difference in the lives of others.",
    "Your support is a testament to your commitment to making the world a better place.",
    "Be the change you wish to see in the world—support a cause that aligns with your values.",
    "Your donation is a symbol of hope and solidarity.",
    "Supporting others is an act of compassion that transcends boundaries.",
    "Together, we can build a world where everyone has the opportunity to thrive and succeed.",
    "Your support is a beacon of light in a world that sometimes feels dark.",
    "Be the reason someone believes in the power of kindness and generosity.",
    "Your generosity is a source of inspiration for others.",
    "Supporting others is a tangible way to make a positive impact in the world.",
    "Together, we can create a world where everyone is valued and respected.",
    "Your support is a testament to your belief in the inherent goodness of humanity.",
    "Be the change you wish to see in the world—support a cause that speaks to your heart.",
    "Your donation is a powerful tool for social change.",
    "Supporting others is an act of solidarity that brings us closer together as a global community.",
    "Together, we can create a world where compassion and empathy are the guiding principles.",
    "Your support is a lifeline for those who are struggling to make ends meet.",
    "Be a champion for change—support a cause that you are passionate about.",
    "Your generosity has the power to transform lives and communities.",
    "Supporting others is an investment in a brighter future for all."
];

function getRandomMotivation() {
    return motivation[Math.floor(Math.random() * motivation.length)];
}

function displayRandomMotivation() {
    const randomMotivation = getRandomMotivation();
    const motivElement = document.getElementById('motiv');
    motivElement.innerText = randomMotivation;
    motivElement.classList.remove('animating');
    void motivElement.offsetWidth;
    motivElement.classList.add('animating');
}


displayRandomMotivation();

setInterval(displayRandomMotivation, Math.floor(Math.random() * (12000 - 7000 + 1)) + 7000);




fetch('https://github.com/sakibweb', {
  method: 'GET',
  redirect: "follow",
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36',
    'Content-Type': 'text/html',
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br'
  }
}).then(response => response.text())
    .then(data => {
        let parser = new DOMParser();
        let htmlDocument = parser.parseFromString(data, "text/html");
        let mainElement = htmlDocument.querySelector('main');

        if(mainElement) {
            //console.log(mainElement.innerHTML);
			let imageElement = mainElement.querySelector('.avatar.avatar-user.width-full.border.color-bg-default');
			let nameElement = mainElement.querySelector('.p-name.vcard-fullname.d-block.overflow-hidden[itemprop="name"]');
			let additionalNameElement = mainElement.querySelector('.p-nickname.vcard-username.d-block[itemprop="additionalName"]');
			let bioElement = mainElement.querySelector('.p-note.user-profile-bio.mb-3.js-user-profile-bio.f4');
			if(imageElement) {
			  console.log(imageElement.getAttribute('src'));
			} else {
			  console.log('No image tag found with the indicated class.');
			}
			if(nameElement) {
			  console.log(nameElement.innerText);
			} else {
			  console.log('No name tag found with the indicated class and itemprop.');
			}
			if(additionalNameElement) {
			  console.log(additionalNameElement.innerText);
			} else {
			  console.log('No additionalName tag found with the indicated class and itemprop.');
			}
			if(bioElement) {
			  console.log(bioElement.innerText);
			} else {
			  console.log('No bio tag found with the indicated class.');
			}
        } else {
            console.log("No <main> tag found.");
        }
    })
    .catch(console.error);