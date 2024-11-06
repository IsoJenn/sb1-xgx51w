import express from 'express';
import { generateAIResponse } from '../services/openaiService.js';
import { getContextData } from '../services/dbService.js';
import { logger } from '../utils/logger.js';

export const router = express.Router();

router.post('/message', async (req, res) => {
  try {
    const { message } = req.body;
    
    // Get relevant context from database
    const dbContext = await getContextData(message);
    
    // Generate AI response with context
    const aiResponse = await generateAIResponse(message, JSON.stringify(dbContext));
    
    res.json({ response: aiResponse });
  } catch (error) {
    logger.error('Chat endpoint error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});