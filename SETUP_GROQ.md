# 🤖 Setting Up Groq AI Chatbot

This guide will help you enable the AI-powered chatbot using Groq's API.

## Step 1: Get Your Groq API Key

1. Go to [https://console.groq.com/](https://console.groq.com/)
2. Sign up for a free account
3. Navigate to "API Keys" in the dashboard
4. Click "Create API Key"
5. Copy your API key (starts with `gsk_...`)

## Step 2: Configure the Chatbot

### Option A: Using Config File (Recommended)

1. Open `config.js` file
2. Replace `YOUR_GROQ_API_KEY_HERE` with your actual API key:
   ```javascript
   const GROQ_API_CONFIG = {
       apiKey: 'gsk_your_actual_key_here',
       model: 'llama3-8b-8192',
       // ... other settings
   };
   ```
3. Save the file

### Option B: Direct Edit

1. Open `script.js`
2. Find the `GROQ_CONFIG` object (around line 208)
3. Replace `YOUR_GROQ_API_KEY` with your actual key:
   ```javascript
   let GROQ_CONFIG = {
       apiKey: 'gsk_your_actual_key_here',
       // ... other settings
   };
   ```

## Step 3: Test the Chatbot

1. Open `index.html` in your browser
2. Click the chat bubble in the bottom right corner
3. Look for the status indicator:
   - 🟢 Green = AI is working properly
   - 🟡 Yellow = Using fallback responses (API key issue)
   - 🔴 Red = Error occurred

## Step 4: Customize (Optional)

### Available Models
- `llama3-8b-8192` - Fast and efficient (default)
- `llama3-70b-8192` - More intelligent, slower
- `mixtral-8x7b-32768` - Good balance

### Settings You Can Adjust
```javascript
{
    model: 'llama3-8b-8192',    // Choose AI model
    maxTokens: 500,             // Response length limit
    temperature: 0.7,           // Creativity (0.0-2.0)
}
```

## Troubleshooting

### Chatbot Shows Yellow/Red Status
- ❌ API key not set correctly
- ❌ API key has no credits
- ❌ Network connectivity issues
- ❌ Groq service is down

### Common Issues
1. **"API key not configured"** - Replace YOUR_GROQ_API_KEY with actual key
2. **401 Unauthorized** - Check if your API key is correct
3. **429 Rate Limited** - You've hit the rate limit, wait a moment
4. **Network errors** - Check internet connection

### Fallback Mode
If the AI is unavailable, the chatbot automatically switches to predefined responses while maintaining the conversation experience.

## Security Notes

⚠️ **Important**: Never commit your API key to public repositories!

- Use environment variables for production
- Add `config.js` to `.gitignore`
- Consider using a backend proxy for API calls

## Need Help?

1. Check the browser console for error messages
2. Verify your API key at [console.groq.com](https://console.groq.com/)
3. Ensure you have credits remaining
4. Try a different model if one isn't working

---

**Free Tier Limits**: Groq's free tier is generous but has limits. Monitor your usage in the Groq console.