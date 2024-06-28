import { navigateToForMainPage } from "../index.js";

export class FirstPage extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	template = () => {
		return `
			<link rel="stylesheet" href="./components/firstPage.css">
			
			<div id="firstPage">
				<p>First Page</p>
				<button id="loginButton">Login</button>
			</div>
			
			<div id="gameTag">
				<p>Game</p>
			</div>
			
			<div id="footer">
				<p>Footer</p>
			</div>
		`;
	}

	connectedCallback() {
		this.shadowRoot.innerHTML = this.template();

		this.shadowRoot.querySelector('#loginButton').addEventListener('click', () => {
			navigateToForMainPage("/dashboard-page");
		});
	}
}

// import {navigateToForMainPage} from "../index.js"

// export class FirstPage extends HTMLElement{
//     constructor(){
//         super();
//     }
		
//     connectedCallback(){
//         this.shadow = this.attachShadow({ mode: "open" });
//         this.div = document.createElement("div");
//         this.div.setAttribute("id","firstPage")

//         const css = document.createElement("link");
//         css.setAttribute("rel","stylesheet");
//         css.setAttribute("href","./components/firstPage.css");

//         this.textElement = document.createElement("p");
//         this.textElement.textContent = "First Page";
//         this.loginElement = document.createElement("button");
//         this.loginElement.textContent = "Login";
//         this.loginElement.addEventListener("click", () => {
//           navigateToForMainPage("/dashboard-page");
//         });

//         this.div.appendChild(css)
//         this.div.appendChild(this.textElement)
//         this.div.appendChild(this.loginElement)

//         this.shadow.appendChild(this.div)
//         let divGame = document.createElement("div")
//         divGame.setAttribute("id","gameTag");
//         this.gameElement = document.createElement("p");
//         this.gameElement.textContent = "Game";

//         divGame.appendChild(this.gameElement)

		
//         this.shadow.appendChild(divGame)

//         const divFooter = document.createElement("div")
//         divFooter.setAttribute("id","footer");
//         this.gameElement = document.createElement("p");
//         this.gameElement.textContent = "Footer"; 
//         divFooter.appendChild(this.gameElement)
//         this.shadow.appendChild(divFooter)
//     }
// }
