import dotenv from 'dotenv';
import express from 'express';
import OpenAI from 'openai';
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;
const openai = new OpenAI({apiKey: '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'});

app.use(express.json());
app.use(cors());

app.post('/generate-response', async (req, res) => {
    try {
        const { input } = req.body;

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: input }],
        });

        res.json({ responseData: response.choices[0]?.message?.content || "" });
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});