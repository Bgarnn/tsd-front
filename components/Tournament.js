export class Tournament extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}

	template = () => {
		return `
			<link rel="stylesheet" href="./components/tournament.css">
			<div><tournament-upcoming></tournament-upcoming></div>
		`;
	};

	connectedCallback() {
		this.shadowRoot.innerHTML = this.template();
	}
}
