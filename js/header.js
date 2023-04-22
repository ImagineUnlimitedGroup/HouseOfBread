const burger = document.querySelector(".menu-burger");
const app = document.querySelector(".app")
const menu = document.querySelector(".menu__list")
const contacts = document.querySelector(".contacts__list")
const bigContact = document.querySelector(".big-contacts__list")
const logo = document.querySelector(".logo")
const container = document.querySelector(".header__container") 
const main = document.querySelector(".main")
const body = document.querySelector("body")
const header = document.querySelector(".header")
const pages = document.querySelectorAll(".menu__link")

const screenSizeCheck = () => {
	let screenWidth = document.documentElement.clientWidth
	if (screenWidth < 767) {
		burger.onclick = function(){
			HeaderToggleClasses()
		}
		
		
		document.addEventListener( 'click', (e) => {
			const withinBoundaries = e.composedPath().includes(header);
		
			if ( ! withinBoundaries ) {
				HeaderToggleClasses()
			}
		})
	
		pages.forEach(page => (
			page.onclick = function(){
				HeaderToggleClasses()
			}
		)) 
	
	
		const HeaderToggleClasses = () => {
			// ab = active burger
				body.classList.toggle("lock");
				burger.classList.toggle("ab");
				header.classList.toggle("ab");
				app.classList.toggle("ab");
				bigContact.classList.toggle("ab");
				logo.classList.toggle("ab");
				menu.classList.toggle("ab");
				container.classList.toggle("ab");
				contacts.classList.toggle("ab");
		}
	}
}
screenSizeCheck()