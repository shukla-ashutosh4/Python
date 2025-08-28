// Groq API Configuration
// Copy this file and rename it to 'config.js' in your project root
// Get your API key from: https://console.groq.com/

const GROQ_API_CONFIG = {
    // Replace with your actual Groq API key
    apiKey: 'YOUR_GROQ_API_KEY_HERE',
    
    // Model options:
    // - 'llama3-8b-8192': Fast, good for general conversations
    // - 'llama3-70b-8192': More accurate, slower
    // - 'mixtral-8x7b-32768': Good balance of speed and quality
    model: 'llama3-8b-8192',
    
    // API endpoint (don't change unless using a different provider)
    baseURL: 'https://api.groq.com/openai/v1/chat/completions',
    
    // Response settings
    maxTokens: 500,        // Maximum response length
    temperature: 0.7,      // Response creativity (0.0 - 2.0)
    
    // Optional: Enable streaming responses (not implemented yet)
    stream: false
};

// Export configuration (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GROQ_API_CONFIG;
}