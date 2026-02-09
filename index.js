const express = require('express');
const app = express();
const path = require('path');

// Middleware to parse JSON
app.use(express.json());

// Main AI Logic
app.post('/api/process', async (req, res) => {
  const { toolId, prompt } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ data: "Error: OpenAI API Key missing!" });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { 
            role: "system", 
            content: `You are ToolScout AI, an expert in ${toolId}. Provide helpful, viral, and high-quality responses.` 
          }, 
          { 
            role: "user", 
            content: prompt || "Hello" 
          }
        ],
        max_tokens: 500
      })
    });

    const data = await response.json();
    if (data.choices && data.choices[0]) {
      res.json({ data: data.choices[0].message.content });
    } else {
      res.json({ data: "AI is busy, try again!" });
    }
  } catch (error) {
    res.status(500).json({ data: "Connection error with AI." });
  }
});

// Serve Frontend Files
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ToolScout Backend running on port ${PORT}`);
});
          
