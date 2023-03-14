
import { ChatGPTAPI } from 'chatgpt';

const chatgptAPI = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY
});

export {chatgptAPI};