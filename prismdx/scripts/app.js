// PrismDx App JS

// Footer year
document.addEventListener('DOMContentLoaded', () => {
	const yearEl = document.getElementById('year');
	if (yearEl) yearEl.textContent = new Date().getFullYear();

	// Waitlist form
	const joinBtn = document.getElementById('joinBtn');
	const emailEl = document.getElementById('email');
	const msgEl = document.getElementById('waitlistMsg');
	if (joinBtn && emailEl && msgEl) {
		joinBtn.addEventListener('click', () => {
			const email = emailEl.value.trim();
			if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
				msgEl.textContent = 'Please enter a valid email address.';
				msgEl.style.color = '#ffaeae';
				return;
			}
			msgEl.textContent = 'Thanks! You\'re on the list. We\'ll reach out soon.';
			msgEl.style.color = '#a8f0c6';
			emailEl.value = '';
		});
	}

	// Chatbot widget
	const chatbot = document.getElementById('chatbot');
	const chatToggle = chatbot?.querySelector('.chat-toggle');
	const chatWindow = chatbot?.querySelector('.chat-window');
	const chatClose = chatbot?.querySelector('.chat-close');
	const chatMessages = document.getElementById('chatMessages');
	const chatInput = document.getElementById('chatInput');
	const sendMsg = document.getElementById('sendMsg');

	const sendBotMessage = (text) => {
		const el = document.createElement('div');
		el.className = 'msg bot';
		el.textContent = text;
		chatMessages.appendChild(el);
		chatMessages.scrollTop = chatMessages.scrollHeight;
	};

	const sendUserMessage = (text) => {
		const el = document.createElement('div');
		el.className = 'msg user';
		el.textContent = text;
		chatMessages.appendChild(el);
		chatMessages.scrollTop = chatMessages.scrollHeight;
	};

	const getBotReply = (text) => {
		const t = text.toLowerCase();
		if (/(price|cost|plan|pricing)/.test(t)) return 'We\'re in early access. Pricing will be announced at launch.';
		if (/(diet|meal|nutrition)/.test(t)) return 'We tailor meal plans to your preferences, culture, and metabolic goals.';
		if (/(diabetes|glucose|bp|blood pressure|hypertension)/.test(t)) return 'We help track key metrics and adapt plans using evidence-based protocols.';
		if (/(roadmap|future|coming)/.test(t)) return 'Next: heart and eye health, then home diagnostics for a 360° picture.';
		if (/(contact|support|email)/.test(t)) return 'Reach us at hello@prismdx.health';
		if (/(ai|how it works|engine)/.test(t)) return 'Our AI learns from your metrics and feedback to personalize recommendations.';
		return 'I\'m here to help with features, plans, and roadmap. Ask me anything!';
	};

	const handleSend = () => {
		const text = chatInput.value.trim();
		if (!text) return;
		sendUserMessage(text);
		chatInput.value = '';
		setTimeout(() => sendBotMessage(getBotReply(text)), 300);
	};

	if (chatToggle && chatWindow) {
		chatToggle.addEventListener('click', () => {
			chatWindow.classList.toggle('open');
			if (chatWindow.classList.contains('open') && chatMessages?.children.length === 0) {
				sendBotMessage('Hi! I\'m the PrismDx assistant. How can I help today?');
			}
		});
	}

	chatClose?.addEventListener('click', () => chatWindow?.classList.remove('open'));
	sendMsg?.addEventListener('click', handleSend);
	chatInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleSend(); });
});

