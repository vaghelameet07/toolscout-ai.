const fetch = require('node-fetch');

export default async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ data: "Method Not Allowed" });
  }

  const { toolId, prompt } = req.body;
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ data: "Error: OpenAI API Key missing on server!" });
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
            content: `You are ToolScout AI, an expert in ${toolId}. Give viral, high-quality, and helpful advice to content creators.` 
          }, 
          { 
            role: "user", 
            content: prompt 
          }
        ],
        max_tokens: 500
      })
    });

    const data = await response.json();
    
    if (data.choices && data.choices[0]) {
      res.status(200).json({ data: data.choices[0].message.content });
    } else {
      res.status(500).json({ data: "AI connection failed. Check API credits." });
    }
  } catch (error) {
    res.status(500).json({ data: "Server error: " + error.message });
  }
};
  
