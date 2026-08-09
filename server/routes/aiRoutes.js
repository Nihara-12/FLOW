const express = require("express");
const OpenAI = require("openai");

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/analyze", async (req, res) => {
  try {
    const { description, category, location } = req.body;

    if (!description) {
      return res.status(400).json({
        success: false,
        message: "Description is required.",
      });
    }

    const prompt = `
You are FLOW, an AI civic issue triage system.

Analyze this citizen report and return ONLY valid JSON.

Citizen report:
${description}

Citizen selected category:
${category || "Not specified"}

Location:
${location || "Not specified"}

Return exactly this structure:

{
  "category": "Roads | Drainage | Lighting | Waste | Water | Safety | Environment | Other",
  "severity": 1,
  "confidence": 0,
  "summary": "short explanation",
  "hazards": ["hazard 1", "hazard 2"],
  "recommendedAction": "short recommended action"
}

Severity:
1-3 = Low
4-6 = Medium
7-8 = High
9-10 = Critical

Be practical and conservative. Do not invent facts that are not in the report.
`;

    const response = await client.responses.create({
      model: "gpt-5",
      input: prompt,
    });

    const text = response.output_text.trim();

    let analysis;

    try {
      analysis = JSON.parse(text);
    } catch {
      const cleaned = text
        .replace(/^```json/i, "")
        .replace(/^```/i, "")
        .replace(/```$/i, "")
        .trim();

      analysis = JSON.parse(cleaned);
    }

    res.json({
      success: true,
      analysis,
    });
  } catch (error) {
    console.error("AI analysis error:", error);

    res.status(500).json({
      success: false,
      message: "AI analysis failed.",
    });
  }
});

module.exports = router;