import * as bootstrap from 'bootstrap';
const { Modal, Collapse } = bootstrap;
Modal.Default.focus = false;
Modal.Default.keyboard = false;

export default defineNuxtPlugin(_nuxtApp => {
	return {
		provide: {
			bootstrap: {
				modal: (element: string | Element) => new Modal(element),
				collapse: (element: string | Element) => new Collapse(element)
			}
		}
	};
});
